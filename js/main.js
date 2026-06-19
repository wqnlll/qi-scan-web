/**
 * ============================================================
 * Qi Scan Web — Main JavaScript
 * 功能：导航切换 / 语言切换(en-zh) / 扫描模拟 / 滚动动画
 * ============================================================
 */

// ---------- 多语言字典 ----------
const i18n = {
  en: {
    // Nav
    nav_home: "Home",
    nav_scan: "Scan Tools",
    nav_tutorials: "Tutorials",
    nav_blog: "Blog",
    nav_about: "About",
    nav_start: "Get Started",

    // Hero
    hero_title: "AI-Powered Website Scanner",
    hero_subtitle: "Analyze any website, brand, or product in seconds. Get actionable reports with SEO scores, performance metrics, and optimization tips — all powered by AI.",
    hero_btn_scan: "Start Scanning",
    hero_btn_learn: "Learn More",
    hero_stat_tools: "Scan Tools",
    hero_stat_users: "Active Users",
    hero_stat_reports: "Reports Generated",

    // Features
    features_title: "Powerful Scan Tools",
    features_subtitle: "Three core scanning tools to analyze everything about your online presence.",
    feature_website_title: "Website Scan",
    feature_website_desc: "Deep analysis of any website — SEO, speed, mobile-friendliness, security, and more.",
    feature_brand_title: "Brand Scan",
    feature_brand_desc: "Evaluate your brand's online presence, social media footprint, and competitor positioning.",
    feature_product_title: "Product Scan",
    feature_product_desc: "Assess product landing pages for conversion optimization, UX quality, and trust signals.",

    // How it works
    how_title: "How It Works",
    how_step1: "Enter URL or Name",
    how_step1_desc: "Input the website URL, brand name, or product description.",
    how_step2: "AI Scans Everything",
    how_step2_desc: "Our AI engine analyzes dozens of factors across multiple dimensions.",
    how_step3: "Get Your Report",
    how_step3_desc: "Receive a detailed report with scores, issues, and actionable recommendations.",

    // CTA section
    cta_title: "Ready to Scan?",
    cta_desc: "Start analyzing your website, brand, or product for free.",
    cta_btn: "Start Free Scan",

    // Scan pages common
    scan_input_placeholder_url: "Enter website URL (e.g., https://example.com)",
    scan_input_placeholder_brand: "Enter brand name (e.g., Nike)",
    scan_input_placeholder_product: "Enter product description (e.g., Wireless Bluetooth Headphones)",
    scan_btn: "Scan Now",
    scan_scanning: "Scanning...",
    scan_complete: "Complete!",
    scan_score_label: "Overall Score",
    scan_ssl: "SSL Certificate",
    scan_speed: "Page Speed",
    scan_mobile: "Mobile Friendly",
    scan_seo: "SEO Optimization",
    scan_security: "Security Headers",
    scan_structured: "Structured Data",

    // Tutorials
    tutorials_title: "Tutorials",
    tutorials_subtitle: "Step-by-step guides to help you build and grow your online presence.",
    tutorial_tag_ai: "AI Tools",
    tutorial_tag_seo: "SEO",
    tutorial_tag_webdev: "Web Dev",
    tutorial_tag_monetize: "Monetization",
    tutorial_read_time: "min read",

    // Blog
    blog_title: "Blog",
    blog_subtitle: "Latest news, tips, and insights about AI, web development, and online monetization.",

    // About
    about_title: "About Qi Scan",
    about_desc1: "Qi Scan is an AI-powered scanning platform designed to help businesses, entrepreneurs, and developers understand their online presence.",
    about_desc2: "Our mission is to make professional website analysis accessible to everyone — not just large enterprises with big budgets.",
    about_desc3: "Founded in 2026, we believe that transparency and data-driven insights are the foundation of online success.",

    // Footer
    footer_desc: "AI-powered scanning tools for the modern web. Analyze, optimize, and grow your online presence.",
    footer_product: "Product",
    footer_tools: "Tools",
    footer_tutorials: "Tutorials",
    footer_pricing: "Pricing",
    footer_company: "Company",
    footer_about: "About",
    footer_blog: "Blog",
    footer_contact: "Contact",
    footer_legal: "Legal",
    footer_privacy: "Privacy Policy",
    footer_terms: "Terms of Service",
    footer_rights: "All rights reserved.",
    view_all_tutorials: "View All Tutorials",

    // Ad placeholder
    ad_banner: "Advertisement",
    ad_inline: "Sponsored",

    // Search
    search_placeholder: "Search tutorials, blog posts...",

    // Report items
    report_social: "Social Media Presence",
    report_mentions: "Brand Mentions",
    report_domain: "Domain Authority",
    report_sentiment: "Sentiment Score",
    report_competitor: "Competitor Gap",
    report_visual: "Visual Identity",
    report_headline: "Headline Clarity",
    report_cta: "CTA Placement",
    report_social_proof: "Social Proof",
    report_images: "Image Quality",
    report_conversion: "Conversion Score",
    report_trust: "Trust Signals",

    // Contact
    contact_title: "Get in Touch",
    contact_name: "Your Name",
    contact_email: "Email Address",
    contact_message: "Message",
    contact_send: "Send Message",

    // Sidebar
    sidebar_categories: "Categories",
    sidebar_popular: "Popular Posts",
    sidebar_newsletter: "Newsletter",
    sidebar_newsletter_desc: "Get weekly tips on AI, web development, and online monetization.",
    sidebar_subscribe: "Subscribe",
    sidebar_toc: "Table of Contents",
    sidebar_related: "Related Tutorials",

    // Scan page
    related_tools: "Related Tools",

    // Tutorial detail
    pro_tip: "Pro Tip",
    pro_tip_desc: "Use Qi Scan's Website Scanner to analyze your newly built website and identify areas for improvement. It's free!",

    // Blog categories
    blog_cat_ai: "AI",
    blog_cat_monetization: "Monetization",
    blog_cat_tools: "Tools",
    blog_cat_case_study: "Case Study",

    // About page
    our_mission: "Our Mission",
    what_we_offer: "What We Offer",
  },
  zh: {
    nav_home: "首页",
    nav_scan: "扫描工具",
    nav_tutorials: "教程",
    nav_blog: "博客",
    nav_about: "关于",
    nav_start: "开始使用",
    hero_title: "AI 驱动的网页扫描工具",
    hero_subtitle: "几秒钟内分析任何网站、品牌或产品。获取包含 SEO 评分、性能指标和优化建议的可操作报告 — 全部由 AI 驱动。",
    hero_btn_scan: "开始扫描",
    hero_btn_learn: "了解更多",
    hero_stat_tools: "扫描工具",
    hero_stat_users: "活跃用户",
    hero_stat_reports: "生成报告",
    features_title: "强大的扫描工具",
    features_subtitle: "三大核心扫描工具，全面分析您的线上表现。",
    feature_website_title: "网站扫描",
    feature_website_desc: "深度分析任何网站 — SEO、速度、移动端适配、安全性等。",
    feature_brand_title: "品牌扫描",
    feature_brand_desc: "评估品牌在线影响力、社交媒体足迹和竞品定位。",
    feature_product_title: "产品扫描",
    feature_product_desc: "评估产品落地页的转化率优化、用户体验和信任信号。",
    how_title: "工作原理",
    how_step1: "输入网址或名称",
    how_step1_desc: "输入网站 URL、品牌名称或产品描述。",
    how_step2: "AI 全面扫描",
    how_step2_desc: "我们的 AI 引擎从多个维度分析数十个因素。",
    how_step3: "获取报告",
    how_step3_desc: "接收包含评分、问题和可操作建议的详细报告。",
    cta_title: "准备好扫描了吗？",
    cta_desc: "免费开始分析您的网站、品牌或产品。",
    cta_btn: "免费扫描",
    scan_input_placeholder_url: "输入网站地址（例如 https://example.com）",
    scan_input_placeholder_brand: "输入品牌名称（例如 Nike）",
    scan_input_placeholder_product: "输入产品描述（例如 无线蓝牙耳机）",
    scan_btn: "立即扫描",
    scan_scanning: "扫描中...",
    scan_complete: "完成！",
    scan_score_label: "综合评分",
    scan_ssl: "SSL 证书",
    scan_speed: "页面速度",
    scan_mobile: "移动端适配",
    scan_seo: "SEO 优化",
    scan_security: "安全头信息",
    scan_structured: "结构化数据",
    tutorials_title: "教程",
    tutorials_subtitle: "手把手指南，帮助您建立和扩大线上影响力。",
    tutorial_tag_ai: "AI 工具",
    tutorial_tag_seo: "SEO",
    tutorial_tag_webdev: "网站建设",
    tutorial_tag_monetize: "变现",
    tutorial_read_time: "分钟阅读",
    blog_title: "博客",
    blog_subtitle: "关于 AI、网站开发和在线变现的最新资讯、技巧和见解。",
    about_title: "关于 Qi Scan",
    about_desc1: "Qi Scan 是一个由 AI 驱动的扫描平台，旨在帮助企业、创业者和开发者了解他们的线上表现。",
    about_desc2: "我们的使命是让专业的网站分析对每个人开放 — 不仅仅是预算充足的大型企业。",
    about_desc3: "成立于 2026 年，我们相信透明度和数据驱动的洞察是在线成功的基础。",
    footer_desc: "为现代网络打造的 AI 驱动扫描工具。分析、优化、发展您的线上影响力。",
    footer_product: "产品",
    footer_tools: "工具",
    footer_tutorials: "教程",
    footer_pricing: "定价",
    footer_company: "公司",
    footer_about: "关于",
    footer_blog: "博客",
    footer_contact: "联系我们",
    footer_legal: "法律",
    footer_privacy: "隐私政策",
    footer_terms: "服务条款",
    footer_rights: "保留所有权利。",
    view_all_tutorials: "查看全部教程",
    ad_banner: "广告",
    ad_inline: "赞助商内容",
    search_placeholder: "搜索教程、博客文章...",
    report_social: "社交媒体存在",
    report_mentions: "品牌提及",
    report_domain: "域名权重",
    report_sentiment: "情感评分",
    report_competitor: "竞品差距",
    report_visual: "视觉识别",
    report_headline: "标题清晰度",
    report_cta: "行动号召位置",
    report_social_proof: "社会证明",
    report_images: "图片质量",
    report_conversion: "转化评分",
    report_trust: "信任信号",
    contact_title: "联系我们",
    contact_name: "您的姓名",
    contact_email: "邮箱地址",
    contact_message: "留言内容",
    contact_send: "发送消息",
    sidebar_categories: "分类",
    sidebar_popular: "热门文章",
    sidebar_newsletter: "订阅通讯",
    sidebar_newsletter_desc: "每周获取 AI、网站开发和在线变现的实用技巧。",
    sidebar_subscribe: "订阅",
    sidebar_toc: "目录",
    sidebar_related: "相关教程",
    related_tools: "相关工具",
    pro_tip: "💡 小贴士",
    pro_tip_desc: "使用 Qi Scan 的网站扫描器分析您刚刚构建的网站，找出改进空间。免费！",
    blog_cat_ai: "AI",
    blog_cat_monetization: "变现",
    blog_cat_tools: "工具",
    blog_cat_case_study: "案例研究",
    our_mission: "我们的使命",
    what_we_offer: "我们提供什么",
  }
};

