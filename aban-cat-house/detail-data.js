const detailedParts = {
  kettle: {
    details: [
      ["壶口上方；塑料或不锈钢。", "覆盖注水口并与壶口密合，减少倾倒时的溅水。"],
      ["壶身中央；多为不锈钢。", "盛水并将热量传给水；带手柄的外壳帮助隔热。"],
      ["壶底下方；金属导热盘及电热元件。", "通电后发热，通过壶底加热内胆中的水。"],
      ["壶底靠开关处；双金属片与触点。", "受热后驱动开关断电；有些结构另有防干烧保护。"]
    ],
    extra: [
      ["开关按键", "壶身手柄下方；耐热塑料按键。", "供手指操作，与内部温控机构联动。", "switch", true],
      ["蒸汽通道", "壶口与温控器之间；内置导汽管或空腔。", "将沸腾时的蒸汽引向温控器；通常属于内置结构。", "tube", false]
    ],
    principle: "加热元件经金属壶底把热传给水；水沸腾后，蒸汽沿内置通道加热温控器，双金属片动作并断开触点。不同产品的导汽和温控结构有所差异。"
  },
  toaster: {
    details: [
      ["最外层；金属或耐热塑料。", "包住发热组件，顶部开槽让面包进入。"],
      ["面包槽两侧；镍铬丝绕在绝缘支架上。", "通电发热，以热辐射烘烤面包表面。"],
      ["面包槽内部；金属丝架。", "托住面包并沿导轨升降，使两面靠近发热丝。"],
      ["机身底部；金属弹簧与机械卡扣。", "按下时蓄力，到点松开后将托架弹起。"]
    ],
    extra: [
      ["计时与调节机构", "侧面旋钮及内部计时电路或温控片。", "控制烘烤时间或颜色，结束后释放卡扣。", "dial", true],
      ["面包屑托盘", "机身底部；薄金属抽拉盘。", "收集烘烤时掉落的碎屑，方便清理。", "tray", true]
    ],
    principle: "托架下降后闭合电路，电热丝两面烘烤面包；计时机构断电并释放卡扣，弹簧使托架上升。不同机型采用机械或电子计时。"
  },
  cup: {
    details: [
      ["杯口顶部；塑料或不锈钢。", "与杯口旋合，减少热量从开口交换。"],
      ["杯盖内侧；食品接触级硅胶。", "压紧盖与杯口的缝隙，帮助防漏。"],
      ["杯身内部；双层不锈钢。", "内层接触饮水，外层承重，两层在杯口处连接。"],
      ["杯底外侧；硅胶或橡胶垫。", "隔开杯底与桌面并减少打滑。"]
    ],
    extra: [
      ["真空夹层", "两层金属之间；抽去大部分空气。", "减弱热传导与对流，是密封内胆的一部分，不能作为零件取下。", "vacuum", false],
      ["杯口螺纹", "杯身上端；模压或加工成形。", "与杯盖旋合并压紧密封圈，通常与杯身连为一体。", "thread", false]
    ],
    principle: "双层内胆之间的真空减弱传导和对流，杯盖与密封圈减少开口处的热交换；真空夹层是剖面观察结构，并不是独立零件。"
  },
  clock: {
    details: [
      ["钟壳前方；印刷表盘和金属指针。", "通过指针轴与轮系连接，把转动显示为时刻。"],
      ["机芯中央；黄铜或塑料齿轮。", "逐级传递动力，并通过不同齿比驱动指针。"],
      ["机芯发条盒内；卷曲弹簧钢片。", "上弦后储存弹性能，再缓慢驱动齿轮组。"],
      ["机芯内部；摆轮、游丝与擒纵叉。", "限制轮系逐次释放动力，形成有规律的滴答。"]
    ],
    extra: [
      ["钟壳与后盖", "机芯外侧；金属或塑料。", "固定和保护机芯，后盖提供维护入口。", "housing", true],
      ["闹铃锤", "双铃之间；小金属锤及连杆。", "闹铃机构释放动力后，铃锤往复敲击铃罩。", "bell", true]
    ],
    principle: "发条驱动齿轮，擒纵机构受摆轮和游丝控制而分次放行；闹铃由另一组触发机构驱动。石英钟的动力和计时方式不同。"
  },
  lamp: {
    details: [
      ["光源外围；金属、布或塑料。", "遮挡直射光并把光引向桌面。"],
      ["灯罩内部；灯泡或 LED 模组。", "将电能转化为光；有些 LED 模组与灯体固定。"],
      ["光源下方；金属灯杆及加重底座。", "支撑灯头并把重量传到桌面，底座降低翻倒风险。"],
      ["电源路径上；绝缘线缆与开关。", "电线连接光源，开关控制电路通断。"]
    ],
    extra: [
      ["灯座", "光源与灯杆之间；绝缘座体和金属触点。", "固定可更换灯泡并提供电连接。", "socket", true],
      ["底座配重", "底座内部；金属或矿物配重块。", "降低重心，与底座外壳一起保持灯具稳定。", "weight", true]
    ],
    principle: "开关闭合后电流经灯座流向光源；灯罩调整光线方向，灯杆和配重让灯头保持稳定。维修电器需先断电。"
  },
  radio: {
    details: [
      ["机身外侧；伸缩金属杆或内部导线。", "接收无线电信号并送往调谐电路。"],
      ["电路板输入端；线圈、电容等元件。", "选择接收频率，再送到后续解调电路。"],
      ["电路板输出侧；晶体管或集成电路。", "放大声音信号，驱动扬声器。"],
      ["机身前部；纸盆、线圈和磁铁。", "电流带动纸盆振动，使空气产生声音。"]
    ],
    extra: [
      ["调谐旋钮", "机身正面；塑料旋钮与转轴。", "供人手调台，通过轴连接可变元件或编码器。", "dial", true],
      ["电池仓盖", "机身背面；塑料或金属盖。", "固定电池并保护电源触点；也有插电机型。", "cover", true]
    ],
    principle: "天线接收信号，经调谐和解调取出音频，再放大并送给扬声器；具体芯片和天线形式因机型而异。"
  },
  fan: {
    details: [
      ["扇叶前后；金属或塑料网罩。", "阻挡手指接触扇叶，安装在电机支架上。"],
      ["电机轴前端；塑料或金属叶片。", "旋转时推动空气，叶片角度影响风量。"],
      ["机头后方；线圈、铁芯和转轴。", "把电能转成旋转运动，驱动扇叶。"],
      ["机头下方；立杆、底座和配重。", "支撑机头并将重量传给地面。"]
    ],
    extra: [
      ["扇叶固定帽", "扇叶中心；塑料或金属旋帽。", "把扇叶固定在电机轴上；部分机型为反向螺纹。", "nut", true],
      ["摇头机构", "电机后部；齿轮箱与连杆。", "把电机旋转转成机头左右摆动。", "gear", true]
    ],
    principle: "电机转动扇叶，倾斜叶片推动空气，气流促进人体散热与汗液蒸发；摇头机构扩大送风范围。"
  },
  umbrella: {
    details: [
      ["最外层；涤纶等防水织物。", "覆盖伞骨，形成倾斜表面引导雨水流向边缘。"],
      ["伞面下方；金属或玻璃纤维骨架。", "连接中棒与伞面，撑开后保持伞形。"],
      ["伞体中央；金属或纤维管。", "连接伞骨和手柄，折叠伞可采用多节套管。"],
      ["中棒下端；塑料或木质手柄及卡扣。", "供握持，卡扣在开合位置锁定滑套。"]
    ],
    extra: [
      ["滑套", "中棒外侧；塑料或金属环。", "沿中棒滑动并带动支撑骨，使伞开合。", "ring", true],
      ["伞尖与尾珠", "中棒顶端及伞骨末端；塑料或金属。", "保护伞面边缘，并帮助固定布料。", "cap", true]
    ],
    principle: "滑套沿中棒移动，支撑骨将主伞骨向外推，伞面被绷紧后将雨水引向边缘；具体折叠形式各异。"
  },
  wall_cabinet: {
    details: [["墙上柜体；木质板材。", "侧板、顶板和底板连接成箱体并承托隔板。"], ["柜体内部；木质层板。", "将柜内分层，由支托件支撑碗碟。"], ["柜体正面；木板或复合板。", "绕铰链开合，遮挡柜内灰尘。"], ["门边；金属铰链与把手。", "铰链连接门和柜体，把手提供握持点。"]],
    extra: [["层板支托", "柜内两侧；金属或塑料小支托。", "托住层板并将载荷传给侧板。", "peg", true], ["背板", "柜体背面；薄木板或纤维板。", "帮助固定柜体形状并覆盖背面。", "panel", true]],
    principle: "层板上的重量经支托、柜体和挂装件传到墙体；墙体条件与固定方式决定安全载重。"
  },
  base_cabinet: {
    details: [["地面柜体；木质板材。", "侧板、底板和顶撑组成箱体并支撑台面。"], ["柜体内部；木质层板。", "由支托件承托，分隔锅具与储物空间。"], ["柜体正面；木板或复合板。", "与铰链配合开合，保护柜内物品。"], ["门边；金属铰链与把手。", "铰链连接门和侧板，把手便于开启。"]],
    extra: [["层板支托", "柜内两侧；金属或塑料。", "托住隔板，把物品重量传到侧板。", "peg", true], ["柜脚", "柜体底部；塑料或金属支脚。", "调节高度，将柜体重量传到地面。", "foot", true]],
    principle: "台面与柜内物品的重量通过柜体、柜脚传到地面；柜背常按水管或电线位置留口。"
  },
  counter: {
    details: [["地柜顶部；人造石、木板等。", "提供操作面，并由下方柜体承重。"], ["台面外层；贴面或涂层。", "降低表面吸水与污渍渗入，不是可单独装卸的部件。"], ["台面下方；柜体板材。", "将台面与物品的重量传到地面。"], ["台面与柜体连接处；螺丝或支架。", "固定台面，减少使用时位移。"]],
    extra: [["挡水条", "台面靠墙处；独立金属或塑料条。", "减少溅水进入墙面接缝；一体式台面不含独立挡水条。", "strip", true]],
    principle: "物品重量由台面分散给柜体，再传到地面；饰面和接缝处理帮助减少水与污渍进入基材。"
  },
  dining_table: {
    details: [["桌子顶部；木板或复合板。", "承托食物和餐具，并将重量传向桌腿。"], ["桌面四角或两侧；木材或金属。", "支撑桌面，将力传到地面。"], ["桌腿之间；木质或金属横撑。", "连接桌腿，减少侧向晃动。"], ["桌面与桌腿连接处；螺丝或榫接件。", "把不同部件固定为整体。"]],
    extra: [["桌面围板", "桌面下方；木质横板。", "连接桌腿并约束桌面，帮助抵抗侧向力。", "brace", true], ["脚垫", "桌腿底部；橡胶或毛毡。", "减少划伤和滑动，缓和桌腿与地面接触。", "foot", true]],
    principle: "桌面受力传给围板和桌腿，桌腿再把重量传到地面；横撑和连接件帮助抵抗晃动。"
  },
  kitchen_window: {
    details: [["墙洞内；木、铝或塑钢窗框。", "与墙体固定，承托窗扇和玻璃。"], ["窗扇内；透明玻璃。", "透光并阻隔风雨，由压条固定。"], ["窗框内；木或金属窗扇。", "承托玻璃，并通过五金与窗框连接。"], ["窗扇边缘；橡胶密封条与金属五金。", "减少缝隙漏风并协助窗扇开合。"]],
    extra: [["玻璃压条", "窗扇内侧边缘；金属、木或塑料条。", "压住玻璃周边，使其稳定在窗扇里。", "strip", true], ["执手", "可开启窗扇边缘；金属或塑料。", "连接锁闭机构，供人开启或锁定窗扇。", "handle", true]],
    principle: "墙体承受窗框载荷，窗扇承托玻璃；压条与密封条帮助固定玻璃并减少漏风，结构取决于窗型。"
  },
  sofa: {
    details: [["沙发内部；木材或金属框架。", "承受乘坐重量，并固定弹簧与软垫。"], ["坐垫下方；金属弹簧或弹性织带。", "连接骨架，提供有弹性的支撑。"], ["座面及靠背；泡棉或纤维填充。", "分散身体压力，与弹性支撑一起决定坐感。"], ["沙发表层；布料或皮革。", "包裹填充物并固定在骨架或垫套上。"]],
    extra: [["沙发脚", "骨架底部；木材、金属或塑料。", "支撑骨架并把重量传到地面。", "foot", true], ["靠垫", "靠背前方；织物包裹泡棉或纤维。", "独立软垫支撑背部，可取下整理。", "cushion", true]],
    principle: "人体重量先由软垫分散，再经弹簧或织带传给骨架及沙发脚；不同沙发的内部支撑方式不同。"
  },
  shelf: {
    details: [["墙面前方；木或金属板。", "承托书籍摆件并将重量传给支架。"], ["搁板下方；金属或木托架。", "连接板与墙面，抵抗板面向下的弯曲。"], ["托架连接处；金属螺丝。", "把托架、搁板与墙体连接起来。"], ["墙孔内；适配墙体的锚栓。", "与螺丝配合，在墙体内提供固定。"]],
    extra: [["搁板固定片", "板与托架交界处；金属连接片。", "辅助固定板面，防止前后滑动。", "bracket", true]],
    principle: "物品的重量经搁板和托架传到墙体；不同墙体需要匹配合适的锚固方式和载重。"
  },
  side_table: {
    details: [["边桌顶部；木板或复合板。", "承托台灯与书本，并把重量传给支架。"], ["桌面下方；木材或金属桌腿。", "支撑桌面并将力传到地面。"], ["桌腿之间；横向木条或金属杆。", "连接桌腿，减少摇晃。"], ["桌腿与桌面连接处；螺丝或连接件。", "把桌子各部件固定在一起。"]],
    extra: [["脚垫", "桌腿底端；毛毡或橡胶。", "减少桌脚滑动及对地面的划伤。", "foot", true]],
    principle: "台灯和桌面重量经连接处传给桌腿；横撑帮助抵抗侧向晃动。"
  },
  living_window: {
    details: [["墙洞内；木、铝或塑钢窗框。", "固定在墙体上并承托窗扇。"], ["窗扇内；透明玻璃。", "允许光线通过并阻隔风雨。"], ["窗框内；木或金属窗扇。", "承托玻璃，与窗框五金配合开启。"], ["窗扇边缘；橡胶密封条及金属五金。", "填补缝隙并帮助窗扇开合。"]],
    extra: [["玻璃压条", "窗扇边缘；木、金属或塑料。", "压住玻璃周边并与窗扇配合固定。", "strip", true], ["执手", "窗扇边缘；金属或塑料。", "连接锁闭机构，便于开关窗。", "handle", true]],
    principle: "窗框将荷载传给墙体，窗扇承托玻璃；密封条减少缝隙漏风，具体结构因窗型而异。"
  },
  plant: {
    details: [["外部容器；陶瓷、塑料或泥盆。", "容纳土壤并为根系提供空间。"], ["花盆内部；颗粒、腐殖质等。", "支撑根系，储存水分与养分，可观察但不是装卸零件。"], ["植株内部；根系与茎。", "根吸收水分，茎支撑叶片并运输物质；属于生命结构。"], ["植株上方；叶片及叶柄。", "利用光进行光合作用，与茎相连；属于生命结构。"]],
    extra: [["托盘", "花盆底部；陶瓷或塑料浅盘。", "接住排水孔流出的多余水分。", "tray", true], ["排水孔", "花盆底部；盆体预留孔洞。", "让多余水分流出，是盆体结构而非独立零件。", "hole", false]],
    principle: "根从土壤吸收水和矿物质，茎运输物质，叶片进行光合作用；游戏不会把植物生命结构当作零件拆装。"
  },
  rug: {
    details: [["地毯表面；羊毛或合成纤维。", "形成触感和图案，通常与底布结合，不能当独立零件取下。"], ["纤维背面；纺织底布。", "固定纤维并维持形状，通常与表层结合。"], ["最底部；橡胶、乳胶或单独防滑垫。", "帮助减少滑动；只有独立防滑垫可单独取放。"], ["地毯边缘；缝线或包边带。", "减少边缘散线，通常缝合在地毯上。"]],
    extra: [["纤维截面", "地毯最上层；不同密度的纤维。", "纤维形态影响脚感和耐磨；此项仅作观察。", "fibers", false]],
    principle: "纤维、底布和包边通常结合成一体；独立防滑垫帮助保持位置。不同地毯结构和材料有所不同。"
  },
  kitchen_curtain: {
    details: [["窗户前方；棉、涤纶等织物。", "遮挡部分光线，通过挂环悬挂于窗帘杆。"], ["窗户上方；金属或木杆。", "承托窗帘和挂环，支撑于墙面支架。"], ["帘布顶部；塑料或金属挂环。", "连接帘布和杆体，使布帘能沿杆滑动。"], ["杆体两端；金属或塑料支架。", "固定在墙上并承托窗帘杆。"]],
    extra: [["杆头", "窗帘杆末端；木质或塑料。", "防止挂环滑出，并起装饰作用。", "cap", true]],
    principle: "帘布的重量经挂环和窗帘杆传至支架，再由墙体承受；滑动挂环改变遮光范围。"
  },
  living_curtain: {
    details: [["窗户前方；织物帘布。", "遮挡部分光线，并通过挂环悬挂。"], ["窗户上方；木或金属杆。", "承托窗帘，在两端由支架支撑。"], ["帘布顶部；塑料或金属挂环。", "连接帘布和杆体，便于左右滑动。"], ["杆体两端；固定支架。", "把杆体重量传给墙面固定点。"]],
    extra: [["杆头", "窗帘杆末端；塑料或木材。", "阻止挂环从杆端滑落。", "cap", true]],
    principle: "帘布重量通过挂环、杆体和支架传到墙面；窗帘材质和遮光方式各有差异。"
  },
  picture: {
    details: [["画面四周；木材或金属框条。", "围住画芯和背板并保护边缘。"], ["框内正面；纸张或画布。", "承载图像，由背板和框条定位。"], ["画框背面；薄木板或纸板。", "压住画芯，使其保持平整。"], ["画框背面上方；金属挂件。", "与墙上的挂钩配合承托画框。"]],
    extra: [["透明保护片", "画芯前方；玻璃或透明塑料。", "帮助隔开灰尘，部分画框没有这一层。", "glass", true], ["固定卡片", "背板边缘；金属卡片。", "压住背板并连接外框。", "clip", true]],
    principle: "框条和背板夹住画芯，挂件把整体重量传给墙上的固定点。"
  },
  books: {
    details: [["书本外侧；纸板或覆膜纸。", "保护书页并通过书脊连接成整体。"], ["书本内部；印刷纸张。", "承载文字图像，按书帖或页块装订。"], ["书本侧边；覆面材料与粘结结构。", "覆盖装订处并连接封面，通常与书本结合。"], ["书脊内部；胶或缝线。", "将页块固定成整体，不作为单独可取出的零件。"]],
    extra: [["书签", "夹在书页之间；纸带或布带。", "标记阅读位置；有些书没有独立书签。", "strip", true], ["纸张纤维", "书页内部；植物纤维。", "纤维交织形成纸张，是观察结构而不是可取下零件。", "fibers", false]],
    principle: "页块通过胶或缝线装订，书脊连接封面；不同书籍可能采用骑马钉、胶装或线装。"
  },
  jars: {
    details: [["外部容器；玻璃、陶瓷或塑料。", "容纳调料，罐口与盖配合。"], ["罐口上方；塑料、金属或玻璃盖。", "遮住开口并与罐口旋合或扣合。"], ["盖内边缘；硅胶或橡胶。", "填补罐盖与罐口之间的缝隙。"], ["罐身外侧；纸质或塑料标签。", "标记调料名称，可替换。"]],
    extra: [["内勺", "罐内；塑料、木或金属。", "帮助取用调料，不是每个罐子都有。", "spoon", true], ["罐口螺纹", "罐口外侧；与罐身一体成形。", "与罐盖旋合，是结构而非独立零件。", "thread", false]],
    principle: "罐身承托内容物，罐盖与密封圈配合减少水分和空气进入；具体密封方式因罐型不同。"
  },
  dish: {
    details: [["餐桌上的碗；烧制陶瓷。", "凹形碗身容纳食物，碗底接触桌面。"], ["碗体外表面；烧结釉层。", "形成较平滑表面；与瓷胎结合，不能单独取下。"], ["碗的底面；与碗身一体的圈足。", "提供接触桌面的支撑区域，不是独立零件。"], ["碗旁；木、竹或金属餐具。", "帮助夹取或舀取食物，可与碗分开。"]],
    extra: [["碗托", "碗下方；木、竹或硅胶托垫。", "隔开碗和桌面；并非所有餐桌都有。", "tray", true], ["瓷胎截面", "碗体内部；烧结陶瓷材料。", "与釉层共同构成碗身，仅作剖面观察。", "layer", false]],
    principle: "碗壁围出容纳空间，碗底把载荷传给桌面；釉层与瓷胎是结合的结构，不能像零件一样拆取。"
  }
};

