/* ============================================
   忍术结印系统 - 完整逻辑（图片版）
   ============================================ */

// ==========================================
// 一、数据层
// ==========================================

const BASIC_SEALS = {
  子: {
    name: "鼠",
    romaji: "Ne",
    emoji: "🐀",
    img: "img/seal-ne.JPG",
    guide: "左手食指竖起，右手握住左手，右手拇指夹在左手食指和中指之间",
  },
  丑: {
    name: "牛",
    romaji: "Ushi",
    emoji: "🐂",
    img: "img/seal-ushi.JPG",
    guide: "双手水平交叉，左手食指和右手中指竖直向上，其余手指交叉握紧",
  },
  寅: {
    name: "虎",
    romaji: "Tora",
    emoji: "🐅",
    img: "img/seal-tora.JPG",
    guide: "双手手指交叉扣紧，左右手的食指和中指竖起并拢，指尖朝上",
  },
  卯: {
    name: "兔",
    romaji: "U",
    emoji: "🐇",
    img: "img/seal-u.JPG",
    guide: "右手小指竖直朝上，左手覆盖右手，左手小指也竖直朝上，其余手指交叉",
  },
  辰: {
    name: "龙",
    romaji: "Tatsu",
    emoji: "🐉",
    img: "img/seal-tatsu.JPG",
    guide: "左手握拳，右手拇指扣在左拳外侧，其余四指包住左拳",
  },
  巳: {
    name: "蛇",
    romaji: "Mi",
    emoji: "🐍",
    img: "img/seal-mi.JPG",
    guide: "双手合十，十指自然并拢贴合，指尖朝上，类似祈祷姿势",
  },
  午: {
    name: "马",
    romaji: "Uma",
    emoji: "🐎",
    img: "img/seal-uma.JPG",
    guide: "双手指尖相对，食指与小指竖起分开，中指和无名指弯曲在内侧交叉",
  },
  未: {
    name: "羊",
    romaji: "Hitsuji",
    emoji: "🐑",
    img: "img/seal-hitsuji.JPG",
    guide: "右手在上左手在下，双手手指交错重叠握紧，掌心朝下",
  },
  申: {
    name: "猴",
    romaji: "Saru",
    emoji: "🐒",
    img: "img/seal-saru.JPG",
    guide: "右手掌心朝下覆盖在左手掌心朝上的手上，右手拇指向外伸出",
  },
  酉: {
    name: "鸡",
    romaji: "Tori",
    emoji: "🐓",
    img: "img/seal-tori.JPG",
    guide: "左手手指并拢朝上，右手从外侧握住左手手指，指尖朝上形成鸟喙状",
  },
  戌: {
    name: "狗",
    romaji: "Inu",
    emoji: "🐕",
    img: "img/seal-inu.JPG",
    guide: "左手握拳掌心朝下，右手张开掌心朝下盖在左拳上方",
  },
  亥: {
    name: "猪",
    romaji: "I",
    emoji: "🐗",
    img: "img/seal-i.JPG",
    guide: "双手手腕合拢贴紧，十指全部张开朝外展开，如孔雀开屏",
  },
  特殊: {
    name: "十字印",
    romaji: "Jūji",
    emoji: "✋",
    img: "img/seal-cross.png",
    guide: "双手食指和中指伸直交叉成十字形，鸣人影分身之术的招牌结印",
  },
};

const ELEMENT_EMOJI = {
  fire: "🔥",
  water: "💧",
  earth: "🪨",
  lightning: "⚡",
  wind: "🌪️",
  none: "🌀",
};

const ELEMENT_NAME = {
  fire: "火遁",
  water: "水遁",
  earth: "土遁",
  lightning: "雷遁",
  wind: "风遁",
  none: "无属性",
};