// ---------- 当前语言（从 localStorage 读取，默认 en） ----------
let currentLang = localStorage.getItem('qi-lang') || 'en';

function t(key) {
  return (i18n[currentLang] && i18n[currentLang][key]) || (i18n.en[key]) || '';
}

function applyLanguage() {
  // 替换所有带 data-i18n 属性的元素
  document.querySelectorAll('[data-i18n]').forEach(function (el) {
    const key = el.getAttribute('data-i18n');
    const val = t(key);
    if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
      el.placeholder = val;
    } else if (val) {
      // 有翻译值就直接替换
      el.textContent = val;
    }
    // val 为空时不覆盖，保留 HTML 默认文本
  });

  // 替换所有带 data-i18n-placeholder 属性的 input
  document.querySelectorAll('[data-i18n-placeholder]').forEach(function (el) {
    const key = el.getAttribute('data-i18n-placeholder');
    const val = t(key);
    if (val) el.placeholder = val;
  });

  // 更新语言切换按钮文字
  document.querySelectorAll('[data-lang-switch]').forEach(function (btn) {
    const lang = btn.getAttribute('data-lang-switch');
    btn.textContent = lang === 'zh' ? '中文' : 'English';
  });

  // 更新 HTML lang 属性
  document.documentElement.lang = currentLang;

  // 同步所有页面的导航栏文字（处理没有 data-i18n 的导航链接）
  syncNavLanguage();
}

