/* ============================================
   忍术结印系统 - 完整逻辑（图片版）
   ============================================ */

// ==========================================
// 一、数据层
// ==========================================

const BASIC_SEALS = {
  '子': {
    name: '鼠', romaji: 'Ne', emoji: '🐀',
    img: 'img/seal-ne.JPG',
    guide: '左手食指竖起，右手握住左手，右手拇指夹在左手食指和中指之间'
  },
  '丑': {
    name: '牛', romaji: 'Ushi', emoji: '🐂',
    img: 'img/seal-ushi.JPG',
    guide: '双手水平交叉，左手食指和右手中指竖直向上，其余手指交叉握紧'
  },
  '寅': {
    name: '虎', romaji: 'Tora', emoji: '🐅',
    img: 'img/seal-tora.JPG',
    guide: '双手手指交叉扣紧，左右手的食指和中指竖起并拢，指尖朝上'
  },
  '卯': {
    name: '兔', romaji: 'U', emoji: '🐇',
    img: 'img/seal-u.JPG',
    guide: '右手小指竖直朝上，左手覆盖右手，左手小指也竖直朝上，其余手指交叉'
  },
  '辰': {
    name: '龙', romaji: 'Tatsu', emoji: '🐉',
    img: 'img/seal-tatsu.JPG',
    guide: '左手握拳，右手拇指扣在左拳外侧，其余四指包住左拳'
  },
  '巳': {
    name: '蛇', romaji: 'Mi', emoji: '🐍',
    img: 'img/seal-mi.JPG',
    guide: '双手合十，十指自然并拢贴合，指尖朝上，类似祈祷姿势'
  },
  '午': {
    name: '马', romaji: 'Uma', emoji: '🐎',
    img: 'img/seal-uma.JPG',
    guide: '双手指尖相对，食指与小指竖起分开，中指和无名指弯曲在内侧交叉'
  },
  '未': {
    name: '羊', romaji: 'Hitsuji', emoji: '🐑',
    img: 'img/seal-hitsuji.JPG',
    guide: '右手在上左手在下，双手手指交错重叠握紧，掌心朝下'
  },
  '申': {
    name: '猴', romaji: 'Saru', emoji: '🐒',
    img: 'img/seal-saru.JPG',
    guide: '右手掌心朝下覆盖在左手掌心朝上的手上，右手拇指向外伸出'
  },
  '酉': {
    name: '鸡', romaji: 'Tori', emoji: '🐓',
    img: 'img/seal-tori.JPG',
    guide: '左手手指并拢朝上，右手从外侧握住左手手指，指尖朝上形成鸟喙状'
  },
  '戌': {
    name: '狗', romaji: 'Inu', emoji: '🐕',
    img: 'img/seal-inu.JPG',
    guide: '左手握拳掌心朝下，右手张开掌心朝下盖在左拳上方'
  },
  '亥': {
    name: '猪', romaji: 'I', emoji: '🐗',
    img: 'img/seal-i.JPG',
    guide: '双手手腕合拢贴紧，十指全部张开朝外展开，如孔雀开屏'
  },
  '特殊': {
    name: '十字印', romaji: 'Jūji', emoji: '✋',
    img: 'img/seal-cross.png',
    guide: '双手食指和中指伸直交叉成十字形，鸣人影分身之术的招牌结印'
  },
};

const ELEMENT_EMOJI = {
  fire: '🔥', water: '💧', earth: '🪨',
  lightning: '⚡', wind: '🌪️', none: '🌀',
};

const ELEMENT_NAME = {
  fire: '火遁', water: '水遁', earth: '土遁',
  lightning: '雷遁', wind: '风遁', none: '无属性',
};