const detailedArtwork = {
  handle: `<path d="M25 18 H48 V26 H35 V70 H25Z M48 25 Q76 25 76 48 Q76 69 48 69 H39 V61 H48 Q66 61 66 48 Q66 33 48 33Z" fill="#788b82" stroke="#dbe4d3" stroke-width="3"/>`,
  switch: `<rect x="25" y="27" width="46" height="42" rx="6" fill="#d8ded1" stroke="#91a499" stroke-width="3"/><rect x="38" y="32" width="20" height="32" rx="4" fill="#c9785d" stroke="#6b8076" stroke-width="2"/><path d="M48 38 V46 M45 52 H51" stroke="#f4e8c9" stroke-width="3"/>`,
  dial: `<circle cx="48" cy="48" r="30" fill="#d9bd85" stroke="#eaddbb" stroke-width="3"/><circle cx="48" cy="48" r="18" fill="#61796e" stroke="#a9bbae" stroke-width="2"/><path d="M48 31 V39 M27 48 H34 M62 48 H69 M48 56 V64" stroke="#e5dab8" stroke-width="3"/><path d="M48 48 L58 39" stroke="#f4e6c9" stroke-width="4"/>`,
  tube: `<path d="M28 18 H42 V62 Q42 70 50 70 H67" fill="none" stroke="#bad1c6" stroke-width="9"/><path d="M28 18 H42 V62 Q42 70 50 70 H67" fill="none" stroke="#4f6961" stroke-width="2"/>`,
  tray: `<path d="M17 38 H79 L73 62 H23Z" fill="#a8bbb0" stroke="#dce6d6" stroke-width="3"/><path d="M23 49 H73" stroke="#718c7d" stroke-width="3"/>`,
  vacuum: `<path d="M18 15 H33 V80 H18Z M63 15 H78 V80 H63Z" fill="#b4c6bf" stroke="#e6e9d8" stroke-width="2"/><path d="M42 23 V73 M54 23 V73" stroke="#9fcac4" stroke-dasharray="4 5" stroke-width="2"/><path d="M37 48 H59" stroke="#c5e1d9" stroke-width="2"/>`,
  thread: `<path d="M26 22 H70 V69 H26Z" fill="#a9bab1" stroke="#e1e5d4" stroke-width="3"/><path d="M24 28 L72 36 M24 39 L72 47 M24 50 L72 58" stroke="#6a8177" stroke-width="4"/>`,
  housing: `<rect x="18" y="18" width="60" height="60" rx="8" fill="#d0b077" stroke="#e5d6aa" stroke-width="3"/><circle cx="48" cy="48" r="22" fill="#51675e" stroke="#e0d0aa" stroke-width="3"/>`,
  bell: `<path d="M15 58 Q16 27 39 27 Q47 27 47 58Z M49 58 Q49 27 57 27 Q80 27 81 58Z" fill="#d7b46c" stroke="#f0dbad" stroke-width="3"/><path d="M48 23 V65" stroke="#a6b7aa" stroke-width="4"/><circle cx="48" cy="22" r="5" fill="#ba8e56"/>`,
  socket: `<path d="M30 29 H66 V67 H30Z" fill="#d8d7c1" stroke="#879b8f" stroke-width="3"/><path d="M36 35 H60 M36 43 H60 M36 51 H60" stroke="#81978b" stroke-width="3"/><path d="M41 67 V76 M55 67 V76" stroke="#d7b478" stroke-width="4"/>`,
  weight: `<path d="M20 33 H76 V65 H20Z" fill="#879990" stroke="#d5dfd1" stroke-width="3"/><path d="M26 39 H70 V59 H26Z" fill="#687e74"/><circle cx="48" cy="49" r="4" fill="#c7b188"/>`,
  cover: `<rect x="18" y="25" width="60" height="46" rx="4" fill="#aabdb2" stroke="#d7e0d3" stroke-width="3"/><path d="M27 36 H69 M27 44 H69 M27 52 H69" stroke="#738b80" stroke-width="3"/>`,
  nut: `<path d="M32 17 H64 L78 48 L64 79 H32 L18 48Z" fill="#b3c3b8" stroke="#e1e8d8" stroke-width="3"/><circle cx="48" cy="48" r="13" fill="#466157" stroke="#789588" stroke-width="3"/>`,
  gear: `<path d="M39 12 H57 V20 L67 24 L73 18 L83 32 L76 38 L78 48 L86 52 L80 68 L71 66 L63 74 V82 H43 V75 L33 72 L27 79 L15 65 L22 59 L20 48 L12 44 L18 28 L27 30 L35 22Z" fill="#c7ae75" stroke="#e9d7ac" stroke-width="3"/><circle cx="49" cy="47" r="13" fill="#526c61"/>`,
  ring: `<circle cx="48" cy="48" r="28" fill="none" stroke="#c6d9cc" stroke-width="10"/><circle cx="48" cy="48" r="17" fill="none" stroke="#819b8d" stroke-width="2"/>`,
  cap: `<path d="M30 65 L36 24 H60 L66 65Z" fill="#b9c8b9" stroke="#e2e7d8" stroke-width="3"/><path d="M34 55 H62" stroke="#718b7d" stroke-width="3"/>`,
  peg: `<path d="M18 40 H57 V31 H72 V59 H57 V50 H18Z" fill="#b5c5ba" stroke="#e0e7d9" stroke-width="3"/>`,
  panel: `<path d="M16 18 H80 V78 H16Z" fill="#c79568" stroke="#efd3ad" stroke-width="3"/><path d="M22 30 H74 M22 45 H74 M22 60 H74" stroke="#a97850" stroke-width="2"/>`,
  foot: `<path d="M25 20 H71 L65 72 H31Z" fill="#a98b6b" stroke="#e0caa4" stroke-width="3"/><path d="M28 70 H68 V78 H28Z" fill="#657a6c"/>`,
  strip: `<path d="M13 40 H83 V56 H13Z" fill="#cdb18b" stroke="#ead8ba" stroke-width="3"/><path d="M19 47 H77" stroke="#9a7a58" stroke-width="2"/>`,
  layer: `<path d="M17 25 H79 V38 H17Z" fill="#dde2d3"/><path d="M17 38 H79 V54 H17Z" fill="#aebcb2"/><path d="M17 54 H79 V70 H17Z" fill="#c5a67c"/><path d="M17 25 H79 V70 H17Z" fill="none" stroke="#eee4cb" stroke-width="3"/>`,
  brace: `<path d="M15 27 H81 V37 H15Z M24 58 H72 V68 H24Z" fill="#bc8e64" stroke="#ecd2aa" stroke-width="3"/><path d="M23 36 L69 59 M73 36 L27 59" stroke="#dcb890" stroke-width="4"/>`,
  cushion: `<rect x="15" y="25" width="66" height="45" rx="10" fill="#e5cca0" stroke="#c9ac80" stroke-width="3"/><path d="M24 48 H72" stroke="#c5aa7f" stroke-width="2"/>`,
  bracket: `<path d="M22 19 H32 V66 H78 V76 H22Z" fill="#a6baac" stroke="#e0e8d9" stroke-width="3"/><path d="M31 62 L59 34" stroke="#a6baac" stroke-width="5"/>`,
  glass: `<path d="M20 16 H76 V80 H20Z" fill="#a8cfc6" fill-opacity=".7" stroke="#d9ece3" stroke-width="3"/><path d="M27 66 L63 24 M40 70 L71 33" stroke="#f0faf0" stroke-width="3"/>`,
  hole: `<path d="M18 24 H78 V72 H18Z" fill="#c48162" stroke="#e1ae8c" stroke-width="3"/><circle cx="48" cy="51" r="10" fill="#39554b" stroke="#e2b79a" stroke-width="2"/>`,
  fibers: `<path d="M15 72 Q20 28 26 72 Q31 18 38 72 Q44 27 50 72 Q56 15 62 72 Q68 25 74 72 Q80 35 83 72" fill="none" stroke="#e1c18b" stroke-width="5"/><path d="M12 74 H84" stroke="#b78d5c" stroke-width="5"/>`,
  clip: `<path d="M25 26 H71 V35 H36 V61 H71 V70 H25Z" fill="#adbbb0" stroke="#e1e6d7" stroke-width="3"/>`,
  spoon: `<ellipse cx="35" cy="30" rx="13" ry="17" fill="#b8c8bd" stroke="#e4eadb" stroke-width="3"/><path d="M41 43 L69 73" stroke="#b8c8bd" stroke-width="7" stroke-linecap="round"/>`
};

