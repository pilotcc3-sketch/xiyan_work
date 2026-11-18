class RoomAudioEngine {
  constructor() {
    this.ctx = null;
    this.master = null;
    this.ambientGain = null;
    this.muted = false;
    this.haptics = true;
    this.ambientStarted = false;
  }

  ensureContext() {
    if (this.muted) return null;
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (!AudioCtx) return null;
      this.ctx = new AudioCtx();
      this.master = this.ctx.createGain();
      this.master.gain.value = 0.24;
      this.master.connect(this.ctx.destination);
    }
    if (this.ctx.state === "suspended") {
      this.ctx.resume().catch(() => {});
    }
    if (!this.ambientStarted && this.ctx) {
      this.startAmbientHum();
    }
    return this.ctx;
  }

  startAmbientHum() {
    if (!this.ctx || this.ambientStarted) return;
    this.ambientStarted = true;
    const osc = this.ctx.createOscillator();
    const sub = this.ctx.createOscillator();
    const filter = this.ctx.createBiquadFilter();
    this.ambientGain = this.ctx.createGain();

    osc.type = "sine";
    osc.frequency.value = 58;
    sub.type = "triangle";
    sub.frequency.value = 116;

    filter.type = "lowpass";
    filter.frequency.value = 160;

    this.ambientGain.gain.value = this.muted ? 0 : 0.055;

    osc.connect(filter);
    sub.connect(filter);
    filter.connect(this.ambientGain);
    this.ambientGain.connect(this.master);

    osc.start();
    sub.start();
  }

  setMuted(flag) {
    this.muted = Boolean(flag);
    if (this.ambientGain && this.ctx) {
      this.ambientGain.gain.setTargetAtTime(this.muted ? 0 : 0.055, this.ctx.currentTime, 0.08);
    }
  }

  setHaptics(flag) {
    this.haptics = Boolean(flag);
  }

  vibrate(pattern) {
    if (!this.haptics) return;
    if (typeof navigator !== "undefined" && typeof navigator.vibrate === "function") {
      try {
        navigator.vibrate(pattern);
      } catch (_) {}
    }
  }

  play(effect) {
    if (effect === "key" || effect === "tape" || effect === "lock") {
      this.vibrate(effect === "lock" ? [18, 40, 24] : 14);
    }
    const ctx = this.ensureContext();
    if (!ctx || this.muted) return;
    const now = ctx.currentTime;

    if (effect === "pickup" || effect === "flip") {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = "sine";
      osc.frequency.setValueAtTime(effect === "pickup" ? 310 : 390, now);
      osc.frequency.exponentialRampToValueAtTime(effect === "pickup" ? 420 : 280, now + 0.09);
      gain.gain.setValueAtTime(0.08, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.1);
      osc.connect(gain);
      gain.connect(this.master);
      osc.start(now);
      osc.stop(now + 0.11);
      return;
    }

    if (effect === "key" || effect === "lock") {
      const freqs = effect === "lock" ? [680, 520] : [1180, 1460];
      freqs.forEach((f, idx) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = "triangle";
        osc.frequency.setValueAtTime(f, now + idx * 0.055);
        gain.gain.setValueAtTime(0.11, now + idx * 0.055);
        gain.gain.exponentialRampToValueAtTime(0.001, now + idx * 0.055 + 0.14);
        osc.connect(gain);
        gain.connect(this.master);
        osc.start(now + idx * 0.055);
        osc.stop(now + idx * 0.055 + 0.15);
      });
      return;
    }

    if (effect === "cup") {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = "sine";
      osc.frequency.setValueAtTime(240, now);
      osc.frequency.exponentialRampToValueAtTime(165, now + 0.12);
      gain.gain.setValueAtTime(0.14, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.14);
      osc.connect(gain);
      gain.connect(this.master);
      osc.start(now);
      osc.stop(now + 0.15);
      return;
    }

    if (effect === "tape" || effect === "box") {
      const bufferSize = ctx.sampleRate * 0.16;
      const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
      const data = buffer.getChannelData(0);
      for (let i = 0; i < bufferSize; i += 1) {
        data[i] = (Math.random() * 2 - 1) * (1 - i / bufferSize);
      }
      const noise = ctx.createBufferSource();
      const filter = ctx.createBiquadFilter();
      const gain = ctx.createGain();
      noise.buffer = buffer;
      filter.type = "bandpass";
      filter.frequency.value = effect === "tape" ? 1350 : 480;
      gain.gain.setValueAtTime(0.12, now);
      gain.gain.exponentialRampToValueAtTime(0.005, now + 0.16);
      noise.connect(filter);
      filter.connect(gain);
      gain.connect(this.master);
      noise.start(now);
      return;
    }

    if (effect === "song1" || effect === "song2" || effect === "song3") {
      const notes =
        effect === "song2"
          ? [330, 392, 440, 392]
          : effect === "song1"
          ? [294, 349, 392, 330]
          : [262, 330, 294, 247];
      notes.forEach((n, idx) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = "sine";
        osc.frequency.setValueAtTime(n, now + idx * 0.18);
        gain.gain.setValueAtTime(0.06, now + idx * 0.18);
        gain.gain.exponentialRampToValueAtTime(0.001, now + idx * 0.18 + 0.22);
        osc.connect(gain);
        gain.connect(this.master);
        osc.start(now + idx * 0.18);
        osc.stop(now + idx * 0.18 + 0.24);
      });
      return;
    }

    if (effect === "memory" || effect === "shutter") {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = "sine";
      osc.frequency.setValueAtTime(effect === "shutter" ? 520 : 350, now);
      osc.frequency.exponentialRampToValueAtTime(effect === "shutter" ? 210 : 470, now + 0.18);
      gain.gain.setValueAtTime(0.09, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.2);
      osc.connect(gain);
      gain.connect(this.master);
      osc.start(now);
      osc.stop(now + 0.21);
    }
  }
}

window.roomAudio = new RoomAudioEngine();