const JUTSU_DATABASE = {
  // ╔══════════════════════════════════════╗
  // ║           🔥 火 遁                   ║
  // ╚══════════════════════════════════════╝

  "火遁·豪火球之术": {
    romaji: "Katon: Gōkakyū no Jutsu",
    user: "宇智波佐助 / 宇智波一族",
    rank: "C",
    element: "fire",
    seals: ["巳", "未", "申", "亥", "午", "寅"],
    description:
      "将查克拉在体内转化为火属性后从口中喷出巨大火球。宇智波一族的成年礼忍术，佐助7岁便已掌握，令父亲富岳刮目相看。",
  },
  "火遁·龙火之术": {
    romaji: "Katon: Ryūka no Jutsu",
    user: "宇智波佐助",
    rank: "C",
    element: "fire",
    seals: ["巳", "辰", "卯", "寅", "巳"],
    description:
      "沿着钢丝等线状物体释放高温火焰攻击，常与写轮眼配合使用引导火焰精准打击。",
  },
  "火遁·凤仙火之术": {
    romaji: "Katon: Hōsenka no Jutsu",
    user: "宇智波佐助",
    rank: "C",
    element: "fire",
    seals: ["子", "寅", "戌", "丑", "卯", "寅"],
    description:
      "从口中连续喷出多枚小型火球，可在火球中暗藏手里剑进行组合攻击。火球虽小但配合暗器出其不意。",
  },
  "火遁·豪龙火之术": {
    romaji: "Katon: Gōryūka no Jutsu",
    user: "宇智波佐助",
    rank: "B",
    element: "fire",
    seals: ["巳", "辰", "卯", "寅", "巳", "丑", "申", "卯", "巳", "戌", "寅"],
    description:
      '释放巨大龙形火焰冲向天空，可改变天气形成雷云，是施展"麒麟"的前置忍术。',
  },
  "火遁·灰积烧": {
    romaji: "Katon: Haisekishō",
    user: "猿飞阿斯玛",
    rank: "B",
    element: "fire",
    seals: ["巳", "卯", "申", "亥", "午", "寅"],
    description:
      "从口中喷出含火药的灰烬烟雾覆盖大范围，然后用牙齿打出火花引爆。防不胜防的陷阱型忍术。",
  },
  "火遁·头刻苦": {
    romaji: "Katon: Zukokku",
    user: "角都",
    rank: "B",
    element: "fire",
    seals: ["子", "寅"],
    description:
      "角都使用火属性心脏释放的超高温压缩火弹，威力远超一般火遁。与风遁联合使用可产生毁灭性效果。",
  },
  "火遁·豪火灭却": {
    romaji: "Katon: Gōka Mekkyaku",
    user: "宇智波斑",
    rank: "B",
    element: "fire",
    seals: ["午", "寅"],
    description:
      "宇智波斑施展的超大规模火遁，火焰覆盖范围极广，需要数十名水遁使用者联合施展水阵壁才能勉强抵挡。",
  },
  "火遁·豪火灭失": {
    romaji: "Katon: Gōka Messhitsu",
    user: "宇智波斑",
    rank: "B",
    element: "fire",
    seals: ["午", "巳", "寅"],
    description:
      "比豪火灭却更加强力的火遁，斑用此术在第四次忍界大战中压制大量忍者联军。",
  },
  "火遁·炎弹": {
    romaji: "Katon: Endan",
    user: "自来也",
    rank: "B",
    element: "fire",
    seals: ["巳", "寅", "丑", "申", "午", "寅"],
    description:
      '自来也将油与火遁结合，喷出高温火焰弹。可配合蛤蟆的油弹形成"仙法·五右卫门"的组合技。',
  },
  "火遁·火龙弹": {
    romaji: "Katon: Karyūdan",
    user: "猿飞日斩",
    rank: "B",
    element: "fire",
    seals: ["巳", "寅", "午", "巳", "寅", "午", "巳"],
    description:
      "三代火影猿飞日斩使用的高等火遁，形成火龙状攻击。常与土遁·土龙弹配合使用形成连携攻击。",
  },
  "火遁·火龙炎弹": {
    romaji: "Katon: Karyū Endan",
    user: "猿飞日斩",
    rank: "B",
    element: "fire",
    seals: ["巳", "辰", "寅", "午"],
    description:
      "三代火影使用的龙形火焰攻击，比一般火龙弹更加强力，持续时间更长。",
  },
  "火遁·大火灭却": {
    romaji: "Katon: Dai Endan",
    user: "自来也",
    rank: "B",
    element: "fire",
    seals: ["寅", "巳", "丑"],
    description: "自来也施展的大范围火遁，结合妙木山仙术后威力大增。",
  },
  "火遁·不知火": {
    romaji: "Katon: Shiranui",
    user: "猿飞阿斯玛",
    rank: "C",
    element: "fire",
    seals: ["巳", "午", "寅"],
    description: "阿斯玛配合飞燕斩刀释放的火遁，沿着查克拉刃蔓延的火焰攻击。",
  },

  // ╔══════════════════════════════════════╗
  // ║           💧 水 遁                   ║
  // ╚══════════════════════════════════════╝

  "水遁·水阵壁": {
    romaji: "Suiton: Suijinheki",
    user: "千手扉间 / 旗木卡卡西",
    rank: "B",
    element: "water",
    seals: ["寅", "巳", "子", "巳", "寅"],
    description:
      "从口中喷出大量水形成坚固水壁进行防御。二代火影扉间即使在无水源处也能凭空使用。",
  },
  "水遁·水龙弹之术": {
    romaji: "Suiton: Suiryūdan no Jutsu",
    user: "桃地再不斩 / 旗木卡卡西",
    rank: "B",
    element: "water",
    seals: [
      "丑",
      "申",
      "卯",
      "子",
      "亥",
      "酉",
      "丑",
      "午",
      "酉",
      "子",
      "寅",
      "戌",
      "寅",
      "巳",
      "丑",
      "申",
      "卯",
      "子",
      "亥",
      "酉",
      "丑",
      "午",
      "酉",
      "子",
      "寅",
      "戌",
      "寅",
      "巳",
      "丑",
      "申",
      "卯",
      "子",
      "亥",
      "酉",
      "丑",
      "午",
      "酉",
      "子",
      "卯",
      "辰",
      "巳",
      "未",
      "丑",
    ],
    description:
      "需要44个结印的超高难度忍术！操纵水形成巨龙攻击。波之国篇再不斩与卡卡西同时结出44印的名场面。",
  },
  "水遁·大瀑布之术": {
    romaji: "Suiton: Daibakufu no Jutsu",
    user: "旗木卡卡西",
    rank: "A",
    element: "water",
    seals: [
      "寅",
      "丑",
      "申",
      "卯",
      "巳",
      "午",
      "丑",
      "申",
      "卯",
      "子",
      "巳",
      "酉",
      "丑",
      "午",
      "卯",
      "申",
    ],
    description:
      "召唤巨大水柱形成瀑布般洪流冲击敌人。卡卡西用写轮眼从再不斩处复制此术。",
  },
  "水遁·水断波": {
    romaji: "Suiton: Mizu no Muchi",
    user: "千手扉间",
    rank: "C",
    element: "water",
    seals: ["丑", "巳"],
    description: "从口中猛烈喷出急速的超高压细水柱连续切断目标，该术犹如锋利的刀刃，破坏力极高。",
  },
  "水遁·水牙弹": {
    romaji: "Suiton: Suigadan",
    user: "犬冢牙",
    rank: "C",
    element: "water",
    seals: ["丑", "巳", "卯"],
    description: "将水形成锐利的牙状弹体射出攻击，速度快穿透力强。",
  },
  "水遁·水牢之术": {
    romaji: "Suiton: Suirō no Jutsu",
    user: "桃地再不斩",
    rank: "C",
    element: "water",
    seals: ["巳", "申", "卯", "子", "亥", "酉", "丑"],
    description:
      "单手维持一个水球将目标困在其中无法动弹。再不斩用此术困住卡卡西的经典场面。缺点是必须一只手持续接触水牢。",
  },
  "水遁·大瀑布之术": {
    romaji: "Suiton: Daibakuryu no Jutsu",
    user: "桃地再不斩",
    rank: "A",
    element: "water",
    seals: ["寅", "丑", "子", "巳", "申", "卯"],
    description:
      "操纵大量水形成猛烈的激流攻击对手，再不斩在波之国的桥上使用过此术。",
  },
  "水遁·水分身之术": {
    romaji: "Suiton: Mizu Bunshin no Jutsu",
    user: "桃地再不斩 / 旗木卡卡西",
    rank: "C",
    element: "water",
    seals: ["丑", "巳", "卯", "申"],
    description:
      "用水创造出分身，每个分身只有本体十分之一的力量。被击中后会变回水。",
  },
  "水遁·千食鲛": {
    romaji: "Suiton: Senshokukō",
    user: "干柿 的鬼鲛",
    rank: "B",
    element: "water",
    seals: ["寅", "丑", "巳", "子"],
    description:
      "鬼鲛从水中召唤上千条鲨鱼形态的水弹进行密集攻击，水中战斗时威力倍增。",
  },
  "水遁·大鲛弹之术": {
    romaji: "Suiton: Daikōdan no Jutsu",
    user: "干柿鬼鲛",
    rank: "A",
    element: "water",
    seals: ["亥", "丑", "巳"],
    description:
      "鬼鲛的最强水遁之一，形成巨大鲨鱼形态的水弹突进攻击，可吸收对手忍术的查克拉。与迈特凯交战时使用。",
  },
  "水遁·爆水冲波": {
    romaji: "Suiton: Bakusui Shōha",
    user: "干柿鬼鲛",
    rank: "B",
    element: "water",
    seals: ["巳", "丑", "申"],
    description:
      "从口中喷出海量水形成巨浪，瞬间将战场变成湖泊。鬼鲛用来创造有利于自己的水中战场。",
  },
  "水遁·水鲛弹之术": {
    romaji: "Suiton: Suikōdan no Jutsu",
    user: "旗木卡卡西 / 干柿鬼鲛",
    rank: "B",
    element: "water",
    seals: ["寅", "丑", "巳", "卯", "申"],
    description: "将水塑造成鲨鱼形态冲击对手，可在水面上使用，攻击速度快。",
  },
  "水遁·水乱波": {
    romaji: "Suiton: Mizurappa",
    user: "弥彦（佩恩）/ 山城青 的叶",
    rank: "C",
    element: "water",
    seals: ["丑", "巳"],
    description: "从口中喷射高压水流进行攻击的基础水遁，简单但实用。",
  },
  "水遁·铁炮玉": {
    romaji: "Suiton: Teppōdama",
    user: "蛤蟆文太 / 自来也",
    rank: "C",
    element: "water",
    seals: ["寅"],
    description:
      "将查克拉转化为水属性后从口中射出高速水弹，蛤蟆一族常用的攻击术。",
  },

  // ╔══════════════════════════════════════╗
  // ║           🪨 土 遁                   ║
  // ╚══════════════════════════════════════╝

  "土遁·土流壁": {
    romaji: "Doton: Doryūheki",
    user: "猿飞日斩 / 旗木卡卡西",
    rank: "B",
    element: "earth",
    seals: ["寅", "戌", "巳", "丑"],
    description:
      "吐出泥土在地面形成坚固土墙防御。卡卡西版土墙上有标志性的狗头浮雕装饰。",
  },
  "土遁·土龙弹": {
    romaji: "Doton: Doryūdan",
    user: "猿飞日斩",
    rank: "B",
    element: "earth",
    seals: ["未", "午", "辰"],
    description:
      "从地面升起土龙连续发射泥弹攻击。常与火遁配合形成毁灭性的连携攻击。",
  },
  "土遁·裂土转掌": {
    romaji: "Doton: Retsudo Tenshō",
    user: "大蛇丸",
    rank: "C",
    element: "earth",
    seals: ["丑", "巳", "子", "申"],
    description: "使脚下地面瞬间裂开崩塌，让敌人失去立足之地跌入裂缝。",
  },
  "土遁·土中潜行之术": {
    romaji: "Doton: Moguragakure no Jutsu",
    user: "旗木卡卡西",
    rank: "C",
    element: "earth",
    seals: ["丑", "寅", "巳"],
    description:
      "潜入地面自由移动，可从地下突然袭击或进行隐蔽移动。卡卡西的追击打术。",
  },
  "土遁·心中斩首之术": {
    romaji: "Doton: Shinjū Zanshu no Jutsu",
    user: "旗木卡卡西",
    rank: "D",
    element: "earth",
    seals: ["丑", "寅", "巳"],
    description:
      "潜入地下后从目标脚下拉住对手将其埋入土中，只露出头部。卡卡西在铃铛测试中对佐助使用的经典忍术。",
  },
  "土遁·土遁结界·土牢堂无": {
    romaji: "Doton: Dochū Eigyo no Jutsu",
    user: "自来也",
    rank: "B",
    element: "earth",
    seals: ["寅", "戌", "丑"],
    description:
      "创造一个土遁结界将目标困在黑暗的土牢中，自来也用来封锁敌人行动的忍术。",
  },
  "土遁·土流大河": {
    romaji: "Doton: Doryū Taiga",
    user: "猿飞日斩",
    rank: "C",
    element: "earth",
    seals: ["寅", "未", "丑"],
    description: "将地面变成泥河使敌人失去平衡，常作为土龙弹的前置布置。",
  },
  "土遁·岩隐": {
    romaji: "Doton: Iwagakure no Jutsu",
    user: "大野木",
    rank: "C",
    element: "earth",
    seals: ["子", "卯", "辰"],
    description: "将自身与岩石融为一体进行隐蔽，岩忍者村常用的隐身术。",
  },
  "土遁·超轻重岩之术": {
    romaji: "Doton: Chōkeijūgan no Jutsu",
    user: "大野木",
    rank: "A",
    element: "earth",
    seals: ["寅", "丑"],
    description:
      "三代土影大野木的血继限界辅助术，可以大幅改变目标的重量，使巨大的陨石也能飘浮。",
  },
  "土遁·超加重岩之术": {
    romaji: "Doton: Chō Kajūgan no Jutsu",
    user: "大野木",
    rank: "A",
    element: "earth",
    seals: ["寅", "巳"],
    description: "大幅增加目标的重量，使敌人无法动弹或使攻击术的重量倍增。",
  },
  "土遁·地动核": {
    romaji: "Doton: Chidōkaku",
    user: "大蛇丸 /  的",
    rank: "B",
    element: "earth",
    seals: ["亥", "丑", "巳", "戌"],
    description: "使大范围地面急剧升降，制造巨大的地形落差。",
  },

  // ╔══════════════════════════════════════╗
  // ║           ⚡ 雷 遁                   ║
  // ╚══════════════════════════════════════╝

  千鸟: {
    romaji: "Chidori",
    user: "旗木卡卡西 / 宇智波佐助",
    rank: "A",
    element: "lightning",
    seals: ["丑", "卯", "申"],
    description:
      "将雷属性查克拉高度集中于手部的高速突刺术，发出千鸟鸣叫般声响。仅3个结印但需写轮眼辅助。",
  },
  千鸟锐枪: {
    romaji: "Chidori Eisō",
    user: "宇智波佐助",
    rank: "A",
    element: "lightning",
    seals: ["申", "卯", "丑"],
    description: "千鸟的形态变化，将雷遁查克拉延伸为长枪状进行中远距离攻击。",
  },
  千鸟千本: {
    romaji: "Chidori Senbon",
    user: "宇智波佐助",
    rank: "A",
    element: "lightning",
    seals: ["丑", "卯", "申"],
    description: "将千鸟的查克拉分散成无数雷属性千本针射出，对多目标同时攻击。",
  },
  千鸟流: {
    romaji: "Chidori Nagashi",
    user: "宇智波佐助",
    rank: "A",
    element: "lightning",
    seals: [],
    description:
      "无需结印！从全身释放千鸟的雷电，形成攻防一体的雷遁护甲。佐助在对鼬战中多次使用。",
  },
  雷切: {
    romaji: "Raikiri",
    user: "旗木卡卡西",
    rank: "S",
    element: "lightning",
    seals: ["丑", "卯", "申"],
    description:
      '千鸟的完成形态，查克拉集中度更高。因卡卡西曾用此术劈开闪电而得名"雷切"，卡卡西唯一自创忍术。',
  },
  "雷遁·雷兽追牙": {
    romaji: "Raiton: Raijū Tsuiga",
    user: "旗木卡卡西",
    rank: "B",
    element: "lightning",
    seals: ["丑", "卯", "申", "寅"],
    description: "以雷遁查克拉形成雷兽形态，沿地面奔跑自动追踪目标攻击。",
  },
  "雷遁·雷龙旋风": {
    romaji: "Raiton: Rairyū no Tatsumaki",
    user: "旗木卡卡西",
    rank: "A",
    element: "lightning",
    seals: ["丑", "巳", "卯", "申"],
    description: "卡卡西将雷遁查克拉形成龙卷风状的雷龙进行大范围攻击。",
  },
  "雷遁·影分身": {
    romaji: "Raiton: Kage Bunshin",
    user: "旗木卡卡西",
    rank: "A",
    element: "lightning",
    seals: ["特殊"],
    description: "卡卡西用雷遁创造的特殊分身，被攻击时会释放雷电麻痹攻击者。",
  },
  麒麟: {
    romaji: "Kirin",
    user: "宇智波佐助",
    rank: "S",
    element: "lightning",
    seals: ["特殊"],
    description:
      "佐助的最强雷遁！利用豪龙火之术产生的雷云，引导天然雷电形成麒麟形态落下。速度1/1000秒，连万花筒写轮眼都无法捕捉。",
  },
  "雷遁·伪暗": {
    romaji: "Raiton: Gian",
    user: "角都",
    rank: "B",
    element: "lightning",
    seals: ["申", "丑"],
    description: "角都使用雷属性心脏释放的雷遁光线攻击，如同激光般射向对手。",
  },
  "雷遁·地走": {
    romaji: "Raiton: Jibashi",
    user: "佐助",
    rank: "C",
    element: "lightning",
    seals: ["丑", "寅"],
    description:
      "将雷遁查克拉释放到地面中使其扩散传导，对接触地面的敌人造成麻痹。",
  },
  "雷遁·感激波": {
    romaji: "Raiton: Kangekiha",
    user: "达鲁伊",
    rank: "B",
    element: "lightning",
    seals: ["丑", "卯"],
    description:
      "云隐村达鲁伊的雷遁，释放大范围的波状雷电攻击。可通过水传导增加杀伤范围。",
  },
  "雷遁·黑斑差": {
    romaji: "Raiton: Kuroi Kaminari",
    user: "达鲁伊",
    rank: "B",
    element: "lightning",
    seals: ["丑", "卯", "申"],
    description:
      "达鲁伊释放的黑色雷电，威力比普通雷遁更强，是云隐村的秘传忍术。",
  },

  // ╔══════════════════════════════════════╗
  // ║           🌪️ 风 遁                   ║
  // ╚══════════════════════════════════════╝

  "风遁·大突破": {
    romaji: "Fūton: Daitoppa",
    user: "大蛇丸",
    rank: "C",
    element: "wind",
    seals: ["寅", "丑", "巳"],
    description: "深吸一口气后吐出大范围强风，可以吹飞大量敌人和森林中的树木。",
  },
  "风遁·真空玉": {
    romaji: "Fūton: Shinkūgyoku",
    user: "猿飞日斩",
    rank: "B",
    element: "wind",
    seals: ["子", "卯", "寅"],
    description:
      "连续吐出多枚高速旋转的风弹，以密集弹幕攻击敌人。三代火影的远程攻击手段。",
  },
  "风遁·真空大玉": {
    romaji: "Fūton: Shinkū Taigyoku",
    user: "猿飞日斩",
    rank: "A",
    element: "wind",
    seals: ["子", "卯", "寅", "巳"],
    description:
      "真空玉的强化版，将多个真空玉压缩为一个巨大的风弹释放，威力远超普通版。",
  },
  "风遁·真空波": {
    romaji: "Fūton: Shinkūha",
    user: "猿飞日斩",
    rank: "B",
    element: "wind",
    seals: ["子", "卯", "辰", "寅"],
    description:
      "深吸一口气后喷出带有锋利风刃的空气波，如同无形的刀刃横扫敌人。",
  },
  "风遁·真空连波": {
    romaji: "Fūton: Shinkū Renpa",
    user: "猿飞日斩",
    rank: "A",
    element: "wind",
    seals: ["子", "卯", "辰", "寅", "子"],
    description: "连续发射多道真空波的强化版本，覆盖范围更广。",
  },
  "风遁·螺旋手里剑": {
    romaji: "Fūton: Rasenshuriken",
    user: "漩涡鸣人",
    rank: "S",
    element: "wind",
    seals: ["特殊"],
    description:
      "在螺旋丸基础上加入风属性变化形成手里剑形态，命中后产生无数微型风刃从细胞层面破坏。鸣人超越四代的忍术！",
  },
  "风遁·压害": {
    romaji: "Fūton: Atsugai",
    user: "角都",
    rank: "B",
    element: "wind",
    seals: ["申", "巳"],
    description:
      "角都使用风属性心脏释放的压缩空气弹，与火遁联合使用时产生超大范围的火焰攻击。",
  },
  "风遁·烈风掌": {
    romaji: "Fūton: Reppūshō",
    user: "奈良鹿丸",
    rank: "C",
    element: "wind",
    seals: ["巳", "午", "申"],
    description:
      "从手掌释放强力风压，可以加速投掷出的手里剑和苦无，增加其威力和射程。",
  },
  "风遁·风切之术": {
    romaji: "Fūton: Kazekiri no Jutsu",
    user: "手 的",
    rank: "C",
    element: "wind",
    seals: ["丑", "子"],
    description: "释放锐利的风之刃进行切割攻击。砂忍者村风遁使用者的基础忍术。",
  },
  "风遁·大旋风": {
    romaji: "Fūton: Daitoppa",
    user: "手鞠",
    rank: "C",
    element: "wind",
    seals: [],
    description:
      "手鞠用巨扇释放的大范围旋风攻击，无需结印。借助铁扇增幅风遁威力。",
  },
  "风遁·镰鼬": {
    romaji: "Fūton: Kamaitachi no Jutsu",
    user: "手鞠",
    rank: "C",
    element: "wind",
    seals: [],
    description:
      "手鞠用巨扇掀起的镰鼬之风，无需结印，无数微型风刃可撕裂一切。中忍考试中对阵天天的时使用。",
  },

  // ╔══════════════════════════════════════╗
  // ║         🌀 无属性 / 特殊忍术          ║
  // ╚══════════════════════════════════════╝

  通灵之术: {
    romaji: "Kuchiyose no Jutsu",
    user: "漩涡鸣人 / 自来也 / 纲手 / 大蛇丸",
    rank: "C",
    element: "none",
    seals: ["亥", "戌", "酉", "申", "未"],
    description:
      "咬破拇指以血为媒介召唤通灵兽。鸣人和自来也召唤蛤蟆，纲手召唤蛞蝓，大蛇丸召唤万蛇。",
  },
  影分身之术: {
    romaji: "Kage Bunshin no Jutsu",
    user: "漩涡鸣人",
    rank: "B",
    element: "none",
    seals: ["特殊"],
    description:
      "鸣人的招牌！只需十字印即可创造拥有实体的分身，每个分身有独立意识和战斗力，解除后记忆回传本体。",
  },
  多重影分身之术: {
    romaji: "Tajū Kage Bunshin no Jutsu",
    user: "漩涡鸣人",
    rank: "A",
    element: "none",
    seals: ["特殊"],
    description:
      "一次创造上千个影分身的禁术！极度消耗查克拉，但鸣人凭九尾查克拉毫无压力地使用。",
  },
  螺旋丸: {
    romaji: "Rasengan",
    user: "波风水门 / 漩涡鸣人 / 自来也",
    rank: "A",
    element: "none",
    seals: [],
    description:
      "四代火影参考尾兽玉耗时三年开发的A级忍术，无需结印！纯粹查克拉形态变化在掌心凝聚高速旋转查克拉球。",
  },
  大玉螺旋丸: {
    romaji: "Ōdama Rasengan",
    user: "漩涡鸣人 / 自来也",
    rank: "A",
    element: "none",
    seals: [],
    description:
      "螺旋丸的强化版，体积大幅增加。鸣人用影分身辅助完成，自来也可单手施展。无需结印。",
  },
  超大玉螺旋丸: {
    romaji: "Chō Ōdama Rasengan",
    user: "漩涡鸣人",
    rank: "S",
    element: "none",
    seals: [],
    description:
      "比大玉螺旋丸更加巨大的螺旋丸，鸣人在仙人模式下使用的强化版本。无需结印。",
  },
  螺旋连丸: {
    romaji: "Rasenrengan",
    user: "漩涡鸣人",
    rank: "A",
    element: "none",
    seals: [],
    description:
      "鸣人利用影分身双手各持一个螺旋丸同时攻击，双倍的破坏力。无需结印。",
  },
  "仙法·超大玉螺旋连丸": {
    romaji: "Senpō: Chō Ōdama Rasen Tarengan",
    user: "漩涡鸣人",
    rank: "S",
    element: "none",
    seals: [],
    description:
      "仙人模式下鸣人的多重影分身各持超大玉螺旋丸同时攻击，毁灭级的连携攻击。无需结印。",
  },
  尾兽玉: {
    romaji: "Bijūdama",
    user: "漩涡鸣人（九尾模式）/ 各尾兽",
    rank: "S",
    element: "none",
    seals: [],
    description:
      "尾兽的终极攻击，将正负查克拉以8:2比例混合压缩后释放。鸣人在九喇嘛模式下可自由使用。无需结印。",
  },
  秽土转生: {
    romaji: "Kuchiyose: Edo Tensei",
    user: "千手扉间 / 大蛇丸 / 药师兜",
    rank: "S",
    element: "none",
    seals: ["寅", "巳", "戌", "辰"],
    description:
      "二代火影开发的S级禁术！以活人为祭品将死者灵魂召回现世，被召唤者拥有不死之身和生前所有能力。第四次忍界大战中兜用此术召回大量传说级忍者。",
  },
  飞雷神之术: {
    romaji: "Hiraishin no Jutsu",
    user: "波风水门 / 千手扉间",
    rank: "S",
    element: "none",
    seals: ["巳", "亥", "寅"],
    description:
      '瞬间移动到预先标记术式的位置，四代火影凭此术获得"黄色闪光"之名。二代火影发明，四代将其推向极致。',
  },
  "八门遁甲·死门": {
    romaji: "Hachimon Tonkō: Shimon",
    user: "迈特凯",
    rank: "S",
    element: "none",
    seals: [],
    description:
      '打开全部八门的终极奥义！获得凌驾六道之力的战斗力，代价是必然死亡。凯用"夜凯"差点击杀六道斑，被斑称为"最强体术"。',
  },
  "八门遁甲·景门": {
    romaji: "Hachimon Tonkō: Keimon",
    user: "迈特凯 / 李洛克",
    rank: "A",
    element: "none",
    seals: [],
    description:
      '开启第七门"景门"，身体呈现蓝绿色查克拉蒸气。可使用昼虎等强力体术。无需结印。',
  },
  "八门遁甲·第六门·景门开": {
    romaji: "Hachimon Tonkō: Keimon Kai",
    user: "李洛克",
    rank: "B",
    element: "none",
    seals: [],
    description:
      '小李在中忍考试对阵我爱罗时开启的门数。身体高速运动产生残影，使出"表莲华""里莲华"等连击。',
  },
  色诱之术: {
    romaji: "Oiroke no Jutsu",
    user: "漩涡鸣人",
    rank: "D",
    element: "none",
    seals: ["特殊"],
    description:
      '鸣人自创的"最强忍术"！用变化之术变成性感美女，连三代火影都无法抵挡。疾风传中进化为后宫之术。',
  },
  后宫之术: {
    romaji: "Hāremu no Jutsu",
    user: "漩涡鸣人",
    rank: "D",
    element: "none",
    seals: ["特殊"],
    description:
      "色诱之术的升级版，多重影分身后全部使用色诱之术。连辉夜都无法抵挡的终极杀器。",
  },
  变化之术: {
    romaji: "Henge no Jutsu",
    user: "全体忍者",
    rank: "E",
    element: "none",
    seals: ["戌", "亥", "寅"],
    description:
      "忍者学院基础三术之一，将外表变化为其他人或物体的模样。鸣人在此基础上开发了色诱之术。",
  },
  替身之术: {
    romaji: "Kawarimi no Jutsu",
    user: "全体忍者",
    rank: "E",
    element: "none",
    seals: ["巳", "丑", "申"],
    description:
      "忍者学院基础三术之一，在被攻击瞬间与附近物体互换位置进行闪避。最基础但极其实用的生存术。",
  },
  分身之术: {
    romaji: "Bunshin no Jutsu",
    user: "全体忍者",
    rank: "E",
    element: "none",
    seals: ["丑", "寅", "巳"],
    description:
      "忍者学院基础三术之一，创造虚幻的分身。没有实体无法攻击，仅能迷惑对手。鸣人曾经最不擅长的忍术。",
  },
  " 的体化之术": {
    romaji: "Karada no Jutsu",
    user: "全体忍者",
    rank: "E",
    element: "none",
    seals: ["寅"],
    description:
      "释放查克拉冲击挣脱幻术束缚的基础术。通过扰乱体内查克拉流动来破解对方施加的幻术。",
  },

  // ---- 自来也 ----
  "仙法·五右卫门": {
    romaji: "Senpō: Goemon",
    user: "自来也 / 蛤蟆夫妇",
    rank: "A",
    element: "fire",
    seals: ["巳", "寅", "丑"],
    description:
      "自来也与蛤蟆文太、蛤蟆龙的三体连携忍术。油+火+风三属性合一，形成超高温油河淹没敌人。",
  },
  "蛤蟆油炎弹: {
    romaji: "Gamayu Endan",
    user: "自来也 / 蛤蟆文太",
    rank: "B",
    element: "fire",
    seals: ["巳", "寅"],
    description:
      "自来也与蛤蟆文太的连携技。蛤蟆吐油，自来也点火，形成大范围火海。",
  },
  螺旋丸连弹: {
    romaji: "Rasengan Rendan",
    user: "漩涡鸣人",
    rank: "A",
    element: "none",
    seals: [],
    description:
      "鸣人用多个影分身各自持螺旋丸从不同角度对敌人进行连续打击的组合技。无需结印。",
  },
  "仙法·螺旋丸": {
    romaji: "Senpō: Rasengan",
    user: "漩涡鸣人",
    rank: "A",
    element: "none",
    seals: [],
    description:
      "在仙人模式下施展的螺旋丸，注入自然能量后威力远超普通版。无需结印。",
  },

  // ---- 大蛇丸 ----
  "通灵·秽土转生": {
    romaji: "Kuchiyose: Edo Tensei",
    user: "大蛇丸",
    rank: "S",
    element: "none",
    seals: ["寅", "巳", "戌", "辰", "丑", "卯"],
    description:
      "大蛇丸版的秽土转生，在木叶崩溃篇中召回一代和二代火影对阵三代火影。",
  },
  潜影蛇手: {
    romaji: "Sen'ei Jashu",
    user: "大蛇丸 / 御手洗红豆",
    rank: "C",
    element: "none",
    seals: ["巳"],
    description:
      "从袖口召唤出多条蛇进行攻击或束缚。大蛇丸及其弟子常用的基础蛇术。",
  },
  潜影多蛇手: {
    romaji: "Sen'ei Tajashu",
    user: "大蛇丸",
    rank: "B",
    element: "none",
    seals: ["巳", "寅"],
    description: "潜影蛇手的强化版，召唤出更多更大的蛇进行攻击。",
  },
  万蛇罗之阵: {
    romaji: "Mandara no Jin",
    user: "大蛇丸",
    rank: "A",
    element: "none",
    seals: ["巳", "寅", "午", "巳"],
    description: "召唤大量巨蛇形成蛇阵覆盖整个战场，是大蛇丸的大规模召唤术。",
  },
  八岐之术: {
    romaji: "Yamata no Jutsu",
    user: "大蛇丸",
    rank: "S",
    element: "none",
    seals: ["巳", "未", "申", "午", "辰", "寅"],
    description:
      "大蛇丸的真身——八岐大蛇形态。白色巨蛇拥有八个头和再生能力，佐助对战时使用的终极形态。",
  },

  // ---- 纲手 ----
  "创造再生·百豪之术": {
    romaji: "Sōzō Saisei: Byakugō no Jutsu",
    user: "纲手",
    rank: "S",
    element: "none",
    seals: [],
    description:
      "额头百豪之印释放长年累积的查克拉，获得接近不死的超速再生能力。纲手在对斑战中被腰斩后仍能再生。无需结印。",
  },
  "阴封印·解": {
    romaji: "Infūin: Kai",
    user: "纲手 / 春野樱",
    rank: "S",
    element: "none",
    seals: [],
    description:
      "解除百豪之印的封印，释放储存的大量查克拉。纲手和樱在四战中使用。无需结印。",
  },
  掌仙术: {
    romaji: "Shōsen Jutsu",
    user: "纲手 / 春野樱 / 药师兜",
    rank: "A",
    element: "none",
    seals: [],
    description:
      "将查克拉集中于手掌治愈伤患的医疗忍术基础技。绿色查克拉光芒为标志。需要精密查克拉控制。",
  },

  // ---- 卡卡西 ----
  "雷切·双雷震": {
    romaji: "Raikiri: Sōrai Shin",
    user: "旗木卡卡西",
    rank: "S",
    element: "lightning",
    seals: ["丑", "卯", "申"],
    description:
      "双手同时使用雷切，以雷电连接形成大范围攻击。卡卡西在四战中展示的技术。",
  },
  "写轮眼·神威": {
    romaji: "Mangekyō Sharingan: Kamui",
    user: "旗木卡卡西",
    rank: "S",
    element: "none",
    seals: [],
    description:
      "卡卡西万花筒写轮眼的能力，可以将远距离的目标扭曲吸入神威空间。消耗极大查克拉。无需结印。",
  },
  "土遁·追牙之术": {
    romaji: "Doton: Tsuiga no Jutsu",
    user: "旗木卡卡西",
    rank: "B",
    element: "earth",
    seals: ["丑", "巳", "戌", "申"],
    description:
      "召唤忍犬群在地下追踪目标，多头忍犬从地面突出咬住敌人使其无法动弹。",
  },

  // ---- 宇智波鼬 ----
  天照: {
    romaji: "Amaterasu",
    user: "宇智波鼬 / 宇智波佐助",
    rank: "S",
    element: "fire",
    seals: [],
    description:
      "万花筒写轮眼的瞳术，视线聚焦之处燃起永不熄灭的黑色火焰。温度极高，可烧尽一切。无需结印。",
  },
  月读: {
    romaji: "Tsukuyomi",
    user: "宇智波鼬",
    rank: "S",
    element: "none",
    seals: [],
    description:
      "鼬的万花筒写轮眼最强幻术，将对手拉入幻术空间。在幻术中鼬可自由操纵时间和空间，72小时的酷刑仅需一瞬间。",
  },
  须佐能乎: {
    romaji: "Susano'o",
    user: "宇智波鼬 / 宇智波佐助 / 宇智波斑",
    rank: "S",
    element: "none",
    seals: [],
    description:
      "万花筒写轮眼的终极防御与攻击手段。以查克拉形成巨大武士形态包裹自身。鼬的须佐能乎持有十拳剑和八咫镜。",
  },
  "火遁·凤仙花爪红": {
    romaji: "Katon: Hōsenka Tsumabeni",
    user: "宇智波鼬",
    rank: "C",
    element: "fire",
    seals: ["子", "寅", "戌", "丑", "卯", "寅"],
    description:
      "凤仙火之术的变化版，在每枚火球中嵌入手里剑。火焰消散后手里剑依然飞向目标。鼬的高效率战术。",
  },

  // ---- 宇智波斑 ----
  "木遁·深林降诞": {
    romaji: "Mokuton: Shin Suusenju",
    user: "宇智波斑（获得初代细胞后）",
    rank: "S",
    element: "earth",
    seals: ["巳", "子", "丑", "寅"],
    description:
      "斑在获得千手柱间细胞后使用的木遁忍术，可在瞬间让大片森林从无到有。",
  },
  "轮墓·边狱": {
    romaji: "Rinbo: Hengoku",
    user: "宇智波斑",
    rank: "S",
    element: "none",
    seals: [],
    description:
      '斑的轮回眼能力，将影子投射到"轮墓"世界中作为不可见的分身进行攻击。常人完全感知不到。无需结印。',
  },
  地爆天星: {
    romaji: "Chibaku Tensei",
    user: "佩恩（长门）/ 宇智波斑",
    rank: "S",
    element: "none",
    seals: [],
    description:
      "轮回眼的大招！创造超强引力核心，将周围一切物质吸引形成巨大岩球。传说六道仙人用此术创造了月亮。",
  },

  // ---- 佩恩（长门） ----
  神罗天征: {
    romaji: "Shinra Tensei",
    user: "佩恩（长门）",
    rank: "S",
    element: "none",
    seals: [],
    description:
      "轮回眼天道的能力，以自身为中心产生强大斥力推开一切。大范围使用时可瞬间摧毁一个村子。毁灭木叶的那一击。",
  },
  万象天引: {
    romaji: "Banshō Ten'in",
    user: "佩恩（长门）",
    rank: "S",
    element: "none",
    seals: [],
    description:
      "与神罗天征相反，产生强大引力将目标吸向自身。常配合黑棒穿刺使用。无需结印。",
  },
  "外道·轮回天生之术": {
    romaji: "Gedō: Rinne Tensei no Jutsu",
    user: "长门",
    rank: "S",
    element: "none",
    seals: [],
    description:
      "轮回眼的终极奥义，可以复活大量死者。长门用此术复活了被佩恩毁灭木叶时杀死的所有人，代价是自己的生命。",
  },
  "通灵·外道魔像": {
    romaji: "Kuchiyose: Gedō Mazō",
    user: "长门 / 宇智波斑",
    rank: "S",
    element: "none",
    seals: ["亥", "戌", "酉", "申", "未"],
    description: "召唤外道魔像——十尾的空壳。长门在晓的据点召唤它来封印尾兽。",
  },

  // ---- 千手柱间 ----
  "木遁·树界降诞": {
    romaji: "Mokuton: Jukai Kōtan",
    user: "千手柱间",
    rank: "S",
    element: "earth",
    seals: ["巳", "丑", "卯", "寅"],
    description:
      "初代火影的标志性忍术！瞬间创造一整片森林，木遁最具代表性的攻击术。木叶村周围的森林就是用此术创造的。",
  },
  "木遁·木龙之术": {
    romaji: "Mokuton: Mokuryu no Jutsu",
    user: "千手柱间",
    rank: "S",
    element: "earth",
    seals: ["巳", "子", "寅"],
    description:
      "创造巨大木龙缠绕对手并持续吸收查克拉。柱间用来对付九尾和宇智波斑的忍术。",
  },
  "木遁·木分身之术": {
    romaji: "Mokuton: Moku Bunshin no Jutsu",
    user: "千手柱间",
    rank: "A",
    element: "earth",
    seals: ["寅", "戌", "巳"],
    description: "用木遁创造的分身，耐久度远超水分身和土分身，且可远距离操作。",
  },
  "仙法·木遁·真数千手": {
    romaji: "Senpō: Mokuton: Shin Sūsenju",
    user: "千手柱间",
    rank: "S",
    element: "earth",
    seals: ["巳", "子", "丑", "寅", "午"],
    description:
      "柱间的最强忍术！创造千手观音巨像，拥有数千只巨手。在终结谷之战中用此术对抗斑的完全体须佐能乎九尾。",
  },

  // ---- 千手扉间 ----
  "水遁·水断波": {
    romaji: "Suiton: Suidanha",
    user: "千手扉间",
    rank: "A",
    element: "water",
    seals: ["丑", "巳", "子", "寅"],
    description:
      "二代火影的高压水流切割术，水压之高可以切割岩石。被称为水遁中的最强攻击术之一。",
  },
  "水遁·水阵壁（扉间版）": {
    romaji: "Suiton: Suijinheki",
    user: "千手扉间",
    rank: "B",
    element: "water",
    seals: ["寅", "巳", "子", "巳", "寅"],
    description:
      "扉间版的水阵壁，在完全无水源的环境下凭空创造大量水进行防御，体现了他超凡的水遁天赋。",
  },
  互乘起爆符之术: {
    romaji: "Tajū Kibakufuda no Jutsu",
    user: "千手扉间",
    rank: "A",
    element: "none",
    seals: ["寅", "巳"],
    description:
      "扉间开发的起爆符连锁引爆术，使起爆符产生连锁反应持续爆炸。秽土转生体的自爆攻击。",
  },

  // ---- 我爱罗 ----
  砂缚柩: {
    romaji: "Sabaku Kyū",
    user: "我爱罗",
    rank: "C",
    element: "earth",
    seals: [],
    description:
      "操纵砂子包裹住对手全身。无需结印，我爱罗的砂子会自动防御和攻击。中忍考试的标志性忍术。",
  },
  "砂 的送葬": {
    romaji: "Sabaku Sōsō",
    user: "我爱罗",
    rank: "B",
    element: "earth",
    seals: [],
    description:
      "砂缚柩的后续，握拳瞬间将砂中的目标压碎。我爱罗在中忍考试中对付多斯时的残忍一幕。无需结印。",
  },
  砂之盾: {
    romaji: "Suna no Tate",
    user: "我爱罗",
    rank: "B",
    element: "earth",
    seals: [],
    description:
      "守鹤的砂自动在我爱罗身前形成防御壁。完全自动防御，我爱罗甚至不需要主动操控。",
  },
  砂之铠: {
    romaji: "Suna no Yoroi",
    user: "我爱罗",
    rank: "B",
    element: "earth",
    seals: [],
    description:
      "用砂覆盖全身形成铠甲状的第二层防御，弥补砂之盾被突破的情况。消耗大量查克拉。",
  },

  // ---- 日向一族 ----
  八卦六十四掌: {
    romaji: "Hakke Rokujūyon Shō",
    user: "日向宁次",
    rank: "A",
    element: "none",
    seals: [],
    description:
      "日向宗家秘传！以柔拳连续封闭对手64个经络穴道，完全封锁查克拉流动。宁次自学掌握了这个宗家秘术。无需结印。",
  },
  八卦一百二十八掌: {
    romaji: "Hakke Hyaku Nijūhachi Shō",
    user: "日向雏田",
    rank: "A",
    element: "none",
    seals: [],
    description:
      "六十四掌的强化版，连续封闭128个穴道。雏田在四战中展示了这一技术的成长。无需结印。",
  },
  八卦掌回天: {
    romaji: "Hakkeshō Kaiten",
    user: "日向宁次 / 日向日足",
    rank: "A",
    element: "none",
    seals: [],
    description:
      "从全身经络释放查克拉并高速旋转形成圆形防御，可弹开一切物理攻击。日向宗家的绝对防御。",
  },
  "柔拳·双狮拳": {
    romaji: "Jūken: Sōshiken",
    user: "日向雏田",
    rank: "A",
    element: "none",
    seals: [],
    description:
      "雏田自创的柔拳技，将查克拉凝聚成狮子形态覆盖双拳进行攻击，兼具柔拳的穴道封锁效果。",
  },

  // ---- 奈良一族 ----
  影模仿之术: {
    romaji: "Kagemane no Jutsu",
    user: "奈良鹿丸",
    rank: "C",
    element: "none",
    seals: ["子"],
    description:
      "奈良家秘传，将自己的影子延伸与对手的影子相连，控制对手做出与自己相同的动作。鹿丸的看家本领。",
  },
  影缝之术: {
    romaji: "Kage Nui no Jutsu",
    user: "奈良鹿丸",
    rank: "B",
    element: "none",
    seals: ["子", "卯"],
    description:
      "将影子变成实体状的针刺从影中射出，可以物理刺穿对手。影模仿的攻击型变化。",
  },
  "影子绞首术": {
    romaji: "Kage Kubishibari no Jutsu",
    user: "奈良鹿丸",
    rank: "B",
    element: "none",
    seals: ["子", "丑"],
    description:
      "影子沿着已连接的影模仿延伸到对手脖颈处进行绞杀的高等术。需要先成功施展影模仿。",
  },

  // ---- 山中一族 ----
  心转身之术: {
    romaji: "Shintenshin no Jutsu",
    user: "山中井野",
    rank: "C",
    element: "none",
    seals: ["丑", "寅", "巳"],
    description:
      "山中家秘传，将自己的精神体射入对手体内控制其身体。缺点是自己的身体会毫无防备地倒下。",
  },
  心乱身之术: {
    romaji: "Shinranshin no Jutsu",
    user: "山中井野",
    rank: "B",
    element: "none",
    seals: ["丑", "寅"],
    description:
      "心转身的应用型，不完全控制对手而是扰乱其神经系统使其身体做出错误动作。",
  },

  // ---- 秋道一族 ----
  倍化之术: {
    romaji: "Baika no Jutsu",
    user: "秋道丁次",
    rank: "C",
    element: "none",
    seals: ["丑", "申", "寅"],
    description:
      "秋道家秘传，将身体或身体一部分巨大化。丁次常用来将手臂巨大化进行攻击。",
  },
  超倍化之术: {
    romaji: "Chō Baika no Jutsu",
    user: "秋道丁次",
    rank: "B",
    element: "none",
    seals: ["丑", "申", "寅", "巳"],
    description:
      "倍化之术的强化版，将全身巨大化到数十米高。需要消耗大量查克拉和卡路里。",
  },
  肉弹战车: {
    romaji: "Nikudan Sensha",
    user: "秋道丁次",
    rank: "C",
    element: "none",
    seals: ["丑", "申"],
    description: "将身体球形化后高速滚动攻击敌人。配合倍化之术威力更大。",
  },

  // ---- 犬冢一族 ----
  牙通牙: {
    romaji: "Gatsūga",
    user: "犬冢牙",
    rank: "C",
    element: "none",
    seals: ["寅"],
    description:
      "牙与赤丸同时高速旋转突进攻击对手，形成两道破坏性的龙卷。犬冢家的标志性忍术。",
  },
  牙狼牙: {
    romaji: "Garōga",
    user: "犬冢牙",
    rank: "B",
    element: "none",
    seals: ["寅"],
    description:
      "牙通牙的强化版，赤丸变化为牙的模样后二人一体高速旋转攻击，威力远超牙通牙。",
  },

  // ---- 油女一族 ----
  寄坏虫之术: {
    romaji: "Kikaichū no Jutsu",
    user: "油女志乃",
    rank: "C",
    element: "none",
    seals: [],
    description:
      "油女家秘传，操纵寄生在体内的寄壊虫吸收对手查克拉或进行追踪。志乃的虫子是最可靠的侦察兵。",
  },

  // ---- 药师兜 ----
  "忍法·涅槃精舍之术": {
    romaji: "Ninpō: Nehan Shōja no Jutsu",
    user: "药师兜",
    rank: "A",
    element: "none",
    seals: ["寅", "丑", "巳", "子"],
    description:
      "大范围催眠幻术，从天降下羽毛状查克拉使整个体育场的人陷入沉睡。木叶崩溃篇中兜用来瓦解木叶防御。",
  },
  阴愈伤灭: {
    romaji: "In'yu Shōmetsu",
    user: "药师兜",
    rank: "A",
    element: "none",
    seals: [],
    description:
      "兜的高等医疗忍术，预先在体内储存查克拉在受伤瞬间自动修复。兜对阵卡卡西时展示的技术。",
  },

  // ---- 猿飞日斩 ----
  "封印术·屍鬼封尽": {
    romaji: "Fūinjutsu: Shiki Fūjin",
    user: "猿飞日斩 / 波风水门",
    rank: "S",
    element: "none",
    seals: ["巳", "亥", "未", "卯", "戌", "子", "酉", "丑", "午"],
    description:
      "召唤死神将目标灵魂封印的终极禁术，代价是施术者的灵魂也将被死神吞噬。三代用此术封印大蛇丸双臂，四代用来封印九尾。",
  },

  // ---- 特殊忍术 ----
  "忍法·四紫炎阵": {
    romaji: "Ninpō: Shishienjin",
    user: "音忍四人众",
    rank: "B",
    element: "none",
    seals: ["巳", "寅", "午", "巳"],
    description:
      "四人站在四角形成紫色火焰结界，接触结界者会被灼烧。大蛇丸与三代对战时音忍四人众用来隔绝外部援助。",
  },
  "忍法·四赤阳阵": {
    romaji: "Ninpō: Shisekiyōjin",
    user: "波风水门 / 猿飞日斩 / 千手扉间 / 千手柱间",
    rank: "S",
    element: "none",
    seals: [],
    description:
      "四位火影联合施展的最强结界术，连十尾的尾兽玉都无法打破。四战中用来封锁十尾。",
  },
  "秘术·百机的操演": {
    romaji: "Hijutsu: Hyakki no Sōen",
    user: "勘九郎",
    rank: "A",
    element: "none",
    seals: [],
    description:
      "勘九郎的终极傀儡术，同时操纵上百具傀儡进行作战。需要极高的查克拉控制力和多线程操作能力。",
  },
  "秘术·山中转心身之术": {
    romaji: "Hijutsu: Yamanaka Shintenshin",
    user: "山中亥一",
    rank: "A",
    element: "none",
    seals: ["丑", "寅", "巳", "子"],
    description:
      "山中一族的高等精神操控术，可远距离控制多个目标的意识。四战中用于忍者联军的心灵通讯网络。",
  },

  // ---- 鹿丸组合技 ----
  猪鹿蝶之阵: {
    romaji: "Ino-Shika-Chō no Jin",
    user: "井野·鹿丸·丁次",
    rank: "B",
    element: "none",
    seals: [],
    description:
      "猪鹿蝶三族代代相传的经典阵型。鹿丸影子固定→井野精神控制→丁次倍化攻击的完美配合。",
  },

  // ---- 仙人模式相关 ----
  "仙法·蛙组手": {
    romaji: "Senpō: Kawazu Kumite",
    user: "漩涡鸣人 / 自来也",
    rank: "A",
    element: "none",
    seals: [],
    description:
      "仙人模式下的特殊体术，利用自然能量延伸攻击范围。看似没有命中但自然能量已经打到对手，佩恩天道也被打得措手不及。",
  },
  "魔幻·蛤蟆临唱": {
    romaji: "Senpō: Frog Call",
    user: "自来也",
    rank: "A",
    element: "none",
    seals: [],
    description:
      "仙人模式下自来也与二大仙蛤蟆合唱的音波幻术，听到歌声的人会被困在幻术水柱中无法行动。",
  },
  "仙法·五右卫门": {
    romaji: "Senpō: Goemon",
    user: "自来也 / 蛤蟆文太 / 蛤蟆龙",
    rank: "A",
    element: "fire",
    seals: ["巳", "寅", "丑"],
    description:
      "自来也与两只大蛤蟆的三体连携，油+火+风三属性合一形成超高温油海覆盖大范围。对佩恩战中使用。",
  },

  // ╔══════════════════════════════════════╗
  // ║          🔮 幻 术                     ║
  // ╚══════════════════════════════════════╝

  "魔幻·奈落见之术": {
    romaji: "Magen: Narakumi no Jutsu",
    user: "旗木卡卡西",
    rank: "D",
    element: "none",
    seals: ["巳", "子", "丑"],
    description:
      "让对手看到自己最恐惧的景象的基础幻术。卡卡西在铃铛测试中对小樱使用，让她看到佐助重伤的幻象。",
  },
  "魔幻·树缚杀": {
    romaji: "Magen: Jubaku Satsu",
    user: "夕日红",
    rank: "C",
    element: "none",
    seals: ["巳", "子", "丑", "卯"],
    description:
      "让对手产生被树木缠绕束缚的幻觉，红的拿手幻术。但在鼬面前不堪一击。",
  },
  "魔幻·花树界降临": {
    romaji: "Magen: Kajukai Kōrin",
    user: "夕日红",
    rank: "B",
    element: "none",
    seals: ["巳", "子", "丑", "卯", "巳"],
    description:
      "大范围幻术使对手产生置身花海的幻觉，花瓣中含有催眠效果使人逐渐丧失意识。",
  },
  "魔幻·镜天地转": {
    romaji: "Magen: Kyō Tenchi Ten",
    user: "宇智波鼬",
    rank: "A",
    element: "none",
    seals: [],
    description:
      "鼬的高级幻术，反转对手的幻术使施术者自己反被困住。鼬破解红的树缚杀时使用。无需结印。",
  },
  别天神: {
    romaji: "Kotoamatsukami",
    user: "宇智波止水",
    rank: "S",
    element: "none",
    seals: [],
    description:
      '止水的万花筒写轮眼最强幻术！可以在对方完全不知情的情况下操纵其思想和记忆。被称为"最强幻术"，十年只能用一次。',
  },
  无限月读: {
    romaji: "Mugen Tsukuyomi",
    user: "宇智波斑 / 大筒木辉夜",
    rank: "S",
    element: "none",
    seals: [],
    description:
      "将月读投射到月亮上对全世界人类施展幻术，使所有人陷入永恒美梦。斑和辉夜试图用此术支配全人类。",
  },
  伊邪那岐: {
    romaji: "Izanagi",
    user: "志村团藏 / 宇智波一族",
    rank: "S",
    element: "none",
    seals: [],
    description:
      "将现实与幻觉的界限模糊的禁术，可以将对自己不利的事实（包括死亡）变为幻觉。代价是使用的写轮眼永久失明。",
  },
  伊邪那美: {
    romaji: "Izanami",
    user: "宇智波鼬",
    rank: "S",
    element: "none",
    seals: [],
    description:
      "为克制伊邪那岐而诞生的幻术，将对手困在无限循环的时间中直到其接受命运。鼬用此术对付药师兜。",
  },

  // ╔══════════════════════════════════════╗
  // ║         🐍 咒印 / 禁术               ║
  // ╚══════════════════════════════════════╝

  "咒印·天之咒印": {
    romaji: "Juinjutsu: Ten no Juin",
    user: "大蛇丸（施术）/ 宇智波佐助（使用）",
    rank: "A",
    element: "none",
    seals: [],
    description:
      "大蛇丸赐予佐助的咒印，激活后身体出现黑色纹路，大幅提升力量和速度。状态二会发生身体变异。",
  },
  双蛇相杀: {
    romaji: "Sōja Sōsai no Jutsu",
    user: "御手洗红豆",
    rank: "A",
    element: "none",
    seals: ["巳", "丑", "卯", "巳"],
    description:
      "与对手同归于尽的自杀式禁术，红豆试图用来对付大蛇丸但被阻止。需要抓住对手的手。",
  },
  不尸转生: {
    romaji: "Fushi Tensei",
    user: "大蛇丸",
    rank: "S",
    element: "none",
    seals: ["巳", "午", "未", "申"],
    description:
      "大蛇丸追求永生的核心禁术！将自己的灵魂转移到新的身体中，每三年需要更换一次容器。",
  },

  // ╔══════════════════════════════════════╗
  // ║         封印术                        ║
  // ╚══════════════════════════════════════╝

  八卦封印: {
    romaji: "Hakke Fūin",
    user: "波风水门",
    rank: "S",
    element: "none",
    seals: [],
    description:
      "四代火影用来封印九尾的封印术，由两个四象封印重叠而成。将九尾的查克拉封在鸣人体内，并设置了让九尾查克拉逐渐渗透的机制。",
  },
  五行封印: {
    romaji: "Gogyō Fūin",
    user: "大蛇丸",
    rank: "A",
    element: "none",
    seals: [],
    description:
      "大蛇丸在死之森中用五指按在鸣人的八卦封印上施加的封印，干扰九尾查克拉的流通使鸣人无法正常使用查克拉。",
  },
  五行解印: {
    romaji: "Gogyō Kaiin",
    user: "自来也",
    rank: "A",
    element: "none",
    seals: [],
    description:
      "解除五行封印的反向封印术。自来也用此术帮鸣人解除大蛇丸施加的封印，恢复了鸣人的查克拉流通。",
  },

  // ╔══════════════════════════════════════╗
  // ║         晓组织成员忍术                 ║
  // ╚══════════════════════════════════════╝

  // ---- 迪达拉 ----
  "起爆粘土·C1": {
    romaji: "Kibaku Nendo: C1",
    user: "迪达拉",
    rank: "B",
    element: "earth",
    seals: [],
    description:
      '迪达拉用手掌之口咀嚼黏土制作的基础起爆粘土，可制成蜘蛛、鸟等各种形态。"芸术就是爆炸！"无需结印。',
  },
  "起爆粘土·C3": {
    romaji: "Kibaku Nendo: C3",
    user: "迪达拉",
    rank: "A",
    element: "earth",
    seals: [],
    description:
      "迪达拉投放巨大黏土人偶从空中轰炸，爆炸范围可覆盖整个村庄。险些炸毁砂隐村。",
  },
  "起爆粘土·C4 迦楼罗": {
    romaji: "Kibaku Nendo: C4 Karura",
    user: "迪达拉",
    rank: "S",
    element: "earth",
    seals: [],
    description:
      "迪达拉的最强粘土，创造巨大的自身分身从体内释放无数微型炸弹，吸入后从细胞层面爆破目标。对佐助的王牌。",
  },
  "起爆粘土·CO": {
    romaji: "Kibaku Nendo: CO",
    user: "迪达拉",
    rank: "S",
    element: "earth",
    seals: [],
    description:
      '迪达拉的自爆禁术，将自身变为炸弹产生方圆10公里的大爆炸。为了杀佐助而使用的最终手段。"这才是终极芸术！"',
  },

  // ---- 赤砂之蝎 ----
  "傀儡术·赤秘技·百机之演": {
    romaji: "Kugutsu no Jutsu: Akahigi: Hyakki no Sōen",
    user: "赤砂之蝎",
    rank: "S",
    element: "none",
    seals: [],
    description:
      "蝎同时操纵一百具傀儡进行战斗的终极傀儡术，据说曾用此术攻陷一个国家。千代婆婆的十机近松对抗的传奇之战。",
  },
  "傀儡术·三代风影": {
    romaji: "Kugutsu: Sandaime Kazekage",
    user: "赤砂之蝎",
    rank: "S",
    element: "none",
    seals: [],
    description:
      "蝎将杀害的三代风影制成人傀儡，保留其生前的砂铁能力。最得意的收藏品。",
  },

  // ---- 角都 ----
  地怨虞: {
    romaji: "Jiongu",
    user: "角都",
    rank: "B",
    element: "none",
    seals: [],
    description:
      "角都的禁术秘术，体内有黑色丝线可夺取他人心脏。拥有五颗心脏获得五条命和五种属性变化。",
  },

  // ---- 飞段 ----
  "邪神·死司凭血": {
    romaji: "Jashin: Shiji Hyōketsu",
    user: "飞段",
    rank: "B",
    element: "none",
    seals: [],
    description:
      "飞段的邪神教诅咒术，摄入对手血液后画出邪神符阵，自身受到的所有伤害都会传递给对手。用此术杀死了阿斯玛。",
  },

  // ---- 小南 ----
  式纸之舞: {
    romaji: "Shikigami no Mai",
    user: "小南",
    rank: "A",
    element: "none",
    seals: [],
    description:
      "小南将身体分解为无数纸片进行攻击和防御的秘术。可变成纸飞镖、翅膀等各种形态，美丽而致命。",
  },
  纸分身: {
    romaji: "Kami Bunshin",
    user: "小南",
    rank: "B",
    element: "none",
    seals: [],
    description:
      "用纸片构成的分身，被攻击后化为纸片散开。可以传递信息和进行侦察。",
  },
  神之纸者之术: {
    romaji: "Kami no Shisha no Jutsu",
    user: "小南",
    rank: "S",
    element: "none",
    seals: [],
    description:
      "小南的终极忍术！将六千亿张起爆符铺满大海持续爆炸十分钟。为了对付带土的神威而准备的陷阱，差点成功。",
  },

  // ---- 带土 ----
  神威: {
    romaji: "Kamui",
    user: "宇智波带土",
    rank: "S",
    element: "none",
    seals: [],
    description:
      '带土的万花筒写轮眼能力，可以将自身或接触到的物体传送到神威空间。带土用此术使自身"虚化"变得无法被触碰。',
  },
  "木遁·插天乔": {
    romaji: "Mokuton: Sashiki no Jutsu",
    user: "宇智波带土",
    rank: "A",
    element: "earth",
    seals: ["巳", "丑", "卯", "寅"],
    description: "带土通过移植的柱间细胞使用的木遁，释放大量树枝进行攻击。",
  },

  // ╔══════════════════════════════════════╗
  // ║         大筒木一族                     ║
  // ╚══════════════════════════════════════╝

  共杀灰骨: {
    romaji: "Tomogoroshi no Haikotsu",
    user: "大筒木辉夜",
    rank: "S",
    element: "none",
    seals: [],
    description:
      "辉夜从体内射出骨头攻击的血继限界，被刺中者会从分子层面灰化消散。连秽土转生的不死身都无效。",
  },
  天之御中: {
    romaji: "Amenominaka",
    user: "大筒木辉夜",
    rank: "S",
    element: "none",
    seals: [],
    description:
      "辉夜的空间忍术，瞬间将所有人传送到自己创造的异空间。包括熔岩、冰雪、沙漠、超重力等不同维度。",
  },
  膨胀求道玉: {
    romaji: "Bōchō Gudōdama",
    user: "大筒木辉夜",
    rank: "S",
    element: "none",
    seals: [],
    description:
      "辉夜将所有查克拉凝聚为一个巨大的求道玉，蕴含所有属性的力量，可以创造新的空间维度。",
  },

  // ╔══════════════════════════════════════╗
  // ║         六道仙人相关                   ║
  // ╚══════════════════════════════════════╝

  "六道·地爆天星": {
    romaji: "Rikudō: Chibaku Tensei",
    user: "大筒木羽衣（六道仙人）/ 鸣人&佐助",
    rank: "S",
    element: "none",
    seals: [],
    description:
      "六道仙人级别的地爆天星，鸣人和佐助在获得六道之力后联手用阴阳两道封印辉夜。六道仙人当年也是用此术创造月亮封印十尾。",
  },
  "六道仙术·阴阳遁": {
    romaji: "Rikudō Senjutsu: Onmyōton",
    user: "漩涡鸣人（六道模式）",
    rank: "S",
    element: "none",
    seals: [],
    description:
      "鸣人获得六道仙人之力后的能力，可以使用阴阳遁恢复他人（如卡卡西的眼睛、凯的生命），超越医疗忍术的范畴。",
  },

  // ╔══════════════════════════════════════╗
  // ║         其他忍者忍术                   ║
  // ╚══════════════════════════════════════╝

  // ---- 迈特凯 & 李洛克 ----
  表莲华: {
    romaji: "Omote Renge",
    user: "李洛克",
    rank: "B",
    element: "none",
    seals: [],
    description:
      "开启初门后的高速体术，将对手踢向空中后用绷带缠绕，抱着对手头朝下旋转撞击地面。中忍考试对我爱罗时的名场面。",
  },
  里莲华: {
    romaji: "Ura Renge",
    user: "李洛克",
    rank: "A",
    element: "none",
    seals: [],
    description:
      "开启五门后的终极连击体术，高速连续攻击后以极强一击收尾。小李对我爱罗使用但仍未能突破砂之铠。",
  },
  朝孔雀: {
    romaji: "Asa Kujaku",
    user: "迈特凯",
    rank: "A",
    element: "none",
    seals: [],
    description:
      "开启第六门后拳速产生空气摩擦燃烧，形成如孔雀开屏般的火焰拳攻击。凯对吻 的 的鬼鲛时使用。",
  },
  昼虎: {
    romaji: "Hirudora",
    user: "迈特凯",
    rank: "S",
    element: "none",
    seals: [],
    description:
      "开启第七门后凝聚空气压力释放的空间压缩炮，形成虎形冲击波。不是忍术而是纯体术产生的空压攻击，连须佐能乎都能击穿。",
  },
  夕象: {
    romaji: "Sekizō",
    user: "迈特凯",
    rank: "S",
    element: "none",
    seals: [],
    description:
      "开启第八门死门后的超速拳击，速度快到空间都被扭曲，连续五拳形成大象形态的空压冲击。",
  },
  夜凯: {
    romaji: "Yagai",
    user: "迈特凯",
    rank: "S",
    element: "none",
    seals: [],
    description:
      '八门遁甲的终极一击！凯将全身血液燃烧成红色蒸气，以超越光速的飞踢攻击。六道斑被踢得半身碎裂，称凯为"最强体术"。',
  },

  // ---- 鬼灯水月 ----
  水化之术: {
    romaji: "Suika no Jutsu",
    user: "鬼灯水月",
    rank: "B",
    element: "water",
    seals: [],
    description:
      "将身体液化为水状态的秘术，物理攻击全部穿过身体。水月利用此能力变形身体进行攻击或防御。",
  },

  // ---- 重吾 ----
  仙人化: {
    romaji: "Senninka",
    user: "重吾",
    rank: "B",
    element: "none",
    seals: [],
    description:
      "重吾吸收自然能量后身体部分或全部变异的能力。大蛇丸的咒印就是从重吾体内提取的酶制成。",
  },

  // ---- 香磷 ----
  心眼之术: {
    romaji: "Kagura Shingan",
    user: "香磷",
    rank: "C",
    element: "none",
    seals: [],
    description:
      "香磷的感知忍术，可以感知极远距离内所有人的查克拉位置、数量和性质。佐助小队的雷达。",
  },

  // ---- 团藏 ----
  "风遁·真空连波（团藏版）": {
    romaji: "Fūton: Shinkū Renpa",
    user: "志村团藏",
    rank: "A",
    element: "wind",
    seals: ["子", "卯", "辰", "寅", "子"],
    description:
      "团藏使用的风遁，连续释放多道真空波切割敌人。在五影会谈后与佐助对战时使用。",
  },
  "风遁·真空大玉（团藏版）": {
    romaji: "Fūton: Shinkū Taigyoku",
    user: "志村团藏",
    rank: "A",
    element: "wind",
    seals: ["子", "卯", "寅", "巳"],
    description: "团藏将风遁查克拉压缩成巨大真空弹发射的强力远程攻击。",
  },

  // ---- 云隐 ----
  雷遁铠甲: {
    romaji: "Raiton no Yoroi",
    user: "四代雷影·艾 / 三代雷影",
    rank: "A",
    element: "lightning",
    seals: [],
    description:
      "将雷遁查克拉覆盖全身形成铠甲，大幅提升速度和防御力。四代雷影的速度仅次于波风水门。无需结印。",
  },
  雷犁热刀: {
    romaji: "Raigyaku Suihei",
    user: "四代雷影·艾",
    rank: "A",
    element: "lightning",
    seals: [],
    description:
      "雷遁铠甲状态下的肘击，配合高速移动产生毁灭性的冲击力。无需结印。",
  },
  尾兽八卷: {
    romaji: "Bijū Hachimaки",
    user: "奇拉比（八尾人柱力）",
    rank: "S",
    element: "none",
    seals: [],
    description:
      "奇拉比完美掌控八尾力量进行的战斗方式，可以随意使出尾兽化和尾兽玉。用七把刀的奇特剑术配合八尾之力。",
  },

  // ---- 雾隐 ----
  雾隐之术: {
    romaji: "Kirigakure no Jutsu",
    user: "桃地再不斩",
    rank: "D",
    element: "water",
    seals: ["丑"],
    description:
      "释放浓雾覆盖整个战场使视线降为零，再不斩的无声杀人术的前置忍术。一个结印即可施展。",
  },
  无声杀人术: {
    romaji: "Sairento Kiringu",
    user: "桃地再不斩",
    rank: "A",
    element: "none",
    seals: [],
    description:
      '在浓雾中仅凭听觉定位对手并一击必杀的暗杀术。再不斩作为"鬼人"的恐怖技艺。',
  },
  "水遁·雾镜冰晶": {
    romaji: "Hyōton: Makyō Hyōshō",
    user: "白",
    rank: "B",
    element: "water",
    seals: ["丑", "巳", "酉", "子"],
    description:
      "白的血继限界·冰遁！创造多面冰镜形成圆形阵列，白可在镜子间瞬间移动进行高速攻击。波之国篇经典场景。",
  },
  千杀水翔: {
    romaji: "Sensatsu Suishō",
    user: "白",
    rank: "B",
    element: "water",
    seals: ["丑", "巳"],
    description:
      "将水变成上千根冰针从四面八方射向对手的血继限界忍术。白用来试探鸣人和佐助实力。",
  },

  // ╔══════════════════════════════════════╗
  // ║         博人传新世代                   ║
  // ╚══════════════════════════════════════╝

  "螺旋丸·新风": {
    romaji: "Rasengan: Shinpū",
    user: "漩涡博人",
    rank: "A",
    element: "wind",
    seals: [],
    description:
      "博人独创的消失螺旋丸，投出后会暂时消失再出现命中对手。连桃式都被打中。无需结印。",
  },
  "雷遁·紫电": {
    romaji: "Raiton: Shiden",
    user: "旗木卡卡西（失去写轮眼后）",
    rank: "A",
    element: "lightning",
    seals: ["丑", "卯", "申", "寅"],
    description:
      "卡卡西在失去写轮眼后开发的新雷遁忍术，紫色雷电代替了需要写轮眼的雷切。六代火影时期的新招牌。",
  },
  超兽伪画: {
    romaji: "Chōjū Giga",
    user: "佐井",
    rank: "B",
    element: "none",
    seals: ["丑", "申", "巳"],
    description:
      "佐井用墨画出的生物可以实体化行动的忍术，画出的鸟可以飞行载人，画出的狮子可以进行攻击。根的训练成果。",
  },

  // ╔══════════════════════════════════════╗
  // ║         经典组合技 / 连携术             ║
  // ╚══════════════════════════════════════╝

  "风遁·螺旋手里剑·超尾兽螺旋丸": {
    romaji: "Fūton: Rasenshuriken + Bijūdama",
    user: "漩涡鸣人（九尾模式）",
    rank: "S",
    element: "wind",
    seals: [],
    description:
      "鸣人在九尾模式下将螺旋手里剑与尾兽玉融合的超级大招，对十尾使用时展现出恐怖的破坏力。",
  },
  "须佐能乎·九喇嘛铠甲": {
    romaji: "Susano'o: Kurama Yoroi",
    user: "宇智波佐助 + 漩涡鸣人",
    rank: "S",
    element: "none",
    seals: [],
    description:
      "佐助的完全体须佐能乎穿在鸣人的九尾查克拉体上的终极合体形态。鸣人与佐助联手对抗辉夜时的最强组合。",
  },
}; // ← JUTSU_DATABASE 结束大括号

