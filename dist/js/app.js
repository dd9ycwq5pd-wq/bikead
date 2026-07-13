/* ═══════════════════════════════════════════════════════
   BIKE AD — site behaviour
   ═══════════════════════════════════════════════════════ */

/* ── EDIT ME: business details (placeholders) ─────────── */
const CONFIG = {
  // WhatsApp number in international format, digits only (20 = Egypt)
  whatsapp: "201154009439",
  waMessageEn: "Hi Bike Ad! I want to put my ad on your bikes.",
  waMessageAr: "مرحبًا بايك آد! أريد وضع إعلاني على دراجاتكم.",
};
/* ─────────────────────────────────────────────────────── */

/* ── i18n ─────────────────────────────────────────────── */
const I18N = {
  en: {
    loader: "BIKE AD",
    "a11y.skip": "Skip to content",
    "nav.how": "How it works", "nav.reach": "Reach",
    "nav.coverage": "Coverage", "nav.pricing": "Pricing", "nav.cta": "Book your ad",
    "scrub.l1": "Ads that chase",
    "scrub.l2": "Ads that are unavoidable",
    "st.s1a": "Bike Ad turns everyday streets into ",
    "st.s1b": "high-impact OOH media.",
    "st.s2a": "Triple-sided LED panels on motorbikes put your message ",
    "st.s2b": "at eye level",
    "st.s2c": " — compared to all other forms of advertising.",
    "hero.kicker": "Moving LED billboards · Cairo",
    "hero.l1": "YOUR BRAND", "hero.l2": "ON THE MOVE",
    "hero.sub": "Bright LED screens mounted on delivery motorbikes, looping your ad through the busiest streets — traffic jams become your audience.",
    "hero.cta1": "Put my ad on a bike", "hero.cta2": "How it works ↓", "hero.scroll": "scroll",
    "how.title": "How it works", "how.sub": "From your artwork to the streets in 48 hours.",
    "how.s1t": "Send your ad", "how.s1p": "Send us your design — or we create one for you. Static image or short animation, sized for the LED screen.",
    "how.s2t": "We load the loop", "how.s2p": "Your ad joins the rotation on our bike-mounted LED screens, switching every few seconds with a limited number of slots.",
    "how.s3t": "Bikes hit the streets", "how.s3p": "Delivery riders cover the city all day — main roads, bridges, squares — your ad glowing at eye level in traffic.",
    "how.s4t": "You get the report", "how.s4p": "Every summary is published on the Bike Ad app: routes covered, hours on the road, and estimated impressions for your campaign.",
    "reach.title": "Reach that rides everywhere",
    "reach.bikes": "bikes on the road", "reach.impressions": "monthly impressions",
    "reach.hours": "on the street, every day", "reach.km": "covered per bike, daily",
    "video.title": "Watch it in action", "video.play": "Play the promo",
    "cov.title": "Where the bikes ride", "cov.sub": "Routes are optimized according to traffic data, ensuring bikes hit the busiest streets at the busiest hours.",
    "cov.a1": "Nasr City", "cov.a2": "Heliopolis", "cov.a3": "Downtown", "cov.a4": "Zamalek",
    "cov.a5": "Maadi", "cov.a6": "6th of October", "cov.a7": "New Cairo", "cov.more": "+ your area on request",
    "partners.title": "Our partners",
    "price.title": "Simple packages", "price.sub": "Two ways to ride — a ready-to-go package, or a fully custom chase.",
    "price.egp": "EGP", "price.week": "/week", "price.custom": "Custom", "price.popular": "Most popular", "price.cta": "Get a quote",
    "price.p1t": "City Mover", "price.p1d": "Serious visibility",
    "price.p1f1": "10 bikes", "price.p1f2": "3,600,000 monthly impressions",
    "price.p1f3": "1 ad slot in the loop, repeating every 60 seconds",
    "price.p1f4": "Priority high-traffic routes",
    "price.p1f5": "Route tracking + weekly impressions report on the Bike Ad app",
    "price.p2t": "CHASE", "price.p2d": "Hyper-targeted, fully custom",
    "price.p2f1": "Custom number of bikes", "price.p2f2": "Your own exclusive ad loop",
    "price.p2f3": "Hyper-targeted routes that chase your customer base",
    "price.p2f4": "Product giveaways in hotspots — schools, workplaces & more",
    "price.p2f5": "Daily summary report, published on the Bike Ad app",
    "contact.title": "Ready to ride?",
    "contact.sub": "Message us on WhatsApp — send your logo and we'll reply with a mockup of your ad on the bike screen, free.",
    "contact.btn": "Chat on WhatsApp",
    "footer.tag": "Ads that never sit still.",
    ads: ["YOUR AD HERE", "PIZZA 50% OFF 🍕", "GRAND OPENING ✨", "SALE — TODAY ONLY"],
  },
  ar: {
    loader: "بايك آد",
    "a11y.skip": "تخطَّ إلى المحتوى",
    "nav.how": "كيف تعمل", "nav.reach": "الانتشار",
    "nav.coverage": "التغطية", "nav.pricing": "الباقات", "nav.cta": "احجز إعلانك",
    "scrub.l1": "إعلانات تطاردك",
    "scrub.l2": "إعلانات لا يمكن تجاهلها",
    "st.s1a": "بايك آد يحوّل الشوارع اليومية إلى ",
    "st.s1b": "إعلانات خارجية عالية التأثير.",
    "st.s2a": "شاشات LED ثلاثية الجوانب على الدراجات النارية تضع رسالتك ",
    "st.s2b": "في مستوى النظر",
    "st.s2c": " — مقارنةً بكل أشكال الإعلان الأخرى.",
    "hero.kicker": "لوحات LED متحركة · القاهرة",
    "hero.l1": "علامتك التجارية", "hero.l2": "تتحرك في المدينة",
    "hero.sub": "شاشات LED مضيئة مركّبة على دراجات التوصيل، تعرض إعلانك بالتناوب في أكثر الشوارع ازدحامًا — الزحمة تتحول إلى جمهورك.",
    "hero.cta1": "أعلن على دراجة", "hero.cta2": "كيف تعمل ↓", "hero.scroll": "مرر",
    "how.title": "كيف تعمل الخدمة", "how.sub": "من تصميمك إلى الشارع خلال ٤٨ ساعة.",
    "how.s1t": "أرسل إعلانك", "how.s1p": "أرسل لنا تصميمك — أو نصممه لك. صورة ثابتة أو رسم متحرك قصير بمقاس شاشة LED.",
    "how.s2t": "نضيفه إلى الحلقة", "how.s2p": "ينضم إعلانك إلى التناوب على شاشات الدراجات، ويتبدل كل بضع ثوانٍ ضمن عدد محدود من الإعلانات.",
    "how.s3t": "الدراجات تنطلق", "how.s3p": "سائقو التوصيل يجوبون المدينة طوال اليوم — طرق رئيسية وكباري وميادين — وإعلانك مضيء في مستوى النظر وسط الزحام.",
    "how.s4t": "تستلم التقرير", "how.s4p": "كل تقرير يُنشر عبر تطبيق بايك آد: المسارات المقطوعة، ساعات التواجد في الشارع، وتقدير عدد المشاهدات لحملتك.",
    "reach.title": "انتشار يتحرك في كل مكان",
    "reach.bikes": "دراجات في الشوارع", "reach.impressions": "مشاهدة شهريًا",
    "reach.hours": "ساعة في الشارع يوميًا", "reach.km": "كم لكل دراجة يوميًا",
    "video.title": "شاهدها على أرض الواقع", "video.play": "شغّل الفيديو",
    "cov.title": "أين تسير الدراجات", "cov.sub": "المسارات تُحسَّن وفق بيانات المرور لنضمن مرور الدراجات في أكثر الشوارع ازدحامًا خلال ساعات الذروة.",
    "cov.a1": "مدينة نصر", "cov.a2": "مصر الجديدة", "cov.a3": "وسط البلد", "cov.a4": "الزمالك",
    "cov.a5": "المعادي", "cov.a6": "السادس من أكتوبر", "cov.a7": "القاهرة الجديدة", "cov.more": "+ منطقتك عند الطلب",
    "partners.title": "شركاؤنا",
    "price.title": "باقات بسيطة", "price.sub": "طريقتان للانطلاق — باقة جاهزة، أو حملة مخصصة بالكامل.",
    "price.egp": "ج.م", "price.week": "/أسبوع", "price.custom": "حسب الطلب", "price.popular": "الأكثر طلبًا", "price.cta": "اطلب عرض سعر",
    "price.p1t": "جوّاب المدينة", "price.p1d": "ظهور جاد",
    "price.p1f1": "١٠ دراجات", "price.p1f2": "٣٬٦٠٠٬٠٠٠ مشاهدة شهريًا",
    "price.p1f3": "إعلان واحد في الحلقة يتكرر كل ٦٠ ثانية",
    "price.p1f4": "أولوية للطرق المزدحمة",
    "price.p1f5": "تتبع المسارات + تقرير مشاهدات أسبوعي عبر تطبيق بايك آد",
    "price.p2t": "CHASE", "price.p2d": "استهداف فائق، مخصص بالكامل",
    "price.p2f1": "عدد الدراجات حسب طلبك", "price.p2f2": "حلقة إعلانية حصرية لك وحدك",
    "price.p2f3": "مسارات فائقة الاستهداف تطارد جمهورك أينما كان",
    "price.p2f4": "توزيع عيّنات وهدايا في النقاط المزدحمة — مدارس وأماكن عمل وغيرها",
    "price.p2f5": "تقرير يومي مختصر يُنشر عبر تطبيق بايك آد",
    "contact.title": "جاهز تنطلق؟",
    "contact.sub": "راسلنا على واتساب — أرسل شعارك ونرد عليك بتصميم تجريبي لإعلانك على شاشة الدراجة، مجانًا.",
    "contact.btn": "تواصل عبر واتساب",
    "footer.tag": "إعلانات لا تعرف الوقوف.",
    ads: ["إعلانك هنا", "بيتزا خصم ٥٠٪ 🍕", "افتتاح كبير ✨", "تخفيضات اليوم فقط"],
  },
};