function enrichItemParts(items) {
  for (const item of items) {
    const data = detailedParts[item.id];
    if (!data) throw new Error(`缺少物品细节：${item.id}`);
    item.parts.forEach((part, index) => {
      const [position, functionText] = data.details[index];
      part[1] = `${position} ${functionText}`;
      part[3] = { id: `${item.id}:legacy-${index}`, installable: true, stealable: false };
    });
    if (item.id === "cup") {
      item.parts[3][0] = "杯底垫";
      partArtwork[item.id][3] = detailedArtwork.ring;
    }
    if (item.id === "dish") {
      item.parts[1][0] = "釉层";
      item.parts[2][0] = "圈足";
      partArtwork[item.id][1] = detailedArtwork.layer;
      partArtwork[item.id][2] = detailedArtwork.ring;
      partArtwork[item.id][3] = detailedArtwork.spoon;
    }
    if (item.id === "plant") [1, 2, 3].forEach((index) => { item.parts[index][3].installable = false; });
    if (item.id === "rug") [0, 1, 3].forEach((index) => { item.parts[index][3].installable = false; });
    if (item.id === "counter") {
      item.parts[1][0] = "表面饰层";
      item.parts[1][3].installable = false;
      partArtwork[item.id][1] = detailedArtwork.layer;
    }
    if (item.id === "dish") [1, 2].forEach((index) => { item.parts[index][3].installable = false; });
    if (item.id === "books") [2, 3].forEach((index) => { item.parts[index][3].installable = false; });
    for (const [name, position, functionText, art, installable] of data.extra || []) {
      const index = item.parts.length;
      const stealable = installable && ["cap", "clip", "foot", "handle", "nut", "peg", "ring", "spoon", "switch"].includes(art)
        || item.id === "plant" && art === "tray";
      item.parts.push([name, `${position} ${functionText}`, art, { id: `${item.id}:detail-${index}`, installable, stealable }]);
      partArtwork[item.id].push(detailedArtwork[art]);
      if (installable) {
        const locations = [[68, 32, .65], [31, 65, .65], [70, 67, .65]];
        repairTargets[item.id][index] = locations[(index - 4) % locations.length];
      }
    }
    item.principle = data.principle;
  }
}