// ==========================================
// 二、DOM 引用
// ==========================================

const DOM = {
  canvas: document.getElementById("particleCanvas"),
  searchInput: document.getElementById("searchInput"),
  searchBtn: document.getElementById("searchBtn"),
  suggestionsList: document.getElementById("suggestionsList"),
  jutsuCard: document.getElementById("jutsuCard"),
  jutsuName: document.getElementById("jutsuName"),
  jutsuRank: document.getElementById("jutsuRank"),
  jutsuRomaji: document.getElementById("jutsuRomaji"),
  jutsuUser: document.getElementById("jutsuUser"),
  jutsuElement: document.getElementById("jutsuElement"),
  jutsuSealCount: document.getElementById("jutsuSealCount"),
  jutsuDesc: document.getElementById("jutsuDesc"),
  sealSpotlight: document.getElementById("sealSpotlight"),
  spotlightImg: document.getElementById("spotlightImg"),
  spotlightFallback: document.getElementById("spotlightFallback"),
  spotlightImgContainer: document.getElementById("spotlightImgContainer"),
  spotlightName: document.getElementById("spotlightName"),
  spotlightStep: document.getElementById("spotlightStep"),
  spotlightGuide: document.getElementById("spotlightGuide"),
  sealsSection: document.getElementById("sealsSection"),
  sealsTimeline: document.getElementById("sealsTimeline"),
  replayBtn: document.getElementById("replayBtn"),
  noSealSection: document.getElementById("noSealSection"),
  jutsuRelease: document.getElementById("jutsuRelease"),
  releaseText: document.getElementById("releaseText"),
  quickGrid: document.getElementById("quickGrid"),
};