let lang = localStorage.getItem("bikead-lang") || "en";

function applyLang() {
  const dict = I18N[lang];
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const k = el.getAttribute("data-i18n");
    if (dict[k]) el.textContent = dict[k];
  });
  document.querySelectorAll("[data-i18n-ph]").forEach((el) => {
    const k = el.getAttribute("data-i18n-ph");
    if (dict[k]) el.placeholder = dict[k];
  });
  document.getElementById("langToggle").querySelector("span").textContent = lang === "en" ? "عربي" : "EN";
  const wa = `https://wa.me/${CONFIG.whatsapp}?text=${encodeURIComponent(lang === "ar" ? CONFIG.waMessageAr : CONFIG.waMessageEn)}`;
  document.getElementById("waMain").href = wa;
  document.getElementById("waFloat").href = wa;
}

/* ── language toggle ──────────────────────────────────── */
document.getElementById("langToggle").addEventListener("click", () => {
  lang = lang === "en" ? "ar" : "en";
  localStorage.setItem("bikead-lang", lang);
  adIndex = 0;
  applyLang();
  if (window.ScrollTrigger) ScrollTrigger.refresh();
});

/* ── custom cursor ────────────────────────────────────── */
(function cursor() {
  const dot = document.getElementById("cursorDot");
  const ring = document.getElementById("cursorRing");
  if (matchMedia("(hover: none)").matches) return;
  let x = innerWidth / 2, y = innerHeight / 2, rx = x, ry = y;
  addEventListener("mousemove", (e) => { x = e.clientX; y = e.clientY; });
  (function loop() {
    rx += (x - rx) * 0.16;
    ry += (y - ry) * 0.16;
    dot.style.transform = `translate(${x}px, ${y}px) translate(-50%,-50%)`;
    ring.style.transform = `translate(${rx}px, ${ry}px) translate(-50%,-50%)`;
    requestAnimationFrame(loop);
  })();
  document.querySelectorAll("a, button, input, .plan, .coverage-list li, .step").forEach((el) => {
    el.addEventListener("mouseenter", () => ring.classList.add("hovering"));
    el.addEventListener("mouseleave", () => ring.classList.remove("hovering"));
  });
})();