const JUTSU_DATABASE = {
  // ====== 火遁 ======
  '火遁·豪火球之术': {
    romaji: 'Katon: Gōkakyū no Jutsu',
    user: '宇智波佐助 / 宇智波一族',
    rank: 'C', element: 'fire',
    seals: ['巳', '未', '申', '亥', '午', '寅'],
    description: '将查克拉在体内转化为火属性后从口中喷出巨大火球，宇智波一族的成年礼忍术。佐助在7岁时便已掌握此术。'
  },
  '火遁·龙火之术': {
    romaji: 'Katon: Ryūka no Jutsu',
    user: '宇智波佐助',
    rank: 'C', element: 'fire',
    seals: ['巳', '辰', '卯', '寅', '巳'],
    description: '沿着钢丝等线状物体释放高温火焰进行攻击，常与写轮眼配合使用。'
  },
  '火遁·凤仙火之术': {
    romaji: 'Katon: Hōsenka no Jutsu',
    user: '宇智波佐助',
    rank: 'C', element: 'fire',
    seals: ['子', '寅', '戌', '丑', '卯', '寅'],
    description: '从口中连续喷出多枚小型火球，可在火球中暗藏手里剑进行组合攻击。'
  },
  '火遁·豪龙火之术': {
    romaji: 'Katon: Gōryūka no Jutsu',
    user: '宇智波佐助',
    rank: 'B', element: 'fire',
    seals: ['巳', '辰', '卯', '寅', '巳', '丑', '申', '卯', '巳', '戌', '寅'],
    description: '释放出巨大的龙形火焰冲向天空，可改变天气形成雷云，是施展麒麟的前置忍术。'
  },
  '火遁·灰积烧': {
    romaji: 'Katon: Haisekishō',
    user: '猿飞阿斯玛',
    rank: 'B', element: 'fire',
    seals: ['巳', '卯', '申', '亥', '午', '寅'],
    description: '从口中喷出含有火药的特殊灰烬烟雾，用牙齿打出火花引爆，防不胜防。'
  },

  // ====== 水遁 ======
  '水遁·水阵壁': {
    romaji: 'Suiton: Suijinheki',
    user: '千手扉间 / 旗木卡卡西',
    rank: 'B', element: 'water',
    seals: ['寅', '巳', '子', '巳', '寅'],
    description: '从口中喷出大量水形成坚固水壁防御，即使没有水源也可直接使用。'
  },
  '水遁·水龙弹之术': {
    romaji: 'Suiton: Suiryūdan no Jutsu',
    user: '桃地再不斩 / 旗木卡卡西',
    rank: 'B', element: 'water',
    seals: [
      '丑','申','卯','子','亥','酉','丑','午','酉','子',
      '寅','戌','寅','巳','丑','申','卯','子','亥','酉',
      '丑','午','酉','子','寅','戌','寅','巳','丑','申',
      '卯','子','亥','酉','丑','午','酉','子','卯','辰',
      '巳','未','丑'
    ],
    description: '需要43个结印的超高难度忍术！操纵水形成巨龙攻击对手。波之国篇经典名场面。'
  },
  '水遁·大瀑布之术': {
    romaji: 'Suiton: Daibakufu no Jutsu',
    user: '旗木卡卡西',
    rank: 'A', element: 'water',
    seals: ['寅','丑','申','卯','巳','午','丑','申','卯','子','巳','酉','丑','午','卯','申'],
    description: '召唤巨大水柱形成瀑布般的洪流冲击敌人，卡卡西用写轮眼从再不斩处复制。'
  },

  // ====== 土遁 ======
  '土遁·土流壁': {
    romaji: 'Doton: Doryūheki',
    user: '猿飞日斩 / 旗木卡卡西',
    rank: 'B', element: 'earth',
    seals: ['寅', '戌', '巳', '丑'],
    description: '吐出泥土在地面形成坚固的土墙防御，卡卡西版墙面上有标志性的狗头浮雕。'
  },
  '土遁·土龙弹': {
    romaji: 'Doton: Doryūdan',
    user: '猿飞日斩',
    rank: 'B', element: 'earth',
    seals: ['未', '午', '辰'],
    description: '从地面升起土龙连续发射泥弹攻击对手，常与火遁配合使用。'
  },
  '土遁·裂土转掌': {
    romaji: 'Doton: Retsudo Tenshō',
    user: '大蛇丸',
    rank: 'C', element: 'earth',
    seals: ['丑', '巳', '子', '申'],
    description: '使脚下地面瞬间裂开崩塌，让敌人失去立足之地。'
  },

  // ====== 雷遁 ======
  '千鸟': {
    romaji: 'Chidori',
    user: '旗木卡卡西 / 宇智波佐助',
    rank: 'A', element: 'lightning',
    seals: ['丑', '卯', '申'],
    description: '将雷属性查克拉高度集中于手部发出千鸟鸣叫般声响的高速突刺术，仅3个结印但需写轮眼辅助。'
  },
  '千鸟锐枪': {
    romaji: 'Chidori Eisō',
    user: '宇智波佐助',
    rank: 'A', element: 'lightning',
    seals: ['申', '卯', '丑'],
    description: '千鸟的形态变化，将雷遁查克拉延伸为长枪状进行中远距离攻击。'
  },
  '雷切': {
    romaji: 'Raikiri',
    user: '旗木卡卡西',
    rank: 'S', element: 'lightning',
    seals: ['丑', '卯', '申'],
    description: '千鸟的完成形态，查克拉集中度更高。因卡卡西曾用此术劈开闪电而得名"雷切"。'
  },
  '雷遁·雷兽追牙': {
    romaji: 'Raiton: Raijū Tsuiga',
    user: '旗木卡卡西',
    rank: 'B', element: 'lightning',
    seals: ['丑', '卯', '申', '寅'],
    description: '以雷遁查克拉形成雷兽形态进行自动追踪攻击。'
  },

  // ====== 风遁 ======
  '风遁·大突破': {
    romaji: 'Fūton: Daitoppa',
    user: '大蛇丸',
    rank: 'C', element: 'wind',
    seals: ['寅', '丑', '巳'],
    description: '深吸一口气后吐出大范围强风进行攻击，可以吹飞大量敌人。'
  },
  '风遁·真空玉': {
    romaji: 'Fūton: Shinkūgyoku',
    user: '猿飞日斩',
    rank: 'B', element: 'wind',
    seals: ['子', '卯', '寅'],
    description: '连续吐出多枚高速旋转的风弹进行攻击。'
  },
  '风遁·螺旋手里剑': {
    romaji: 'Fūton: Rasenshuriken',
    user: '漩涡鸣人',
    rank: 'S', element: 'wind',
    seals: ['特殊'],
    description: '在螺旋丸基础上加入风属性变化，命中后产生无数微型风刃从细胞层面破坏对手。需影分身辅助完成。'
  },

  // ====== 特殊忍术 ======
  '通灵之术': {
    romaji: 'Kuchiyose no Jutsu',
    user: '漩涡鸣人 / 自来也 / 纲手',
    rank: 'C', element: 'none',
    seals: ['亥', '戌', '酉', '申', '未'],
    description: '咬破拇指以血为媒介召唤与自己签订契约的通灵兽。'
  },
  '影分身之术': {
    romaji: 'Kage Bunshin no Jutsu',
    user: '漩涡鸣人',
    rank: 'B', element: 'none',
    seals: ['特殊'],
    description: '鸣人的招牌忍术！只需一个十字印即可创造出拥有实体的分身。'
  },
  '多重影分身之术': {
    romaji: 'Tajū Kage Bunshin no Jutsu',
    user: '漩涡鸣人',
    rank: 'A', element: 'none',
    seals: ['特殊'],
    description: '影分身的强化版，一次创造上千个影分身！被列为禁术。'
  },
  '螺旋丸': {
    romaji: 'Rasengan',
    user: '波风水门 / 漩涡鸣人 / 自来也',
    rank: 'A', element: 'none',
    seals: [],
    description: '四代火影开发的A级忍术，无需结印！纯粹依靠查克拉形态变化凝聚高速旋转的查克拉球。'
  },
  '秽土转生': {
    romaji: 'Kuchiyose: Edo Tensei',
    user: '千手扉间 / 大蛇丸 / 药师兜',
    rank: 'S', element: 'none',
    seals: ['寅', '巳', '戌', '辰'],
    description: '二代火影开发的S级禁术！以活人为祭品将死者灵魂召回现世，被召唤者拥有不死之身。'
  },
  '飞雷神之术': {
    romaji: 'Hiraishin no Jutsu',
    user: '波风水门 / 千手扉间',
    rank: 'S', element: 'none',
    seals: ['巳', '亥', '寅'],
    description: '瞬间移动到预先标记术式的位置，四代火影凭此术获得"黄色闪光"之名。'
  },
  '八门遁甲·死门': {
    romaji: 'Hachimon Tonkō: Shimon',
    user: '迈特凯',
    rank: 'S', element: 'none',
    seals: [],
    description: '打开体内全部八门的终极奥义，无需结印！获得凌驾五影的力量，代价是必然死亡。凯用此术差点击杀六道斑。'
  },
  '色诱之术': {
    romaji: 'Oiroke no Jutsu',
    user: '漩涡鸣人',
    rank: 'D', element: 'none',
    seals: ['特殊'],
    description: '鸣人自创，用变化之术变成性感美女。连三代火影都无法抵挡的"最强忍术"。'
  },
};