function switchLang(lang) {
  currentLang = lang;
  localStorage.setItem('qi-lang', lang);
  applyLanguage();
}

/**
 * 同步导航栏文字
 * 有些页面的导航链接没有 data-i18n 属性，用映射表强制同步
 */
function syncNavLanguage() {
  const navLinks = document.querySelector('.nav-links');
  if (!navLinks) return;

  // 导航栏链接映射：按顺序取所有普通链接（排除语言切换按钮和 CTA 按钮）
  const allLinks = Array.from(navLinks.querySelectorAll('a'));
  const navLinksArr = allLinks.filter(function (a) {
    return !a.hasAttribute('data-lang-switch') && !a.classList.contains('btn');
  });

  // 只同步前 5 个（Home, Scan Tools, Tutorials, Blog, About）
  const navKeys = ['nav_home', 'nav_scan', 'nav_tutorials', 'nav_blog', 'nav_about'];
  navLinksArr.forEach(function (link, index) {
    if (index < navKeys.length) {
      const key = navKeys[index];
      const val = t(key);
      if (val) link.textContent = val;
    }
  });
}

// ---------- DOM Ready ----------
document.addEventListener('DOMContentLoaded', function () {

  // 语言切换按钮
  document.querySelectorAll('[data-lang-switch]').forEach(function (btn) {
    btn.addEventListener('click', function (e) {
      e.preventDefault();
      switchLang(this.getAttribute('data-lang-switch'));
    });
  });

  // 初始化语言
  applyLanguage();

  // ===== 移动端导航切换 =====
  const navToggle = document.querySelector('.nav-toggle');
  const navLinks = document.querySelector('.nav-links');

  if (navToggle && navLinks) {
    navToggle.addEventListener('click', function () {
      navLinks.classList.toggle('open');
      const spans = navToggle.querySelectorAll('span');
      if (navLinks.classList.contains('open')) {
        spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
        spans[1].style.opacity = '0';
        spans[2].style.transform = 'rotate(-45deg) translate(5px, -5px)';
      } else {
        spans[0].style.transform = 'none';
        spans[1].style.opacity = '1';
        spans[2].style.transform = 'none';
      }
    });

    navLinks.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        navLinks.classList.remove('open');
        const spans = navToggle.querySelectorAll('span');
        spans[0].style.transform = 'none';
        spans[1].style.opacity = '1';
        spans[2].style.transform = 'none';
      });
    });
  }

  // ===== 导航栏滚动阴影 =====
  const navbar = document.querySelector('.navbar');
  if (navbar) {
    window.addEventListener('scroll', function () {
      navbar.style.boxShadow = window.scrollY > 10
        ? '0 2px 20px rgba(0,0,0,0.08)'
        : 'none';
    });
  }

  // ===== 滚动显示动画 =====
  const revealObserver = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

  document.querySelectorAll('.feature-card, .article-card, .sidebar-widget').forEach(function (el) {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    revealObserver.observe(el);
  });

  // ===== 当前页面导航高亮 =====
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(function (link) {
    const href = link.getAttribute('href');
    if (href === currentPage || (currentPage === '' && href === 'index.html')) {
      link.classList.add('active');
    }
  });

  // ===== 数字递增动画 =====
  animateCounters();
});

