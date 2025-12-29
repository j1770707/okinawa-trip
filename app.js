const itinerary = {
  title: "沖繩 4天3夜 肉食跨年之旅 🌺",
  subtitle: "12/30 高雄出發 → 那霸入住縣廳前｜和牛燒肉、阿古豬、購物、12/31 夜晚發展場",
  stats: [
    { k: "行程天數", v: "4天3夜" },
    { k: "清單總數", v: "10+" },
    { k: "預估總預算", v: "約 ¥120,000 / 人" },
    { k: "亮點", v: "12/31 夜晚發展場" },
  ],
  days: [
    {
      key: "day1",
      tab: "Day 1",
      title: "Day 1: 抵達那霸＋國際通暖身",
      date: "12/30（二）",
      desc: "下飛機直接進市區，入住後用一餐漂亮的和牛把旅程開機。",
      budget: { tickets: "¥0", food: "¥12,000–¥18,000", total: "¥12,000–¥18,000" },
      spots: [
        {
          icon: "✈️",
          title: "高雄 → 沖繩（那霸）",
          desc: "15:50 起飛，18:30 抵達；18:30–19:30 入境與前往市區。",
          time: "15:50–19:30",
          hours: "依航班",
          cost: "機票另計",
          tag: "必做",
        },
        {
          icon: "🚗",
          title: "那霸機場 → 飯店移動",
          desc: "建議計程車或單軌，視排隊與交通而定。",
          time: "19:00–19:30",
          hours: "依交通",
          cost: "¥260–¥1,600",
          tag: "移動",
        },
        {
          icon: "🏨",
          title: "那霸縣廳前阿爾蒙特飯店（Almont Hotel）",
          desc: "住縣廳前，走路到國際通很舒服。地址：沖繩縣那覇市久茂地1-3-5。",
          time: "19:30–20:00",
          hours: "入住 14:00 / 退房 11:00",
          cost: "房費另計",
          tag: "住宿",
          map: "https://www.google.com/maps/search/?api=1&query=Almont+Hotel+Naha+Kenchomae",
        },
        {
          icon: "🚶",
          title: "飯店 → 國際通／餐廳步行",
          desc: "縣廳前到國際通步行可達。",
          time: "20:00–20:10",
          hours: "依狀況",
          cost: "¥0",
          tag: "移動",
        },
        {
          icon: "🥩",
          title: "琉球の牛 那覇国際通り（琉球的牛）",
          desc: "那霸名店和牛燒肉，地址：沖繩縣那霸市牧志3-2-3 3F（晚餐 17:00–23:00）。",
          time: "20:10–22:00",
          hours: "17:00–23:00（L.O. 22:15）",
          cost: "¥8,000–¥15,000",
          tag: "主餐",
          map: "https://www.google.com/maps/search/?api=1&query=%E7%90%89%E7%90%83%E3%81%AE%E7%89%9B+%E9%82%A3%E8%A6%87%E5%9B%BD%E9%9A%9B%E9%80%9A%E3%82%8A",
        },
        {
          icon: "🌙",
          title: "國際通散步＋宵夜備案",
          desc: "如果你還有胃：Kobe BAR 仲々也在那霸市區，當作 after party 的肉系酒吧。",
          time: "22:10–23:30",
          hours: "依店家",
          cost: "¥1,000–¥5,000",
          tag: "彈性",
        },
      ],
    },
    {
      key: "day2",
      tab: "Day 2",
      title: "Day 2: 逛到腿軟＋跨年夜",
      date: "12/31（三）",
      desc: "白天 Rycom 大補貨，晚上先吃好吃滿，再去發展場跨年。",
      budget: { tickets: "¥0", food: "¥10,000–¥20,000", total: "¥10,000–¥20,000+" },
      spots: [
        {
          icon: "🚶",
          title: "飯店 → Miyachiku 移動",
          desc: "縣廳前一帶步行或短程計程車。",
          time: "17:30–18:00",
          hours: "依狀況",
          cost: "¥0–¥800",
          tag: "移動",
        },
        {
          icon: "🔥",
          title: "宮崎牛專賣店 Miyachiku 那霸（那覇みやちく）",
          desc: "鐵板燒路線，靠近縣廳前一帶，跨年夜前先來一餐穩住心智。",
          time: "18:00–19:30",
          hours: "午 11:00–15:00 / 晚 17:00–22:00（休：週一）",
          cost: "¥7,000–¥13,000",
          tag: "主餐",
          map: "https://www.google.com/maps/search/?api=1&query=%E9%82%A3%E8%A6%87%E3%81%BF%E3%82%84%E3%81%A1%E3%81%8F",
        },
        {
          icon: "🍷",
          title: "Kobe BAR NAKANAKA（神戸BAR 仲々）",
          desc: "百名店級的牛排/酒吧氛圍，地址：沖縄県那覇市牧志1-1-14 1F（多為 17:00–22:00）。",
          time: "20:00–21:30",
          hours: "17:00–22:00（多為週日休）",
          cost: "¥8,000–¥15,000",
          tag: "升級",
          map: "https://www.google.com/maps/search/?api=1&query=%E7%A5%9E%E6%88%B8BAR+%E4%BB%B2%E3%80%85+%E9%82%A3%E8%A6%87",
        },
        {
          icon: "🚶",
          title: "回飯店整理 → 夜晚出門",
          desc: "回飯店換裝、補充能量後再出門。",
          time: "21:30–22:00",
          hours: "依狀況",
          cost: "¥0",
          tag: "移動",
        },
        {
          icon: "🕺",
          title: "12/31 夜晚：發展場",
          desc: "先不寫死店名，留給當下的緣分。建議：回飯店放輕裝，再出門。",
          time: "22:00–深夜",
          hours: "夜生活模式",
          cost: "¥2,000–¥??",
          tag: "重點",
        },
      ],
    },
    {
      key: "day3",
      tab: "Day 3",
      title: "Day 3: 新年第一天，阿古豬來收尾油花",
      date: "1/1（四）",
      desc: "今天主角換成阿古豬，晚上再挑一間燒肉當新年儀式感。",
      budget: { tickets: "¥0", food: "¥10,000–¥18,000", total: "¥10,000–¥18,000" },
      spots: [
        {
          icon: "🚗",
          title: "飯店 → AEON Rycom 移動",
          desc: "建議自駕或計程車/巴士前往，車程約 30–40 分鐘。",
          time: "10:15–11:00",
          hours: "依交通",
          cost: "¥800–¥2,500",
          tag: "移動",
        },
        {
          icon: "🛍️",
          title: "AEON MALL Okinawa Rycom（イオンモール沖縄ライカム）",
          desc: "沖繩最大級購物商城之一，地址：〒901-2306 沖縄県中頭郡北中城村字ライカム1番地。",
          time: "11:00–16:00",
          hours: "店鋪多為 10:00–22:00（依店家）",
          cost: "看你手有多抖",
          tag: "必逛",
          map: "https://www.google.com/maps/search/?api=1&query=AEON+MALL+Okinawa+Rycom",
        },
        {
          icon: "🚗",
          title: "AEON Rycom → 飯店",
          desc: "回那霸市區，路況順利約 30–40 分鐘。",
          time: "16:00–16:45",
          hours: "依交通",
          cost: "¥800–¥2,500",
          tag: "移動",
        },
        {
          icon: "🍲",
          title: "純血統うるまアグーしゃぶしゃぶ 金とん 松山本店",
          desc: "阿古豬涮涮鍋專門店，地址：沖縄県那覇市松山1-1-10（17:00–22:30）。",
          time: "17:30–19:30",
          hours: "17:00–22:30",
          cost: "¥6,000–¥10,000",
          tag: "主餐",
          map: "https://www.google.com/maps/search/?api=1&query=%E9%87%91%E3%81%A8%E3%82%93+%E6%9D%BE%E5%B1%B1%E6%9C%AC%E5%BA%97",
        },
        {
          icon: "🚶",
          title: "松山區域步行移動",
          desc: "餐廳與備案燒肉皆在松山區域附近。",
          time: "19:30–19:45",
          hours: "依狀況",
          cost: "¥0",
          tag: "移動",
        },
        {
          icon: "🥩",
          title: "和牛焼肉 尚（那覇・松山）",
          desc: "和牛燒肉，地址：〒900-0032 沖縄県那覇市松山1-3-18。",
          time: "19:45–21:15（擇一）",
          hours: "依店家",
          cost: "¥7,000–¥15,000",
          tag: "備案",
          map: "https://www.google.com/maps/search/?api=1&query=%E5%92%8C%E7%89%9B%E7%84%BC%E8%82%89+%E5%B0%9A+%E9%82%A3%E8%A6%87",
        },
        {
          icon: "🍖",
          title: "Yakiniku Restaurant KAZUCHAN（焼肉家かずちゃん 那覇国際通り店）",
          desc: "大眾系燒肉，地址：沖縄県那覇市松尾1-4-2 テラスビル1F。",
          time: "19:45–21:00（擇一）",
          hours: "依店家",
          cost: "¥4,000–¥8,000",
          tag: "備案",
          map: "https://www.google.com/maps/search/?api=1&query=%E7%84%BC%E8%82%89%E5%AE%B6%E3%81%8B%E3%81%9A%E3%81%A1%E3%82%83%E3%82%93+%E9%82%A3%E8%A6%87%E5%9B%BD%E9%9A%9B%E9%80%9A%E3%82%8A",
        },
      ],
    },
    {
      key: "day4",
      tab: "Day 4",
      title: "Day 4: 最後補刀＋回程",
      date: "1/2（五）",
      desc: "白天收尾購物與最後一餐，傍晚出發去機場。",
      budget: { tickets: "¥0", food: "¥6,000–¥15,000", total: "¥6,000–¥15,000" },
      spots: [
        {
          icon: "🥓",
          title: "今帰仁アグーしゃぶしゃぶ 長堂屋 那覇店",
          desc: "阿古豬名店之一，地址：沖縄県那覇市安里2-4-17（18:00–23:00）。",
          time: "18:00–19:10（若改晚班/加住）",
          hours: "18:00–23:00",
          cost: "¥6,000–¥10,000",
          tag: "主餐",
          map: "https://www.google.com/maps/search/?api=1&query=%E9%95%B7%E5%A0%82%E5%B1%8B+%E9%82%A3%E8%A6%87",
        },
        {
          icon: "🚶",
          title: "飯店 → 燒肉本部牧場",
          desc: "縣廳前到久茂地一帶步行可達。",
          time: "11:40–12:00",
          hours: "依狀況",
          cost: "¥0",
          tag: "移動",
        },
        {
          icon: "🥩",
          title: "燒肉本部牧場 那霸店（Yakiniku Motobu Bokujou）",
          desc: "本部牛燒肉，地址：沖繩縣那霸市久茂地2-1-3 MK大廈3F（午 11:30–15:00 / 晚 17:00–22:00）。",
          time: "12:00–13:30",
          hours: "11:30–15:00 / 17:00–22:00",
          cost: "¥5,000–¥12,000",
          tag: "備案",
          map: "https://www.google.com/maps/search/?api=1&query=%E3%82%82%E3%81%A8%E3%81%B6%E7%89%A7%E5%A0%B4+%E9%82%A3%E8%A6%87%E5%BA%97",
        },
        {
          icon: "🚗",
          title: "飯店 → 那霸機場",
          desc: "建議搭計程車或單軌，尖峰時段預留緩衝。",
          time: "17:30–18:10",
          hours: "依交通",
          cost: "¥260–¥1,600",
          tag: "移動",
        },
        {
          icon: "🧳",
          title: "前往那霸機場＋19:30 起飛",
          desc: "建議最晚 17:30–18:00 從市區出發（看交通與你購物最後一分鐘的掙扎）。",
          time: "17:30–19:30",
          hours: "依交通",
          cost: "單軌/計程車/巴士",
          tag: "必做",
        },
      ],
    },
  ],
};