// ==========================================
// 三、全局状态
// ==========================================

const state = {
  currentJutsu: null,
  animationTimer: null,
  isAnimating: false,
  sealSpeed: 500,
  highlightIndex: -1,
  currentSuggestions: [],
};

// ==========================================
// 四、粒子背景
// ==========================================

function initParticles() {
  const canvas = DOM.canvas;
  const ctx = canvas.getContext("2d");
  let particles = [];

  function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }
  resize();
  window.addEventListener("resize", resize);

  class Particle {
    constructor() {
      this.reset();
    }
    reset() {
      this.x = Math.random() * canvas.width;
      this.y = canvas.height + Math.random() * 50;
      this.size = Math.random() * 2 + 0.5;
      this.speedY = -(Math.random() * 0.6 + 0.2);
      this.speedX = (Math.random() - 0.5) * 0.3;
      this.opacity = Math.random() * 0.5 + 0.1;
      this.color = ["#e94560", "#ff6348", "#ffd700", "#1e90ff"][
        Math.floor(Math.random() * 4)
      ];
    }
    update() {
      this.y += this.speedY;
      this.x += this.speedX;
      if (this.y < -10) this.reset();
    }
    draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.fillStyle = this.color;
      ctx.globalAlpha = this.opacity;
      ctx.fill();
      ctx.globalAlpha = 1;
    }
  }

  const count = Math.floor((canvas.width * canvas.height) / 15000);
  for (let i = 0; i < count; i++) {
    const p = new Particle();
    p.y = Math.random() * canvas.height;
    particles.push(p);
  }

  (function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach((p) => {
      p.update();
      p.draw();
    });
    requestAnimationFrame(animate);
  })();
}