/* ── nav scrolled state ───────────────────────────────── */
addEventListener("scroll", () => {
  document.getElementById("nav").classList.toggle("scrolled", scrollY > 30);
}, { passive: true });

/* ── stat counters ────────────────────────────────────── */
function runCounter(el) {
  const target = +el.dataset.count;
  const suffix = el.dataset.suffix || "";
  const dur = 1600;
  const t0 = performance.now();
  const fmt = (n) => (lang === "ar" ? n.toLocaleString("ar-EG") : n.toLocaleString("en-US"));
  // size the number for its final (longest) form up front, so big
  // figures like 3,600,000 never overflow the card mid-count
  el.style.fontSize = "";
  el.textContent = fmt(target) + suffix;
  let size = parseFloat(getComputedStyle(el).fontSize);
  let guard = 12;
  while (el.scrollWidth > el.clientWidth + 1 && guard--) {
    size *= 0.92;
    el.style.fontSize = size + "px";
  }
  (function frame(t) {
    const p = Math.min((t - t0) / dur, 1);
    const eased = 1 - Math.pow(1 - p, 3);
    el.textContent = fmt(Math.round(target * eased)) + suffix;
    if (p < 1) requestAnimationFrame(frame);
  })(t0);
}

/* ── video ────────────────────────────────────────────── */
(function video() {
  const frame = document.getElementById("videoFrame");
  const vid = document.getElementById("promoVideo");
  document.getElementById("videoPlay").addEventListener("click", () => {
    frame.classList.add("playing");
    vid.controls = true;
    vid.play();
  });
  vid.addEventListener("ended", () => {
    frame.classList.remove("playing");
    vid.controls = false;
  });
})();