// ==========================================
// 二、DOM 引用
// ==========================================

const DOM = {
  canvas:           document.getElementById('particleCanvas'),
  searchInput:      document.getElementById('searchInput'),
  searchBtn:        document.getElementById('searchBtn'),
  suggestionsList:  document.getElementById('suggestionsList'),
  jutsuCard:        document.getElementById('jutsuCard'),
  jutsuName:        document.getElementById('jutsuName'),
  jutsuRank:        document.getElementById('jutsuRank'),
  jutsuRomaji:      document.getElementById('jutsuRomaji'),
  jutsuUser:        document.getElementById('jutsuUser'),
  jutsuElement:     document.getElementById('jutsuElement'),
  jutsuSealCount:   document.getElementById('jutsuSealCount'),
  jutsuDesc:        document.getElementById('jutsuDesc'),
  sealSpotlight:    document.getElementById('sealSpotlight'),
  spotlightImg:     document.getElementById('spotlightImg'),
  spotlightFallback:document.getElementById('spotlightFallback'),
  spotlightImgContainer: document.getElementById('spotlightImgContainer'),
  spotlightName:    document.getElementById('spotlightName'),
  spotlightStep:    document.getElementById('spotlightStep'),
  spotlightGuide:   document.getElementById('spotlightGuide'),
  sealsSection:     document.getElementById('sealsSection'),
  sealsTimeline:    document.getElementById('sealsTimeline'),
  replayBtn:        document.getElementById('replayBtn'),
  noSealSection:    document.getElementById('noSealSection'),
  jutsuRelease:     document.getElementById('jutsuRelease'),
  releaseText:      document.getElementById('releaseText'),
  quickGrid:        document.getElementById('quickGrid'),
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
  const ctx = canvas.getContext('2d');
  let particles = [];

  function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }
  resize();
  window.addEventListener('resize', resize);

  class Particle {
    constructor() { this.reset(); }
    reset() {
      this.x = Math.random() * canvas.width;
      this.y = canvas.height + Math.random() * 50;
      this.size = Math.random() * 2 + 0.5;
      this.speedY = -(Math.random() * 0.6 + 0.2);
      this.speedX = (Math.random() - 0.5) * 0.3;
      this.opacity = Math.random() * 0.5 + 0.1;
      this.color = ['#e94560', '#ff6348', '#ffd700', '#1e90ff'][Math.floor(Math.random() * 4)];
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
    particles.forEach(p => { p.update(); p.draw(); });
    requestAnimationFrame(animate);
  })();
}