// ==========================================
// 五、搜索
// ==========================================

function searchJutsu(keyword) {
  if (!keyword.trim()) return [];
  const kw = keyword.toLowerCase().trim();
  return Object.keys(JUTSU_DATABASE).filter((name) => {
    const j = JUTSU_DATABASE[name];
    return (
      name.toLowerCase().includes(kw) ||
      j.romaji.toLowerCase().includes(kw) ||
      j.user.toLowerCase().includes(kw) ||
      ELEMENT_NAME[j.element]?.includes(kw)
    );
  });
}

function renderSuggestions(results) {
  state.currentSuggestions = results;
  state.highlightIndex = -1;
  if (!results.length) {
    DOM.suggestionsList.classList.add("hidden");
    return;
  }
  DOM.suggestionsList.innerHTML = results
    .map((name, i) => {
      const j = JUTSU_DATABASE[name];
      return `
      <li class="suggestion-item" data-index="${i}" data-name="${name}">
        <div class="suggestion-left">
          <span class="suggestion-element">${ELEMENT_EMOJI[j.element]}</span>
          <span class="suggestion-name">${highlightMatch(
            name,
            DOM.searchInput.value
          )}</span>
        </div>
        <div class="suggestion-right">
          <span class="suggestion-user">${j.user.split("/")[0].trim()}</span>
          <span class="suggestion-rank rank-${j.rank}">${j.rank}级</span>
        </div>
      </li>`;
    })
    .join("");
  DOM.suggestionsList.classList.remove("hidden");
}