/* ── coverage map dots riding the routes ─────────────── */
(function covDots() {
  const map = document.getElementById("covMap");
  if (!map) return;
  const pairs = [["r1", "d1", 9000], ["r2", "d2", 12000], ["r3", "d3", 15000]];
  pairs.forEach(([r, d, dur]) => {
    const path = map.querySelector("." + r);
    const dot = map.querySelector("." + d);
    const len = path.getTotalLength();
    const t0 = performance.now() + Math.random() * dur;
    (function frame(t) {
      const p = (((t - t0) % dur) + dur) % dur / dur;
      const pt = path.getPointAtLength(p * len);
      dot.setAttribute("cx", pt.x);
      dot.setAttribute("cy", pt.y);
      requestAnimationFrame(frame);
    })(performance.now());
  });
})();

/* ── reveals + hero intro ─────────────────────────────── */
function initAnimations() {
  const counters = document.querySelectorAll(".stat-num[data-count]");
  if (window.gsap && window.ScrollTrigger) {
    gsap.registerPlugin(ScrollTrigger);
    // the hero now sits below the scrub opener, so its intro fires on scroll
    gsap.to(".hero-title .line > span", {
      y: 0, duration: 1.1, ease: "power4.out", stagger: 0.12,
      scrollTrigger: { trigger: "#hero", start: "top 75%" },
    });
    gsap.utils.toArray(".reveal").forEach((el) => {
      gsap.to(el, {
        opacity: 1, y: 0, duration: 0.9, ease: "power3.out",
        scrollTrigger: { trigger: el, start: "top 88%" },
      });
    });
    counters.forEach((el) => {
      ScrollTrigger.create({ trigger: el, start: "top 88%", once: true, onEnter: () => runCounter(el) });
    });
  } else {
    // cdn blocked — graceful fallback
    document.body.classList.add("no-gsap");
    document.querySelectorAll(".hero-title .line > span").forEach((s) => (s.style.transform = "none"));
    const io = new IntersectionObserver((entries) => {
      entries.forEach((en) => {
        if (!en.isIntersecting) return;
        en.target.classList.add("shown");
        const num = en.target.querySelector?.(".stat-num[data-count]");
        if (num) runCounter(num);
        if (en.target.matches(".stat-num[data-count]")) runCounter(en.target);
        io.unobserve(en.target);
      });
    }, { rootMargin: "0px 0px -10% 0px" });
    document.querySelectorAll(".reveal").forEach((el) => io.observe(el));
  }
}

/* ── preloader ────────────────────────────────────────── */
(function preloader() {
  const bar = document.querySelector(".preloader-bar i");
  let p = 0;
  const iv = setInterval(() => {
    p = Math.min(p + 8 + Math.random() * 14, 92);
    bar.style.width = p + "%";
  }, 120);
  let finished = false;
  const finish = () => {
    if (finished) return;
    finished = true;
    clearInterval(iv);
    bar.style.width = "100%";
    setTimeout(() => {
      document.getElementById("preloader").classList.add("done");
      initAnimations();
    }, 350);
  };
  if (document.readyState === "complete") setTimeout(finish, 600);
  else addEventListener("load", () => setTimeout(finish, 600));
  // never trap the user if load hangs on the big video
  setTimeout(finish, 3500);
})();