/**
 * 模拟扫描功能
 */
async function simulateScan(inputType, inputValue) {
  if (!inputValue || inputValue.trim() === '') {
    alert(currentLang === 'zh' ? '请输入有效的内容' : 'Please enter a valid input.');
    return null;
  }

  const progressBar = document.querySelector('.progress-bar-fill');
  const progressStatus = document.querySelector('.progress-status');
  const reportSection = document.querySelector('.scan-report');
  const progressWrapper = document.querySelector('.scan-progress');

  if (!progressBar || !progressStatus) return null;

  // 显示进度
  if (progressWrapper) progressWrapper.classList.add('active');
  if (reportSection) reportSection.classList.remove('active');

  const stepsMap = {
    website: currentLang === 'zh'
      ? ['正在连接服务器...', '分析页面结构...', '检查 SEO 优化...', '评估移动端适配...', '测量页面速度...', '扫描安全头信息...', '生成报告...', '完成！']
      : ['Connecting to server...', 'Analyzing page structure...', 'Checking SEO optimization...', 'Evaluating mobile responsiveness...', 'Measuring page speed...', 'Scanning security headers...', 'Generating report...', 'Complete!'],
    brand: currentLang === 'zh'
      ? ['搜索品牌提及...', '分析社交媒体存在...', '检查域名权重...', '评估品牌情感...', '与竞品对比...', '评估市场定位...', '整理分析...', '完成！']
      : ['Searching brand mentions...', 'Analyzing social presence...', 'Checking domain authority...', 'Evaluating brand sentiment...', 'Comparing with competitors...', 'Assessing market position...', 'Compiling analysis...', 'Complete!'],
    product: currentLang === 'zh'
      ? ['解析产品描述...', '分析落地页...', '评估转化要素...', '检查用户体验...', '对标竞品...', '计算潜在 ROI...', '生成建议...', '完成！']
      : ['Parsing product description...', 'Analyzing landing page...', 'Evaluating conversion elements...', 'Checking UX factors...', 'Benchmarking competitors...', 'Calculating potential ROI...', 'Building recommendations...', 'Complete!']
  };

  const steps = stepsMap[inputType] || stepsMap.website;
  const checklist = {
    website: ['ssl','speed','mobile','seo','security','structured'],
    brand: ['social','mentions','domain','sentiment','competitor','visual'],
    product: ['headline','cta','social-proof','images','conversion','trust']
  };

  for (let i = 0; i < steps.length; i++) {
    progressBar.style.width = ((i + 1) / steps.length * 100) + '%';
    progressStatus.textContent = steps[i];
    await new Promise(function (r) { setTimeout(r, 400 + Math.random() * 400); });
  }

  // 生成随机分数和报告项
  const score = Math.floor(Math.random() * 30) + 65;
  const keys = checklist[inputType] || checklist.website;
  const items = keys.map(function (key) {
    const rand = Math.random();
    const icon = rand > 0.3 ? 'pass' : rand > 0.1 ? 'warn' : 'fail';
    return { icon: icon, key: key };
  });

  renderReport(score, items);
  return { score: score, items: items };
}