function highlightMatch(text, kw) {
  if (!kw.trim()) return text;
  const re = new RegExp(`(${kw.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")})`, "gi");
  return text.replace(
    re,
    '<mark style="background:rgba(233,69,96,0.3);color:#fff;border-radius:2px;padding:0 2px;">$1</mark>'
  );
}

function closeSuggestions() {
  DOM.suggestionsList.classList.add("hidden");
  state.currentSuggestions = [];
  state.highlightIndex = -1;
}

function updateHighlight(items) {
  items.forEach((el, i) => {
    el.classList.toggle("active", i === state.highlightIndex);
    if (i === state.highlightIndex) el.scrollIntoView({ block: "nearest" });
  });
}

// ==========================================
// 六、忍术展示
// ==========================================

function selectJutsu(name) {
  const jutsu = JUTSU_DATABASE[name];
  if (!jutsu) return;
  stopAnimation();
  state.currentJutsu = { name, ...jutsu };
  DOM.searchInput.value = name;
  closeSuggestions();
  renderJutsuCard(name, jutsu);
  if (jutsu.seals.length === 0) {
    showNoSealSection();
  } else {
    renderSealsTimeline(jutsu.seals);
    startSealAnimation();
  }
}

function renderJutsuCard(name, jutsu) {
  DOM.jutsuCard.setAttribute("data-element", jutsu.element);
  DOM.jutsuName.textContent = name;
  DOM.jutsuRank.textContent = jutsu.rank + "级";
  DOM.jutsuRank.className = "jutsu-rank rank-" + jutsu.rank;
  DOM.jutsuRomaji.textContent = jutsu.romaji;
  DOM.jutsuUser.textContent = jutsu.user;
  DOM.jutsuElement.textContent =
    ELEMENT_EMOJI[jutsu.element] + " " + ELEMENT_NAME[jutsu.element];
  DOM.jutsuSealCount.textContent =
    jutsu.seals.length === 0 ? "无需结印" : jutsu.seals.length + "个";
  DOM.jutsuDesc.textContent = jutsu.description;
  DOM.jutsuCard.classList.remove("hidden");
  DOM.jutsuCard.style.animation = "none";
  DOM.jutsuCard.offsetHeight;
  DOM.jutsuCard.style.animation = "";
}

function showNoSealSection() {
  DOM.sealsSection.classList.add("hidden");
  DOM.sealSpotlight.classList.add("hidden"); // 无结印时隐藏
  DOM.sealSpotlight.classList.add("hidden");
  DOM.jutsuRelease.classList.add("hidden");
  DOM.noSealSection.classList.remove("hidden");
}

// ==========================================
// 七、★ 结印序列渲染（卡片 + 图片 + tooltip图片）★
// ==========================================

function renderSealsTimeline(seals) {
  DOM.noSealSection.classList.add("hidden");
  DOM.jutsuRelease.classList.add("hidden");

  DOM.sealsTimeline.innerHTML = seals
    .map((sealKey, index) => {
      const seal = BASIC_SEALS[sealKey];
      if (!seal) return "";
      return `
      <div class="seal-node waiting" data-index="${index}" id="seal-${index}">
        <span class="seal-step">${index + 1}</span>
        <div class="seal-img-wrap">
          <img class="seal-img" src="${seal.img}" alt="${seal.name}印"
               onerror="this.style.display='none';this.nextElementSibling.style.display='flex';">
          <div class="seal-img-fallback" style="display:none;">${
            seal.emoji
          }</div>
        </div>
        <span class="seal-label">${seal.name}</span>
        <span class="seal-kanji">${sealKey === "特殊" ? "" : sealKey}</span>
        <div class="seal-tooltip">
          <strong>${seal.emoji} ${seal.name}印（${seal.romaji}）</strong>
          <img class="tooltip-img" src="${seal.img}" alt="${seal.name}"
               onerror="this.style.display='none';">
          <div>${seal.guide}</div>
        </div>
      </div>
    `;
    })
    .join("");

  DOM.sealsSection.classList.remove("hidden");
  DOM.replayBtn.disabled = true;
  DOM.sealsSection.style.animation = "none";
  DOM.sealsSection.offsetHeight;
  DOM.sealsSection.style.animation = "";
}

// ==========================================
// 八、★ 结印动画（高亮区显示大图片）★
// ==========================================

function startSealAnimation() {
  const jutsu = state.currentJutsu;
  if (!jutsu || jutsu.seals.length === 0) return;

  stopAnimation();
  state.isAnimating = true;
  DOM.replayBtn.disabled = true;
  DOM.sealSpotlight.classList.remove("hidden");
  DOM.sealSpotlight.classList.remove("completed");
  DOM.jutsuRelease.classList.add("hidden");

  // 重置所有卡片
  DOM.sealsTimeline.querySelectorAll(".seal-node").forEach((n) => {
    n.classList.remove("active", "done");
    n.classList.add("waiting");
  });

  let currentIndex = 0;

  function playNextSeal() {
    if (currentIndex >= jutsu.seals.length) {
      onAnimationComplete();
      return;
    }

    // 上一个 → done
    if (currentIndex > 0) {
      const prev = document.getElementById("seal-" + (currentIndex - 1));
      if (prev) {
        prev.classList.remove("active");
        prev.classList.add("done");
      }
    }

    // 当前 → active
    const cur = document.getElementById("seal-" + currentIndex);
    if (cur) {
      cur.classList.remove("waiting");
      cur.classList.add("active");
      cur.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "center",
      });
    }

    // ★★★ 更新高亮展示区（大图片 + 手势说明）★★★
    const sealKey = jutsu.seals[currentIndex];
    const seal = BASIC_SEALS[sealKey];
    if (seal) {
      // 设置大图
      DOM.spotlightImg.src = seal.img;
      DOM.spotlightImg.alt = seal.name + "印";
      DOM.spotlightImg.style.display = "";
      DOM.spotlightFallback.style.display = "none";
      DOM.spotlightFallback.textContent = seal.emoji;

      // 图片加载失败时降级到 emoji
      DOM.spotlightImg.onerror = function () {
        this.style.display = "none";
        DOM.spotlightFallback.style.display = "flex";
      };

      // 名称
      DOM.spotlightName.textContent =
        seal.name + "印" + (sealKey !== "特殊" ? "（" + sealKey + "）" : "");

      // 进度
      DOM.spotlightStep.textContent =
        "第 " + (currentIndex + 1) + " / " + jutsu.seals.length + " 印";

      // 手势说明
      DOM.spotlightGuide.textContent = seal.guide;
      DOM.spotlightGuide.style.animation = "none";
      DOM.spotlightGuide.offsetHeight;
      DOM.spotlightGuide.style.animation = "";

      // 重播图片容器弹入动画
      DOM.spotlightImgContainer.style.animation = "none";
      DOM.spotlightImgContainer.offsetHeight;
      DOM.spotlightImgContainer.style.animation = "";
    }

    // 播放音效
    AudioSystem.playSealSound();

    currentIndex++;
    state.animationTimer = setTimeout(playNextSeal, state.sealSpeed);
  }

  state.animationTimer = setTimeout(playNextSeal, 300);
}