/* ── opening scrub: first 2s of the promo, frame by frame ──
      48 jpegs in assets/scrub, drawn to a sticky canvas as the
      user scrolls. The clip cuts shots at frame 46, so line 1
      rides shot 1 and line 2 lands right on the cut. ── */
(function scrub() {
  const wrap = document.getElementById("scrub");
  const canvas = document.getElementById("scrubCanvas");
  if (!wrap || !canvas) return;
  const ctx = canvas.getContext("2d");
  const line1 = document.getElementById("scrubLine1");
  const line2 = document.getElementById("scrubLine2");
  const hint = document.getElementById("scrubHint");

  const COUNT = 48;
  const FRAME_END = 0.62; // frames finish here; the rest of the pin holds the last shot
  const frames = new Array(COUNT);
  const src = (i) => `assets/scrub/frame_${String(i).padStart(3, "0")}.jpg`;

  function load(i) {
    if (frames[i]) return;
    const img = new Image();
    img.decoding = "async";
    img.src = src(i);
    // repaint when a better frame for the current position arrives
    img.onload = () => { if (i === frameIndex || !drawnExact) render(); };
    frames[i] = img;
  }
  // frame 0 immediately, a coarse pass next, the rest once the page settles
  load(0);
  for (let i = 0; i < COUNT; i += 6) load(i);
  const loadAll = () => { for (let i = 0; i < COUNT; i++) load(i); };
  addEventListener("load", loadAll);
  setTimeout(loadAll, 1500);

  // if the exact frame isn't downloaded yet, draw the closest one that is
  function nearest(i) {
    const ok = (f) => f && f.complete && f.naturalWidth;
    for (let d = 0; d < COUNT; d++) {
      if (ok(frames[i - d])) return frames[i - d];
      if (ok(frames[i + d])) return frames[i + d];
    }
    return null;
  }

  let frameIndex = 0, drawnExact = false;
  function render() {
    const img = nearest(frameIndex);
    if (!img) return;
    drawnExact = img === frames[frameIndex];
    const cw = canvas.width, ch = canvas.height;
    const s = Math.max(cw / img.naturalWidth, ch / img.naturalHeight);
    const w = img.naturalWidth * s, h = img.naturalHeight * s;
    ctx.drawImage(img, (cw - w) / 2, (ch - h) / 2, w, h);
  }

  function resize() {
    const dpr = Math.min(devicePixelRatio || 1, 2);
    canvas.width = Math.round(canvas.clientWidth * dpr);
    canvas.height = Math.round(canvas.clientHeight * dpr);
    render();
  }
  addEventListener("resize", resize);

  const clamp01 = (v) => Math.max(0, Math.min(1, v));
  const span = (p, a, b) => clamp01((p - a) / (b - a));

  let ticking = false;
  function update() {
    ticking = false;
    const r = wrap.getBoundingClientRect();
    const p = clamp01(-r.top / (r.height - innerHeight));

    const f = Math.round(span(p, 0, FRAME_END) * (COUNT - 1));
    if (f !== frameIndex) { frameIndex = f; render(); }

    // line 1 is on from the start (css handles its entrance) and
    // fades as the bikes close in
    const o1 = 1 - span(p, 0.42, 0.52);
    line1.style.opacity = o1;
    line1.style.transform = `scale(${1 + p * 0.1})`;

    // line 2 lands on the cut and stays until the section releases
    const o2 = span(p, 0.64, 0.74);
    line2.style.opacity = o2;
    line2.style.transform = `translateY(${(1 - o2) * 28}px)`;

    hint.style.opacity = 1 - span(p, 0.02, 0.08);
  }
  addEventListener("scroll", () => {
    if (!ticking) { ticking = true; requestAnimationFrame(update); }
  }, { passive: true });

  resize();
  update();
})();

/* ── statement ride: pinned scene, jeskojets-style ──
      both sentences sit left + right from the start; the bike
      rides up full-size from below and passes between them;
      on further scroll the sentences split outward and fade,
      and the bike holds alone for the rest of the runway. ── */