function yen(n){ return n; }

function renderStats(){
  const el = document.getElementById("stats");
  el.innerHTML = itinerary.stats.map(s => `
    <div class="stat">
      <div class="stat-k">${s.k}</div>
      <div class="stat-v">${s.v}</div>
    </div>
  `).join("");
}

function spotHTML(s){
  const tag = s.tag ? `<span class="tag">${s.tag}</span>` : "";
  const map = s.map ? `<a href="${s.map}" target="_blank" rel="noreferrer">Google 地圖</a>` : "";
  return `
    <details class="spot">
      <summary>
        <div class="spot-left">
          <div class="icon">${s.icon || "📍"}</div>
          <div class="spot-title">${s.title}</div>
          ${tag}
        </div>
        <div class="kebab">⋮⋮</div>
      </summary>
      <div class="spot-body">
        <p>${s.desc || ""}</p>
        <div class="meta-line">
          <span>⏱️ ${s.time || "—"}</span>
          <span>🕒 ${s.hours || "—"}</span>
          <span>💴 ${s.cost || "—"}</span>
          ${map ? `<span>🗺️ ${map}</span>` : ""}
        </div>
      </div>
    </details>
  `;
}

function renderDays(){
  const el = document.getElementById("days");
  el.innerHTML = itinerary.days.map(d => `
    <article class="day" id="${d.key}">
      <h2 class="gradient-title">${d.title} <span class="tag">${d.date}</span></h2>
      <p class="desc">${d.desc}</p>

      <div class="budget">
        <span>門票: <b>${yen(d.budget.tickets)}</b></span>
        <span>餐食: <b>${yen(d.budget.food)}</b></span>
        <span>每日小計: <b>${yen(d.budget.total)}</b></span>
      </div>

      <div class="spots">
        ${d.spots.map(spotHTML).join("")}
      </div>
    </article>
  `).join("");
}

function renderTabs(){
  const el = document.getElementById("dayTabs");
  el.innerHTML = itinerary.days.map((d, idx) => `
    <button class="tab ${idx===0 ? "active" : ""}" data-target="${d.key}">
      ${d.tab}
    </button>
  `).join("");

  el.addEventListener("click", (e) => {
    const btn = e.target.closest(".tab");
    if(!btn) return;

    document.querySelectorAll(".tab").forEach(t => t.classList.remove("active"));
    btn.classList.add("active");

    const target = btn.dataset.target;
    const section = document.getElementById(target);
    if(section){
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  });
}

function init(){
  document.getElementById("title").textContent = itinerary.title;
  document.getElementById("subtitle").textContent = itinerary.subtitle;
  renderStats();
  renderTabs();
  renderDays();
}

init();
