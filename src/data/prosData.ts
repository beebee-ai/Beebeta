// 专家导师数据
export interface ExpertData {
  id: string;
  name: string;
  nameEn: string;
  title: string;
  titleEn: string;
  summary: string;
  summaryEn: string;
  details: string;
  detailsEn: string;
  quote: string;
  quoteEn: string;
  photo: string;
}

export const expertMentors: ExpertData[] = [
  {
    id: "expert-guoyu",
    name: "Yu Guo",
    nameEn: "Yu Guo",
    title: "前百度首席设计师，硅谷资深产品与体验设计专家",
    titleEn:
      "Former Chief Designer at Baidu, Senior Product & UX Designer from Silicon Valley",
    summary:
      "毕业于上海交通大学、美国伊利诺伊理工设计学院、哥伦比亚大学商学院。曾任硅谷 Netscape、eBay、PayPal 设计师，回国后担任百度首席设计师，创建并带领中国最早的专业 UX 团队之一。长期深耕用户体验、交互设计与创新教育，为多家头部企业提供设计咨询。",
    summaryEn:
      "Graduate of Shanghai Jiao Tong University, IIT Institute of Design, and Columbia Business School. Former designer at Netscape, eBay and PayPal in Silicon Valley. Served as Chief Designer at Baidu, where he built one of China’s earliest professional UX teams. Specializes in user experience, interaction design and innovation education, advising companies like Samsung, Haier, Tencent and Huawei.",
    details: `
<h4>跨设计、产品与创新教育的全能型专家</h4>
<p>郭宇拥有扎实的设计教育背景与丰富的硅谷产品经验，长期致力于用户体验体系构建、创新方法论落地与企业设计能力提升。从硅谷互联网巨头到国内一线科技公司，他始终站在行业前沿推动设计的发展。</p>

<h4>国际化教育与跨界学习背景</h4>
<ul>
  <li>上海交通大学本科</li>
  <li>美国伊利诺伊理工大学设计学院（IIT Institute of Design）</li>
  <li>哥伦比亚大学商学院</li>
  <li>在上交、北工大、北航等高校长期教授创新创业课程</li>
</ul>

<h4>硅谷与中国科技公司的核心经历</h4>
<ul>
  <li><strong>Netscape / eBay / PayPal：</strong>担任产品与用户体验设计师，深度参与硅谷互联网产品体系建设</li>
  <li><strong>百度首席设计师：</strong>回国后创建并带领中国最早的专业 UX 团队之一</li>
  <li><strong>国际体验设计协会委员：</strong>推动体验设计的行业标准与发展</li>
  <li><strong>微软创投加速器导师：</strong>辅导创新团队提升产品与设计能力</li>
</ul>

<h4>用户体验体系建设的行业先行者</h4>
<ul>
  <li>在百度负责用户体验体系从 0 到 1 的搭建</li>
  <li>推动 UX 团队扩张并形成业内标杆级实践</li>
  <li>深度参与跨部门协作、流程重构与体验标准制定</li>
</ul>

<h4>企业级设计咨询经验丰富</h4>
<ul>
  <li>为三星、海尔、腾讯、华为等国内外企业提供长期 UX 咨询</li>
  <li>帮助大型企业构建体验策略、产品方法论与设计文化</li>
  <li>擅长将方法论转化为可直接落地的产品与流程</li>
</ul>

<h4>教学风格与方法论特点</h4>
<ul>
  <li>擅长把抽象的设计理念转换为可执行的实践流程</li>
  <li>强调“设计驱动业务”的思维，让体验建设真正服务增长与产品成功</li>
  <li>结合真实案例，让学生理解跨团队协作、用户研究、体验标准等核心能力</li>
</ul>
`,
    detailsEn: `
<h4>Expert in UX, Product Design and Innovation Education</h4>
<p>Yu Guo combines global design education with top-tier Silicon Valley experience. He has played key roles in UX system building, innovation methodology and enterprise-level design capability development across major tech companies.</p>

<h4>International Education Background</h4>
<ul>
  <li>Bachelor’s degree from Shanghai Jiao Tong University</li>
  <li>Institute of Design at Illinois Institute of Technology (IIT)</li>
  <li>Columbia Business School</li>
  <li>Long-term lecturer of innovation & entrepreneurship at major Chinese universities</li>
</ul>

<h4>Silicon Valley & China Tech Experience</h4>
<ul>
  <li><strong>Netscape / eBay / PayPal：</strong>UX & product designer in Silicon Valley</li>
  <li><strong>Chief Designer at Baidu：</strong>Built one of China’s earliest professional UX teams</li>
  <li><strong>IXDA Member：</strong>Contributor to global UX discourse</li>
  <li><strong>Microsoft Accelerator Mentor：</strong>Guiding startups on product & design</li>
</ul>

<h4>UX System Building Expertise</h4>
<ul>
  <li>Built Baidu’s UX system from scratch</li>
  <li>Led UX team expansion and cross-team integration</li>
  <li>Designed processes, standards and experience frameworks adopted across the company</li>
</ul>

<h4>Enterprise Design Consulting</h4>
<ul>
  <li>Advised Samsung, Haier, Tencent, Huawei and others</li>
  <li>Helps enterprises build design strategies and innovation-driven product processes</li>
  <li>Transforms design methodology into actionable business practice</li>
</ul>

<h4>Teaching Style</h4>
<ul>
  <li>Turns abstract design theories into practical, step-by-step frameworks</li>
  <li>Focuses on design as a driver of product and business impact</li>
  <li>Uses real-world case studies to teach research, UX standards and cross-functional collaboration</li>
</ul>
`,
    quote:
      "设计不是装饰，而是让产品真正被理解、被使用、被喜爱的核心力量。",
    quoteEn:
      "Design is not decoration — it is the core force that makes a product understood, used and loved.",
    photo: "",
  },
  {
    id: "expert-xuwu",
    name: "Wu Xu",
    nameEn: "Wu Xu",
    title:
      "XR 领域代表人物，前百度/猫眼核心成员，前真格基金投资人",
    titleEn:
      "Leading Figure in China's XR Industry, Former Baidu & Maoyan Core Member, Former ZhenFund Investor",
    summary:
      "被业内称为“XR 第一人”。曾任百度与美团猫眼的核心成员，并在真格基金期间覆盖数千项目。深度研究 Meta 与 Apple 的 XR 战略、产品与生态，是国内最早系统理解 XR 行业路径的实践者与观察者。",
    summaryEn:
      "Known as the “No.1 XR expert” in China. Former key member at Baidu and Maoyan (Meituan), and former investor at ZhenFund reviewing thousands of projects. Specializes in Meta and Apple’s XR strategies, products and ecosystem development, with deep expertise in understanding the real-world trajectory of XR.",
    details: `
<h4>中国 XR 领域的先行者与行业观察者</h4>
<p>Wu Xu 被业内广泛视为 XR 领域的关键人物之一，是最早系统研究 XR 路径与行业落地的实干者。他长期关注 Meta 与 Apple 的 XR 战略，并对整个生态、商业模型与产品逻辑有深度洞察。</p>

<h4>互联网到 XR 的完整跨界经历</h4>
<ul>
  <li><strong>百度：</strong>2008 年加入，在 Pin Zhou 影响下形成系统的互联网产品与商业世界观</li>
  <li><strong>猫眼电影（美团）：</strong>参与内容、票务、平台业务，对消费互联网有深厚理解</li>
  <li><strong>真格基金投资人：</strong>完整覆盖数千创业项目，从投资视角看清赛道演化规律</li>
  <li><strong>最终聚焦 XR：</strong>在长期跟踪 Meta、Apple 的基础上形成成熟的方法论</li>
</ul>

<h4>深度研究 Meta 与 Apple 的 XR 策略</h4>
<ul>
  <li>从真实产品经验中拆解 XR 的商业基础与技术边界</li>
  <li>理解 Meta 的 toC 生态布局、内容场景与硬件路线</li>
  <li>对 Apple Vision Pro 的交互模型、系统架构与应用可能性有深入分析</li>
  <li>强调从“真实经验与教训”中学习，而不是概念性分析</li>
</ul>

<h4>XR 行业洞察：路径、难点与机会</h4>
<ul>
  <li>讲清楚 XR 到底难在哪：算力、交互、内容生态、成本结构等关键约束</li>
  <li>分析机会点：企业场景、行业���具、轻量化设备、空间计算内容</li>
  <li>指出 XR 创业与落地中常见坑，帮助学员避免误判</li>
</ul>

<h4>教学风格：互动强、落地强、强调真实场景</h4>
<ul>
  <li>课堂鼓励随时提问，以讨论驱动理解</li>
  <li>欢迎带具体业务场景，让问题落在真实细节上</li>
  <li>擅长把复杂的 XR 技术与商业逻辑讲得直白、现实、有判断力</li>
</ul>
`,
    detailsEn: `
<h4>Leading XR Pioneer in China</h4>
<p>Regarded as one of the earliest and most influential XR experts in China, Wu Xu has long studied Meta and Apple's XR strategies, ecosystems and product logic, forming a grounded understanding of the industry's real trajectory.</p>

<h4>Cross-Disciplinary Background: Internet → Investment → XR</h4>
<ul>
  <li><strong>Baidu:</strong> Joined in 2008; built solid product and internet thinking early in career</li>
  <li><strong>Maoyan (Meituan):</strong> Gained experience across content, entertainment and consumer internet</li>
  <li><strong>ZhenFund:</strong> Reviewed thousands of startup projects, developing strong pattern recognition</li>
  <li><strong>Focused on XR:</strong> Committed to studying Meta and Apple’s real strategic decisions</li>
</ul>

<h4>Deep Understanding of Meta & Apple’s XR Strategy</h4>
<ul>
  <li>Analyzes XR from real product experience, not theoretical speculation</li>
  <li>Breaks down Meta’s ecosystem strategy and hardware roadmap</li>
  <li>Understands Apple Vision Pro’s interaction model and spatial computing paradigm</li>
  <li>Connections across hardware, content ecosystems and business models</li>
</ul>

<h4>XR Insights: Why It’s Hard & Where the Opportunities Are</h4>
<ul>
  <li>Identifies key constraints: compute, interaction, cost structure, content ecosystem</li>
  <li>Points out opportunity areas: enterprise tools, industrial workflows, spatial computing content</li>
  <li>Warns about common pitfalls for XR teams and product builders</li>
</ul>

<h4>Teaching Style: High Interaction & Real-World Grounding</h4>
<ul>
  <li>Encourages students to ask questions anytime</li>
  <li>Invites real business scenarios into class for practical discussion</li>
  <li>Explains XR with clarity, realism and strong product judgment</li>
</ul>
`,
    quote:
      "XR 的未来不是概念，而是跨过难点后真实能被用起来的场景。",
    quoteEn:
      "The future of XR is not in concepts, but in real scenarios that work after solving the hard problems.",
    photo: "",
  },
  {
    id: "expert-xiaoyu",
    name: "Yang Jieyu (Xiaoyu)",
    nameEn: "Yang Jieyu (Xiaoyu)",
    title:
      "硅谷/伦敦双地互联网 UIUX 设计师，AI 初创公司产品负责人",
    titleEn:
      "UI/UX Designer in Silicon Valley & London, Product Lead at an AI Startup",
    summary:
      "在美国完成本科与研究生教育，先后在硅谷互联网大厂与伦敦办公室担任 UIUX 设计师，后加入 AI 初创公司担任产品负责人并带领团队。以实操内容和产品方法论在小红书获得关注，并受邀为 BB Data Infinity 营分享从兴趣到产品变现的完整路径。",
    summaryEn:
      "Educated in the U.S. (Bachelor & Master), worked as a UI/UX designer at major tech companies in Silicon Valley and later London. Now Product Lead at an AI startup. Known for practical product-building content on Xiaohongshu, invited to share at BB Data Infinity Camp about building and monetizing products from personal interests.",
    details: `
<h4>跨硅谷与伦敦的产品与设计从业者</h4>
<p>Yang Jieyu (Xiaoyu) 在美国完成本科与研究生阶段的学习，毕业后进入硅谷大型互联网公司从事 UIUX 设计工作。因签证调配转至伦敦办公室继续负责产品体验设计，随后加入 AI 初创公司成为产品负责人，带领团队推进从需求定义到产品上线的全流程。</p>

<h4>完整的产品从 0 到 1 实战经验</h4>
<ul>
  <li>具备硅谷大厂的设计体系理解与流程经验</li>
  <li>在初创公司负责产品方向、团队协作、版本规划与落地</li>
  <li>深度参与需求分析、用户体验、原型构建、上线验证全过程</li>
  <li>能够在结构化流程与创业式快速迭代之间灵活切换</li>
</ul>

<h4>内容创作与方法论输出</h4>
<ul>
  <li>通过小红书分享产品方法论、从兴趣切入商业化的实践过程</li>
  <li>内容强调实际可复用的步骤、路径和验证方法</li>
  <li>凭借强实操性与真实案例吸引产品、设计、创业群体关注</li>
</ul>

<h4>受邀分享：面向学员的高度可落地指导</h4>
<ul>
  <li>受邀为 BB Data Infinity 营分享完整的“兴趣 → 产品 → 验证 → 变现”路径</li>
  <li>分享内容与学员处于的实战阶段高度匹配，可直接迁移到实际项目</li>
  <li>擅长拆解：怎么找方向、怎么验证、怎么做 MVP、怎么实现收入</li>
</ul>

<h4>教学风格：真实、结构化、强执行导向</h4>
<ul>
  <li>强调产品必须能跑起来，而不是停留在想法层面</li>
  <li>鼓励学员从日常兴趣切入，用最小成本做出第一版产品</li>
  <li>用真实案例帮助学员理解“如何把一个想法做成能赚钱的产品”</li>
</ul>
`,
    detailsEn: `
<h4>Product & UX Practitioner Across Silicon Valley and London</h4>
<p>Xiaoyu completed her Bachelor's and Master's degrees in the U.S. and worked as a UI/UX designer at major Silicon Valley tech companies. Due to visa transfer, she moved to the London branch, continuing to work on product experience before joining an AI startup as a Product Lead.</p>

<h4>End-to-End Product Building Experience</h4>
<ul>
  <li>Experience with mature product and design systems from large tech companies</li>
  <li>Responsible for product direction, team alignment and execution at a startup</li>
  <li>Hands-on involvement in research, UX design, prototyping, and launch validation</li>
  <li>Comfortable switching between structured workflow and fast-paced startup iteration</li>
</ul>

<h4>Content Creation & Practical Methodology</h4>
<ul>
  <li>Shares product insights and practical building steps on Xiaohongshu</li>
  <li>Known for actionable frameworks and transparent process storytelling</li>
  <li>Influential among product, design and early-stage builder communities</li>
</ul>

<h4>Invited Speaker at BB Data Infinity Camp</h4>
<ul>
  <li>Teaches the full path from personal interest → product design → validation → monetization</li>
  <li>Content aligns closely with students’ real building stages and needs</li>
  <li>Helps learners identify direction, design MVPs, validate hypotheses and achieve revenue</li>
</ul>

<h4>Teaching Style</h4>
<ul>
  <li>Direct, practical, and execution-focused</li>
  <li>Encourages starting from everyday interests to build the first version quickly</li>
  <li>Uses real examples to show how an idea becomes a functional, monetizable product</li>
</ul>
`,
    quote: "产品不是想出来的，是一步步用最小成本试出来的。",
    quoteEn:
      "Great products don’t come from ideas—they come from testing them step by step.",
    photo: "",
  },
  {
    id: "expert-hugo",
    name: "Hugo Yu",
    nameEn: "Hugo Yu",
    title:
      "智谱AI院资深语音算法专家，中国科学院声学所联合培养博士",
    titleEn:
      "Senior Voice Algorithm Expert at Zhipu AI, Joint PhD Trainee at CAS Institute of Acoustics",
    summary:
      "从快手到智谱，深耕语音合成、语音交互大模型与语音增强技术，发表 ICASSP、INTERSPEECH、IJCAI 等顶会与 SCI 论文 20 余篇，多项行业产品成功落地。",
    summaryEn:
      "From Kuaishou to Zhipu AI, focusing on speech synthesis, voice interaction large models and speech enhancement, with 20+ publications in ICASSP, INTERSPEECH, IJCAI and SCI journals. Led multiple high-impact industrial speech AI products.",
    details: `
<h4>语音 AI 全栈专家：从算法研究到产品落地的完整实践者</h4>
<p>Hugo Yu 是智谱 AI 院资深语音算法专家，中国传媒大学通信与信息系统博士，并由中国科学院声学研究所联合培养。他在快手音视频技术部、大模型与多媒体技术部，以及智谱 AI 院的经历，使其具备完整的语音 AI 全链路能力。</p>

<h4>学术背景扎实</h4>
<ul>
  <li>中国传媒大学通信与信息系统博士</li>
  <li>中国科学院声学研究所联合培养博士</li>
  <li>香港中文大学 MMLab 学术交流</li>
  <li>发表 ICASSP、INTERSPEECH、IJCAI 等顶会及 SCI 论文 20+ 篇</li>
  <li>在语音信号处理与深度学习方向具有扎实的数学与算法基础</li>
</ul>

<h4>产业化成果突出</h4>
<ul>
  <li><strong>语音交互大模型：</strong>基于 GLM4-Voice 搭建人格化多模态互动模型（MILM），端到端延时控制在 0.75 秒内，已上线快手直播连麦场景</li>
  <li><strong>语音合成大模型：</strong>从 0 到 1 搭建快手自研 zero-shot TTS，音质与自然度 95%+ 达到真人水平，整体体验超越剪映；同时支撑快影音色克隆能力</li>
  <li><strong>深度音质修复：</strong>自主研发去噪、去混响、音频超分、人声均衡等算法，全量应用于快手直播，大盘有效带宽提升 15.03%</li>
</ul>

<h4>技术专长全面</h4>
<ul>
  <li>语音合成大模型：VALLE、XTTS、GPT-Sovits、Cosyvoice 等</li>
  <li>语音交互大模型：moshi、GLM4-Voice、llama-omni</li>
  <li>语音增强：去噪、去混响、音频超分辨率</li>
  <li>深度学习架构：CNN / LSTM / Transformer / GAN</li>
  <li>从算法研究到工程实现的全流程能力</li>
</ul>

<h4>国际竞赛成绩优异</h4>
<ul>
  <li>ICASSP 2024 SSI-Challenge 双赛道冠军</li>
  <li>Audio Deep PLC Challenge 冠军</li>
  <li>Interspeech 2021 DNS Challenge 冠军</li>
  <li>多项语音信号处理方向世界级竞赛冠军得主</li>
</ul>

<h4>教学与指导能力</h4>
<ul>
  <li>扎实的数学、信号处理和深度学习理论基础</li>
  <li>擅长把前沿研究转化为可落地系统</li>
  <li>可指导学生完成从“理解理论 → 训练模型 → 工程部署”的完整学习路径</li>
</ul>

<h4>适合指导方向</h4>
<ul>
  <li><strong>语音合成 / 语音交互：</strong>TTS、克隆、Voice Interaction</li>
  <li><strong>语音信号处理：</strong>降噪、去混响、音频 ASR 前端、音频超分辨率</li>
  <li><strong>语音大模型应用：</strong>端到端语音理解、语音生成、多模态语音交互</li>
  <li><strong>音频 AI 产品：</strong>算法优化 → 工程实现 → 产品落地</li>
</ul>

<h4>个人成就</h4>
<ul>
  <li>中国传媒大学三好学生、优秀学生干部</li>
  <li>获“中央三台”奖学金</li>
  <li>曾任校篮球队长与定向越野队成员，具备优秀的领导力与团队协作能力</li>
</ul>
`,
    detailsEn: `
<h4>Full-Stack Voice AI Expert: Research → Engineering → Product</h4>
<p>Hugo Yu is a senior voice algorithm expert at Zhipu AI, with a PhD in Communication and Information Systems jointly trained with the CAS Institute of Acoustics. He has extensive end-to-end experience spanning speech synthesis, voice interaction large models and speech enhancement.</p>

<h4>Academic Background</h4>
<ul>
  <li>PhD in Communication and Information Systems, Communication University of China</li>
  <li>Joint PhD Trainee at Institute of Acoustics, Chinese Academy of Sciences</li>
  <li>Research exchange at CUHK MMLab</li>
  <li>20+ papers in ICASSP, INTERSPEECH, IJCAI and SCI journals</li>
</ul>

<h4>Key Industrial Achievements</h4>
<ul>
  <li><strong>Voice Interaction LM:</strong> Built personalized multimodal interactive model (MILM) based on GLM4-Voice with 0.75s end-to-end latency, deployed in Kuaishou live streaming</li>
  <li><strong>Speech Synthesis LM:</strong> Built zero-shot TTS from scratch; 95%+ human-level MOS; surpasses leading competitors</li>
  <li><strong>Audio Quality Restoration:</strong> Noise removal, dereverb, audio super-resolution; deployed at scale with 15.03% bandwidth improvement</li>
</ul>

<h4>Technical Expertise</h4>
<ul>
  <li>Speech synthesis models: VALLE, XTTS, GPT-Sovits, Cosyvoice</li>
  <li>Voice interaction models: moshi, GLM4-Voice, llama-omni</li>
  <li>Speech enhancement & restoration</li>
  <li>CNN / LSTM / Transformer / GAN architectures</li>
  <li>End-to-end capability from research to engineering</li>
</ul>

<h4>Competition Achievements</h4>
<ul>
  <li>ICASSP 2024 SSI-Challenge dual-track champion</li>
  <li>Audio Deep PLC Challenge champion</li>
  <li>Interspeech 2021 DNS Challenge champion</li>
</ul>

<h4>Teaching & Mentoring Strengths</h4>
<ul>
  <li>Strong foundations in mathematics, signal processing and DL theory</li>
  <li>Transforms cutting-edge research into practical systems</li>
  <li>Guides students through full-cycle learning: theory → model → deployment</li>
</ul>
`,
    quote:
      "语音是人类最自然的交互方式，我致力于让 AI 理解和生成的每一个声音都充满人性的温度与智慧的力量。",
    quoteEn:
      "Voice is the most natural mode of human interaction. I strive to ensure every sound generated or understood by AI carries human warmth and intelligence.",
    photo: "",
  },
  {
    id: "expert-william",
    name: "William",
    nameEn: "William",
    title: "AI布道者、技术极简主义者，前Nokia高级软件工程师",
    titleEn:
      "AI Evangelist & Minimalist Engineer, Former Senior Software Engineer at Nokia",
    summary:
      "电子科技大学计算机硕士，曾任 Nokia 高级软件工程师 7 年。现居爱尔兰，专注前沿 AI 技术科普与应用开发，通过视频 + 图文双栖内容普及 AI 理念与实操方法，在多个平台拥有广泛影响力。",
    summaryEn:
      "Master in Computer Science from UESTC, former Senior Software Engineer at Nokia (7 years). Now based in Ireland as an AI-focused content creator and engineer, known for simplifying cutting-edge AI technologies into beginner-friendly knowledge through videos and written tutorials.",
    details: `
<h4>AI 技术布道者，从工程到知识输出的双栖创作者</h4>
<p>William 是专注于将前沿 AI 技术“讲得简单、教得清楚、让人能用”的创作者与工程师。他从传统通信软件研发转型 AI 内容创作，凭借极简主义技术理念和优质的视频+图文内容在多个平台获得大量关注。</p>

<h4>跨国工程背景与职业路径</h4>
<ul>
  <li>电子科技大学计算机科学与工程本科 & 硕士</li>
  <li>在成都 Nokia 担任高级软件工程师 7 年，深耕通信与工程架构</li>
  <li>移居爱尔兰后成功转型为 AI 技术科普与开发创作者</li>
  <li>具备跨文化、跨技术生态的双重视角</li>
</ul>

<h4>多平台内容矩阵</h4>
<ul>
  <li><strong>B站「五里墩茶社」：</strong>输出深入浅出的 AI 技术视频</li>
  <li><strong>微信公众号「01麻瓜社」：</strong>长期创作 AI 技术科普文章</li>
  <li><strong>知识星球「小木头的AI星球」：</strong>运营 AI 学习社区</li>
  <li><strong>YouTube「01Coder」：</strong>面向全球用户的 AI 教程频道</li>
</ul>

<h4>代表作品与开源贡献</h4>
<ul>
  <li><strong>《LangChain极简入门》：</strong>帮助开发者快速掌握 LangChain</li>
  <li><strong>《MCP极简入门》：</strong>普及 Model Context Protocol 基础与实操</li>
  <li><strong>chat-ollama 项目：</strong>基于 LangChain 的开源 AI 聊天应用，支持开源/闭源模型与知识库</li>
</ul>

<h4>技术专长</h4>
<ul>
  <li>大语言模型应用开发（LangChain、ChatGPT、MCP）</li>
  <li>AI 工具链构建与优化</li>
  <li>开源项目设计、开发与维护</li>
  <li>技术文案写作、教程脚本设计与视频讲解</li>
</ul>

<h4>教学特色：技术极简主义，强调“能跑、好懂、可复用”</h4>
<ul>
  <li>坚持极简主义：用最少的代码实现清晰可复用的模型逻辑</li>
  <li>擅长让初学者快速入门 AI 工具链与实际应用开发</li>
  <li>通过图文 + 视频结合，让复杂技术变得具体易学</li>
  <li>使用真实案例解释抽象概念，让知识立即可迁移</li>
</ul>

<h4>适合指导方向</h4>
<ul>
  <li><strong>AI 工具链开发：</strong>LangChain、RAG 系统、AI 应用集成</li>
  <li><strong>大模型应用：</strong>提示工程、API 开发、模型微调基础</li>
  <li><strong>AI 内容创作：</strong>技术科普、视频教程、知识社区运营</li>
  <li><strong>开���实践：</strong>从 idea → MVP → 产品的完整流程</li>
</ul>

<h4>国际化视野</h4>
<ul>
  <li>中英文双语内容创作者</li>
  <li>熟悉国内外 AI 技术演变趋势与开发生态</li>
  <li>能够提供跨文化、跨平台的学习与职业发展建议</li>
</ul>
`,
    detailsEn: `
<h4>AI Evangelist & Practical Engineering Content Creator</h4>
<p>William is an engineer-turned AI content creator known for transforming complex AI technologies into simple, actionable tutorials. With years of software engineering experience and a global background, he produces high-quality video and written content that helps developers quickly adopt modern AI tools.</p>

<h4>Cross-Country Engineering & Career Experience</h4>
<ul>
  <li>Bachelor’s and Master’s degrees in Computer Science from UESTC</li>
  <li>Senior Software Engineer at Nokia for 7 years</li>
  <li>Now based in Ireland, focusing on AI education and developer tools</li>
  <li>Brings a global perspective to software and AI ecosystems</li>
</ul>

<h4>Multi-Platform Content Ecosystem</h4>
<ul>
  <li><strong>Bilibili「五里墩茶社」：</strong>Deep-dive AI tech videos</li>
  <li><strong>WeChat「01麻瓜社」：</strong>AI technical articles</li>
  <li><strong>Zsxq「小木头的AI星球」：</strong>AI learning community</li>
  <li><strong>YouTube「01Coder」：</strong>Global AI tutorial videos</li>
</ul>

<h4>Representative Works & Open-Source Projects</h4>
<ul>
  <li><strong>“Minimal LangChain Intro”：</strong>Popular beginner tutorial</li>
  <li><strong>“Minimal MCP Intro”：</strong>Simple guide to Model Context Protocol</li>
  <li><strong>chat-ollama：</strong>LangChain-based open-source chat app supporting both open-source and closed-source models</li>
</ul>

<h4>Technical Expertise</h4>
<ul>
  <li>LLM application development: LangChain, ChatGPT, MCP</li>
  <li>AI toolchain building & optimization</li>
  <li>Open-source project development</li>
  <li>Technical writing and video teaching</li>
</ul>

<h4>Teaching Style</h4>
<ul>
  <li>Minimalist engineering philosophy</li>
  <li>Focus on clarity, practicality and fast onboarding</li>
  <li>Uses real examples and analogies to make concepts intuitive</li>
  <li>Video + written tutorials for full learning coverage</li>
</ul>

<h4>Mentorship Topics</h4>
<ul>
  <li>AI toolchain development: LangChain, RAG, integration</li>
  <li>LLM applications: prompt engineering, API usage</li>
  <li>AI content creation: writing, video production, community building</li>
  <li>Open-source workflows: idea → MVP → product</li>
</ul>

<h4>Global Perspective</h4>
<ul>
  <li>Bilingual creator</li>
  <li>Understands global AI trends and developer ecosystems</li>
  <li>Offers career insights across cultures and markets</li>
</ul>
`,
    quote:
      "用LangChain搭建应用，用MCP连接世界，用最极简的代码和最生动的教程，让AI成为每个人手中的创作利器。",
    quoteEn:
      "Build apps with LangChain, connect the world with MCP, and with minimal code and clear tutorials, make AI a creative tool for everyone.",
    photo: "",
  },
  {
    id: "expert-henry",
    name: "Henry Wang",
    nameEn: "Henry Wang",
    title: "全球顶尖视频社交媒体算法工程师，CVPR冠军",
    titleEn:
      "Top Video Social Media Algorithm Engineer, CVPR Champion",
    summary:
      "北京工业大学软件工程硕士，6年AI算法工程经验。CVPR 2020人脸表情识别冠军获得者，专注多模态大模型、视频理解、OCR与端侧AI优化，曾在快手、网易有道、好未来等公司担任核心算法工程师。",
    summaryEn:
      "Master of Software Engineering from BJUT, with 6 years of AI algorithm experience. Winner of CVPR 2020 facial expression recognition challenge. Specialized in multimodal LLMs, video understanding, OCR, and edge AI optimization. Worked at Kuaishou, NetEase Youdao, and TAL as a core algorithm engineer.",
    details: `
<h4>多模态与视频AI方向的核心算法专家</h4>
<p>Henry Wang 在视频理解、多模态大模型、OCR系统与端侧加速方面积累了丰富的产业经验，是视频社交媒体算法方向的核心技术人才。</p>

<h4>教育与专业背景</h4>
<ul>
  <li>北京工业大学 软件工程硕士</li>
  <li>6年AI算法工程经验</li>
  <li>在快手、网易有道、好未来担任核心算法工程师</li>
</ul>

<h4>核心项目成果</h4>
<ul>
  <li><strong>语义级视频理解：</strong>基于多模态大模型输出细粒度视频描述与动作识别</li>
  <li><strong>OCR系统优化：</strong>自研毫秒级检测与识别框架，实现大规模场景部署</li>
  <li><strong>端侧AI性能优化：</strong>推理速度从500ms优化到100ms，模型体积从8M压缩至3M</li>
  <li><strong>视频生成数据构建：</strong>为快手可灵视频生成模型提供训练数据与算法支持</li>
  <li><strong>算法商业落地：</strong>模型应用已落地有道词典笔、智能学习机等产品</li>
</ul>

<h4>核心技术专长</h4>
<ul>
  <li>多模态大语言模型设计与训练</li>
  <li>视频理解（VLM）、视频描述生成</li>
  <li>OCR：检测、识别、加速、端侧部署</li>
  <li>深度学习加速与压缩（剪枝、量化、蒸馏）</li>
  <li>PyTorch / TensorFlow / YOLO / CRNN</li>
  <li>AI算法产业化全流程：训练→优化→上线</li>
</ul>

<h4>技术成就</h4>
<ul>
  <li>CVPR 2020 人脸表情识别竞赛冠军</li>
  <li>端侧AI优化显著提升产品性能（5倍加速，体积减少60%）</li>
  <li>算法成功部署于多款大众级产品（学习机、词典笔等）</li>
</ul>

<h4>教学风格：工程思维 + 竞赛经验结合</h4>
<ul>
  <li>用真实业务案例讲解算法如何落地与调优</li>
  <li>擅长把复杂模型拆成可执行步骤</li>
  <li>基于顶会竞赛经验讲授模型优化方法</li>
  <li>鼓励学员以“工程思维”构建可用AI系统</li>
</ul>
`,
    detailsEn: `
<h4>Expert in Multimodal Models & Video AI</h4>
<p>Henry Wang has deep experience in video understanding, multimodal LLMs, OCR, and edge AI optimization, with a strong track record of delivering models to real-world products.</p>

<h4>Education & Professional Experience</h4>
<ul>
  <li>Master’s in Software Engineering, Beijing University of Technology</li>
  <li>6 years of AI algorithm development</li>
  <li>Core algorithm roles at Kuaishou, NetEase Youdao, and TAL</li>
</ul>

<h4>Key Project Achievements</h4>
<ul>
  <li>Built fine-grained video understanding systems using VLMs</li>
  <li>Developed millisecond-level OCR detection pipelines</li>
  <li>Optimized model inference 500ms → 100ms, model size 8MB → 3MB</li>
  <li>Provided training data & algorithms for Kuaishou Kling video generation model</li>
  <li>Models deployed in dictionary pens and learning tablets</li>
</ul>

<h4>Technical Expertise</h4>
<ul>
  <li>Multimodal LLM architecture training</li>
  <li>Video understanding & captioning</li>
  <li>OCR detection/recognition & optimization</li>
  <li>Model compression & acceleration</li>
  <li>PyTorch, TensorFlow, YOLO, CRNN</li>
</ul>

<h4>Achievements</h4>
<ul>
  <li>Champion — CVPR 2020 Facial Expression Challenge</li>
  <li>Delivered major optimization wins for commercial devices</li>
  <li>Experience with large-scale production deployment</li>
</ul>

<h4>Teaching Style</h4>
<ul>
  <li>Practical and engineering-oriented</li>
  <li>Uses real-world cases to teach model debugging and deployment</li>
  <li>Blends competition-level optimization techniques with industry practice</li>
</ul>
`,
    quote: "让机器看懂世界，用算法描绘智能。",
    quoteEn:
      "Let machines understand the world, and use algorithms to paint intelligence.",
    photo: "",
  },
  {
    id: "expert-alexwu",
    name: "Alex Wu",
    nameEn: "Alex Wu",
    title:
      "分布式系统与云原生架构专家，全球顶尖游戏工作室后端工程师",
    titleEn:
      "Distributed Systems & Cloud-Native Architect, Backend Engineer at a Top Global Game Studio",
    summary:
      "英国圣安德鲁斯大学软件工程硕士，13年软件工程与技术领导经验。曾在知名互联网公司担任核心技术负责人并领导20人工程团队，主导构建十亿级索引、万级QPS、10ms 响应的搜索引擎系统与多项 AI 驱动解决方案，是分布式架构与云原生领域的实战专家。",
    summaryEn:
      "MSc in Software Engineering from the University of St Andrews, with 13 years of software engineering and technical leadership experience. Former core tech lead at major internet companies, leading a 20-engineer team and architecting billion-scale index search engines and AI-driven systems. Expert in distributed systems, cloud-native architecture and DevOps automation.",
    details: `
  <h4>大规模分布式系统与云原生架构专家</h4>
  <p>Alex Wu 专注于高并发、高可用的分布式系统架构，在搜索引擎、云原生平台与 AI 集成解决方案方面有丰富的一线经验。他擅长把复杂系统拆解为清晰、可演进的架构方案。</p>
  
  <h4>教育与职业背景</h4>
  <ul>
    <li>英国圣安德鲁斯大学 软件工程硕士</li>
    <li>全球顶尖游戏工作室后端工程师</li>
    <li>曾在知名互联网公司担任核心技术负责人</li>
    <li>13年软件工程与技术领导经验</li>
  </ul>
  
  <h4>核心技术领域与架构专长</h4>
  <ul>
    <li>大规模分布式系统架构：十亿级索引、万级QPS、10ms级响应时间</li>
    <li>云原生技术栈：Kubernetes / Docker / 微服务架构</li>
    <li>AI 解决方案集成：RAG 知识库、图数据库、AI 教练系统与智能问答</li>
    <li>DevOps 自动化：CI/CD 流水线、基础设施即代码（Terraform / IaC）</li>
    <li>多语言全栈能力：Golang / PHP / Python / Java</li>
  </ul>
  
  <h4>代表性技术成就</h4>
  <ul>
    <li><strong>大规模系统架构师：</strong>设计支持十亿级索引的垂直搜索引擎，实现 99.999% SLA 可用性</li>
    <li><strong>云原生技术专家：</strong>主导搜索系统微服务化与云原生改造，显著提升万台物理服务器资源利用率</li>
    <li><strong>AI 解决方案领导者：</strong>开发 RAG 知识库与 AI 教练系统，将大模型深度融合进业务场景</li>
    <li><strong>DevOps 自动化实践者：</strong>搭建端到端 CI/CD 流水线，实现从代码合并到分级发布的全自动化流程</li>
    <li><strong>多平台架构经验：</strong>覆盖移动端、嵌入式、云端与大数据平台的系统设计与优化</li>
  </ul>
  
  <h4>团队领导与技术管理</h4>
  <ul>
    <li>曾领导 20 人工程团队，负责核心系统的架构与技术决策</li>
    <li>建立统一的编码规范、架构标准与评审机制</li>
    <li>多次获得技术突破奖与季度明星荣誉</li>
  </ul>
  
  <h4>国际化视野与技术前瞻</h4>
  <ul>
    <li>拥有英国名校背景与多年海外工作经验</li>
    <li>从传统后端到云原生架构，再到 AI 集成，始终紧跟技术演进</li>
    <li>能从全球视角评估技术趋势并落地为可执行架构方案</li>
  </ul>
  
  <h4>教学风格与适合指导方向</h4>
  <ul>
    <li>以真实大规模系统为案例教授系统设计与性能优化</li>
    <li>强调架构思维，而不仅仅是代码实现</li>
    <li>适合指导方向：
      <ul>
        <li>大规模系统设计与分布式架构</li>
        <li>云原生与微服务落地实践</li>
        <li>RAG / AI 与现有系统的融合方案</li>
        <li>DevOps 体系搭建与工程效率提升</li>
        <li>技术团队管理与架构决策思维</li>
      </ul>
    </li>
  </ul>
  `,
    detailsEn: `
  <h4>Expert in Large-Scale Distributed Systems & Cloud-Native Architecture</h4>
  <p>Alex Wu specializes in building high-concurrency, highly available distributed systems. He has led the design of large-scale search engines and AI-integrated platforms, turning complex requirements into stable, production-grade architectures.</p>
  
  <h4>Background</h4>
  <ul>
    <li>MSc in Software Engineering from the University of St Andrews</li>
    <li>Backend Engineer at a top global game studio</li>
    <li>Former core tech lead at major internet companies</li>
    <li>13 years of software engineering and technical leadership</li>
  </ul>
  
  <h4>Core Technical Domains</h4>
  <ul>
    <li>Distributed systems with billion-scale indexes and high QPS</li>
    <li>Cloud-native stack: Kubernetes, Docker, microservices</li>
    <li>AI-integrated architectures: RAG, knowledge bases, AI coaching systems</li>
    <li>DevOps & automation: CI/CD pipelines, IaC (Terraform)</li>
    <li>Polyglot development: Golang, PHP, Python, Java</li>
  </ul>
  
  <h4>Key Achievements</h4>
  <ul>
    <li>Designed a vertical search engine with 10<sup>9</sup>-scale index and 99.999% SLA</li>
    <li>Led microservice and cloud-native transformation, improving utilization of tens of thousands of servers</li>
    <li>Built RAG-based knowledge systems and AI assistant products</li>
    <li>Implemented fully automated CI/CD pipelines from merge to staged rollout</li>
    <li>Hands-on experience across mobile, embedded, cloud and big data platforms</li>
  </ul>
  
  <h4>Leadership & Teaching Style</h4>
  <ul>
    <li>Led a 20-engineer team with strong focus on code quality and architecture reviews</li>
    <li>Teaches system design through real-world production cases</li>
    <li>Helps students build architecture thinking, not just coding skills</li>
    <li>Guides on both technical depth and engineering leadership</li>
  </ul>
  `,
    quote: "系统架构，承载万亿流量；代码优化，释放无限性能。",
    quoteEn:
      "Architecture carries the traffic; optimized code unlocks the performance.",
    photo: "",
  },
  {
    id: "expert-roy",
    name: "Roy Nee",
    nameEn: "Roy Nee",
    title:
      "澳洲FinTech上市公司架构师，中国顶级金融机构前核心系统架构师",
    titleEn:
      "FinTech Architect at an Australian Public Company, Former Core System Architect at Top Chinese Banks",
    summary:
      "北京邮电大学计算机硕士，15年金融科技从业经验。曾任中国顶级金融机构总行核心系统架构师，主导2.5亿日请求量的信用卡核心系统与多项获奖金融科技项目。擅长金融核心系统、支付平台与分布式架构设计，是金融科技领域备受认可的架构专家。",
    summaryEn:
      "Master of Computer Science from BUPT with 15 years of FinTech experience. Former core system architect at top-tier Chinese banks. Led the design of credit card systems handling 250M daily requests and several award-winning FinTech innovations. Expert in financial core architecture, payment platforms and distributed systems.",
    details: `
<h4>金融核心系统与分布式架构的资深专家</h4>
<p>Roy Nee 拥有15年金融科技系统架构经验，是在中国与新西兰两地都备受认可的金融科技技术权威。他擅长构建高并发、高性能、金融级安全要求的核心银行系统与支付平台，将复杂的金融逻辑转化为高效稳定的技术解决方案。</p>

<h4>教育与职业背景</h4>
<ul>
  <li>北京邮电大学计算机硕士</li>
  <li>目前任澳洲FinTech上市公司架构师</li>
  <li>曾任中国顶级金融机构总行核心系统架构师</li>
  <li>新西兰居民，具有跨国金融科技视野</li>
</ul>

<h4>核心系统架构成果</h4>
<ul>
  <li><strong>信用卡核心银行系统：</strong>主导设计支持1.5亿张信用卡、日交易1300万+的核心系统，实现发卡量和交易量三倍增长</li>
  <li><strong>2.5亿日请求分布式架构：</strong>构建覆盖9000万账户的实时信用卡授权系统，满足金融级高可用与低延迟</li>
  <li><strong>银联总对总线上对接：</strong>银行业首批实现全链路对接，支撑40家分支机构业务</li>
  <li><strong>国际支付系统架构：</strong>参与UniCARD架构及Vertexon平台建设，该架构支撑数十亿信用卡发行</li>
</ul>

<h4>分布式系统与金融技术专长</h4>
<ul>
  <li>金融核心系统架构设计：支持亿级用户、千万级日交易</li>
  <li>实时分布式支付平台：授权、清算、批处理系统</li>
  <li>高并发系统优化：吞吐、延时、可靠性全面优化</li>
  <li>微服务架构：从单体向云原生的演进与落地</li>
  <li>金融级性能与安全要求的技术方案设计</li>
</ul>

<h4>全栈金融系统开发能力</h4>
<ul>
  <li>精通 Golang / PHP / Python / Java</li>
  <li>Kubernetes、Docker、Terraform、CI/CD 等 DevOps 全链路</li>
  <li>CRM、移动端应用、分布式交易系统等多层架构经验</li>
  <li>从嵌入式到云端的跨平台系统经验</li>
</ul>

<h4>主要技术成就</h4>
<ul>
  <li>主导构建支持1.5亿张卡的核心银行系统</li>
  <li>设计2.5亿日请求高并发信用卡授权架构</li>
  <li>参与荣获人民银行金融科技发展奖一等奖项目</li>
  <li>推动万台服务器资源利用率在云原生改造中大幅提升</li>
</ul>

<h4>深刻理解金融业务与监管要求</h4>
<ul>
  <li>熟悉信用卡、账户管理、支付清算、风险控制全流程</li>
  <li>设计满足金融级安全、稳定性与合规要求的系统</li>
  <li>擅长将复杂业务需求转化为高性能、可扩展的技术架构</li>
</ul>

<h4>国际化视野与技术前瞻</h4>
<ul>
  <li>跨中国与新西兰两地金融科技实战经验</li>
  <li>深度参与金融系统从传统 IT → 分布式 → 云原生的技术演进</li>
  <li>对全球支付体系、金融监管、技术趋势有深刻理解</li>
</ul>

<h4>团队领导与架构管理能力</h4>
<ul>
  <li>曾领导20人工程团队，负责整体架构与代码审查</li>
  <li>建立工程规范、技术标准与高可用架构体系</li>
  <li>多次获得技术突破奖与团队荣誉</li>
</ul>

<h4>教学风格</h4>
<ul>
  <li>高度落地：用真实金融场景讲清系统架构原理</li>
  <li>系统性强：培养学生从需求分析→架构设计→交付的工程思维</li>
  <li>以实际案例帮助建立金融科技架构能力与技术判断力</li>
</ul>
`,
    detailsEn: `
<h4>Veteran Architect in Financial Core Systems & Distributed Payments</h4>
<p>With 15 years in the FinTech industry, Roy Nee brings deep expertise in building high-performance, mission-critical banking and payment systems for both Chinese and international institutions.</p>

<h4>Background</h4>
<ul>
  <li>Master’s degree in Computer Science, BUPT</li>
  <li>Architect at a public FinTech company in Australia</li>
  <li>Former core system architect at major Chinese banks</li>
  <li>Resident of New Zealand with global financial technology experience</li>
</ul>

<h4>Core System Achievements</h4>
<ul>
  <li>Architected credit card systems for 150M cards with 13M+ daily transactions</li>
  <li>Designed distributed authorization system supporting 250M daily requests</li>
  <li>Pioneered full-stack integration with UnionPay</li>
  <li>Contributed to UniCARD & Vertexon architecture used for billions of credit cards</li>
  <li>Part of the PBOC FinTech Award-winning next-generation banking system</li>
</ul>

<h4>Technical Expertise</h4>
<ul>
  <li>Core banking architecture, distributed payments, transaction systems</li>
  <li>High concurrency and high availability system design</li>
  <li>Microservices and cloud-native transformation</li>
  <li>Performance tuning, risk control workflows, compliance architecture</li>
  <li>Golang, PHP, Python, Java; Kubernetes, Docker, Terraform, CI/CD</li>
</ul>

<h4>Leadership & Delivery</h4>
<ul>
  <li>Led a 20-engineer architecture and delivery team</li>
  <li>Established engineering standards and high-availability architecture</li>
  <li>Recognized multiple times for technical breakthroughs</li>
</ul>

<h4>Teaching Style</h4>
<ul>
  <li>Explains architecture using real financial systems and case studies</li>
  <li>Trains students in end-to-end architectural thinking</li>
  <li>Focuses on stable, scalable, financially compliant system design</li>
</ul>
`,
    quote:
      "支付架构，连接全球资金流；交易系统，护航万亿金融安全。",
    quoteEn:
      "Payment architecture connects global capital flows; transaction systems safeguard trillions in financial security.",
    photo: "",
  },
];