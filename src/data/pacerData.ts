// 项目导师数据
export interface MentorData {
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

export const pacerMentors: MentorData[] = [
  {
    id: "mentor-pin",
    name: "Pin Zhou",
    nameEn: "Pin Zhou",
    title: "Beebee AI、趣玩网 创始人兼 CEO",
    titleEn: "Founder & CEO of Beebee AI & Quwan.com",
    summary:
      "全球最早一批投入 GPT 创业实践的行动派，8 年深度 AI 经验。主导移动 App + AI 业务、创立趣玩网并推动从原创设计到供应链规模化。在百度负责搜索生态、客户端与联盟增长。早期在托普软件、豪杰超级解霸负责 toB/toC 产品管理，具备产品、运营、电商、供应链与 AI 教育的跨领域经验。",
    summaryEn:
      "One of the earliest entrepreneurs globally to enter the GPT era, with 8 years of hands-on AI experience. Led mobile app + AI initiatives, founded Quwan.com and scaled the business from original design to supply chain production. Oversaw search ecosystem, client product and alliance growth at Baidu. Earlier roles at Topsoft and Haojie Super Player, spanning product, operations, e-commerce, supply chain, and AI education.",
    details: `
<p>Pin Zhou，Beebee AI 与趣玩网创始人，兼具连续创业者与 AI 实践者身份。从移动互联网到生成式 AI，他始终站在产品创新的一线，把商业结构与技术突破结合得很紧密。</p>

<h4>跨领域的产品与商业实践</h4>
<ul>
  <li>在猎豹移动主导移动 App + AI 业务，推动智能化产品体系落地</li>
  <li>创立定位“网上宜家”的趣玩网，带队完成从原创设计到供应链规模化的全链路建设</li>
  <li>在百度负责搜索生态、客户端与联盟业务扩张，熟悉大规模分发与商业链路</li>
  <li>早年在托普软件、豪杰超级解霸管理 toB、toC 产品，积累扎实的用户产品思维</li>
</ul>

<h4>AI 时代的创业与方法论</h4>
<ul>
  <li>全球最早进入 GPT 创业的一批实践者，拥有系统性的 8 年 AI 实战经验</li>
  <li>擅长将「AI + 商业」拆成具体动作和执行路径，帮助学习者快速找到方向</li>
  <li>对新技术保持高敏感度，内容更新速度快，能把复杂技术翻译成可操作的策略</li>
</ul>

<h4>教学理念与风格</h4>
<ul>
  <li>实战型讲法，不讲空概念，重具体方法论与可落地动作</li>
  <li>判断力强，节奏稳，能迅速抓住问题的关键</li>
  <li>不仅是创业者，也是深度参与 AI 教育的一位父亲，对学习体系有更务实的理解</li>
</ul>
`,
    detailsEn: `
<p>Pin Zhou, Founder & CEO of Beebee AI and Quwan.com, is both an entrepreneur and an AI practitioner. From mobile internet to generative AI, he has long worked at the front line of product innovation, tightly combining business execution with technological shifts.</p>

<h4>Cross-domain Product & Business Experience</h4>
<ul>
  <li>Led mobile app + AI initiatives at Cheetah Mobile, driving intelligent product deployment</li>
  <li>Founded Quwan.com, positioned as an “online IKEA,” building the entire chain from original design to scaled supply chain</li>
  <li>Oversaw search ecosystem, client products and alliance growth at Baidu</li>
  <li>Early roles at Topsoft and Haojie Super Player, managing both toB and toC product lines</li>
</ul>

<h4>AI-era Entrepreneurship & Methodology</h4>
<ul>
  <li>Among the earliest entrepreneurs worldwide to build businesses around GPT technologies</li>
  <li>Expert at breaking down “AI + business” into clear, actionable steps</li>
  <li>Strong sensitivity to new technologies, fast content updates, and ability to translate complexity into practical strategy</li>
</ul>

<h4>Teaching Style & Philosophy</h4>
<ul>
  <li>Practical, execution-oriented teaching; focuses on methods and actions instead of abstract ideas</li>
  <li>Steady pace, clear logic, strong judgment in pinpointing core issues</li>
  <li>Both an entrepreneur and a parent deeply involved in AI education, giving him a grounded view of learning frameworks</li>
</ul>
`,
    quote:
      "好的产品不是规划出来的，而是一次次决策后的必然结果。",
    quoteEn:
      "Great products don’t come from planning—they emerge from a series of sharp decisions.",
    photo: "",
  },
  {
    id: "mentor-h",
    name: "Iris Hu",
    nameEn: "Iris Hu",
    title: "博士,北京师范大学副教授，蜜蜂时代 首席科学家",
    titleEn:
      "PhD, Beijing Normal University Associate Professor, Chief Scientist",
    summary:
      "Dr. Iris Hu 在NLP领域深耕多年，主持多项国家级科研项目，将前沿学术研究与产业应用完美结合。她在国际顶级会议发表论文40余篇，三次获得中国计算语言学大会最佳论文奖，开源项目在GitHub获得超过一万星标。",
    summaryEn:
      "Dr. Hu has been deeply engaged in NLP field for many years, leading multiple national-level research projects, perfectly combining cutting-edge academic research with industrial applications. She has published over 40 papers in international top conferences, won Best Paper Award at China Conference on Computational Linguistics three times, and her open source projects have received over 10,000 stars on GitHub.",
    details: `<h4>学术界与产业界的双重领军者</h4>
<p>Dr. Iris Hu，北京师范大学副教授，"第二大脑"首席科学家。作为计算语言学和自然语言处理领域的杰出学者，Dr. Iris Hu 在学术研究与产业应用之间架起了一座坚实的桥梁。</p>

<h4>学术成就卓越</h4>
<ul>
<li>深耕计算语言学、自然语言处理及其应用领域多年</li>
<li>主持国家社科基金青年项目、国家自然科学基金青年项目、北京市社科重点项目等多项重要课题</li>
</ul>

<h4>国际学术影响力</h4>
<ul>
<li>在ACL、EMNLP、COLING等NLP领域国际顶级会议和高水平学术刊物上发表论文40余篇</li>
<li>三次荣获中国计算语言学大会最佳论文奖</li>
</ul>

<h4>技术创新与专利成果</h4>
<ul>
<li>获得国家发明专利授权6项</li>
<li>为NLP技术的产业化应用奠定了坚实基础</li>
</ul>

<h4>开源贡献与社区影响</h4>
<ul>
<li>主持构建了中文词向量资源库等多项开源项目</li>
<li>在GitHub获得超过一万星标</li>
<li>为中文NLP社区的发展做出了重要贡献</li>
</ul>

<h4>教学特色</h4>
<ul>
<li>将前沿的学术研究成果转化为易于理解的教学内容</li>
<li>善于用实际案例帮助学生理解复杂的NLP概念</li>
</ul>`,
    detailsEn: `<h4>Academic and Industrial Dual Leader</h4>
<p>Dr. Hu Renfeng, Associate Professor at Beijing Normal University and Chief Scientist of "Second Brain". As an outstanding scholar in computational linguistics and natural language processing, Dr. Hu has built a solid bridge between academic research and industrial applications.</p>

<h4>Excellent Academic Achievements</h4>
<ul>
<li>Deeply involved in computational linguistics, natural language processing and its applications for many years</li>
<li>Presiding over multiple important projects including National Social Science Foundation Youth Project, National Natural Science Foundation Youth Project, and Beijing Social Science Key Project</li>
</ul>

<h4>International Academic Influence</h4>
<ul>
<li>Published over 40 papers in international top conferences and high-level academic journals such as ACL, EMNLP, and COLING</li>
<li>Won the Best Paper Award at China Conference on Computational Linguistics three times</li>
</ul>

<h4>Technological Innovation and Patents</h4>
<ul>
<li>Obtained 6 authorized national invention patents</li>
<li>Laid a solid foundation for the industrialization of NLP technology</li>
</ul>

<h4>Open Source Contributions</h4>
<ul>
<li>Created multiple open source projects including Chinese word vector resource library</li>
<li>Received over 10,000 stars on GitHub</li>
<li>Made important contributions to the development of the Chinese NLP community</li>
</ul>

<h4>Teaching Features</h4>
<ul>
<li>Transforms cutting-edge academic achievements into easy-to-understand teaching content</li>
<li>Skilled at using actual cases to help students understand complex NLP concepts</li>
</ul>`,
    quote:
      "自然语言处理的终极目标不是让机器模仿人类，而是帮助人类更好地理解自己的思维方式。",
    quoteEn:
      "The ultimate goal of natural language processing is not to make machines imitate humans, but to help humans better understand their own thinking patterns.",
    photo: "1",
  },
  {
    id: "mentor-c",
    name: "Fred Chi",
    nameEn: "Fred Chi",
    title: "蜜蜂时代 首席程序员",
    titleEn: "Chief Programmer",
    summary:
      "从DOS时代的传奇软件到现代AI应用，池老师见证并推动了中国软件业的发展历程。他将深厚的底层技术功底与现代AI技术完美融合，擅长私有模型部署、分布式系统架构和高性能数据处理。",
    summaryEn:
      "From legendary DOS-era software to modern AI applications, 25 years of technical career witnessing China's software industry development. Expert in underlying system architecture, skilled in private model deployment, distributed system design and high-performance data processing.",
    details: `<p>Fred Chi，1976年生，北京科技大学计算机科学与技术专业本科毕业。作为中国软件业黄金年代的亲历者和推动者，Fred Chi 拥有25年深厚的技术底蕴和丰富的实战经验。</p>

<h4>超级解霸传奇缔造者</h4>
<ul>
<li>作为豪杰超级解霸的核心程序员，参与开发了这款影响一代中国用户的经典软件</li>
<li>在多媒体技术刚刚兴起的年代，深度参与了底层音视频解码算法的研发</li>
</ul>

<h4>25年C/C++架构大师</h4>
<ul>
<li>从DOS时代到现代云计算，技术生涯横跨计算机技术发展的多个重要阶段</li>
<li>25年的C/C++开发经验对系统底层原理有着深刻理解</li>
</ul>

<h4>全栈技术专家</h4>
<ul>
<li>掌握传统底层技术的同时，紧跟技术发展潮流</li>
<li>精通Python、Go等现代后端开发语言</li>
</ul>

<h4>AI时代的技术先锋</h4>
<ul>
<li><strong>私有模型部署专家：</strong>深度理解LLM底层原理，擅长企业级私有模型的本地化部署和优化</li>
<li><strong>NLP算法实践者：</strong>将多年的文本处理经验与现代NLP技术相结合，精通RAG系统设计</li>
<li><strong>分布式爬虫架构师：</strong>设计过处理TB级数据的分布式爬虫集群</li>
</ul>

<h4>教学特色</h4>
<ul>
<li>将25年的技术沉淀转化为深入浅出的教学内容</li>
<li>擅长用生动的实例帮助学生理解复杂的技术概念</li>
</ul>`,
    detailsEn: `<p>Fred Chi, born in 1976, graduated from Beijing University of Science and Technology with a bachelor's degree in Computer Science and Technology. As a witness and promoter of the golden age of China's software industry, Chi has 25 years of deep technical foundation and rich practical experience.</p>

<h4>Legend Creator of Super Player</h4>
<ul>
<li>As a core programmer of Haojie Super Player, participated in developing this classic software that influenced a generation of Chinese users</li>
<li>Deeply involved in the research and development of underlying audio and video decoding algorithms</li>
</ul>

<h4>25-Year C/C++ Architecture Master</h4>
<ul>
<li>From DOS era to modern cloud computing, technical career has spanned multiple important stages</li>
<li>25 years of C/C++ development experience with deep understanding of system underlying principles</li>
</ul>

<h4>Full-Stack Technical Expert</h4>
<ul>
<li>Mastering traditional underlying technologies while keeping up with technological trends</li>
<li>Proficient in modern backend development languages such as Python and Go</li>
</ul>

<h4>Technology Pioneer in AI Era</h4>
<ul>
<li><strong>Private Model Deployment Expert:</strong> Deep understanding of LLM underlying principles</li>
<li><strong>NLP Algorithm Practitioner:</strong> Combining years of text processing experience with modern NLP technology</li>
<li><strong>Distributed Crawler Architect:</strong> Designed distributed crawler clusters handling TB-level data</li>
</ul>

<h4>Teaching Features</h4>
<ul>
<li>Transforms 25 years of technical accumulation into easy-to-understand teaching content</li>
<li>Skilled at using vivid examples to help students understand complex technical concepts</li>
</ul>`,
    quote:
      "技术的本质是解决问题，而解决问题需要的是扎实的基础和开放的思维。",
    quoteEn:
      "The essence of technology is solving problems, which requires solid foundation and open mindset.",
    photo: "",
  },
  {
    id: "mentor-vito",
    name: "Vito Liu",
    nameEn: "Vito Liu",
    title: "高级AI工程师",
    titleEn: "Senior AI Engineer",
    summary:
      "麦吉尔大学计算机科学与数学双学位，Beebee AI核心开发工程师，专注RAG系统和LLM应用开发。Vito拥有两年AI产品开发经验，主导构建多个企业级知识管理系统。",
    summaryEn:
      "McGill University Computer Science and Mathematics double degree, Beebee AI core development engineer, focusing on RAG systems and LLM application development. Vito has two years of AI product development experience.",
    details: `<p>毕业于加拿大顶尖学府麦吉尔大学，获计算机科学与数学双学位。作为Beebee AI的核心技术骨干，Vito在RAG系统开发和LLM应用领域拥有丰富的实战经验。</p>

<h4>技术专长与项目经验</h4>
<ul>
<li>专注于大语言模型驱动的RAG（检索增强生成）SaaS应用开发</li>
<li>主导构建了多个企业级知识管理系统</li>
</ul>

<h4>全栈开发能力</h4>
<ul>
<li>精通Python、JavaScript、React等现代技术栈</li>
<li>擅长使用Flask构建高效API</li>
</ul>

<h4>核心技术成就</h4>
<ul>
<li><strong>多模态RAG系统：</strong>设计并实现了支持文本、图像等多种数据格式的智能检索系统</li>
<li><strong>意图引擎架构师：</strong>构建智能意图理解系统</li>
<li><strong>文档处理专家：</strong>利用ElasticSearch实现语义嵌入和分块检索</li>
</ul>

<h4>商业洞察力</h4>
<ul>
<li>能够清晰阐述AI解决方案在提升运营效率、降低成本、推动数字化转型方面的作用</li>
</ul>

<h4>全面发展的工程师</h4>
<ul>
<li>曾是麦吉尔大学竞技游泳队成员</li>
<li>现在热衷于力量举和巴西柔术</li>
</ul>`,
    detailsEn: `<p>Graduated from McGill University, one of Canada's top universities, with a double degree in Computer Science and Mathematics. As a core technical backbone of Beebee AI, Vito has rich practical experience in RAG system development and LLM applications.</p>

<h4>Technical Expertise</h4>
<ul>
<li>Focuses on large language model-driven RAG (Retrieval-Augmented Generation) SaaS application development</li>
<li>Led the construction of multiple enterprise-level knowledge management systems</li>
</ul>

<h4>Full-Stack Development Capabilities</h4>
<ul>
<li>Proficient in modern technology stacks such as Python, JavaScript, and React</li>
<li>Skilled at building efficient APIs using Flask</li>
</ul>

<h4>Core Technical Achievements</h4>
<ul>
<li><strong>Multimodal RAG System:</strong> Designed and implemented intelligent retrieval system supporting multiple data formats</li>
<li><strong>Intent Engine Architect:</strong> Built intelligent intent understanding system</li>
<li><strong>Document Processing Expert:</strong> Implemented semantic embedding and chunked retrieval using ElasticSearch</li>
</ul>

<h4>Business Insight</h4>
<ul>
<li>Can clearly articulate how AI solutions improve operational efficiency and drive digital transformation</li>
</ul>

<h4>Well-Rounded Engineer</h4>
<ul>
<li>Former McGill University competitive swimming team member</li>
<li>Now passionate about powerlifting and Brazilian Jiu-Jitsu</li>
</ul>`,
    quote:
      "代码如力量举，每一行都要精准到位；AI如柔术，以巧制胜方能四两拨千斤。",
    quoteEn:
      "Code is like powerlifting, every line must be precise; AI is like Jiu-Jitsu, winning with skill.",
    photo: "1",
  },
  {
    id: "mentor-miles",
    name: "Miles Chen",
    nameEn: "Miles Chen",
    title: "AI大数据工程师",
    titleEn: "AI Big Data Engineer",
    summary:
      "重庆对外经贸学院数据科学与大数据技术专业，BEEBEE AI核心数据工程师，专注大规模数据采集和AI应用开发。Miles Chen 在爬虫技术和并发编程方面经验丰富。",
    summaryEn:
      "Chongqing Technology and Business University Data Science and Big Data Technology major, BEEBEE AI core data engineer, focusing on large-scale data collection and AI application development.",
    details: `<p>Miles Chen，毕业于重庆对外经贸学院数据科学与大数据技术专业。作为BEEBEE AI团队的核心数据工程师，Miles Chen 在大规模数据采集、算法优化和AI应用开发方面积累了丰富的实战经验。</p>

<h4>核心技术专长</h4>
<ul>
<li>在爬虫技术和并发编程领域表现出色</li>
<li>精通基于Python的Web数据抓取技术</li>
</ul>

<h4>重要项目成就</h4>
<ul>
<li>主导设计并实现了一套完整的数据采集解决方案</li>
<li>该系统采用BFS算法确保网站页面的全覆盖抓取</li>
</ul>

<h4>AI产品开发经验</h4>
<ul>
<li>运用自然语言处理技术</li>
<li>让普通用户无需掌握复杂Excel语法即可进行数据查询和分析</li>
</ul>

<h4>技术架构能力</h4>
<ul>
<li>擅长数据全生命周期管理</li>
<li>从数据抓取、清洗、存储到分析</li>
</ul>

<h4>产品化思维</h4>
<ul>
<li>具有敏锐的产品化意识</li>
<li>能够深入理解用户需求</li>
</ul>`,
    detailsEn: `<p>Chen Sihai graduated from Chongqing Technology and Business University with a major in Data Science and Big Data Technology. As a core data engineer of the BEEBEE AI team, Chen has accumulated rich practical experience.</p>

<h4>Core Technical Expertise</h4>
<ul>
<li>Excels in crawler technology and concurrent programming</li>
<li>Proficient in Python-based Web data scraping technology</li>
</ul>

<h4>Important Project Achievements</h4>
<ul>
<li>Led the design and implementation of a complete data collection solution</li>
<li>The system uses BFS algorithm to ensure full coverage crawling</li>
</ul>

<h4>AI Product Development Experience</h4>
<ul>
<li>Uses natural language processing technology</li>
<li>Enables ordinary users to query and analyze data without mastering complex Excel syntax</li>
</ul>

<h4>Technical Architecture Ability</h4>
<ul>
<li>Skilled in data lifecycle management</li>
<li>From data scraping, cleaning, storage to analysis</li>
</ul>

<h4>Product-Oriented Thinking</h4>
<ul>
<li>Has keen product awareness</li>
<li>Can deeply understand user needs</li>
</ul>`,
    quote:
      "异步并发让系统更快，断点续传让数据更安全，增量更新让资源更省——这就是工程优化的艺术。",
    quoteEn:
      "Asynchronous concurrency makes systems faster, resumable uploads make data safer, incremental updates save resources - this is the art of engineering optimization.",
    photo: "1",
  },
  {
    id: "mentor-ashlynn",
    name: "Ashlynn Lu",
    nameEn: "Ashlynn Lu",
    title: "AI 数据工程师",
    titleEn: "AI Data Engineer",
    summary:
      "毕业于爱丁堡大学数学与统计学（一等荣誉），帝国理工学院统计系数据科学硕士（卓越级）。现为 BEEBEEAI 后端软件工程师，专注于基于大语言模型的生产力工具研发。具备扎实的数学推理能力与工程实现能力，在统计建模、LLM 数据处理与高性能系统设计方面经验丰富。",
    summaryEn:
      "Holds a First-Class Honours degree in Mathematics & Statistics from the University of Edinburgh and a Distinction MSc in Data Science from Imperial College London. Currently an AI-focused backend engineer at BEEBEEAI, building productivity tools powered by large language models. Known for combining rigorous statistical thinking with practical engineering execution.",
    details: `
<p>Ashlynn Lu，AI 数据工程师与后端软件开发者，兼具强数学基础与扎实工程能力。她擅长将统计学方法引入 AI 工作流，通过严谨的分析与系统化实现提升模型与数据的效率。</p>

<h4>学术经历与奖项</h4>
<ul>
  <li>帝国理工学院统计系数据科学硕士（卓越级）</li>
  <li>爱丁堡大学数学与统计学士（一等荣誉学位）</li>
  <li>爱丁堡大学 Lawley 奖（统计联合荣誉学位最杰出表现）</li>
  <li>学院假期奖学金获得者</li>
</ul>

<h4>技术能力与工程实践</h4>
<ul>
  <li>设计与实现大规模异步爬虫系统，支持高并发与高扩展数据任务</li>
  <li>构建基于 LLM 的语义关键词提取系统，提升数据清洗与标注效率</li>
  <li>完成 MySQL 与 Elasticsearch 的多存储集成与查询优化</li>
  <li>擅长贝叶斯优化与高维约束问题求解</li>
  <li>熟练使用 Python / R 进行数据分析与统计建模</li>
</ul>

<h4>教学侧重点与理念</h4>
<ul>
  <li>用统计思维解读 AI 算法本质，帮助学生建立底层理解</li>
  <li>强调数学基础与工程实践的平衡，将抽象概念转化为可操作技巧</li>
  <li>善于用清晰示例拆解复杂模型与概率推理步骤</li>
</ul>
`,
    detailsEn: `
<p>Ashlynn Lu is an AI Data Engineer with strong foundations in mathematics, statistics, and engineering execution. She is experienced in applying statistical frameworks to AI workflows and building scalable systems for LLM-driven applications.</p>

<h4>Academic Background & Awards</h4>
<ul>
  <li>MSc in Data Science (Distinction), Imperial College London</li>
  <li>BSc in Mathematics & Statistics (First-Class Honours), University of Edinburgh</li>
  <li>Recipient of the Lawley Prize for outstanding performance in joint honours statistics</li>
  <li>Winner of the School Vacation Scholarship</li>
</ul>

<h4>Technical Expertise</h4>
<ul>
  <li>Design and implementation of large-scale asynchronous crawling systems</li>
  <li>LLM-based semantic keyword extraction and data optimization</li>
  <li>Integration of MySQL and Elasticsearch multi-storage systems</li>
  <li>Bayesian optimization and high-dimensional constrained problem solving</li>
  <li>Python/R data analysis and statistical modeling</li>
</ul>

<h4>Teaching Philosophy</h4>
<ul>
  <li>Interprets AI algorithms through rigorous statistical thinking</li>
  <li>Balances mathematical foundations with practical engineering execution</li>
  <li>Known for clear explanations that break down complex models and probabilistic logic</li>
</ul>
`,
    quote: "用统计让 AI 更透明，用工程让模型真正落地。",
    quoteEn:
      "Statistics makes AI clearer, engineering makes it real.",
    photo: "",
  },
  {
    id: "mentor-charlie",
    name: "Charlie Chen",
    nameEn: "Charlie Chen",
    title: "AI 算法工程师",
    titleEn: "AI Algorithm Engineer",
    summary:
      "专注 NLP 算法与 AI 产品化，有两年算法研发经验。深度参与第二大脑的考试与写作智能体研发，负责微信、飞书等主流平台的接入与功能落地。对 Transformer 优化、提示词工程、RAG 系统与全栈工程有实践积累。",
    summaryEn:
      "Focused on NLP algorithms and AI productization, with two years of hands-on experience. Contributed to the development of exam and writing agents for the Second Brain project and integrated them into platforms such as WeChat and Feishu. Experienced in Transformer optimization, prompt engineering, RAG pipelines and full-stack Python development.",
    details: `
<p>Charlie Chen，AI 算法工程师，长期在 NLP 方向深耕，尤其关注"算法到产品"的落地流程。他既写模型，也写后端，对工程化有完整理解。</p>

<h4>技术专长</h4>
<ul>
  <li>Transformer 架构优化与 NLP 模型构建</li>
  <li>提示词工程与大型模型调优策略</li>
  <li>多模态 RAG 系统设计及 Elasticsearch 向量检索</li>
  <li>Python 全栈开发（Flask / FastAPI / WebSocket）</li>
  <li>Docker 容器化部署与服务架构设计</li>
</ul>

<h4>项目经验</h4>
<ul>
  <li>主导开发考试/写作智能体，引入微信、飞书等多平台使用场景</li>
  <li>在 API 集成、跨平台通信和第三方服务对接方面经验扎实</li>
  <li>推动模型能力与实际业务需求的真实闭环</li>
</ul>

<h4>教学方式与理念</h4>
<ul>
  <li>理论与实践并重，擅长把复杂流程拆成可执行步骤</li>
  <li>强调个性化指导，能快速定位学习者的卡点</li>
  <li>风格轻松直接，帮助学生用最快路径吃透 NLP 核心技能</li>
</ul>
`,
    detailsEn: `
<p>Charlie Chen is an AI algorithm engineer focused on NLP development and AI product delivery. He works across both modeling and backend engineering, giving him a full-stack perspective on building AI systems.</p>

<h4>Technical Expertise</h4>
<ul>
  <li>Transformer optimization and NLP model construction</li>
  <li>Prompt engineering and large-model fine-tuning</li>
  <li>Multimodal RAG pipelines and Elasticsearch vector search</li>
  <li>Python full-stack development (Flask / FastAPI / WebSocket)</li>
  <li>Docker-based deployment and service architecture design</li>
</ul>

<h4>Project Achievements</h4>
<ul>
  <li>Led development of exam/writing agents and integrated them into WeChat, Feishu and other major platforms</li>
  <li>Strong practical experience in API integration and third-party service connectivity</li>
  <li>Bridges model capabilities with real product requirements</li>
</ul>

<h4>Teaching Philosophy</h4>
<ul>
  <li>Balances theory with hands-on practice; simplifies complex ideas into clear steps</li>
  <li>Provides personalized technical guidance</li>
  <li>Creates a relaxed and intuitive learning environment</li>
</ul>
`,
    quote:
      "Transformer的自注意力机制教会我:真正的智能不是记住所有信息,而是知道在什么时候关注什么。",
    quoteEn:
      "Transformer's self-attention taught me: true intelligence isn't remembering everything—it's knowing what to focus on at the right moment.",
    photo: "",
  },
  {
    id: "mentor-bobby",
    name: "Bobby Wang",
    nameEn: "Bobby Wang",
    title: "资深前端工程师",
    titleEn: "Senior Frontend Engineer",
    summary:
      "拥有 8 年前端开发经验，精通多端研发与现代前端技术栈。具备从微信小程序、H5、PC 到 App 的全平台项目经验，熟悉前端架构、组件封装与高质量工程实践。",
    summaryEn:
      "Senior frontend engineer with 8 years of experience, skilled in multi-platform development across WeChat Mini Programs, H5, PC, and mobile apps. Strong in frontend architecture, component design, and modern JavaScript frameworks.",
    details: `
<p>Bobby Wang，资深前端工程师，长期从事多端研发与前端架构设计工作。对多平台生态、性能优化和工程规范有成熟经验，能将前端技术有效落地到稳定的商业产品中。</p>

<h4>技术专长</h4>
<ul>
  <li>Uniapp 跨平台开发：一套代码多端运行的完整实践</li>
  <li>Vue 全家桶（Vue2 / Vue3 / Nuxt SSR）</li>
  <li>深入理解 JavaScript 核心机制与响应式开发模式</li>
  <li>WebSocket 实时通信与数据交互</li>
  <li>前端架构设计、组件封装与工程化规范</li>
</ul>

<h4>项目经验</h4>
<ul>
  <li>负责在线商城、后台管理系统、SaaS 工具、数据大屏等多个商业级项目</li>
  <li>完整参与从需求、架构、开发到上线的全流程</li>
  <li>对多端适配与复杂交互开发有丰富实战积累</li>
</ul>

<h4>教学方式与理念</h4>
<ul>
  <li>基于丰富的商业项目经验，强调实战能力与代码质量培养</li>
  <li>善用真实案例说明前端关键概念与最佳实践</li>
  <li>以清晰直观的方式带学生构建扎实的前端工程思维</li>
</ul>
`,
    detailsEn: `
<p>Bobby Wang is a senior frontend engineer with deep experience in multi-platform development and modern frontend architecture. He focuses on building reliable, scalable frontends across different ecosystems.</p>

<h4>Technical Expertise</h4>
<ul>
  <li>Uniapp cross-platform development: write once, run on multiple clients</li>
  <li>Vue ecosystem (Vue2 / Vue3 / Nuxt SSR)</li>
  <li>Strong understanding of JavaScript internals and reactive development</li>
  <li>WebSocket-based real-time communication</li>
  <li>Frontend architecture, component design, and engineering best practices</li>
</ul>

<h4>Project Experience</h4>
<ul>
  <li>Worked on e-commerce platforms, admin systems, SaaS tools, data dashboards and more</li>
  <li>Experienced in full-cycle development: planning, architecture, implementation, deployment</li>
  <li>Seasoned in multi-platform adaptation and complex UI/UX interactions</li>
</ul>

<h4>Teaching Philosophy</h4>
<ul>
  <li>Focuses on practical application and clean code, built on real commercial experience</li>
  <li>Uses real-world examples to explain core frontend concepts and best practices</li>
  <li>Helps students build strong engineering intuition through clear and structured teaching</li>
</ul>
`,
    quote: "前端不是堆代码，而是把体验和工程做到位。",
    quoteEn:
      "Frontend is not about stacking code, but building solid engineering and great experiences.",
    photo: "",
  },
  {
    id: "mentor-fangzhong",
    name: "Fangzhong Liu",
    nameEn: "Fangzhong Liu",
    title: "资深数据科学家（Teladoc Health）",
    titleEn: "Senior Data Scientist, Teladoc Health",
    summary:
      "芝加哥大学金融数学硕士，印第安纳大学金融与数学双学士。现任 Teladoc Health 资深数据科学家，负责市场分析与模型体系建设，主导季度策略项目与内部 RAG Analytics Assistant 的研发。曾在 AIG 负责量化风险建模，涉及信用风险、资产组合建模与大规模模拟系统。近期开展多项个人 AI 项目，包括 OCR + LLM 多语言菜单助手 YumTranslate。",
    summaryEn:
      "Holds a Master’s in Financial Mathematics from the University of Chicago and dual bachelor’s degrees in Finance and Mathematics from Indiana University. Senior Data Scientist at Teladoc Health, leading marketing analytics, modeling infrastructure and RAG-based internal tools. Former Quantitative Risk Lead at AIG, responsible for large-scale credit risk and asset modeling. Recently built personal AI projects including YumTranslate, an OCR + LLM multilingual assistant.",
    details: `
<p>Fangzhong Liu 是兼具金融数学背景与数据科学经验的资深算法负责人。他在机器学习、应用 AI、营销策略建模与 RAG 系统方面有深入实践，擅长把"模型如何影响业务"讲清楚，用严谨方法支持真正的业务增长。</p>

<h4>核心专业经验</h4>
<ul>
  <li>构建 XGBoost、uplift、propensity 全流程模型，推动注册增长近 50%</li>
  <li>搭建 Google Meridian MMM 模型，用于跨渠道 ROI 测算与预算优化</li>
  <li>主导 A/B 测试与增长实验体系设计，支持业务决策与验证过程</li>
  <li>设计实时营销监控系统（40+ 指标），减少 DS 支撑需求 40%</li>
  <li>推动 80% 报表自动化：开发 Python + CI/CD 数据管线</li>
  <li>AIG 时期负责信用风险模型、Monte Carlo 模拟、违约预测（85% 准确度）</li>
  <li>开发早期预警系统，在 COVID 时期避免约 8,000 万潜在损失</li>
</ul>

<h4>AI 与系统应用</h4>
<ul>
  <li>设计内部 RAG Analytics Assistant，提高营销团队洞察效率</li>
  <li>主导 OCR + LLM 项目 YumTranslate，支持多语言 menu 翻译与识别</li>
  <li>在机器学习与 AI 应用之间建立完整闭环，从数据到部署</li>
</ul>

<h4>技术栈与能力优势</h4>
<ul>
  <li>Python、SQL、PySpark、TensorFlow、Scikit-learn、MLflow、Databricks</li>
  <li>LLMs（GPT / vLLM）与 RAG 系统构建（Elastic Vector DB）</li>
  <li>MMM、MTA、A/B 测试、增长分析全链路</li>
  <li>MLOps：AWS、Docker、CI/CD</li>
  <li>沟通能力强、跨团队协作经验丰富，具备成熟的新人培养能力</li>
</ul>

<h4>教学理念与风格</h4>
<ul>
  <li>擅长把“模型 + 业务逻辑”讲得直白，让学生真正理解模型如何改变业务</li>
  <li>课程注重实战：案例 + 可复用模板 + 标准代码框架</li>
  <li>强调业务验证：怎么评估模型、怎么上线、怎么跑得稳</li>
  <li>沟通直接、有判断力，会根据学员背景调整讲解深度与内容密度</li>
</ul>
`,
    detailsEn: `
<p>Fangzhong Liu is a senior data scientist with a strong background in financial mathematics and applied machine learning. He specializes in marketing analytics, ML modeling, RAG systems, and end-to-end AI productization.</p>

<h4>Professional Experience</h4>
<ul>
  <li>Built XGBoost, uplift, and propensity models driving ~50% registration lift and significant revenue impact</li>
  <li>Implemented Google Meridian MMM for multi-channel ROI evaluation</li>
  <li>Led A/B testing and growth experiment frameworks for business validation</li>
  <li>Designed 40+ KPI real-time marketing monitoring system reducing DS support by 40%</li>
  <li>Automated 80% of reporting via Python + CI/CD pipelines</li>
  <li>At AIG, led credit risk modeling, Monte Carlo simulations, and default prediction (85% accuracy)</li>
  <li>Built early warning systems preventing ~$80M losses during COVID</li>
</ul>

<h4>AI & System Applications</h4>
<ul>
  <li>Designed Teladoc’s internal RAG Analytics Assistant to enhance marketing insights</li>
  <li>Built YumTranslate, an OCR + LLM multilingual menu assistant</li>
  <li>Experienced in connecting data, modeling and deployment into one coherent workflow</li>
</ul>

<h4>Technical Strengths</h4>
<ul>
  <li>Python, SQL, PySpark, TensorFlow, Scikit-learn, MLflow, Databricks</li>
  <li>LLMs (GPT / vLLM), RAG systems with Elastic Vector DB</li>
  <li>MMM, MTA, A/B testing, growth analytics</li>
  <li>MLOps with AWS, Docker, CI/CD</li>
  <li>Strong communication, cross-team alignment, and mentoring ability</li>
</ul>

<h4>Teaching Style</h4>
<ul>
  <li>Explains “model + business impact” in a clear, structured way</li>
  <li>Focuses on practical cases, reusable templates, and code frameworks</li>
  <li>Helps students understand how to validate, ship and maintain real models</li>
  <li>Direct, adaptive communication style; adjusts depth based on student background</li>
</ul>
`,
    quote: "模型的价值不在分数，而在能否真正推动业务前进。",
    quoteEn:
      "A model’s value isn’t in its metrics—it’s in its real business impact.",
    photo: "",
  },
  {
    id: "mentor-mingxi",
    name: "Mingxi Chen",
    nameEn: "Mingxi Chen",
    title: "全栈工程师 / AI 应用开发者",
    titleEn: "Full-Stack Engineer & AI Application Developer",
    summary:
      "毕业于纽约州立大学石溪分校计算机科学专业，专注全栈开发与 AI 应用落地。熟悉 React / Node / Mongo / Firebase 等完整工程链路，能将大模型、RAG、OCR、自动化流程等技术与前后端系统结合。拥有医疗、加密货币、电商等行业的项目经验，多次主导从“想法 → MVP → 可上线产品”的完整交付。",
    summaryEn:
      "CS graduate from Stony Brook University. Focused on full-stack development and AI application engineering. Experienced with React, Node, MongoDB, Firebase, vLLM, RAG, OCR, automation workflows and multi-service orchestration. Delivered multiple end-to-end projects across healthcare, crypto and e-commerce, taking products from concept to MVP to production.",
    details: `
<p>Mingxi Chen 是一名全栈工程师与 AI 应用开发者，具备扎实的工程底层能力，能把大模型技术与真实业务系统快速结合。他擅长从零搭建可用产品，在同龄工程师中兼具逆向、爬虫、RAG、全栈和自动化能力。</p>

<h4>项目与工程经验</h4>
<ul>
  <li>负责多行业工程项目：医疗、加密货币、电商等场景</li>
  <li>多次主导从“想法 → MVP → 可上线产品”的完整流程</li>
  <li>具备前端、后端、数据库到模型服务的完整交付能力</li>
  <li>参与 NLP 与 LLM 相关实验：OpenAI API、CoT、GPT 微调技巧</li>
</ul>

<h4>AI / 系统构建能力</h4>
<ul>
  <li>vLLM 推理服务部署与性能优化</li>
  <li>Cloudflare Tunnel 公网访问与服务暴露</li>
  <li>OCR（PaddleOCR）在图像与文档识别的落地实践</li>
  <li>ElasticSearch RAG 系统（含多模态 PDF 解析）</li>
  <li>MCP 多服务调度流程与系统交互设计</li>
  <li>Playwright 自动化抓取与任务流水线</li>
  <li>接口逆向工程：如 Instagram 登录流程逆向与自动化实现</li>
</ul>

<h4>全栈开发技能</h4>
<ul>
  <li>React / Node / MongoDB / Firebase 完整工程体系</li>
  <li>前后端 API 架构设计与权限体系搭建</li>
  <li>前端组件结构、后端服务封装、数据库建模</li>
</ul>

<h4>教学理念与风格</h4>
<ul>
  <li>擅长把“LLM + 工程”打通：部署、RAG、自动化、前后端接入</li>
  <li>重视实际可运行的效果，帮助初学者做出真正“能跑”的项目</li>
  <li>喜欢用流程图、可视化 Demo、RAG 面板等方式讲解复杂流程</li>
  <li>做事风格务实、节奏快，落地能力强</li>
  <li>在同龄人中工程能力突出：逆向、全栈、爬虫与 AI 应用都能做</li>
</ul>
`,
    detailsEn: `
<p>Mingxi is a full-stack engineer and AI application builder who bridges LLM technologies with real system engineering. He has strong hands-on ability across frontend, backend, automation and AI system design.</p>

<h4>Project & Engineering Experience</h4>
<ul>
  <li>Delivered engineering projects in healthcare, crypto and e-commerce</li>
  <li>Led multiple end-to-end cycles: idea → MVP → production-ready</li>
  <li>Frontend–backend–database–LLM pipeline experience</li>
  <li>Hands-on NLP experiments: OpenAI API, CoT, GPT fine-tuning techniques</li>
</ul>

<h4>AI / System Building Skills</h4>
<ul>
  <li>vLLM inference deployment & optimization</li>
  <li>Cloudflare Tunnel for secure public access</li>
  <li>OCR (PaddleOCR) for document and image extraction</li>
  <li>ElasticSearch-based RAG with multimodal PDF parsing</li>
  <li>MCP multi-service orchestration</li>
  <li>Playwright automation pipelines</li>
  <li>API reverse engineering (e.g., Instagram login flow)</li>
</ul>

<h4>Full-Stack Development</h4>
<ul>
  <li>React / Node / MongoDB / Firebase</li>
  <li>API architecture and backend service design</li>
  <li>Frontend component structure, backend logic, data modeling</li>
</ul>

<h4>Teaching Style</h4>
<ul>
  <li>Explains the full connection between LLMs and engineering workflows</li>
  <li>Helps beginners build projects that actually run end-to-end</li>
  <li>Uses demos, diagrams and visualizations to make concepts intuitive</li>
  <li>Fast-paced, practical and result-oriented teaching</li>
  <li>Strong engineering versatility: reverse engineering, automation, RAG, full-stack</li>
</ul>
`,
    quote: "好项目不是想出来的，是一步步跑出来的。",
    quoteEn:
      "Good projects don’t come from ideas—they come from building them.",
    photo: "",
  },
  {
    id: "mentor-hongshu",
    name: "Shu Hong",
    nameEn: "Shu Hong",
    title: "高级系统开发工程师 / 金融科技方向",
    titleEn: "Senior Systems Developer / FinTech Engineer",
    summary:
      "毕业于哥伦比亚大学运筹学硕士、纽约大学电子工程硕士与中山大学电子通信本科。拥有多年华尔街系统开发经验，现任 StoneCastle Partners SVP Developer（7 年），此前在 MKP Capital 与 Aroya Capital 从事交易台与应用开发。具备扎实的软件工程基础与金融系统架构能力，熟悉 Python、Java、SQL、C#、Spring 体系与多前端框架。",
    summaryEn:
      "Holds an MS in Operations Research from Columbia University, an MS in Electrical Engineering from NYU, and a BS in Electronic Communication from Sun Yat-sen University. With extensive experience in financial systems engineering, he has spent 7+ years as an SVP Developer at StoneCastle Partners, previously working in application and trading desk development at MKP Capital and Aroya Capital. Skilled in Python, Java, SQL, C#, Spring Boot, APIs, and modern frontend technologies.",
    details: `
<p>Shu Hong 在金融科技领域深耕多年，横跨运筹学、电子工程与金融系统开发，在华尔街中后台与交易台系统的实际建设中经验丰富。</p>

<h4>金融工程与行业经历</h4>
<ul>
  <li>StoneCastle Partners：SVP Developer，负责核心系统开发与内部平台建设（任职 7 年以上）</li>
  <li>MKP Capital：应用开发工程师，参与量化工具与交易支持系统建设</li>
  <li>Aroya Capital：交易台相关系统开发，接触多类金融产品与实时数据流</li>
</ul>

<h4>技术专长</h4>
<ul>
  <li>后端开发：Python / Java / C# / SQL</li>
  <li>Spring Boot API 开发与服务集成</li>
  <li>前端技能：Vue.js / Angular</li>
  <li>金融系统架构设计与跨模块协作</li>
  <li>Plaid 金融数据集成经验</li>
</ul>

<h4>系统与项目经验</h4>
<ul>
  <li>构建和维护资产管理、交易支持与内部运营系统</li>
  <li>设计稳定、安全、合规的金融数据处理流程</li>
  <li>搭建跨语言、跨服务的企业级应用架构</li>
  <li>推动前后端技术升级与系统现代化</li>
</ul>

<h4>教学理念与风格</h4>
<ul>
  <li>以工程质量与实战经验为核心，强调可维护性与长期稳定性</li>
  <li>擅长从“系统视角”讲解业务流程与技术架构</li>
  <li>能将复杂金融系统拆解为清晰模块，让学生理解真实业务场景中的技术决策</li>
</ul>
`,
    detailsEn: `
<p>Shu Hong is an experienced financial systems engineer with a strong background in operations research, electrical engineering and enterprise application development. He has built and maintained systems supporting trading desks, portfolio management and internal operations.</p>

<h4>Industry Experience</h4>
<ul>
  <li>StoneCastle Partners – SVP Developer, leading internal platform and system development for 7+ years</li>
  <li>MKP Capital – Application Developer for quantitative and trading-support tools</li>
  <li>Aroya Capital – Trading desk systems engineer working with real-time financial data</li>
</ul>

<h4>Technical Expertise</h4>
<ul>
  <li>Python, Java, C#, SQL</li>
  <li>Spring Boot API development</li>
  <li>Frontend frameworks: Vue.js, Angular</li>
  <li>Financial system architecture and workflow design</li>
  <li>Plaid API and financial data integrations</li>
</ul>

<h4>Systems & Project Experience</h4>
<ul>
  <li>Developed and maintained asset management, trading support and internal operational systems</li>
  <li>Designed secure and compliant data workflows for financial environments</li>
  <li>Built enterprise-level architectures integrating multiple services and languages</li>
  <li>Drove modernization of legacy systems and frontend upgrades</li>
</ul>

<h4>Teaching Style</h4>
<ul>
  <li>Focuses on engineering quality, maintainability and real-world constraints</li>
  <li>Explains systems from a practical, architecture-level perspective</li>
  <li>Able to break down complex financial workflows into understandable components</li>
</ul>
`,
    quote: "技术的价值在于构建稳得住、跑得久的系统。",
    quoteEn:
      "Great engineering is about building systems that stay stable and stay running.",
    photo: "",
  },
  {
    id: "mentor-heyang",
    name: "Heyang Long",
    nameEn: "Heyang Long",
    title: "Google 机器学习工程师",
    titleEn: "Machine Learning Engineer, Google",
    summary:
      "俄亥俄州立大学物理博士（总统奖学金），南京大学物理本科。曾任 Object Tech 机器学习科学家实习生、OSU 研究助理（共发表 11 篇论文）。现为 Google 机器学习工程师。在 BEE Beta 掌握从工程到 AI 的完整技术链路，包括 RAG、Agent、前后端、爬虫、CI/CD 等实战能力。",
    summaryEn:
      "PhD in Physics from Ohio State University (Presidential Fellowship) and BS in Physics from Nanjing University. Former ML Scientist Intern at Object Tech and Research Assistant at OSU with 11 publications. Currently a Machine Learning Engineer at Google, experienced across full-stack AI engineering including RAG, agents, crawling, API design, and CI/CD pipelines.",
    details: `
<p>Heyang Long 在理论物理、深度学习与工程系统之间有完整交叉背景。从科研到工业落地都长期实践，擅长用严谨逻辑和工程思维构建高可靠 AI 系统。</p>

<h4>教育背景与科研经历</h4>
<ul>
  <li>俄亥俄州立大学（Ohio State University）物理学博士 —— 总统奖学金获得者</li>
  <li>南京大学物理学本科</li>
  <li>OSU 研究助理：深度学习、计算建模相关 11 篇论文</li>
  <li>Object Tech 机器学习科学家实习：参与多模型系统与算法验证</li>
</ul>

<h4>工业经验与工程能力</h4>
<ul>
  <li>Google 机器学习工程师：参与模型工程、分析 pipeline、生产级 ML 系统</li>
  <li>具备从算法、模型到业务体系的完整链路经验</li>
  <li>熟悉大规模数据、分布式训练与高效推理优化</li>
</ul>

<h4>AI / 工程技术栈（在 BEE Beta 掌握）</h4>
<ul>
  <li>Cursor / MCP / API 设计与调用体系</li>
  <li>RAG、Agent 架构设计</li>
  <li>前后端工程：服务封装、前端实现、Firebase 集成</li>
  <li>爬虫与数据抓取工程</li>
  <li>CI/CD、工程规范与部署流程</li>
</ul>

<h4>机器学习与系统能力</h4>
<ul>
  <li>Python / SQL / C</li>
  <li>PyTorch / TensorFlow</li>
  <li>Transformer、视觉语言模型（VLM）</li>
  <li>RAG / LangChain 生态构建</li>
  <li>AWS / Snowflake 数据与云端部署能力</li>
</ul>

<h4>教学理念与风格</h4>
<ul>
  <li>能把复杂算法拆成结构化步骤，让学生理解“为什么这样做”</li>
  <li>重实践，强调模型、工程、数据三个环节的协同</li>
  <li>用科研逻辑解释模型，用工程方法让系统真正跑起来</li>
  <li>讲解清晰、思路严谨，适合希望从“会用 AI”进阶到“能构建系统”的学生</li>
</ul>
`,
    detailsEn: `
<p>Heyang Long combines backgrounds in physics, machine learning research, and production-grade engineering. He brings rigor from academic research and applies it to practical AI system building.</p>

<h4>Education & Research</h4>
<ul>
  <li>PhD in Physics, Ohio State University — Presidential Fellowship</li>
  <li>BS in Physics, Nanjing University</li>
  <li>Research Assistant at OSU with 11 publications</li>
  <li>ML Scientist Intern at Object Tech working on multi-model systems</li>
</ul>

<h4>Industry & Engineering Experience</h4>
<ul>
  <li>Machine Learning Engineer at Google</li>
  <li>Strengths in modeling, data workflows, and stable production ML systems</li>
  <li>Experience with large-scale training, inference and system optimization</li>
</ul>

<h4>AI / Engineering Stack</h4>
<ul>
  <li>Cursor, MCP, API design</li>
  <li>RAG architecture and agent pipelines</li>
  <li>Frontend–backend engineering and Firebase integration</li>
  <li>Crawling and automation</li>
  <li>CI/CD and deployment workflows</li>
</ul>

<h4>ML & System Skills</h4>
<ul>
  <li>Python, SQL, C</li>
  <li>PyTorch, TensorFlow</li>
  <li>Transformers, vision-language models</li>
  <li>RAG / LangChain ecosystem</li>
  <li>AWS, Snowflake</li>
</ul>

<h4>Teaching Style</h4>
<ul>
  <li>Breaks complex concepts into clear, structured steps</li>
  <li>Strong balance between theory and applied engineering</li>
  <li>Explains algorithms with research logic and implements them with engineering rigor</li>
  <li>Ideal for students who want to go from using AI → to building real AI systems</li>
</ul>
`,
    quote: "理解原理让你看得更深，工程实践让系统跑得更远。",
    quoteEn:
      "Principles reveal depth; engineering brings distance.",
    photo: "",
  },
];