function onAnimationComplete() {
  state.isAnimating = false;
  DOM.replayBtn.disabled = false;

  const jutsu = state.currentJutsu;
  if (jutsu) {
    // 最后一个印标记为 done
    const last = document.getElementById("seal-" + (jutsu.seals.length - 1));
    if (last) {
      last.classList.remove("active");
      last.classList.add("done");
    }

    // ★ 高亮区不隐藏，显示"结印完成"状态 ★
    DOM.spotlightImgContainer.style.animation = "none";
    DOM.spotlightName.textContent = jutsu.name;
    DOM.spotlightStep.textContent = "✅ 全 " + jutsu.seals.length + " 印完成！";
    DOM.spotlightGuide.textContent = "点击「重新结印」可再次播放";
    DOM.spotlightGuide.style.animation = "none";

    // 给高亮区加一个完成状态样式
    DOM.sealSpotlight.classList.add("completed");
  }

  showReleaseEffect();
}

function stopAnimation() {
  if (state.animationTimer) {
    clearTimeout(state.animationTimer);
    state.animationTimer = null;
  }
  state.isAnimating = false;
  // ★ 删掉原来的 DOM.sealSpotlight.classList.add('hidden');
  // 不再隐藏高亮区
}

function showReleaseEffect() {
  const jutsu = state.currentJutsu;
  if (!jutsu) return;

  DOM.releaseText.textContent = jutsu.name + "！！";
  DOM.releaseText.className = "release-text";
  DOM.jutsuRelease.classList.remove("hidden");
  DOM.releaseText.style.animation = "none";
  DOM.releaseText.offsetHeight;
  DOM.releaseText.style.animation = "";

  // ★ 传入属性，播放对应音效 ★
  AudioSystem.playReleaseSound(jutsu.element);

  setTimeout(() => {
    DOM.jutsuRelease.classList.add("hidden");
  }, 1800);
}

// ==========================================
// 九、音效系统
// ==========================================

const AudioSystem = {
  context: null,

  init() {
    try {
      this.context = new (window.AudioContext || window.webkitAudioContext)();
    } catch (e) {
      /* 不支持就算了 */
    }
  },

  // 最接近火影动画的结印音效！
  // 短促的手指接触声 + 查克拉波动 + 微弱的能量脉冲
  // 听感："啪·嗡～"
  playSealSound() {
    if (!this.context) return;
    try {
      const now = this.context.currentTime;
      const dest = this.context.destination;

      // ① 手指接触声 — 短促的噪声脉冲
      const clickBuf = this.context.createBuffer(
        1,
        this.context.sampleRate * 0.02,
        this.context.sampleRate
      );
      const clickData = clickBuf.getChannelData(0);
      for (let i = 0; i < clickData.length; i++) {
        // 前半段响，后半段快速衰减
        const env = 1 - i / clickData.length;
        clickData[i] = (Math.random() * 2 - 1) * env * env;
      }
      const click = this.context.createBufferSource();
      const clickGain = this.context.createGain();
      click.buffer = clickBuf;
      clickGain.gain.setValueAtTime(0.13, now);
      clickGain.gain.exponentialRampToValueAtTime(0.001, now + 0.025);

      // 高通滤波 — 让噪声听起来更像手指
      const clickFilter = this.context.createBiquadFilter();
      clickFilter.type = "highpass";
      clickFilter.frequency.value = 2000;

      click.connect(clickFilter);
      clickFilter.connect(clickGain);
      clickGain.connect(dest);
      click.start(now);
      click.stop(now + 0.025);

      // ② 查克拉波动 — 核心音色
      const chakra = this.context.createOscillator();
      const chakraGain = this.context.createGain();
      chakra.type = "sine";
      chakra.frequency.setValueAtTime(600, now + 0.01);
      chakra.frequency.exponentialRampToValueAtTime(250, now + 0.15);
      chakraGain.gain.setValueAtTime(0.001, now + 0.01);
      chakraGain.gain.linearRampToValueAtTime(0.1, now + 0.03);
      chakraGain.gain.exponentialRampToValueAtTime(0.001, now + 0.18);
      chakra.connect(chakraGain);
      chakraGain.connect(dest);
      chakra.start(now + 0.01);
      chakra.stop(now + 0.18);

      // ③ 查克拉泛音 — 空灵感
      const overtone = this.context.createOscillator();
      const overtoneGain = this.context.createGain();
      overtone.type = "sine";
      overtone.frequency.setValueAtTime(1200, now + 0.01);
      overtone.frequency.exponentialRampToValueAtTime(500, now + 0.12);
      overtoneGain.gain.setValueAtTime(0.001, now + 0.01);
      overtoneGain.gain.linearRampToValueAtTime(0.03, now + 0.03);
      overtoneGain.gain.exponentialRampToValueAtTime(0.001, now + 0.14);
      overtone.connect(overtoneGain);
      overtoneGain.connect(dest);
      overtone.start(now + 0.01);
      overtone.stop(now + 0.14);

      // ④ 能量脉冲尾音 — 低频共振
      const sub = this.context.createOscillator();
      const subGain = this.context.createGain();
      sub.type = "sine";
      sub.frequency.setValueAtTime(150, now + 0.02);
      sub.frequency.exponentialRampToValueAtTime(60, now + 0.2);
      subGain.gain.setValueAtTime(0.001, now + 0.02);
      subGain.gain.linearRampToValueAtTime(0.08, now + 0.04);
      subGain.gain.exponentialRampToValueAtTime(0.001, now + 0.22);
      sub.connect(subGain);
      subGain.connect(dest);
      sub.start(now + 0.02);
      sub.stop(now + 0.22);
    } catch (e) {}
  },

  // ==========================================
  // ★★★ 忍术释放音效（全新设计）★★★
  //
  // 结构：蓄力 → 爆发 → 冲击 → 余韵
  // 时间线：
  //   0.00s  查克拉聚集（低频上升）
  //   0.15s  能量压缩（频率急升）
  //   0.25s  爆发释放（冲击波 + 噪声）
  //   0.40s  余韵回响（低频衰减）
  //   0.80s  结束
  // ==========================================
  playReleaseSound(element) {
    if (!this.context) return;
    try {
      const now = this.context.currentTime;
      const dest = this.context.destination;

      // 根据属性选择音色参数
      const params = this.getElementParams(element);

      // ---- 第1层：查克拉聚集（低频蓄力）----
      const chakra = this.context.createOscillator();
      const chakraGain = this.context.createGain();
      chakra.type = "sine";
      chakra.frequency.setValueAtTime(80, now);
      chakra.frequency.exponentialRampToValueAtTime(300, now + 0.2);
      chakra.frequency.exponentialRampToValueAtTime(
        params.peakFreq,
        now + 0.28
      );
      chakraGain.gain.setValueAtTime(0.001, now);
      chakraGain.gain.linearRampToValueAtTime(0.15, now + 0.15);
      chakraGain.gain.linearRampToValueAtTime(0.2, now + 0.25);
      chakraGain.gain.exponentialRampToValueAtTime(0.001, now + 0.6);
      chakra.connect(chakraGain);
      chakraGain.connect(dest);
      chakra.start(now);
      chakra.stop(now + 0.6);

      // ---- 第2层：能量爆发（中频冲击）----
      const burst = this.context.createOscillator();
      const burstGain = this.context.createGain();
      burst.type = params.burstWave;
      burst.frequency.setValueAtTime(params.burstFreq, now + 0.2);
      burst.frequency.exponentialRampToValueAtTime(
        params.burstFreq * 2.5,
        now + 0.3
      );
      burst.frequency.exponentialRampToValueAtTime(
        params.burstFreq * 0.3,
        now + 0.55
      );
      burstGain.gain.setValueAtTime(0.001, now + 0.2);
      burstGain.gain.linearRampToValueAtTime(0.2, now + 0.28);
      burstGain.gain.exponentialRampToValueAtTime(0.001, now + 0.55);
      burst.connect(burstGain);
      burstGain.connect(dest);
      burst.start(now + 0.2);
      burst.stop(now + 0.55);

      // ---- 第3层：冲击波噪声 ----
      this.playNoiseLayer(now + 0.25, 0.35, 0.13);

      // ---- 第4层：低频震动（地面感）----
      const sub = this.context.createOscillator();
      const subGain = this.context.createGain();
      sub.type = "sine";
      sub.frequency.setValueAtTime(50, now + 0.25);
      sub.frequency.exponentialRampToValueAtTime(25, now + 0.7);
      subGain.gain.setValueAtTime(0.001, now + 0.25);
      subGain.gain.linearRampToValueAtTime(0.18, now + 0.3);
      subGain.gain.exponentialRampToValueAtTime(0.001, now + 0.7);
      sub.connect(subGain);
      subGain.connect(dest);
      sub.start(now + 0.25);
      sub.stop(now + 0.7);

      // ---- 第5层：余韵高频泛音 ----
      const reverb = this.context.createOscillator();
      const reverbGain = this.context.createGain();
      reverb.type = "sine";
      reverb.frequency.setValueAtTime(params.reverbFreq, now + 0.3);
      reverb.frequency.exponentialRampToValueAtTime(
        params.reverbFreq * 0.4,
        now + 0.8
      );
      reverbGain.gain.setValueAtTime(0.001, now + 0.3);
      reverbGain.gain.linearRampToValueAtTime(0.06, now + 0.35);
      reverbGain.gain.exponentialRampToValueAtTime(0.001, now + 0.8);
      reverb.connect(reverbGain);
      reverbGain.connect(dest);
      reverb.start(now + 0.3);
      reverb.stop(now + 0.8);

      // ---- 第6层：属性特色音 ----
      this.playElementLayer(element, now);
    } catch (e) {}
  },

  // ==========================================
  // 属性音色参数
  // ==========================================
  getElementParams(element) {
    const params = {
      fire: {
        peakFreq: 600, // 火焰噼啪的中高频
        burstWave: "sawtooth", // 粗犷的爆燃感
        burstFreq: 200,
        reverbFreq: 1200, // 明亮的火焰余韵
      },
      water: {
        peakFreq: 400, // 水流的中低频
        burstWave: "sine", // 柔和的水浪感
        burstFreq: 150,
        reverbFreq: 800, // 水波纹扩散
      },
      earth: {
        peakFreq: 250, // 岩石的低频
        burstWave: "square", // 硬朗的撞击感
        burstFreq: 100,
        reverbFreq: 500, // 沉闷的回响
      },
      lightning: {
        peakFreq: 900, // 雷电的高频
        burstWave: "sawtooth", // 尖锐的电击感
        burstFreq: 400,
        reverbFreq: 2000, // 电弧嗡鸣
      },
      wind: {
        peakFreq: 500, // 风啸声
        burstWave: "triangle", // 呼啸感
        burstFreq: 250,
        reverbFreq: 1500, // 气流消散
      },
      none: {
        peakFreq: 450, // 查克拉通用
        burstWave: "sine",
        burstFreq: 180,
        reverbFreq: 1000,
      },
    };
    return params[element] || params.none;
  },

  // ==========================================
  // 噪声层（模拟冲击波/爆炸的白噪声）
  // ==========================================
  playNoiseLayer(startTime, duration, volume) {
    if (!this.context) return;
    try {
      const bufferSize = this.context.sampleRate * duration;
      const buffer = this.context.createBuffer(
        1,
        bufferSize,
        this.context.sampleRate
      );
      const data = buffer.getChannelData(0);

      // 生成有色噪声（比白噪声更自然）
      let b0 = 0,
        b1 = 0,
        b2 = 0;
      for (let i = 0; i < bufferSize; i++) {
        const white = Math.random() * 2 - 1;
        b0 = 0.99765 * b0 + white * 0.099046;
        b1 = 0.963 * b1 + white * 0.2965164;
        b2 = 0.57 * b2 + white * 1.0526913;
        data[i] = (b0 + b1 + b2 + white * 0.1848) * 0.15;
      }

      const noise = this.context.createBufferSource();
      const noiseGain = this.context.createGain();
      noise.buffer = buffer;
      noiseGain.gain.setValueAtTime(0.001, startTime);
      noiseGain.gain.linearRampToValueAtTime(volume, startTime + 0.03);
      noiseGain.gain.exponentialRampToValueAtTime(0.001, startTime + duration);
      noise.connect(noiseGain);
      noiseGain.connect(this.context.destination);
      noise.start(startTime);
      noise.stop(startTime + duration);
    } catch (e) {}
  },

  // ==========================================
  // ★ 属性特色音层 ★
  // ==========================================
  playElementLayer(element, now) {
    if (!this.context) return;
    const dest = this.context.destination;

    try {
      switch (element) {
        // 🔥 火遁：噼啪燃烧声（快速频率抖动）
        case "fire": {
          const fire = this.context.createOscillator();
          const fireGain = this.context.createGain();
          const lfo = this.context.createOscillator();
          const lfoGain = this.context.createGain();

          // LFO 让频率快速抖动 → 噼啪声
          lfo.frequency.value = 30;
          lfoGain.gain.value = 200;
          lfo.connect(lfoGain);
          lfoGain.connect(fire.frequency);

          fire.type = "sawtooth";
          fire.frequency.setValueAtTime(400, now + 0.25);
          fire.frequency.exponentialRampToValueAtTime(150, now + 0.7);
          fireGain.gain.setValueAtTime(0.001, now + 0.25);
          fireGain.gain.linearRampToValueAtTime(0.08, now + 0.3);
          fireGain.gain.exponentialRampToValueAtTime(0.001, now + 0.7);
          fire.connect(fireGain);
          fireGain.connect(dest);
          lfo.start(now + 0.25);
          fire.start(now + 0.25);
          lfo.stop(now + 0.7);
          fire.stop(now + 0.7);
          break;
        }

        // 💧 水遁：水流冲刷声（滤波噪声）
        case "water": {
          const waterDur = 0.5;
          const bufSize = this.context.sampleRate * waterDur;
          const buf = this.context.createBuffer(
            1,
            bufSize,
            this.context.sampleRate
          );
          const d = buf.getChannelData(0);
          for (let i = 0; i < bufSize; i++) {
            d[i] = (Math.random() * 2 - 1) * 0.5;
          }
          const water = this.context.createBufferSource();
          water.buffer = buf;

          // 低通滤波器让噪声听起来像水
          const filter = this.context.createBiquadFilter();
          filter.type = "lowpass";
          filter.frequency.setValueAtTime(2000, now + 0.25);
          filter.frequency.exponentialRampToValueAtTime(400, now + 0.65);
          filter.Q.value = 5;

          const waterGain = this.context.createGain();
          waterGain.gain.setValueAtTime(0.001, now + 0.25);
          waterGain.gain.linearRampToValueAtTime(0.1, now + 0.32);
          waterGain.gain.exponentialRampToValueAtTime(0.001, now + 0.7);

          water.connect(filter);
          filter.connect(waterGain);
          waterGain.connect(dest);
          water.start(now + 0.25);
          water.stop(now + 0.7);
          break;
        }

        // 🪨 土遁：沉重撞击声（极低频 + 方波）
        case "earth": {
          const rock = this.context.createOscillator();
          const rockGain = this.context.createGain();
          rock.type = "square";
          rock.frequency.setValueAtTime(60, now + 0.25);
          rock.frequency.exponentialRampToValueAtTime(30, now + 0.55);
          rockGain.gain.setValueAtTime(0.001, now + 0.25);
          rockGain.gain.linearRampToValueAtTime(0.15, now + 0.28);
          rockGain.gain.exponentialRampToValueAtTime(0.001, now + 0.6);
          rock.connect(rockGain);
          rockGain.connect(dest);
          rock.start(now + 0.25);
          rock.stop(now + 0.6);

          // 碎裂噪声
          this.playNoiseLayer(now + 0.27, 0.15, 0.08);
          break;
        }

        // ⚡ 雷遁：电弧放电声（快速频率扫描）
        case "lightning": {
          // 电弧主音
          const zap = this.context.createOscillator();
          const zapGain = this.context.createGain();
          zap.type = "sawtooth";
          zap.frequency.setValueAtTime(2000, now + 0.23);
          zap.frequency.exponentialRampToValueAtTime(100, now + 0.3);
          zap.frequency.setValueAtTime(1500, now + 0.32);
          zap.frequency.exponentialRampToValueAtTime(80, now + 0.38);
          zapGain.gain.setValueAtTime(0.001, now + 0.23);
          zapGain.gain.linearRampToValueAtTime(0.1, now + 0.25);
          zapGain.gain.setValueAtTime(0.08, now + 0.32);
          zapGain.gain.exponentialRampToValueAtTime(0.001, now + 0.5);
          zap.connect(zapGain);
          zapGain.connect(dest);
          zap.start(now + 0.23);
          zap.stop(now + 0.5);

          // 嗡鸣持续音
          const hum = this.context.createOscillator();
          const humGain = this.context.createGain();
          hum.type = "sine";
          hum.frequency.value = 60;
          humGain.gain.setValueAtTime(0.001, now + 0.25);
          humGain.gain.linearRampToValueAtTime(0.06, now + 0.3);
          humGain.gain.exponentialRampToValueAtTime(0.001, now + 0.65);
          hum.connect(humGain);
          humGain.connect(dest);
          hum.start(now + 0.25);
          hum.stop(now + 0.65);
          break;
        }

        // 🌪️ 风遁：呼啸风声（滤波噪声 + 频率扫描）
        case "wind": {
          const windDur = 0.6;
          const wBufSize = this.context.sampleRate * windDur;
          const wBuf = this.context.createBuffer(
            1,
            wBufSize,
            this.context.sampleRate
          );
          const wData = wBuf.getChannelData(0);
          for (let i = 0; i < wBufSize; i++) {
            wData[i] = Math.random() * 2 - 1;
          }
          const wind = this.context.createBufferSource();
          wind.buffer = wBuf;

          const wFilter = this.context.createBiquadFilter();
          wFilter.type = "bandpass";
          wFilter.frequency.setValueAtTime(500, now + 0.2);
          wFilter.frequency.exponentialRampToValueAtTime(3000, now + 0.35);
          wFilter.frequency.exponentialRampToValueAtTime(800, now + 0.7);
          wFilter.Q.value = 2;

          const windGain = this.context.createGain();
          windGain.gain.setValueAtTime(0.001, now + 0.2);
          windGain.gain.linearRampToValueAtTime(0.12, now + 0.3);
          windGain.gain.exponentialRampToValueAtTime(0.001, now + 0.75);

          wind.connect(wFilter);
          wFilter.connect(windGain);
          windGain.connect(dest);
          wind.start(now + 0.2);
          wind.stop(now + 0.75);

          // 呼啸泛音
          const whistle = this.context.createOscillator();
          const whistleGain = this.context.createGain();
          whistle.type = "sine";
          whistle.frequency.setValueAtTime(800, now + 0.25);
          whistle.frequency.exponentialRampToValueAtTime(2500, now + 0.35);
          whistle.frequency.exponentialRampToValueAtTime(600, now + 0.6);
          whistleGain.gain.setValueAtTime(0.001, now + 0.25);
          whistleGain.gain.linearRampToValueAtTime(0.04, now + 0.3);
          whistleGain.gain.exponentialRampToValueAtTime(0.001, now + 0.6);
          whistle.connect(whistleGain);
          whistleGain.connect(dest);
          whistle.start(now + 0.25);
          whistle.stop(now + 0.6);
          break;
        }

        // 🌀 无属性：纯查克拉释放
        default: {
          const chakra2 = this.context.createOscillator();
          const chakra2Gain = this.context.createGain();
          chakra2.type = "triangle";
          chakra2.frequency.setValueAtTime(300, now + 0.25);
          chakra2.frequency.exponentialRampToValueAtTime(600, now + 0.35);
          chakra2.frequency.exponentialRampToValueAtTime(200, now + 0.6);
          chakra2Gain.gain.setValueAtTime(0.001, now + 0.25);
          chakra2Gain.gain.linearRampToValueAtTime(0.08, now + 0.3);
          chakra2Gain.gain.exponentialRampToValueAtTime(0.001, now + 0.6);
          chakra2.connect(chakra2Gain);
          chakra2Gain.connect(dest);
          chakra2.start(now + 0.25);
          chakra2.stop(now + 0.6);
          break;
        }
      }
    } catch (e) {}
  },
};