// ==========================================
// 五、搜索
// ==========================================

function searchJutsu(keyword) {
  if (!keyword.trim()) return [];
  const kw = keyword.toLowerCase().trim();
  return Object.keys(JUTSU_DATABASE).filter(name => {
    const j = JUTSU_DATABASE[name];
    return name.toLowerCase().includes(kw)
      || j.romaji.toLowerCase().includes(kw)
      || j.user.toLowerCase().includes(kw)
      || ELEMENT_NAME[j.element]?.includes(kw);
  });
}

function renderSuggestions(results) {
  state.currentSuggestions = results;
  state.highlightIndex = -1;
  if (!results.length) {
    DOM.suggestionsList.classList.add('hidden');
    return;
  }
  DOM.suggestionsList.innerHTML = results.map((name, i) => {
    const j = JUTSU_DATABASE[name];
    return `
      <li class="suggestion-item" data-index="${i}" data-name="${name}">
        <div class="suggestion-left">
          <span class="suggestion-element">${ELEMENT_EMOJI[j.element]}</span>
          <span class="suggestion-name">${highlightMatch(name, DOM.searchInput.value)}</span>
        </div>
        <div class="suggestion-right">
          <span class="suggestion-user">${j.user.split('/')[0].trim()}</span>
          <span class="suggestion-rank rank-${j.rank}">${j.rank}级</span>
        </div>
      </li>`;
  }).join('');
  DOM.suggestionsList.classList.remove('hidden');
}