(function ride() {
  const wrap = document.getElementById("why");
  const bike = document.getElementById("rideBike");
  if (!wrap || !bike) return;
  const s1 = document.getElementById("rideS1");
  const s2 = document.getElementById("rideS2");
  const speed = document.getElementById("rideSpeed");

  const clamp01 = (v) => Math.max(0, Math.min(1, v));
  const span = (p, a, b) => clamp01((p - a) / (b - a));

  /* orbit: the kling camera-arc clip (rear → low three-quarter,
     both ad panels visible), scrubbed frame by frame in the hold.
     The page still is a centre crop of the square clip frames, so
     drawing with the same crop makes frame 0 land pixel-perfect
     and the still→canvas takeover is invisible. */
  const canvas = document.getElementById("orbitCanvas");
  const octx = canvas.getContext("2d");
  const O_COUNT = 56;
  const CROP = { x: 548 / 4096, y: 348 / 4096, w: 3000 / 4096, h: 3400 / 4096 };
  const oFrames = new Array(O_COUNT);
  const oSrc = (i) => `assets/orbit/frame_${String(i).padStart(3, "0")}.jpg`;
  let oIndex = 0, oDrawnExact = false, oStarted = false;

  function oLoad(i) {
    if (oFrames[i]) return;
    const img = new Image();
    img.decoding = "async";
    img.src = oSrc(i);
    img.onload = () => { if (i === oIndex || !oDrawnExact) oRender(); };
    oFrames[i] = img;
  }
  // kicked off the first time the section is touched
  function oStart() {
    if (oStarted) return;
    oStarted = true;
    for (let i = 0; i < O_COUNT; i += 7) oLoad(i);
    setTimeout(() => { for (let i = 0; i < O_COUNT; i++) oLoad(i); }, 800);
  }
  function oNearest(i) {
    const ok = (f) => f && f.complete && f.naturalWidth;
    for (let d = 0; d < O_COUNT; d++) {
      if (ok(oFrames[i - d])) return oFrames[i - d];
      if (ok(oFrames[i + d])) return oFrames[i + d];
    }
    return null;
  }
  function oRender() {
    const img = oNearest(oIndex);
    if (!img || !canvas.width) return;
    oDrawnExact = img === oFrames[oIndex];
    octx.drawImage(
      img,
      img.naturalWidth * CROP.x, img.naturalHeight * CROP.y,
      img.naturalWidth * CROP.w, img.naturalHeight * CROP.h,
      0, 0, canvas.width, canvas.height
    );
  }
  function oResize() {
    const dpr = Math.min(devicePixelRatio || 1, 2);
    canvas.width = Math.round(canvas.clientWidth * dpr);
    canvas.height = Math.round(canvas.clientHeight * dpr);
    oRender();
  }
  addEventListener("resize", oResize);
  oResize();

  let ticking = false;
  function update() {
    ticking = false;
    const r = wrap.getBoundingClientRect();
    const p = clamp01(-r.top / (r.height - innerHeight));
    if (p > 0) oStart();

    // the ride: full size throughout, decelerating up from below
    // the fold to settle just above centre (units are % of bike
    // height, so the start is off-screen on any viewport)
    const t = span(p, 0.015, 0.38);
    const arrive = 1 - Math.pow(1 - t, 2.2);
    bike.style.transform = `translate(-50%, calc(-50% + ${(130 - 136 * arrive).toFixed(2)}%))`;

    // handoff: as the bike settles, the sentences slide down and
    // away (accelerating, fading late) so the world appears to
    // keep rushing past — the bike reads as still climbing
    const out = span(p, 0.38, 0.55);
    const slide = out * out;
    const fade = 1 - span(p, 0.47, 0.56);
    s1.style.opacity = fade;
    s2.style.opacity = fade;
    s1.style.transform = `translateY(-50%) translateY(${(slide * 85).toFixed(2)}vh)`;
    s2.style.transform = `translateY(-50%) translateY(${(slide * 85).toFixed(2)}vh)`;

    // road streaks: strong while anything is moving, gone by the
    // time the camera starts circling the parked bike
    const riding = Math.min(span(p, 0.02, 0.09), 1 - span(p, 0.5, 0.6));
    speed.style.opacity = (riding * 0.9).toFixed(3);

    // the inspection: scrub the camera arc across the hold
    const o = span(p, 0.62, 0.96);
    canvas.style.opacity = p >= 0.62 ? 1 : 0;
    const f = Math.round(o * (O_COUNT - 1));
    if (f !== oIndex) { oIndex = f; oRender(); }
  }
  addEventListener("scroll", () => {
    if (!ticking) { ticking = true; requestAnimationFrame(update); }
  }, { passive: true });
  addEventListener("resize", update);
  update();
})();

/* ── boot ─────────────────────────────────────────────── */
document.getElementById("year").textContent = new Date().getFullYear();
applyLang();