// ==========================================
// 十、快捷选择
// ==========================================

function renderQuickGrid(filter) {
  let list;

  if (filter === "all") {
    list = Object.keys(JUTSU_DATABASE);
  } else if (filter === "has-seals") {
    // 筛选出有结印序列的忍术（seals数组不为空）
    list = Object.keys(JUTSU_DATABASE).filter(
      (name) => JUTSU_DATABASE[name].seals.length > 0
    );
  } else {
    list = Object.keys(JUTSU_DATABASE).filter(
      (name) => JUTSU_DATABASE[name].element === filter
    );
  }

  DOM.quickGrid.innerHTML = list
    .map((name) => {
      const j = JUTSU_DATABASE[name];
      const sealTag =
        j.seals.length > 0
          ? `<span class="seal-count-tag">${j.seals.length}印</span>`
          : "";
      return `<button class="quick-btn" data-name="${name}" data-element="${
        j.element
      }"
              title="${j.romaji} | ${j.user} | ${
        j.seals.length > 0 ? j.seals.length + "个结印" : "无需结印"
      }">
              ${ELEMENT_EMOJI[j.element]} ${name} ${sealTag}
            </button>`;
    })
    .join("");
}

// ==========================================
// 十一、事件绑定
// ==========================================

function initEvents() {
  // 搜索输入
  DOM.searchInput.addEventListener("input", function () {
    renderSuggestions(searchJutsu(this.value));
  });

  // 搜索按钮
  DOM.searchBtn.addEventListener("click", function () {
    const kw = DOM.searchInput.value.trim();
    if (JUTSU_DATABASE[kw]) {
      selectJutsu(kw);
      return;
    }
    const results = searchJutsu(kw);
    if (results.length > 0) selectJutsu(results[0]);
  });

  // 键盘导航
  DOM.searchInput.addEventListener("keydown", function (e) {
    const items = DOM.suggestionsList.querySelectorAll(".suggestion-item");

    if (e.key === "ArrowDown") {
      e.preventDefault();
      state.highlightIndex = Math.min(
        state.highlightIndex + 1,
        items.length - 1
      );
      updateHighlight(items);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      state.highlightIndex = Math.max(state.highlightIndex - 1, -1);
      updateHighlight(items);
    } else if (e.key === "Enter") {
      e.preventDefault();
      if (state.highlightIndex >= 0 && items[state.highlightIndex]) {
        selectJutsu(items[state.highlightIndex].getAttribute("data-name"));
      } else {
        DOM.searchBtn.click();
      }
    } else if (e.key === "Escape") {
      closeSuggestions();
    }
  });

  // 点击建议项
  DOM.suggestionsList.addEventListener("click", function (e) {
    const item = e.target.closest(".suggestion-item");
    if (item) selectJutsu(item.getAttribute("data-name"));
  });

  // 鼠标悬停建议项
  DOM.suggestionsList.addEventListener("mouseover", function (e) {
    const item = e.target.closest(".suggestion-item");
    if (item) {
      state.highlightIndex = parseInt(item.getAttribute("data-index"));
      updateHighlight(DOM.suggestionsList.querySelectorAll(".suggestion-item"));
    }
  });

  // 点击外部关闭建议
  document.addEventListener("click", function (e) {
    if (!e.target.closest(".search-section")) closeSuggestions();
  });

  // 搜索框聚焦时重新搜索
  DOM.searchInput.addEventListener("focus", function () {
    if (this.value.trim()) renderSuggestions(searchJutsu(this.value));
  });

  // 重新结印
  DOM.replayBtn.addEventListener("click", function () {
    if (state.currentJutsu && !state.isAnimating) {
      renderSealsTimeline(state.currentJutsu.seals);
      startSealAnimation();
    }
  });

  // 速度控制
  document.querySelectorAll(".speed-btn").forEach((btn) => {
    btn.addEventListener("click", function () {
      document
        .querySelectorAll(".speed-btn")
        .forEach((b) => b.classList.remove("active"));
      this.classList.add("active");
      state.sealSpeed = parseInt(this.getAttribute("data-speed"));
      // 如果正在播放，重新开始应用新速度
      if (state.isAnimating && state.currentJutsu) {
        renderSealsTimeline(state.currentJutsu.seals);
        startSealAnimation();
      }
    });
  });

  // 属性过滤标签
  document.querySelectorAll(".tab-btn").forEach((btn) => {
    btn.addEventListener("click", function () {
      document
        .querySelectorAll(".tab-btn")
        .forEach((b) => b.classList.remove("active"));
      this.classList.add("active");
      renderQuickGrid(this.getAttribute("data-filter"));
    });
  });

  // 快捷选择（事件委托）
  DOM.quickGrid.addEventListener("click", function (e) {
    const btn = e.target.closest(".quick-btn");
    if (btn) {
      selectJutsu(btn.getAttribute("data-name"));
      DOM.jutsuCard.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  });

  // 点击完成状态的高亮区提示文字可重播
  DOM.spotlightGuide.addEventListener("click", function () {
    if (
      DOM.sealSpotlight.classList.contains("completed") &&
      state.currentJutsu &&
      !state.isAnimating
    ) {
      renderSealsTimeline(state.currentJutsu.seals);
      startSealAnimation();
    }
  });
}

// ==========================================
// 十二、键盘快捷键
// ==========================================

function initKeyboardShortcuts() {
  document.addEventListener("keydown", function (e) {
    const isTyping = document.activeElement === DOM.searchInput;

    // Ctrl+K 或 / 聚焦搜索
    if ((e.ctrlKey && e.key === "k") || (e.key === "/" && !isTyping)) {
      e.preventDefault();
      DOM.searchInput.focus();
      DOM.searchInput.select();
    }

    // 非输入状态下的快捷键
    if (!isTyping) {
      // Space 重播
      if (e.key === " ") {
        e.preventDefault();
        if (
          state.currentJutsu &&
          !state.isAnimating &&
          state.currentJutsu.seals.length > 0
        ) {
          DOM.replayBtn.click();
        }
      }

      // 1234 切换速度
      const speedMap = { 1: 1000, 2: 500, 3: 250, 4: 100 };
      if (speedMap[e.key]) {
        state.sealSpeed = speedMap[e.key];
        document.querySelectorAll(".speed-btn").forEach((btn) => {
          btn.classList.toggle(
            "active",
            parseInt(btn.getAttribute("data-speed")) === speedMap[e.key]
          );
        });
      }
    }
  });
}

// ==========================================
// 十三、图片预加载
// ==========================================

function preloadImages() {
  Object.values(BASIC_SEALS).forEach((seal) => {
    const img = new Image();
    img.src = seal.img;
  });
}

// ==========================================
// 十四、初始化
// ==========================================

function init() {
  console.log(
    "%c🍥 忍术结印系统已启动！",
    "color: #e94560; font-size: 16px; font-weight: bold;"
  );
  console.log("%c   Deep♂Dark♂Fantasy 忍术工坊", "color: #888;");
  console.log(
    "%c   快捷键: / 搜索 | Space 重播 | 1234 调速",
    "color: #ffd700;"
  );

  // 粒子背景
  initParticles();

  // 音频（需用户交互后启用）
  document.addEventListener(
    "click",
    function initAudio() {
      AudioSystem.init();
      document.removeEventListener("click", initAudio);
    },
    { once: true }
  );

  // 事件绑定
  initEvents();
  initKeyboardShortcuts();

  // 预加载结印图片
  preloadImages();

  // 渲染快捷选择
  renderQuickGrid("all");

  // 自动聚焦搜索框
  setTimeout(() => DOM.searchInput.focus(), 500);

  console.log(
    `%c   已收录 ${Object.keys(JUTSU_DATABASE).length} 个忍术`,
    "color: #4caf50;"
  );
}

// 启动!
document.addEventListener("DOMContentLoaded", init);