function highlightMatch(text, kw) {
  if (!kw.trim()) return text;
  const re = new RegExp(`(${kw.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi');
  return text.replace(re, '<mark style="background:rgba(233,69,96,0.3);color:#fff;border-radius:2px;padding:0 2px;">$1</mark>');
}

function closeSuggestions() {
  DOM.suggestionsList.classList.add('hidden');
  state.currentSuggestions = [];
  state.highlightIndex = -1;
}

function updateHighlight(items) {
  items.forEach((el, i) => {
    el.classList.toggle('active', i === state.highlightIndex);
    if (i === state.highlightIndex) el.scrollIntoView({ block: 'nearest' });
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
  DOM.jutsuCard.setAttribute('data-element', jutsu.element);
  DOM.jutsuName.textContent = name;
  DOM.jutsuRank.textContent = jutsu.rank + '级';
  DOM.jutsuRank.className = 'jutsu-rank rank-' + jutsu.rank;
  DOM.jutsuRomaji.textContent = jutsu.romaji;
  DOM.jutsuUser.textContent = jutsu.user;
  DOM.jutsuElement.textContent = ELEMENT_EMOJI[jutsu.element] + ' ' + ELEMENT_NAME[jutsu.element];
  DOM.jutsuSealCount.textContent = jutsu.seals.length === 0 ? '无需结印' : jutsu.seals.length + '个';
  DOM.jutsuDesc.textContent = jutsu.description;
  DOM.jutsuCard.classList.remove('hidden');
  DOM.jutsuCard.style.animation = 'none';
  DOM.jutsuCard.offsetHeight;
  DOM.jutsuCard.style.animation = '';
}

function showNoSealSection() {
  DOM.sealsSection.classList.add('hidden');
  DOM.sealSpotlight.classList.add('hidden');
  DOM.jutsuRelease.classList.add('hidden');
  DOM.noSealSection.classList.remove('hidden');
}


// ==========================================
// 七、★ 结印序列渲染（卡片 + 图片 + tooltip图片）★
// ==========================================

function renderSealsTimeline(seals) {
  DOM.noSealSection.classList.add('hidden');
  DOM.jutsuRelease.classList.add('hidden');

  DOM.sealsTimeline.innerHTML = seals.map((sealKey, index) => {
    const seal = BASIC_SEALS[sealKey];
    if (!seal) return '';
    return `
      <div class="seal-node waiting" data-index="${index}" id="seal-${index}">
        <span class="seal-step">${index + 1}</span>
        <div class="seal-img-wrap">
          <img class="seal-img" src="${seal.img}" alt="${seal.name}印"
               onerror="this.style.display='none';this.nextElementSibling.style.display='flex';">
          <div class="seal-img-fallback" style="display:none;">${seal.emoji}</div>
        </div>
        <span class="seal-label">${seal.name}</span>
        <span class="seal-kanji">${sealKey === '特殊' ? '' : sealKey}</span>
        <div class="seal-tooltip">
          <strong>${seal.emoji} ${seal.name}印（${seal.romaji}）</strong>
          <img class="tooltip-img" src="${seal.img}" alt="${seal.name}"
               onerror="this.style.display='none';">
          <div>${seal.guide}</div>
        </div>
      </div>
    `;
  }).join('');

  DOM.sealsSection.classList.remove('hidden');
  DOM.replayBtn.disabled = true;
  DOM.sealsSection.style.animation = 'none';
  DOM.sealsSection.offsetHeight;
  DOM.sealsSection.style.animation = '';
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
  DOM.sealSpotlight.classList.remove('hidden');
  DOM.jutsuRelease.classList.add('hidden');

  // 重置所有卡片
  DOM.sealsTimeline.querySelectorAll('.seal-node').forEach(n => {
    n.classList.remove('active', 'done');
    n.classList.add('waiting');
  });

  let currentIndex = 0;

  function playNextSeal() {
    if (currentIndex >= jutsu.seals.length) {
      onAnimationComplete();
      return;
    }

    // 上一个 → done
    if (currentIndex > 0) {
      const prev = document.getElementById('seal-' + (currentIndex - 1));
      if (prev) { prev.classList.remove('active'); prev.classList.add('done'); }
    }

    // 当前 → active
    const cur = document.getElementById('seal-' + currentIndex);
    if (cur) {
      cur.classList.remove('waiting');
      cur.classList.add('active');
      cur.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
    }

    // ★★★ 更新高亮展示区（大图片 + 手势说明）★★★
    const sealKey = jutsu.seals[currentIndex];
    const seal = BASIC_SEALS[sealKey];
    if (seal) {
      // 设置大图
      DOM.spotlightImg.src = seal.img;
      DOM.spotlightImg.alt = seal.name + '印';
      DOM.spotlightImg.style.display = '';
      DOM.spotlightFallback.style.display = 'none';
      DOM.spotlightFallback.textContent = seal.emoji;

      // 图片加载失败时降级到 emoji
      DOM.spotlightImg.onerror = function () {
        this.style.display = 'none';
        DOM.spotlightFallback.style.display = 'flex';
      };

      // 名称
      DOM.spotlightName.textContent = seal.name + '印'
        + (sealKey !== '特殊' ? '（' + sealKey + '）' : '');

      // 进度
      DOM.spotlightStep.textContent =
        '第 ' + (currentIndex + 1) + ' / ' + jutsu.seals.length + ' 印';

      // 手势说明
      DOM.spotlightGuide.textContent = seal.guide;
      DOM.spotlightGuide.style.animation = 'none';
      DOM.spotlightGuide.offsetHeight;
      DOM.spotlightGuide.style.animation = '';

      // 重播图片容器弹入动画
      DOM.spotlightImgContainer.style.animation = 'none';
      DOM.spotlightImgContainer.offsetHeight;
      DOM.spotlightImgContainer.style.animation = '';
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
    const last = document.getElementById('seal-' + (jutsu.seals.length - 1));
    if (last) { last.classList.remove('active'); last.classList.add('done'); }
  }

  DOM.sealSpotlight.classList.add('hidden');
  showReleaseEffect();
}

function stopAnimation() {
  if (state.animationTimer) {
    clearTimeout(state.animationTimer);
    state.animationTimer = null;
  }
  state.isAnimating = false;
  DOM.sealSpotlight.classList.add('hidden');
}

function showReleaseEffect() {
  const jutsu = state.currentJutsu;
  if (!jutsu) return;

  DOM.releaseText.textContent = jutsu.name + '！！';
  DOM.releaseText.className = 'release-text';
  DOM.jutsuRelease.classList.remove('hidden');
  DOM.releaseText.style.animation = 'none';
  DOM.releaseText.offsetHeight;
  DOM.releaseText.style.animation = '';

  AudioSystem.playReleaseSound();

  setTimeout(() => { DOM.jutsuRelease.classList.add('hidden'); }, 1800);
}


// ==========================================
// 九、音效系统
// ==========================================

const AudioSystem = {
  context: null,
  init() {
    try { this.context = new (window.AudioContext || window.webkitAudioContext)(); }
    catch (e) { /* 不支持就算了 */ }
  },
  playSealSound() {
    if (!this.context) return;
    try {
      const osc = this.context.createOscillator();
      const gain = this.context.createGain();
      osc.connect(gain);
      gain.connect(this.context.destination);
      osc.type = 'sine';
      osc.frequency.setValueAtTime(800, this.context.currentTime);
      osc.frequency.exponentialRampToValueAtTime(400, this.context.currentTime + 0.1);
      gain.gain.setValueAtTime(0.12, this.context.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.01, this.context.currentTime + 0.12);
      osc.start(this.context.currentTime);
      osc.stop(this.context.currentTime + 0.12);
    } catch (e) {}
  },
  playReleaseSound() {
    if (!this.context) return;
    try {
      const osc = this.context.createOscillator();
      const gain = this.context.createGain();
      osc.connect(gain);
      gain.connect(this.context.destination);
      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(200, this.context.currentTime);
      osc.frequency.exponentialRampToValueAtTime(800, this.context.currentTime + 0.2);
      osc.frequency.exponentialRampToValueAtTime(100, this.context.currentTime + 0.5);
      gain.gain.setValueAtTime(0.15, this.context.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.01, this.context.currentTime + 0.5);
      osc.start(this.context.currentTime);
      osc.stop(this.context.currentTime + 0.5);
    } catch (e) {}
  }
};


// ==========================================
// 十、快捷选择
// ==========================================

function renderQuickGrid(filter) {
  const list = filter === 'all'
    ? Object.keys(JUTSU_DATABASE)
    : Object.keys(JUTSU_DATABASE).filter(n => JUTSU_DATABASE[n].element === filter);

  DOM.quickGrid.innerHTML = list.map(name => {
    const j = JUTSU_DATABASE[name];
    return `<button class="quick-btn" data-name="${name}" data-element="${j.element}"
              title="${j.romaji} | ${j.user}">
              ${ELEMENT_EMOJI[j.element]} ${name}
            </button>`;
  }).join('');
}


// ==========================================
// 十一、事件绑定
// ==========================================

function initEvents() {
  // 搜索输入
  DOM.searchInput.addEventListener('input', function () {
    renderSuggestions(searchJutsu(this.value));
  });

  // 搜索按钮
  DOM.searchBtn.addEventListener('click', function () {
    const kw = DOM.searchInput.value.trim();
    if (JUTSU_DATABASE[kw]) { selectJutsu(kw); return; }
    const results = searchJutsu(kw);
    if (results.length > 0) selectJutsu(results[0]);
  });

  // 键盘导航
  DOM.searchInput.addEventListener('keydown', function (e) {
    const items = DOM.suggestionsList.querySelectorAll('.suggestion-item');

    if (e.key === 'ArrowDown') {
      e.preventDefault();
      state.highlightIndex = Math.min(state.highlightIndex + 1, items.length - 1);
      updateHighlight(items);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      state.highlightIndex = Math.max(state.highlightIndex - 1, -1);
      updateHighlight(items);
    } else if (e.key === 'Enter') {
      e.preventDefault();
      if (state.highlightIndex >= 0 && items[state.highlightIndex]) {
        selectJutsu(items[state.highlightIndex].getAttribute('data-name'));
      } else {
        DOM.searchBtn.click();
      }
    } else if (e.key === 'Escape') {
      closeSuggestions();
    }
  });

  // 点击建议项
  DOM.suggestionsList.addEventListener('click', function (e) {
    const item = e.target.closest('.suggestion-item');
    if (item) selectJutsu(item.getAttribute('data-name'));
  });

  // 鼠标悬停建议项
  DOM.suggestionsList.addEventListener('mouseover', function (e) {
    const item = e.target.closest('.suggestion-item');
    if (item) {
      state.highlightIndex = parseInt(item.getAttribute('data-index'));
      updateHighlight(DOM.suggestionsList.querySelectorAll('.suggestion-item'));
    }
  });

  // 点击外部关闭建议
  document.addEventListener('click', function (e) {
    if (!e.target.closest('.search-section')) closeSuggestions();
  });

  // 搜索框聚焦时重新搜索
  DOM.searchInput.addEventListener('focus', function () {
    if (this.value.trim()) renderSuggestions(searchJutsu(this.value));
  });

  // 重新结印
  DOM.replayBtn.addEventListener('click', function () {
    if (state.currentJutsu && !state.isAnimating) {
      renderSealsTimeline(state.currentJutsu.seals);
      startSealAnimation();
    }
  });

  // 速度控制
  document.querySelectorAll('.speed-btn').forEach(btn => {
    btn.addEventListener('click', function () {
      document.querySelectorAll('.speed-btn').forEach(b => b.classList.remove('active'));
      this.classList.add('active');
      state.sealSpeed = parseInt(this.getAttribute('data-speed'));
      // 如果正在播放，重新开始应用新速度
      if (state.isAnimating && state.currentJutsu) {
        renderSealsTimeline(state.currentJutsu.seals);
        startSealAnimation();
      }
    });
  });

  // 属性过滤标签
  document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', function () {
      document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
      this.classList.add('active');
      renderQuickGrid(this.getAttribute('data-filter'));
    });
  });

  // 快捷选择（事件委托）
  DOM.quickGrid.addEventListener('click', function (e) {
    const btn = e.target.closest('.quick-btn');
    if (btn) {
      selectJutsu(btn.getAttribute('data-name'));
      DOM.jutsuCard.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
}


// ==========================================
// 十二、键盘快捷键
// ==========================================

function initKeyboardShortcuts() {
  document.addEventListener('keydown', function (e) {
    const isTyping = document.activeElement === DOM.searchInput;

    // Ctrl+K 或 / 聚焦搜索
    if ((e.ctrlKey && e.key === 'k') || (e.key === '/' && !isTyping)) {
      e.preventDefault();
      DOM.searchInput.focus();
      DOM.searchInput.select();
    }

    // 非输入状态下的快捷键
    if (!isTyping) {
      // Space 重播
      if (e.key === ' ') {
        e.preventDefault();
        if (state.currentJutsu && !state.isAnimating && state.currentJutsu.seals.length > 0) {
          DOM.replayBtn.click();
        }
      }

      // 1234 切换速度
      const speedMap = { '1': 1000, '2': 500, '3': 250, '4': 100 };
      if (speedMap[e.key]) {
        state.sealSpeed = speedMap[e.key];
        document.querySelectorAll('.speed-btn').forEach(btn => {
          btn.classList.toggle('active',
            parseInt(btn.getAttribute('data-speed')) === speedMap[e.key]
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
  Object.values(BASIC_SEALS).forEach(seal => {
    const img = new Image();
    img.src = seal.img;
  });
}


// ==========================================
// 十四、初始化
// ==========================================

function init() {
  console.log('%c🍥 忍术结印系统已启动！', 'color: #e94560; font-size: 16px; font-weight: bold;');
  console.log('%c   Deep♂Dark♂Fantasy 忍术工坊', 'color: #888;');
  console.log('%c   快捷键: / 搜索 | Space 重播 | 1234 调速', 'color: #ffd700;');

  // 粒子背景
  initParticles();

  // 音频（需用户交互后启用）
  document.addEventListener('click', function initAudio() {
    AudioSystem.init();
    document.removeEventListener('click', initAudio);
  }, { once: true });

  // 事件绑定
  initEvents();
  initKeyboardShortcuts();

  // 预加载结印图片
  preloadImages();

  // 渲染快捷选择
  renderQuickGrid('all');

  // 自动聚焦搜索框
  setTimeout(() => DOM.searchInput.focus(), 500);

  console.log(`%c   已收录 ${Object.keys(JUTSU_DATABASE).length} 个忍术`, 'color: #4caf50;');
}

// 启动!
document.addEventListener('DOMContentLoaded', init);
