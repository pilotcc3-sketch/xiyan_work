window.GAME_DATA = {
  chapterTitle: "《她妈妈要来》",
  openingSpoken: "“我妈要来住几天，你那些东西……能不能先收一下？”",
  ambientStates: [
    { tag: "阿岚正在折毛衣", text: "她把针织袖口折进去，动作很轻，没有催你。" },
    { tag: "阿岚理了理沙发边", text: "她把叠好的衣服往里挪，给你留出走动的空位。" },
    { tag: "阿岚看了一眼手机", text: "屏幕亮了一下又暗下去，她没有抬头。" },
    { tag: "阿岚把茶几擦了一角", text: "窗外有车灯掠过墙面，冰箱在背后低鸣。" }
  ],
  linkedPairs: {
    photo: {
      partner: "key",
      echo: "相纸背面的日期，和便利店钥匙扣是同一个夏天。"
    },
    key: {
      partner: "photo",
      echo: "那天拍完天台合照回来，她在玄关把这把钥匙塞进了你手里。"
    },
    box: {
      partner: "rent",
      echo: "三次搬家的胶带日期，刚好对应账单里那几次押金分摊。"
    },
    rent: {
      partner: "box",
      echo: "每次换房子写的“暂住”，最后都变成了一整年的水电和房租。"
    }
  },
  items: [
    {
      id: "photo",
      name: "两人的合照",
      place: "卧室门边木桌",
      zone: "desk",
      x: 25,
      y: 72,
      flipButtonLabel: "翻到相纸背面",
      frontDetail: "天台傍晚拍的方画幅旧照，相纸边角有一点受潮卷起。",
      backDetail: "背面用铅笔写着：2019.06.21 · “风很大，别往后退。”",
      memoryStamp: "2019.06 · 旧楼天台",
      memoryHint: "左右拖动取景框，把两个人都留在画面里",
      memoryLine: "“再靠过来一点。”",
      tone: "natural_close",
      dropMap: {
        keep_place: "keep_place",
        put_away: "drawer",
        pack_box: "pack_box",
        to_alan: "face_down"
      },
      dispositions: [
        {
          id: "keep_place",
          title: "摆回原位",
          sub: "立在木桌原来的位置",
          summaryLabel: "仍立在木桌角",
          alanTag: "阿岚抬头看了一眼木桌",
          reaction: "阿岚路过时顿了一下，顺手把相框往里扶正了一点。",
          reactionWithMemory: "阿岚看见照片还立着，手指在相框边停了一秒，没有挪开。",
          weights: { closeness: 2, expectation: 1 }
        },
        {
          id: "drawer",
          title: "收进抽屉",
          sub: "放进木桌上层抽屉",
          summaryLabel: "收进了上层抽屉",
          alanTag: "阿岚折衣服的手停了一下",
          reaction: "抽屉合上时很轻，阿岚没有追问，只把沙发上的抱枕摆正。",
          reactionWithMemory: "抽屉推回去时，阿岚低头替你把桌角的灰拂掉了。",
          weights: { boundary: 2, avoidance: 1 }
        },
        {
          id: "pack_box",
          title: "放进搬家箱",
          sub: "夹进最上层的旧书之间",
          summaryLabel: "夹进了搬家纸箱",
          alanTag: "阿岚看向纸箱方向",
          reaction: "相纸滑进纸箱时，阿岚视线落在箱沿上，没有接话。",
          reactionWithMemory: "她看见你把合照放进箱里，嘴唇动了一下，最后只把毛衣折好。",
          weights: { boundary: 2, honesty: 1 }
        },
        {
          id: "face_down",
          title: "暂时扣在桌面",
          sub: "背面朝上留在桌角",
          summaryLabel: "背面朝上扣在桌角",
          alanTag: "阿岚看见了相纸背面的铅笔字",
          reaction: "照片背面的日期露在灯光下，阿岚走过时放慢了脚步。",
          reactionWithMemory: "她认出背面那行铅笔字，回到沙发时把靠垫往你这边留了一格。",
          weights: { avoidance: 2, closeness: 1 }
        }
      ]
    },
    {
      id: "cup",
      name: "阿岚送的杯子",
      place: "客厅茶几",
      zone: "living",
      x: 56,
      y: 55,
      flipButtonLabel: "转看杯沿与杯底",
      frontDetail: "深灰釉面的马克杯，杯壁还留着半圈温水痕。",
      backDetail: "杯沿有一道极小的磕口，杯底有手写缩写：L & Y。",
      memoryStamp: "2021.11 · 熬夜赶稿的夜里",
      memoryHint: "按住水壶倒满两只杯子，看看她把哪一杯推给你",
      memoryLine: "“你那杯多一点。”",
      tone: "mutual_help",
      dropMap: {
        keep_place: "leave_table",
        put_away: "cabinet",
        pack_box: "wrap_pack",
        to_alan: "leave_table"
      },
      dispositions: [
        {
          id: "leave_table",
          title: "留在桌上",
          sub: "和她的杯子并排放着",
          summaryLabel: "留在茶几原位",
          alanTag: "阿岚顺手添了半杯温水",
          reaction: "阿岚起身去厨房时，自然地往这只杯子里添了半杯温水。",
          reactionWithMemory: "她添水时特意避开了杯沿那道小缺口，把杯柄转到你顺手的一侧。",
          weights: { closeness: 2, reciprocity: 1 }
        },
        {
          id: "cabinet",
          title: "收进柜子",
          sub: "放回餐边柜内侧",
          summaryLabel: "收进了餐边柜",
          alanTag: "阿岚把茶几上的杯垫收起了一只",
          reaction: "茶几上只剩下一只杯子，阿岚把多余的竹杯垫叠了起来。",
          reactionWithMemory: "柜门轻轻合上，她看了一眼空出来的杯垫，没有再放回桌心。",
          weights: { boundary: 2, avoidance: 1 }
        },
        {
          id: "wrap_pack",
          title: "旧报纸包好装箱",
          sub: "包住杯沿缺口放进纸箱",
          summaryLabel: "用旧报纸包好装箱",
          alanTag: "阿岚递来一张叠好的旧报纸",
          reaction: "你刚拿起杯子往纸箱边走，阿岚默默从茶几下抽出一张旧报纸递过来。",
          reactionWithMemory: "阿岚递报纸时指尖碰到杯底缩写，低声说：“路上别磕着。”",
          weights: { honesty: 2, boundary: 1, reciprocity: 1 }
        }
      ]
    },
    {
      id: "key",
      name: "备用钥匙",
      place: "玄关矮柜边",
      zone: "living",
      x: 24,
      y: 47,
      flipButtonLabel: "翻转旧吊牌",
      frontDetail: "黄铜齿痕已经磨亮，挂着一只褪色的便利店塑胶吊牌。",
      backDetail: "吊牌背面贴着半截手写纸条：“302 · 门锁往左拧半圈”。",
      memoryStamp: "2019.06 · 合租第一天",
      memoryHint: "把玄关递过来的钥匙拖到手心接住",
      memoryLine: "“以后不用等我开门。”",
      tone: "natural_close",
      dropMap: {
        keep_place: "entryway",
        put_away: "keep_self",
        pack_box: "envelope",
        to_alan: "return_hand"
      },
      dispositions: [
        {
          id: "keep_self",
          title: "留在口袋",
          sub: "先揣回自己外套口袋",
          summaryLabel: "揣在自己口袋里",
          alanTag: "阿岚听见钥匙轻响",
          reaction: "钥匙落进口袋时轻轻响了一声，阿岚没有抬头，只把毛衣折得更慢了些。",
          reactionWithMemory: "金属轻响像极了刚搬来那天，阿岚的手在袖口上停了一瞬。",
          weights: { closeness: 1, avoidance: 2, expectation: 1 }
        },
        {
          id: "entryway",
          title: "放到玄关",
          sub: "搁在门口浅木托盘里",
          summaryLabel: "搁在玄关托盘",
          alanTag: "阿岚看向玄关托盘",
          reaction: "钥匙落在玄关木盘里，像普通访客临走前会放的位置。",
          reactionWithMemory: "她看了一眼玄关木盘，把原本挂在门后的备用伞往旁边挪开了。",
          weights: { boundary: 2, avoidance: 1 }
        },
        {
          id: "envelope",
          title: "装进信封",
          sub: "封在抽屉边的白信封里",
          summaryLabel: "封在白信封里",
          alanTag: "阿岚听见纸信封折角的声音",
          reaction: "你把钥匙塞进旧信封压平，阿岚看过来一眼，语气稍微客气了一点。",
          reactionWithMemory: "吊牌连同钥匙一起滑进信封，阿岚低声说了句：“放那儿就行。”",
          weights: { boundary: 3, avoidance: 2 }
        },
        {
          id: "return_hand",
          title: "当面归还",
          sub: "直接放在她面前的茶几角",
          summaryLabel: "当面放在她手边",
          alanTag: "阿岚停下了折衣服的动作",
          reaction: "钥匙放在她手边时，阿岚停下动作看着那枚旧吊牌，没有立刻收起来。",
          reactionWithMemory: "她认出那枚便利店吊牌，伸手按住钥匙齿尖，停了两秒才抬头看你。",
          weights: { honesty: 3, boundary: 2 }
        }
      ]
    },
    {
      id: "box",
      name: "搬家纸箱",
      place: "卧室门口右侧地面",
      zone: "desk",
      x: 82,
      y: 72,
      flipButtonLabel: "撕开一层旧胶带",
      frontDetail: "半开的牛皮纸箱，里面已经叠了几本属于你的书。",
      backDetail: "旧胶带底下露出三次日期：2020.03、2021.11、2023.04，侧边写着“暂住”。",
      memoryStamp: "2020—2023 · 三次搬家的走廊",
      memoryHint: "依次完成：封箱、抬起纸箱、推开新房门",
      memoryLine: "“先放这儿，周末再拆。”",
      tone: "habit_delay",
      dropMap: {
        keep_place: "leave_spot",
        put_away: "hide_closet",
        pack_box: "pack_more",
        to_alan: "open_box"
      },
      dispositions: [
        {
          id: "hide_closet",
          title: "藏进柜子",
          sub: "推到卧室门后衣柜下层",
          summaryLabel: "藏进了门后柜底",
          alanTag: "阿岚听见纸箱摩擦地板",
          reaction: "纸箱被推进门后阴影里，阿岚听见声响，把话题岔到了明天的天气。",
          reactionWithMemory: "写着“暂住”的那一面再次被推进暗处，阿岚没有拆穿。",
          weights: { avoidance: 3, overstep: 1 }
        },
        {
          id: "leave_spot",
          title: "留在原地",
          sub: "保持半开放在过道边",
          summaryLabel: "半开着留在过道",
          alanTag: "阿岚看了一眼纸箱开口",
          reaction: "纸箱就停在灯光边缘，阿岚走过时绕开了半步，暂时没有问。",
          reactionWithMemory: "她目光扫过箱侧“暂住”两个字，抱着衣服坐回沙发。",
          weights: { avoidance: 1, honesty: 1 }
        },
        {
          id: "open_box",
          title: "主动打开",
          sub: "把四面箱盖彻底敞开在明处",
          summaryLabel: "敞开放在客厅边",
          alanTag: "阿岚停下手，看向敞开的纸箱",
          reaction: "箱盖折开的声音很清楚，阿岚停下折了一半的毛衣，安静地看着你。",
          reactionWithMemory: "三次旧胶带折痕露在灯光下，阿岚轻轻吸了口气，像早就知道会有这一天。",
          weights: { honesty: 3, boundary: 1 }
        },
        {
          id: "pack_more",
          title: "把新物品装进去",
          sub: "把桌角自己的零碎收进箱内",
          summaryLabel: "装进了你常看的旧书",
          alanTag: "阿岚抽了一截胶带放在茶几边",
          reaction: "你把桌面零碎放进纸箱，阿岚默默把封箱胶带放到你够得着的地方。",
          reactionWithMemory: "她看着那只写着“暂住”的旧箱子一点点装满，把椅子往旁边让了让。",
          weights: { honesty: 2, boundary: 2 }
        }
      ]
    },
    {
      id: "medicine",
      name: "药盒",
      place: "前景木桌内侧",
      zone: "desk",
      x: 46,
      y: 72,
      flipButtonLabel: "查看背面说明",
      frontDetail: "半盒退烧与胃药，铝箔板已经剪开过一半。",
      backDetail: "背面圆珠笔字迹有些模糊：“饭后温水 · 别空腹喝咖啡”。",
      memoryStamp: "2024.12 · 发烧的冬夜",
      memoryHint: "先把窗帘拉拢，再把温水杯推到床头",
      memoryLine: "“水还温着。”",
      tone: "mutual_help",
      dropMap: {
        keep_place: "leave_table",
        put_away: "drawer",
        pack_box: "pack_box",
        to_alan: "leave_table"
      },
      dispositions: [
        {
          id: "drawer",
          title: "收进抽屉",
          sub: "放回医药抽屉最里层",
          summaryLabel: "收进了抽屉内层",
          alanTag: "阿岚看了一眼药盒位置",
          reaction: "药盒收进抽屉后，桌面干净了不少，阿岚没有多说什么。",
          reactionWithMemory: "阿岚看你把药收起来，顺手把茶几上的温水壶往你那边推了半寸。",
          weights: { boundary: 1, avoidance: 1 }
        },
        {
          id: "leave_table",
          title: "留在桌上",
          sub: "放在两人都能看见的桌角",
          summaryLabel: "留在显眼桌角",
          alanTag: "阿岚把药盒往灯下挪了挪",
          reaction: "阿岚经过时，顺手把药盒挪到台灯照得到的地方。",
          reactionWithMemory: "她看见背面那行字，把药盒摆正，像平时提醒你按时吃饭那样自然。",
          weights: { closeness: 2, reciprocity: 1 }
        },
        {
          id: "pack_box",
          title: "放进自己的箱子",
          sub: "装进搬家纸箱侧袋",
          summaryLabel: "收进了搬家纸箱",
          alanTag: "阿岚轻声提醒了一句",
          reaction: "你把药盒放进纸箱，阿岚看了一眼，只轻声说：“这个别忘带。”",
          reactionWithMemory: "她看着药盒落进箱里，顿了顿才补了一句：“换地方住也别空腹喝冰的。”",
          weights: { boundary: 2, honesty: 1 }
        }
      ]
    },
    {
      id: "playlist",
      name: "共享歌单",
      place: "茶几边的旧手机与有线耳机",
      zone: "living",
      x: 39,
      y: 63,
      flipButtonLabel: "滑动歌单记录",
      frontDetail: "正低声放着两人常听的旧歌《夜车》，音量开得很小。",
      backDetail: "往下滑能看见第二首《便利店七点》：深夜单独循环 47 次，你当时没留意。",
      memoryStamp: "2022.08 · 末班公交靠窗",
      memoryHint: "拖动声道滑块，把左耳耳机分给她",
      memoryLine: "“左耳给你。”",
      tone: "ignored_feeling",
      dropMap: {
        keep_place: "continue_play",
        put_away: "pause_music",
        pack_box: "skip_track",
        to_alan: "offer_earbud"
      },
      dispositions: [
        {
          id: "continue_play",
          title: "继续播放",
          sub: "让那首旧歌留在房间里",
          summaryLabel: "旧歌继续低声放着",
          alanTag: "阿岚随着前奏轻轻停了一下",
          reaction: "《便利店七点》的前奏响起时，阿岚折衣服的手指停了半拍。",
          reactionWithMemory: "放到副歌那句时，阿岚极轻地跟着哼了两个音，又像没事一样垂下眼。",
          weights: { closeness: 2, expectation: 1 }
        },
        {
          id: "skip_track",
          title: "切歌",
          sub: "切到一首普通的纯音乐",
          summaryLabel: "切到了陌生的纯音乐",
          alanTag: "阿岚没有阻止你切歌",
          reaction: "熟悉的旋律突然断掉，阿岚抬眼看了一下屏幕，没有出声阻止。",
          reactionWithMemory: "那首循环过四十七次的歌被切走时，她把肩膀往沙发靠背里收了一点。",
          weights: { avoidance: 2, overstep: 1 }
        },
        {
          id: "pause_music",
          title: "暂停",
          sub: "关掉音乐，只留房间环境声",
          summaryLabel: "音乐停在半首处",
          alanTag: "房间只剩下冰箱低鸣",
          reaction: "音乐停下后，窗外车声和冰箱低鸣变得格外清楚。",
          reactionWithMemory: "耳机线静静垂在桌沿，阿岚整理好衣领，动作比刚才规矩了些。",
          weights: { boundary: 2 }
        },
        {
          id: "offer_earbud",
          title: "把一只耳机递向她",
          sub: "像以前那样递去左耳耳机",
          summaryLabel: "左耳耳机放在她手边",
          alanTag: "阿岚看着递过来的左耳耳机",
          reaction: "你把左耳耳机递过去，阿岚愣了一下，接过去挂在耳边。",
          reactionWithMemory: "她接过左耳耳机时指尖很轻，两个人都没有说话，只听完了一小段间奏。",
          weights: { closeness: 3, reciprocity: 1, expectation: 1 }
        }
      ]
    },
    {
      id: "rent",
      name: "房租转账记录",
      place: "木桌边的账单界面",
      zone: "desk",
      x: 11,
      y: 60,
      flipButtonLabel: "上下翻看几年备注",
      frontDetail: "本月房租与水电待结清通知，停留在输入金额的页面。",
      backDetail: "21年9月她替你垫过半月押金；22年6月她出差你付了全月水电；23年冬两人平摊维修。",
      memoryStamp: "2021.09 · 厨房水开的傍晚",
      memoryHint: "可删掉生硬的客套备注，再按住完成那次转账",
      memoryLine: "“厨房水开了。”",
      tone: "unspoken_minding",
      dropMap: {
        keep_place: "split_even",
        put_away: "defer_later",
        pack_box: "overpay",
        to_alan: "show_screen"
      },
      dispositions: [
        {
          id: "split_even",
          title: "正常分摊",
          sub: "按这个月实际账单各付一半",
          summaryLabel: "按账单正常平摊",
          alanTag: "阿岚手机震了一下",
          reaction: "阿岚低头看了一眼到账提示，轻轻点了下头。",
          reactionWithMemory: "就像过去几年大多数月份那样，清楚、公平，也不必谁欠谁。",
          weights: { reciprocity: 2, boundary: 2 }
        },
        {
          id: "overpay",
          title: "悄悄多付",
          sub: "把下个月水电也替她付掉",
          summaryLabel: "悄悄多转了半个月费用",
          alanTag: "阿岚看见金额后皱了下眉",
          reaction: "阿岚拿起手机看见多出来的金额，眉头微蹙，把手机扣在了沙发边。",
          reactionWithMemory: "她看着那笔多出来的钱，眼神冷了一点——你又一次用付钱代替了开口。",
          weights: { debt: 3, avoidance: 2, overstep: 2 }
        },
        {
          id: "defer_later",
          title: "暂时不处理",
          sub: "按熄屏幕先放回桌角",
          summaryLabel: "账单页面暂未结清",
          alanTag: "手机屏幕暗了下去",
          reaction: "屏幕暗下去，这笔账和搬走的事一样被留到了后面。",
          reactionWithMemory: "阿岚知道你刚看过手机，但她没有主动提钱的事。",
          weights: { avoidance: 2 }
        },
        {
          id: "show_screen",
          title: "把页面留给她看",
          sub: "摊开押金与最后一个月账单",
          summaryLabel: "摊开了最后一个月账单",
          alanTag: "阿岚走近看了一眼屏幕",
          reaction: "你把屏幕转向茶几，阿岚看清上面的押金结算项，沉默了一会儿。",
          reactionWithMemory: "几年来互相垫付的记录停在同一页，阿岚轻声说：“好，我们慢慢算清楚。”",
          weights: { honesty: 3, reciprocity: 2 }
        }
      ]
    }
  ],
  thresholdActions: [
    {
      id: "act_open_box",
      title: "走回纸箱旁，把箱盖彻底打开",
      sub: "不再遮掩正在收拾的行李"
    },
    {
      id: "act_hand_key",
      title: "把那把备用钥匙放在她手边",
      sub: "用钥匙的去留给今晚收尾"
    },
    {
      id: "act_sit_listen",
      title: "坐回沙发边，把剩下的歌听完",
      sub: "今晚先不提搬走的事"
    },
    {
      id: "act_speak_leave",
      title: "扶着门框，直接说准备搬走",
      sub: "趁她妈妈来之前把话说开"
    }
  ],
  endings: {
    stay: {
      id: "stay",
      title: "《留下》",
      caption: "落地灯还亮着，搬家纸箱停在墙角没有封口。",
      lines: [
        "你把零碎收好，最后还是在沙发边坐了下来。",
        "阿岚给你倒了半杯温水，随口说明天早点起去接她妈妈。",
        "搬走的话今晚没有说出口，房间还是老样子，只是那只半开的纸箱还停在门后。"
      ],
      actionDefault: "夜深时你顺手把客厅台灯调暗了一档，两只杯子仍并排放在茶几上。",
      actionMemory: "进屋前你把左耳耳机轻轻绕回手机上，替她把窗帘拉严，像那个发烧的冬夜一样。"
    },
    honest: {
      id: "honest",
      title: "《坦白》",
      caption: "纸箱敞在灯光下，两个人隔着茶几安静地坐了一会儿。",
      lines: [
        "你指了指门口那只纸箱，说自己最近在看新的住处。",
        "阿岚手里的毛衣停在膝上，沉默了几秒，只问你定好日子没有。",
        "她没有挽留也没有生气，最后说等她妈妈走后，周末帮你一起打包。"
      ],
      actionDefault: "临睡前她把那卷封箱胶带放在你桌角，没有把房门关死。",
      actionMemory: "你把挂着旧便利店吊牌的钥匙放在茶几上，最后一次替两个人把门锁往左拧了半圈。"
    },
    polite: {
      id: "polite",
      title: "《客气》",
      caption: "桌面收得一尘不染，两人的东西第一次分得格外清楚。",
      lines: [
        "属于你的东西都被收进了暗处，客厅看起来像一间整洁的客房。",
        "阿岚站在茶几边看了一圈，轻声对你说：“今晚麻烦你了，谢谢。”",
        "她也把自己的外衣抱回了房间，你们一个在门里、一个在门外，谁都没有再多问一句。"
      ],
      actionDefault: "那把备用钥匙平放在玄关木盘正中，旁边再没有别的东西。",
      actionMemory: "装进白信封的钥匙压在旧合照用过的抽屉边，连同那句没说的告别一起封存好了。"
    },
    imbalance: {
      id: "imbalance",
      title: "《失衡》",
      caption: "手机屏幕还亮着转账提示，客厅的音乐停在半截。",
      lines: [
        "你把账单、纸箱和她手边的事都替她安排妥当，却始终绕开了真正要说的话。",
        "阿岚看着手机上多出来的转账和被藏起的东西，终于停下动作看向你。",
        "她声音不高，却很清楚地说：“你能不能先问问我，再替我做决定？”"
      ],
      actionDefault: "她把多出来的那笔钱原路退了回来，客厅落地灯被她先一步关掉了。",
      actionMemory: "她把那只写着“暂住”的旧纸箱从柜底拉回明处，把旧报纸折好放在箱盖上。"
    }
  }
};