function renderReport(score, items) {
  const reportSection = document.querySelector('.scan-report');
  if (!reportSection) return;

  const angle = (score / 100) * 360;
  let itemsHtml = '';
  items.forEach(function (item) {
    const iconEmoji = item.icon === 'pass' ? '✅' : item.icon === 'warn' ? '⚠️' : '❌';
    const labelKey = 'scan_' + item.key;
    const label = t(labelKey) || item.key;
    itemsHtml += '<div class="report-item">' +
      '<span class="report-item-icon ' + item.icon + '">' + iconEmoji + '</span>' +
      '<div><h4>' + label + '</h4><p>' + (item.icon === 'pass' ? (currentLang === 'zh' ? '通过' : 'Passed') : item.icon === 'warn' ? (currentLang === 'zh' ? '需要注意' : 'Needs Attention') : (currentLang === 'zh' ? '未通过' : 'Failed')) + '</p></div>' +
    '</div>';
  });

  reportSection.innerHTML =
    '<div class="report-score">' +
      '<div class="report-score-circle" style="background: conic-gradient(var(--color-accent) ' + angle + 'deg, var(--color-border) ' + angle + 'deg);">' +
        '<span class="report-score-value">' + score + '</span>' +
      '</div>' +
      '<div class="report-score-label">' + t('scan_score_label') + '</div>' +
    '</div>' +
    '<div class="report-items">' + itemsHtml + '</div>';

  reportSection.classList.add('active');
  reportSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function animateCounters() {
  document.querySelectorAll('.hero-stat-number').forEach(function (el) {
    const text = el.textContent.replace(/[^0-9]/g, '');
    const target = parseInt(text, 10);
    if (isNaN(target)) return;
    let current = 0;
    const step = target / 60;
    function tick() {
      current += step;
      if (current >= target) { el.textContent = target.toLocaleString(); return; }
      el.textContent = Math.floor(current).toLocaleString();
      requestAnimationFrame(tick);
    }
    const obs = new IntersectionObserver(function (entries) {
      if (entries[0].isIntersecting) { tick(); obs.disconnect(); }
    });
    obs.observe(el);
  });
}
