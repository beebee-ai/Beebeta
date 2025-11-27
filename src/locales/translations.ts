export const translations = {
  zh: {
    // Header
    nav: {
      home: "首页",
      courses: "课程体系",
      works: "学员作品",
      team: "导师团队",
      about: "关于我们",
      faq: "常见问题",
      contact: "联系我们",
      ceoLetter: "CEO来信",
    },

    // Section Dividers
    sectionDividers: {
      chapter1: "参加 BEE Beta 你能得到什么？",
      chapter2: "完整课程体系",
      chapter3: "进阶与陪练课程",
      chapter4: "学员作品展示",
    },

    // Hero Section
    hero: {
      title: "开启AI时代的",
      titleHighlight: "学习之旅",
      subtitle:
        "与BEE Beta一起，掌握人工智能核心技能，成为AI时代的领军人才",
      cta: "立即开始",
      learnMore: "了解更多",
    },

    // Stats Section
    stats: {
      title: "全时段覆盖的",
      titleHighlight: "教学模式",
      mode1: {
        title: "AI驱动课程",
        description:
          "每周课程融合理论与实践，可根据假期灵活安排",
      },
      mode2: {
        title: "实战项目导向",
        description:
          "基于企业级知识库打造的培训智能体实时答疑+助教24小时内回复同学问题",
      },
      mode3: {
        title: "终身学习社区",
        description:
          "自主研发全球多地多时区师生共用排课系统，可灵活同步课时和个人日历",
      },
    },

    // Features Section
    features: {
      title: "参加 ",
      titleHighlight: "BEE Beta 你能得到什么？",
      subtitle: "全方位的学习支持，让您的AI学习之旅更加高效",
      globalExperience: {
        title: "全球型AI创业公司的团队工作经历",
        description:
          "获得在全球AI创业公司的实际工作经验，提升职业竞争力",
      },
      deepUnderstanding: {
        title: "对各类模型和AI应用的深入理解",
        description:
          "深入学习GPT、Claude等主流AI模型，掌握实际应用场景",
      },
      fullStackProject: {
        title: "全栈开发并市场化一个AI项目",
        description:
          "从0到1完成AI项目开发，学习产品化和市场推广全流程",
      },
      paperReading: {
        title: "学会读顶尖论文并用于实践",
        description:
          "掌握阅读和理解前沿AI论文的能力，将理论转化为实践",
      },
      recommendation: {
        title: "公司创始人及导师的推荐信",
        description:
          "获得权威推荐信，为未来的求职和发展增添有力背书",
      },
      community: {
        title: "和你一样充满好奇心的同学",
        description:
          "加入充满活力的学习社群，与志同道合的伙伴共同成长",
      },
    },

    // Course Section
    courses: {
      title: "三阶",
      titleHighlight: "课程体系",
      subtitle:
        "系统化学习路径,从入门到精通,打造AI领域专业人才",
      stage1: {
        title: "Pin 专业公开课",
        subtitle: "Pin",
        ageLimit: "大学生以上群体",
        suitableFor:
          "对AI感兴趣的初学者，想要了解AI基础知识的学员",
        duration: "1次课，2小时内，可灵活安排时间",
        requirements: "无需编程基础，对AI有好奇心和学习热情",
        content: [
          "AI 产品工程",
          "创业理念分享",
          "AI是威胁还是超能力？",
          "为什么“会提问”比“有答案”更重要？",
          "编程的意义是否改变了？",
          "面向未来，我们该如何与AI共生？",
        ],
      },
      stage2a: {
        title: "BETA 星空营 (Galaxy)",
        subtitle: "",
        ageLimit: "18岁以上大学生/研究生/博士生",
        suitableFor:
          "从零做出能上线的完整产品，强化作品集，用于实习申请、求职提升或验证创业想法",
        duration:
          "6 周课程：每周 1 次 1.5 小时主课（2 门产品课、4 门工程课）与 1 次作业检查；工程课当周另提供 1 小时直播答疑",
        requirements:
          "逻辑清晰，并愿意完成从产品到工程到上线的完整项目流程",
        content: [
          "AI 认知方法：Johari AI 框架 & CRAFT 提问体系",
          "AI 工程实践：基于 Cursor 的全栈开发流程",
          "产品设计能力：JSK 产品设计模型",
          "技术集成：大模型应用 & 2Brain API",
          "产品搭建与上线：Firebase 登录与数据、GitHub/Netlify 自动部署",
          "发布与增长：产品测试与 Product Hunt 冷启动",
          "商业与展示：商业计划训练 & Demo Day 路演",
        ],
      },
      stage2b: {
        title: "BETA 深空营 (Cosmos)",
        subtitle: "",
        ageLimit: "18岁以上大学生/在职工程师/创业者",
        suitableFor:
          "打造生产级、具备商业潜力的项目，用于大厂转岗、PhD申请或创业MVP",
        duration:
          "8 周课程：每周 2 次 1.5 小时主课与 1 次作业检查；每周另提供 1 小时集中直播答疑。",
        requirements:
          "逻辑清晰，具备一定编程能力，能承担高强度工程实战",
        content: [
          "AI 认知方法：Johari AI 框架 & CRAFT 提问体系",
          "多模态处理：高效处理视频、文本、图像，并能实现数据抓取",
          "检索与知识构建：通过 RAG、向量库和关键词图谱形成结构化知识体系",
          "产品方法体系：JTBD、用户故事地图与 Kano 模型用于需求定义与产品决策",
          "Agent 工程： 多专家 Agent 设计、工具链编排与自动化任务流程",
          "全栈能力： React & FastAPI 开发，配合 Firebase/GitHub 部署与 Stripe 集成",
          "模型私有化部署： vLLM/LM Studio 本地化，Docker 容器化到生产环境",
          "MVP 迭代与增长： 快速验证、A/B 测试与 Product Hunt 发布策略",
          "商业与展示：商业计划训练 & Demo Day 路演",
        ],
      },
      stage3: {
        title: "BETA 无界营 (Infinity)",
        subtitle: "",
        ageLimit: "18岁以上大学生/在职工程师/创业者",
        suitableFor:
          "提升AI工程与产品能力，在市场与专家指导下完成可用于求职或创业的生产级产品",
        duration:
          "12周课程：每周 1 次 1.5 小时主课与 1 次作业检查；每周另提供 1 小时集中直播答疑",
        requirements:
          "扎实的学术与工程经验，能独立规划并推动项目；通过创始人 1v1 面试",
        content: [
          "大模型环境与框架部署",
          "多模态数据接入与工程环境",
          "RAG 体系与企业级知识库",
          "心理学模型 & 产品需求分析",
          "全栈开发与自动化部署",
          "Agent 开发与原型迭代",
          "LLM 私有化部署 & 客户 Demo",
          "产品上线策略 & 渠道预置",
          "系统模块化架构 & API 封装",
          "品牌包装 & 生产环境部署",
          "Beta 公测 & 市场推广",
          "Demo Day 成果展示与复盘",
        ],
      },
      labels: {
        ageLimit: "年龄限制",
        suitableFor: "适合学员",
        duration: "课程时长",
        requirements: "招生要求",
        content: "课程内容",
        viewMore: "查看完整课程内容",
        consult: "立即咨询",
      },
      dialog: {
        title: (stage: string, subtitle: string) =>
          `${stage} - ${subtitle}`,
        description:
          "填写以下信息，我们的课程顾问将在24小时内与您联系",
      },
      infinityValues: {
        title: "独特价值",
        subtitle:
          "BETA 无界营不仅是课程，更是一个连接产业前沿、验证产品价值、提升职业竞争力的完整体系",
        founderMentorship: {
          title: "创始人品哥和学界专家,行业大咖轮番上阵TALK",
          items: [
            "每3周一次深度对谈,分享真实创业/产品/管理/行业经验",
            "产品思维 + 工程方法 + 市场策略三位一体",
            '从为工程而产品,到因需求而市场的无界探索',
          ],
        },
        engineerTeaching: {
          title: "一线工程师授课",
          items: [
            "授课团队50%时间做工程，30%时间教学，20%时间预研",
            "分享真实项目中的问题和解决方案",
            "提供400+ API和中间件支持学员快速开发",
          ],
        },
        industryDialogue: {
          title: "行业大咖不定期对话",
          items: [
            "邀请顶尖科学家讲解Transformer、大模型理论",
            "行业领军者分享垂直领域应用案例",
            "拓展视野,建立行业人脉",
          ],
        },
        marketValidation: {
          title: "强反馈市场验证",
          items: [
            "不闭门造车,产品必须推向真实市场",
            "Product Hunt发布 + 用户反馈收集",
            "以市场结果而非考试分数评判学习成果",
          ],
        },
        careerOpportunities: {
          title: "实习与投资机会",
          items: [
            "结业可100%获取AI公司实战项目或实习机会",
            "优秀学员可获创始人/行业大咖亲自背书推荐信",
            "卓越作品有机会获得顶尖机构种子投资",
          ],
        },
      },
    },

    // Works Section
    works: {
      title: "优秀学员",
      titleHighlight: "作品展示",
      subtitle:
        "看看我们的学员如何将所学知识转化为实际项目，创造出令人惊叹的作品",
      projects: {
        propertyai: {
          student: "Harry",
          camp: "BETA 星空营（Galaxy）",
          background: "房产经纪，0工程经验",
          description: "新西兰AI驱动房产交易平台",
        },
        rowingpro: {
          student: "Vincent",
          camp: "BETA 深空营（Cosmos）",
          background: "16岁，美国，多项数学/编程金牌得主",
          description: "智能划船训练分析与社区平台",
        },
        climatehub: {
          student: "Katherine",
          camp: "BETA 无界营（Infinity）",
          background: "18岁，大一，多项数学/编程金牌得主",
          description: "个性化气候变化预测与行动建议平台",
        },
      },
      prevPage: "上一页",
      nextPage: "下一页",
      page: "第 {0} 页",
    },

    // Team Section
    team: {
      title: "专业",
      titleHighlight: "导师团队",
      subtitle:
        "由行业顶尖专家组成的导师团队，为您的AI学习之路保驾护航",
      projectMentors: "项目导师",
      professionalLecturers: "专业讲师",
      viewAllInstructors: "查看所有讲师详细介绍",
      moreInstructors:
        "更多资深讲师的完整背景、项目经验和教学案例",
      applyInviteCode: "申请邀请码",
      needInviteCode: "需要邀请码",
      inviteDialogTitle: "申请邀请码",
      inviteDialogDescription:
        "请填写以下信息，我们将尽快为您发送邀请码，以便查看所有专业讲师的详细介绍",
      enterInviteCode: "输入邀请码",
      enterInviteCodeDescription: "请输入邀请码查看全部导师",
      inviteCodeLabel: "邀请码",
      inviteCodePlaceholder: "输入邀请码",
      verifyButton: "验证",
      applyForCodeButton: "申请邀请码",
      noCodeHint: '没有邀请码？点击"申请邀请码"获取',
      backToEnterCode: "← 返回输入邀请码",
      verifySuccess: "验证成功！正在跳转...",
      verifyFailed: "邀请码无效",
      mentors: {
        drH: {
          name: "Dr. H",
          title: "首席科学家",
          bio: "顶级大学副教授，NLP专家，发表40多篇ACL/EMNLP论文，创建了拥有10k+ GitHub星标的中文词向量",
          expertise: ["自然语言处理", "深度学习", "学术研究"],
        },
        masterC: {
          name: "Master C",
          title: "首席架构师",
          bio: "25年C/C++经验，传奇件的核心开发者，音频/视频编码、P2P网络、分布式系统专家",
          expertise: ["C/C++", "系统架构", "分布式系统"],
        },
        engineerX: {
          name: "Engineer X",
          title: "高级AI工程师",
          bio: "2Brain核心开发者，NLP专家，Transformer架构、RAG系统、智能代理开发专家",
          expertise: ["AI工程", "RAG", "Transformer"],
        },
        masterK: {
          name: "Master K",
          title: "算法工程师",
          bio: "帝国理工学院硕士（优秀），爱丁堡大学学士（一等），大规模数据处理和ML算法专家",
          expertise: ["机器学习", "数据处理", "算法"],
        },
        engineerS: {
          name: "Engineer S",
          title: "数据工程师",
          bio: "异步网络爬虫专家，AI驱动数据分析专家，精通BFS算法和并发编程",
          expertise: ["网络爬虫", "并发编程", "数据分析"],
        },
        engineerV: {
          name: "Engineer V",
          title: "全栈开发者",
          bio: "顶级北美大学计算机科学毕业生，RAG SaaS开发者，提示工程和API开发专家",
          expertise: ["全栈开发", "API设计", "提示工程"],
        },
      },
      lecturers: {
        teacherA: {
          name: "A老师",
          title: "大厂高级AI专家",
          bio: "前搜索引擎架构师(8年)，领导20+工程师团队，构建10亿级系统,现负责游戏AI应用",
          expertise: ["搜索引擎", "团队管理", "游戏AI"],
        },
        teacherM: {
          name: "M老师",
          title: "AI教育专家",
          bio: "前跨国科技公司高级工程师，知名AI教程作者，开源项目贡献者",
          expertise: ["AI教育", "技术写作", "开源项目"],
        },
        teacherR: {
          name: "R老师",
          title: "金融科技架构师",
          bio: "15年银行业经验，设计千万级日交易系统，现任国际金融科技公司架构师",
          expertise: ["金融科技", "系统设计", "高并发"],
        },
        drY: {
          name: "Y博士",
          title: "语音AI科学家",
          bio: "顶尖研究所博士，国际竞赛冠军，20+顶会论文，头部AI公司语音算法专家",
          expertise: ["语音识别", "学术研究", "算法竞赛"],
        },
        teacherN: {
          name: "N老师",
          title: "AI产业化专家",
          bio: "17年技术经验，主导数亿级AI项目，AI创业公司合伙人，AI商业化专家",
          expertise: ["AI商业化", "项目管理", "创业"],
        },
      },
    },

    // About Section
    about: {
      title: "关于",
      titleHighlight: "我们",
      companyTitle: "关于 BEEBEE AI",
      companyIntro: {
        paragraph1:
          "BEEBEE AI LTD是一家总部位于新西兰的国际科技公司，团队分布在新西兰、英国、加拿大、��国、泰国、中国。公司专注于GenAI智能产品开发，由具有20年以上互联网/IT经验及8年AI全模态应用开发经验的资深人士于2022年创立。",
        paragraph2: {
          part1: "公司的使命是通过",
          highlight1: "'AI × 私域知识'",
          part2: "提升个人与组织的生产力。其核心产品",
          highlight2: "2Brain（第二大脑）",
          part3:
            "于2024年推出，可以让企业导入多模态内容（文档、音频/视频、网站、聊天记录）形成私有知识库，并实时可视化为动态知识图谱，几分钟内即可部署基于RAG（检索增强生成）的聊天机器人和各类业务流智能体。",
        },
        paragraph3:
          "2Brain已经为全球数十家客户提供企业级应用落地服务，正在从世界500强企业的培训项目到关键客户支持助手等多种场景中，重新定义知识的应用方式。",
      },
      founderTitle: "创始人介绍",
      founder: {
        name: "周品",
        title: "创始人 & CEO",
        bio: "周品先生是一位拥有超过20年IT和互联网产品运营创业经验的连续创业者，作为全球第一批GPT时代的创业者，他在人工智能领域拥有8年的相关经验，始终保持着对新技术的强烈好奇心。",
        careerTitle: "职业经历",
        career: [
          {
            company: "BEEBEE AI",
            description:
              "2022年创立，总部新西兰，团队分布于新西兰、英国、加拿大、美国、泰国和中国，聚焦人工智能与知识管理产品研发",
          },
          {
            company: "猎豹移动",
            description:
              "董事高级副总裁，负责移动App+AI业务发展",
          },
          {
            company: "趣玩网",
            description:
              "创始人，在垂直电商领域拥有丰富的实战经验",
          },
          {
            company: "百度",
            description:
              "联盟+客户端总监，负责搜索引擎相关业务的拓展",
          },
          {
            company: "托普软件 & 豪杰超级解霸",
            description:
              "早期经历，积累了丰富的toB和toC软件产品管理经验",
          },
        ],
        visionTitle: "创业理念",
        vision:
          "作为一位充满好奇心的连续创业者，周品先生不断探索技术与商业的边界。同时，他也是一位愿意分享AI教育实践的父亲，致力于将自己在人工智能领域的经验和见解传递给下一代，在技术创新与教育实践之间找到了完美的平衡点。",
        quote:
          "让每一位对AI充满热情的年轻人，都能在这里找到属于自己的成长方向，成为推动人工智能发展的中坚力量。",
      },
    },

    // FAQ Section
    faq: {
      title: "问题",
      titleHighlight: "常见",
      subtitle:
        "解答您关心的问题，帮助您更好地了解我们的课程和服务",
      q1: {
        question: "1. Beta 的三阶课程适合谁？",
        answer: `面向 18岁以上，信奉 **“框架重于代码”**，渴望用 AI 创造真实产品的同学。
请根据技术背景选择适合的营地：

- **星空营 (Galaxy) —— 零基础，重逻辑**
  适合无/低代码经验者。目标：掌握 Cursor 全栈开发，从0到1上线独立产品。
- **深空营 (Cosmos) —— 有基础，重实战**
  适合有代码经验者。目标：驾驭 RAG/Agent 等复杂技术栈，打造生产级应用。
- **无界营 (Infinity) —— 高资历，重闭环**
  适合有工程/学术背景者。目标：创始人亲带，完成从产品定义到融资路演的商业闭环。`
      },
      q2: {
        question: "2. 课程最终能做出什么？",
        answer: `拒绝“Demo”级作业，交付 **真实上线的 AI 产品**。

- **硬核成果**：亲手打造一个拥有独立域名、接入支付、完成商业部署的生产级产品。
- **核心能力**：掌握 RAG、Agent、私有化部署等一线实战技术，建立“工程+产品”护城河。
- **职业背书**：结业即获实习机会；优秀者可获创始人亲笔推荐信，卓越作品更有机会获得种子投资。`
      },
      q3: {
        question: "3. 为什么强调“产品先于工程”？",
        answer: `因为在 AI 时代，**定义问题的能力比写代码更重要**。

- **AI 负责制造**：代码生成已不是难点，AI 能帮你完成绝大部分工作。
- **你负责定义**：真正稀缺的是发现问题的眼睛。我们训练你用产品思维倒逼工程实现，确保技术是为了解决真实痛点，而非单纯炫技。`
      },
      q4: {
        question: "4. 课程为什么要强制产品上线？",
        answer: `**上线是检验成果的唯一标准。**

- **打通闭环**：解决支付、部署、网络安全等“最后一公里”难题，让技术链路真正完整。
- **打破幻想**：只有面对真实用户千奇百怪的提问，才能验证你的 RAG/Agent 是否真的稳健。
- **最强简历**：对于面试官或投资人，一个可交互的在线产品，比任何代码仓库都更有说服力。`
      },
      q5: {
        question: "5. 如何考核？“Beta”是什么意思？",
        answer: `**市场反馈是唯一的成绩单。**

“Beta”意为 **“把不完美的产品推向市场”**。
我们没有考试分数。你的毕业设计必须发布到 Product Hunt 等真实平台，通过 Demo Day 路演收集真实反馈。只有拿到强反馈的产品，才算真正完成了学习闭环。`
      },
      q6: {
        question: "6. 学习形式与时间安排？",
        answer: `**全程直播 + 陪跑辅导**，拒绝录播。

- **高频互动**：每周 1-2 次核心直播课，由一线讲师与创始人亲自授课。
- **全程陪伴**：每课配套集中答疑及作业检查，助教手把手解决“卡点”。
- **全球友好**：直播均有回放，并在全球主流时区友好安排，确保你无论身在何处都能跟上进度。`
      },
      q7: {
        question: "7. 教学质量有保障吗？",
        answer: `**顶尖师资 + 小班制 + 结果导向。**

- **一线实战班底**：20+位名校及大厂背景的工程师，坚持“50%做工程，30%教学”，确保传授最前沿的实战经验。
- **严苛督学体系**：坚持 12人/营 小班规模，高频反馈，不让问题过夜。
- **市场结果验证**：最终评价标准不是分数，而是你的产品能否成功推向市场并获得用户认可。`
      },
      q8: {
        question: "8. 结营后如何进阶？",
        answer: `我们提供“繁星”与“伴星”体系，伴你终身成长。

- **Starry (繁星) 进阶课**：针对爬虫、RAG、K8s 等垂直领域提供深度选修，助你达到行业中上水平。
- **Orbiter (伴星) 陪练课**：为毕业生提供 1v1 工程导师定制陪练，解决后续实战中的具体难题。`
      },
      moreQuestions: "还有其他问题？",
      contactUs: "联系我们获取更多帮助",
    },

    // Contact Section
    contact: {
      title: "我们",
      titleHighlight: "联系",
      subtitle:
        "有任何问题或建议，欢迎随时与我们联系，我们将竭诚为您服务",
      dialogTitle: "联系我们",
      dialogDescription:
        "如果您有任何问题或需要进一步的帮助，请填写以下表单，我们会尽快与您联系",
      contactInfoTitle: "联系方式",
      emailLabel: "邮箱联系",
      followUs: "关注我们",
      wechat: "微信",
      emails: {
        email1Description: "工作日24小时内回复",
        email2Description: "工作日24小时内回复",
      },
      form: {
        title: "留言咨询",
        name: "同学姓名",
        namePlaceholder: "请输入同学姓名",
        age: "同学年龄",
        agePlaceholder: "请输入同学年龄（选填）",
        country: "所在国家",
        countryPlaceholder: "请输入所在国家",
        email: "电子邮件",
        emailPlaceholder: "请输入电子邮件",
        phone: "电话",
        phonePlaceholder: "请输入您的联系电话",
        message: "咨询说明",
        messagePlaceholder: "请告诉我们您的问题或需求",
        defaultMessage: "我想咨询BEE Beta课程，请联系我。",
        submit: "提交留言",
        submitting: "提交中...",
        successMessage: "感谢您的留言！我们会尽快与您联系。",
        errorMessage:
          "提交失败，请稍后重试或直接发送邮件联系我们。",
        noPhone: "未提供",
        noAge: "未提供",
        defaultSource: "Official Website Contact Form", // 默认留言来源
      },
    },

    // Footer
    footer: {
      copyright:
        "© 2025 Bee Beta. 保留所有权利。学AI，创未来。",
    },

    // CEO Letter Page
    ceoLetter: {
      pageTitle: "致学员的一封信",
      subtitle: "Learn AI, Build Reality. 学AI,造真实产品。",
      backToHome: "返回首页",

      ceoName: "Pin Zhou 周品",
      ceoTitle: "BEEBEE AI 创始人",
      ceoSubtitle: "BEE BETA 项目发起人",

      greeting: "亲爱的同学：",
      intro1: "你好，我是 BEE BETA 三阶课程体系的发起人 Pin。",
      intro2:
        "非常感谢你愿意花时间了解我们的课程。我想借这封信，和你坦诚聊聊：",
      intro3:
        "为什么我们要为大学生和在职学习者打造这样一套强度不低、目标极实的 AI 产品工程体系；",
      intro4: "它究竟解决你未来发展的哪些核心问题；",
      intro5:
        "以及，我们如何陪你一起从「会用 AI」走向「能做产品」「能做工程」「能做事业」。",

      section1: {
        title:
          "1. 为什么要为大学生与准职业人群开设 BETA 体系？",
        p1: "过去几年里，我们与来自 MIT、康奈尔、UIUC、清华、浙大、UCL 等名校背景的同学合作过不少项目。",
        p2: "他们聪明、会学、有理论功底，但也普遍面临一个现实：",
        quote1: "理论到实践的跨越，远比想象中艰难。",
        p3: '尤其在 AI 时代，真正有竞争力的不是"会提示词""会调 API"，',
        p4: "而是：",
        list1: [
          "能把抽象想法拆成清晰的需求",
          "能用正确的提问驱动 AI 给出可靠产物",
          "能把模型能力整合成一个能跑、能用、能上线的产品",
          "能让产品跑到真实市场里，拿到反馈，持续迭代",
        ],
        p5: "换句话说，仅仅会写代码、会调用模型，不足以在新的技术周期站稳脚跟。",
        p6: "如李飞飞所说：",
        quote2:
          '"我们的人类教育系统早已僵化，固步自封一二百年了。我最担心的就是现在缺乏优质的AI公共教育。"',
        p7: "学校教的是知识；",
        p8: "企业要的是能力；",
        p9: "而时代要的是能把 AI 变成现实价值的人。",
        p10: "BETA 就是为这个断层诞生的：",
        p11: "帮助你在年轻阶段，就获得 AI 产品工程 + 市场验证 的核心实战力。",
      },

      section2: {
        title: "2. BETA 三阶课程体系的逻辑",
        p1: "BETA 不讲概念、不做虚假承诺，不让你在 PPT 上发明产品。",
        p2: "我们的体系从第一天开始，就是奔着「真实上线」去的。",
        p3: "它由三大阶段组成，对应三种能力：",

        stage1: {
          title:
            "Beta 星空营（Galaxy）——初阶 AI Native 产品工程",
          suitable: "适合：",
          suitableText:
            "基础薄弱、有想法、希望快速做出第一款 AI 产品的人",
          goal: "目标：",
          goals: [
            "在 6 周内做出一个可公开发布的成品",
            "拥有自己的域名、部署、用户、冷启动",
            "体验完整的产品从 0→1 流程",
            "拿到能用于投递实习与申请的作品集",
          ],
        },

        stage2: {
          title:
            "Beta 深空营（Cosmos）——高阶全链条 AI 工程实战",
          suitable: "适合：",
          suitableText:
            "有基本工程能力，希望突破硬核 AI 技术栈的人",
          master: "你将掌握：",
          skills: [
            "多模态（OCR/ASR/YouTube/TikTok API）",
            "RAG、向量库、关键词图谱",
            "Agent + 工具链",
            "React + FastAPI 全栈",
            "私有化部署（vLLM/LMStudio）",
            "Stripe、自动部署、容器化",
          ],
          goal: "目标是一款能被企业使用的生产级 AI 产品。",
        },

        stage3: {
          title:
            "Beta 无界营（Infinity）——AI 产品创始人引领课程",
          suitable: "适合：",
          suitableText:
            "有工程背景、明确目标，希望打造创业级产品的人",
          weeks: "12 周完成：",
          milestones: [
            "大模型环境、数据接入、RAG、Agent",
            "全链条工程体系搭建",
            "产品战略、市场验证、品牌化",
            "Beta 测试、产品发布、演讲路演",
          ],
          benefits: "优秀学员还会得到：",
          benefitsList: [
            "创始人推荐信",
            "大厂/AI公司实习推荐",
            "种子投资机会",
          ],
        },

        p4: '三阶体系不走"培训路线"，走的是"产品路线"。',
        p5: "它不是教你技能，而是帮你建立：",
        p6: "从认知 → 工程 → 产品 → 市场 → 战略 的完整能力闭环。",
      },

      section3: {
        title: "3. 为什么大学生在 AI 学习上具备天然优势？",
        p1: "很多人误以为自己起步晚了。",
        p2: "其实，你可能正处在最好的节点。",
        p3: "我们观察到大学生（或刚工作1-3年的人）有几项关键优势：",
        advantages: [
          {
            title: "思维尚未固化：",
            desc: '能快速接受"AI辅助工程"这种新范式',
          },
          {
            title: "对未来仍有期待：",
            desc: "愿意投入时间做真正困难的事",
          },
          {
            title: "没有职业框架束缚：",
            desc: "敢尝试、敢推翻、敢重来",
          },
          {
            title: "学习速度快：",
            desc: "只要方法正确，6周做出产品十分现实",
          },
        ],
        p4: "我们见过：",
        examples: [
          "刚读大学一年级就做出 Agent 应用并获上千用户的人",
          "非计算机专业却做出功能完整的多模态 AI 网站",
          "在职工程师完成了自己拖延两年的创业 MVP",
        ],
        p5: "他们并不是天才，只是给自己一个进入实战的出口。",
      },

      section4: {
        title: "4. BETA 与传统工程学习的差异",
        traditional: {
          title: "传统路线：",
          path: "语法 → 框架 → 项目模板 → 未来再说",
          result: "过程枯燥，结果有限。",
        },
        beta: {
          title: "BETA 的路线：",
          path: "提问 → 产品 → 工程 → 市场 → 上线",
          result: "每一步都指向一个成果：做出真实产品。",
        },
        p1: "我们的底层设计很简单：",
        principles: [
          {
            title: "框架重于代码：",
            desc: "会写代码不够，你要能驱动 AI 写",
          },
          {
            title: "产品先于工程：",
            desc: '你不是在做课程作业，而是在做"产品"',
          },
          {
            title: "审美优于制造：",
            desc: "你作品的品味，会决定它的命运",
          },
          {
            title: "反馈大于功能：",
            desc: "上线比完美重要，市场比老师重要",
          },
          {
            title: "提问高于一切：",
            desc: "所有能力从提问开始，也被提问驱动",
          },
        ],
        p2: "这是企业的真实逻辑，也是时代真正的需求。",
      },

      section5: {
        title: "5. 挑战是真实的，但支持也是完整的",
        p1: "我不会告诉你这门课很轻松。",
        p2: "说轻松是对你的不尊重。",
        p3: "但我可以保证：你不会独自面对困境。",
        p4: "我们提供：",
        support: [
          "来自一线工程师的实战教学",
          "每周固定答疑",
          "营长带队的作业检查",
          "工程师陪练",
          "AI 工具链与 400+ API 资源",
          "完整部署、发布、营销指导",
          "真实 Demo Day、真实用户反馈",
        ],
        p5: '我们的目标不是让你"学会"，',
        p6: "而是让你真实地「做出」。",
      },

      section6: {
        title: "6. 对你的职业与未来发展的价值",
        p1: "参加 BETA 体系，你将获得：",
        value1: {
          title: "升学 / 工作竞争力",
          items: [
            "一款真实上线的产品作品集",
            "工程师与创始人背书",
            "对大模型、RAG、Agent 的掌握",
            "真实团队协作经验",
          ],
        },
        value2: {
          title: "技能提升",
          items: [
            "全链条 AI 工程能力",
            "产品拆解与市场验证",
            "多模态、私有化部署、容器化",
          ],
        },
        value3: {
          title: "职业方向判断力",
          items: [
            "是否要走工程？",
            "是否适合创业？",
            "是否能做更好的产品？",
          ],
          note: "实践会给你答案。",
        },
      },

      section7: {
        title: "7. 如果你决定加入，这是我给你的建议",
        advice: [
          {
            title: "不要害怕难度",
            desc: "——真实的成长从不轻松",
          },
          {
            title: "尽量全力投入",
            desc: "——AI时代属于执行密度高的人",
          },
          {
            title: "把每一次困惑写下来",
            desc: "——提问是你的武器",
          },
          { title: '放弃"完美主义"', desc: "——先上线，再优化" },
          {
            title: "允许自己失败",
            desc: "——失败是产品的日常，不是你的问题",
          },
        ],
        p1: '你的目标不是"完成作业"，',
        p2: "而是成为能凭自己做出真实 AI 产品的人。",
      },

      final: {
        title: "最后的话",
        p1: "在 AI 的时代浪潮里，你可能还没意识到一件事：",
        quote:
          "能把 AI 变成产品的人，会成为这个时代最稀缺的人。",
        p2: "这也是我们创办 BEE BETA 的根本原因。",
        p3: "如果你愿意，我们会和你一起：",
        p4: "从提问、到创造、到验证、到发布，",
        p5: "走完真实世界的第一段路。",
        closing: "期待在 BETA 与你相遇。",
      },

      signature: {
        sincerely: "诚挚的，",
        date: "2025年10月",
      },

      quoteHighlight:
        '"能把 AI 变成产品的人，会成为这个时代最稀缺的人。"',
      quoteAuthor: "— Pin Zhou 周品",
    },

    // Advanced Courses Section
    advancedCoursesSection: {
      title: "进阶与陪练课程",
      description:
        "专业高级课程和1对1辅导，为Alpha/Beta学员和毕业生提供持续成长的机会",
      dialogDescription:
        "填写以下信息，我们的课程顾问将在24小时内与您联系",
      starry: {
        target: "面向Alpha/Beta学员",
        subtitle: "Starry 繁星：专业进阶课",
        description:
          "完成从入门到精通的进阶AI课程，着力提升专业能力，达到行业中上水平",
        duration: "课程时长",
        durationValue: "4周，每周1次主课+1次作业检查",
        classSize: "班级规模",
        classSizeValue: "4-6人小班制",
        language: "授课语言",
        languageValue: "中文",
        instructors: "讲师团队",
        instructorsValue: "顶尖一线工程师",
        courseOptions: "12门专业课程可选：",
        courses: [
          "浏览器性能优化",
          "AI前端工作流",
          "跨平台开发",
          "模型微调实战",
          "RAG架构优化",
          "Cursor高阶",
          "数据采集",
          "MCP智能体",
          "Docker运维",
          "K8s集群",
          "Transformer架构",
          "企业AI Bot",
        ],
        cta: "立即咨询",
      },
      orbiter: {
        target: "面向已毕业学员",
        subtitle: "Orbiter 伴星：1v1陪练课",
        description:
          "针对已毕业学员，依托强大工程讲师队伍，开展1v1产品升级陪伴式学习",
        courseFormat: "课程形式",
        courseFormatValue: "线上1对1",
        duration: "每次时长",
        durationValue: "1小时/次",
        instructors: "指导老师",
        instructorsValue: "工程导师",
        eligibility: "招生对象",
        eligibilityValue: "Alpha/Beta毕业生",
        features: [
          "✓ 工程导师1对1个性化指导",
          "✓ 目标导向实践，无理论宣讲",
          "✓ 产品升级与优化陪伴式学习",
          "✓ 仅对已学课程的强化陪练",
        ],
        cta: "立即咨询",
      },
    },
  },

  en: {
    // Header
    nav: {
      home: "Home",
      courses: "Courses",
      works: "Student Works",
      team: "Team",
      about: "About",
      faq: "FAQ",
      contact: "Contact",
      ceoLetter: "CEO's Letter",
    },

    // Section Dividers
    sectionDividers: {
      chapter1: "What You'll Get from BEE Beta?",
      chapter2: "Complete Course System",
      chapter3: "Advanced & Coaching Programs",
      chapter4: "Student Work Showcase",
    },

    // Hero Section
    hero: {
      title: "Begin Your",
      titleHighlight: "AI Learning Journey",
      subtitle:
        "Master core AI skills with BEE Beta and become a leader in the AI era",
      cta: "Get Started",
      learnMore: "Learn More",
    },

    // Stats Section
    stats: {
      title: "All-Time-Zone ",
      titleHighlight: "Teaching Model",
      mode1: {
        title: "AI-Driven Courses",
        description:
          "Weekly courses blend theory and practice, flexible scheduling for holidays",
      },
      mode2: {
        title: "Project-Oriented Learning",
        description:
          "Enterprise-level knowledge base AI assistant + TA 24h response",
      },
      mode3: {
        title: "Lifetime Learning Community",
        description:
          "Self-developed system for flexible scheduling and calendar sync",
      },
    },

    // Features Section
    features: {
      title: "What You'll Get from ",
      titleHighlight: "BEE Beta?",
      subtitle:
        "Comprehensive learning support to make your AI learning journey more efficient",
      globalExperience: {
        title: "Team work experience in global AI startups",
        description:
          "Gain practical experience in global AI startups to enhance your career competitiveness",
      },
      deepUnderstanding: {
        title:
          "In-depth understanding of various models and AI applications",
        description:
          "In-depth learning of mainstream AI models like GPT and Claude, mastering real-world applications",
      },
      fullStackProject: {
        title:
          "Full-stack development and market launch of an AI project",
        description:
          "Complete the development of an AI project from scratch, learning the entire process of productization and market promotion",
      },
      paperReading: {
        title:
          "Learn to read top-tier papers and apply them in practice",
        description:
          "Master the ability to read and understand cutting-edge AI papers, transforming theory into practice",
      },
      recommendation: {
        title:
          "Recommendation letters from company founders and mentors",
        description:
          "Receive authoritative recommendation letters to strengthen your future job applications and development",
      },
      community: {
        title: "Fellow students with the same curiosity as you",
        description:
          "Join a vibrant learning community to grow together with like-minded peers",
      },
    },

    // Course Section
    courses: {
      title: "Three-Stage ",
      titleHighlight: "Course System",
      subtitle:
        "Systematic learning path from beginner to expert, cultivating AI professionals",
      stage1: {
        title: "Pin 专业公开课",
        subtitle: "Pin",
        ageLimit: "College students and above",
        suitableFor:
          "Beginners interested in AI who want to understand AI fundamentals",
        duration:
          "1 session, within 2 hours, flexible scheduling",
        requirements:
          "No programming background required, curiosity and enthusiasm for AI",
        content: [
          "AI Product Engineering",
          "Entrepreneurship Philosophy Sharing",
          "AI Top 10 Questions",
        ],
      },
      stage2a: {
        title: "BETA 星空营 (Galaxy)",
        subtitle: "",
        ageLimit: "18岁以上大学生/研究生/博士生",
        suitableFor: "Build complete products from scratch to strengthen portfolio for internships, job seeking or startup validation",
        duration: "6 weeks (1 session/week, 1.5 hours each)",
        requirements: "Clear logic, STEM background preferred",
        content: [
          "AI Cognition & Questioning Framework",
          "AI-Assisted Full-Stack Development",
          "Product Design Models",
          "Large Model Integration",
          "Project Collaboration",
          "Automated Deployment",
          "Product Launch Strategy",
          "Business Pitch",
        ],
      },
      stage2b: {
        title: "BETA 深空营 (Cosmos)",
        subtitle: "",
        ageLimit: "18岁以上大学生/在职工程师/创业者",
        suitableFor:
          "Build production-grade projects with commercial potential for career advancement, PhD applications or startup MVP",
        duration: "8 weeks (2 sessions/week, 1.5 hours each)",
        requirements:
          "Programming ability, clear language and mathematical logic",
        content: [
          "AI Cognition & Questioning Framework",
          "Multimodal Data Engineering",
          "RAG & Vector Database",
          "Product Methodology",
          "Agent System Development",
          "Full-Stack Development & Payment Integration",
          "Private Model Deployment",
          "Product Iteration & Launch",
          "Business Pitch",
        ],
      },
      stage3: {
        title: "BETA 无界营 (Infinity)",
        subtitle: "",
        ageLimit: "18岁以上大学生/在职工程师/创业者",
        suitableFor:
          "Enhance AI engineering and product skills to complete production-grade products for career, further education or entrepreneurship",
        duration: "12 weeks (1 session/week, 1.5 hours each)",
        requirements:
          "Solid academic or engineering background, capable of independent project execution; founder 1v1 interview required",
        content: [
          "LLM Environment & Framework Deployment",
          "Multimodal Data Integration",
          "RAG System & Enterprise Knowledge Base",
          "Psychology Models & Product Analysis",
          "Full-Stack Development & Automation",
          "Agent Development & Prototyping",
          "LLM Private Deployment & Client Demo",
          "Product Launch Strategy & Channels",
          "Modular Architecture & API Design",
          "Brand Packaging & Production Deployment",
          "Beta Testing & Marketing",
          "Demo Day & Review",
        ],
      },
      labels: {
        ageLimit: "Age Requirement",
        suitableFor: "Suitable For",
        duration: "Duration",
        requirements: "Requirements",
        content: "Curriculum",
        viewMore: "View Full Curriculum",
        consult: "Consult Now",
      },
      dialog: {
        title: (stage: string, subtitle: string) =>
          `${stage} - ${subtitle}`,
        description:
          "Fill in the information below and our course advisor will contact you within 24 hours",
      },
      infinityValues: {
        title: "Unique Value",
        subtitle:
          "BETA Infinity Camp is not just a course; it's a comprehensive system connecting industry frontiers, validating product value, and enhancing career competitiveness",
        founderMentorship: {
          title: "Founder Pin, Academic Experts, and Industry Leaders Take Turns to TALK",
          items: [
            "Deep conversations every 3 weeks, sharing real-world startup/product/management/industry experiences",
            "Product thinking + engineering methods + market strategy in one",
            'From building products for engineering, to borderless exploration driven by demand and market',
          ],
        },
        engineerTeaching: {
          title: "Teaching by Top Engineers",
          items: [
            "50% of the teaching team's time is spent on engineering, 30% on teaching, and 20% on research",
            "Sharing real-world project problems and solutions",
            "Providing 400+ API and middleware support for rapid development",
          ],
        },
        industryDialogue: {
          title: "Unscheduled Dialogues with Industry Experts",
          items: [
            "Inviting top scientists to lecture on Transformer and large model theories",
            "Industry leaders sharing application cases in vertical fields",
            "Expanding horizons and building industry networks",
          ],
        },
        marketValidation: {
          title: "Strong Feedback Market Validation",
          items: [
            "No closed-door development; products must be launched into the real market",
            "Product Hunt launch + user feedback collection",
            "Evaluating learning outcomes based on market results rather than exam scores",
          ],
        },
        careerOpportunities: {
          title: "Internship and Investment Opportunities",
          items: [
            "100% chance of obtaining AI company practical projects or internships upon graduation",
            "Outstanding students can receive personal recommendation letters from founders/industry experts",
            "Exceptional works have the opportunity to receive seed investment from top institutions",
          ],
        },
      },
    },

    // Works Section
    works: {
      title: "Outstanding ",
      titleHighlight: "Student Works",
      subtitle:
        "See how our students transform knowledge into real projects and create amazing works",
      projects: {
        propertyai: {
          student: "Harry",
          camp: "BETA Galaxy Camp",
          background:
            "Real Estate Agent, 0 Engineering Experience",
          description:
            "AI-Driven Property Trading Platform in New Zealand",
        },
        rowingpro: {
          student: "Vincent",
          camp: "BETA Cosmos Camp",
          background:
            "16 years old, USA, Multiple Math/Programming Awards",
          description:
            "Intelligent Rowing Training Analysis & Community Platform",
        },
        climatehub: {
          student: "Katherine",
          camp: "BETA Infinity Camp",
          background:
            "18 years old, Freshman, Multiple Math/Programming Awards",
          description:
            "Personalized Climate Change Prediction & Action Platform",
        },
      },
      prevPage: "Previous",
      nextPage: "Next",
      page: "Page {0}",
    },

    // Team Section
    team: {
      title: "Professional ",
      titleHighlight: "Mentor Team",
      subtitle:
        "Industry-leading experts guiding your AI learning journey",
      projectMentors: "Project Mentors",
      professionalLecturers: "Professional Lecturers",
      viewAllInstructors:
        "View Detailed Profiles of All Instructors",
      moreInstructors:
        "Complete Backgrounds, Project Experiences, and Teaching Cases of Senior Instructors",
      applyInviteCode: "Apply for an Invite Code",
      needInviteCode: "Need an Invite Code",
      inviteDialogTitle: "Apply for an Invite Code",
      inviteDialogDescription:
        "Please fill in the information below, and we will send you an invite code as soon as possible to view detailed profiles of all professional lecturers",
      enterInviteCode: "Enter Invite Code",
      enterInviteCodeDescription:
        "Enter the invite code to view all mentors",
      inviteCodeLabel: "Invite Code",
      inviteCodePlaceholder: "Enter invite code",
      verifyButton: "Verify",
      applyForCodeButton: "Apply for Invite Code",
      noCodeHint:
        'No invite code? Click "Apply for Invite Code" to get one',
      backToEnterCode: "← Back to Enter Invite Code",
      verifySuccess: "Verification successful! Redirecting...",
      verifyFailed: "Invalid invite code",
      mentors: {
        drH: {
          name: "Dr. H",
          title: "Chief Scientist",
          bio: "Top university associate professor, NLP expert with 40+ papers in ACL/EMNLP, creator of Chinese word vectors with 10k+ GitHub stars",
          expertise: [
            "Natural Language Processing",
            "Deep Learning",
            "Academic Research",
          ],
        },
        masterC: {
          name: "Master C",
          title: "Chief Architect",
          bio: "25 years C/C++ experience, core developer of legendary software, expert in audio/video encoding, P2P networks, distributed systems",
          expertise: [
            "C/C++",
            "System Architecture",
            "Distributed Systems",
          ],
        },
        engineerX: {
          name: "Engineer X",
          title: "Senior AI Engineer",
          bio: "2Brain core developer, NLP specialist, expert in Transformer architecture, RAG systems, and intelligent agent development",
          expertise: ["AI Engineering", "RAG", "Transformer"],
        },
        masterK: {
          name: "Master K",
          title: "Algorithm Engineer",
          bio: "Imperial College MSc (Distinction), Edinburgh BSc (First Class), specialist in large-scale data processing and ML algorithms",
          expertise: [
            "Machine Learning",
            "Data Processing",
            "Algorithms",
          ],
        },
        engineerS: {
          name: "Engineer S",
          title: "Data Engineer",
          bio: "Expert in asynchronous web crawling, AI-driven data analysis, proficient in BFS algorithms and concurrent programming",
          expertise: [
            "Web Crawling",
            "Concurrent Programming",
            "Data Analysis",
          ],
        },
        engineerV: {
          name: "Engineer V",
          title: "Full-Stack Developer",
          bio: "Top North American university CS graduate, RAG SaaS developer, expert in prompt engineering and API development",
          expertise: [
            "Full-Stack Development",
            "API Design",
            "Prompt Engineering",
          ],
        },
      },
      lecturers: {
        teacherA: {
          name: "Mr. A",
          title: "Tech Giant Senior AI Specialist",
          bio: "Former search engine architect (8 years), led 20+ engineers, built billion-scale systems, now developing AI applications for gaming",
          expertise: [
            "Search Engines",
            "Team Management",
            "Game AI",
          ],
        },
        teacherM: {
          name: "Mr. M",
          title: "AI Educator & Developer",
          bio: "Former senior engineer at global tech company, author of popular AI tutorials, open source contributor with significant following",
          expertise: [
            "AI Education",
            "Technical Writing",
            "Open-Source Projects",
          ],
        },
        teacherR: {
          name: "Mr. R",
          title: "Fintech Architect",
          bio: "15 years in banking sector, architected systems handling millions of daily transactions, now at international fintech company",
          expertise: [
            "Financial Technology",
            "System Design",
            "High Concurrency",
          ],
        },
        drY: {
          name: "Dr. Y",
          title: "Voice AI Scientist",
          bio: "PhD from top research institute, international competition champion, 20+ top conference papers, voice algorithm expert at leading AI companies",
          expertise: [
            "Voice Recognition",
            "Academic Research",
            "Algorithm Competitions",
          ],
        },
        teacherN: {
          name: "Mr. N",
          title: "AI Product Expert",
          bio: "17 years tech experience, led multi-million dollar AI projects, AI startup co-founder, expert in AI commercialization",
          expertise: [
            "AI Commercialization",
            "Project Management",
            "Entrepreneurship",
          ],
        },
      },
    },

    // About Section
    about: {
      title: "About ",
      titleHighlight: "Us",
      companyTitle: "About BEEBEE AI",
      companyIntro: {
        paragraph1:
          "BEEBEE AI LTD is an international technology company headquartered in New Zealand, with teams distributed across New Zealand, the UK, Canada, the USA, Thailand, and China. The company focuses on GenAI intelligent product development, founded in 2022 by seasoned professionals with over 20 years of internet/IT experience and 8 years of AI multimodal application development experience.",
        paragraph2: {
          part1:
            "The mission of the company is to enhance the productivity of individuals and organizations through",
          highlight1: "AI × Private Domain Knowledge",
          part2: ". Its core product",
          highlight2: "2Brain (Second Brain)",
          part3:
            "was launched in 2024, allowing enterprises to import multimodal content (documents, audio/video, websites, chat records) to form a private knowledge base, which is visualized in real-time as a dynamic knowledge graph. It can deploy RAG (Retrieval-Augmented Generation) chatbots and various business flow agents in minutes.",
        },
        paragraph3:
          "2Brain has provided enterprise-level application deployment services to over a dozen clients globally, redefining the application of knowledge in various scenarios, from training projects for Fortune 500 companies to key customer support assistants.",
      },
      founderTitle: "Founder Introduction",
      founder: {
        name: "Pin Zhou",
        title: "Founder & CEO",
        bio: "Mr. Pin Zhou is a serial entrepreneur with over 20 years of experience in IT and Internet product operations. As one of the world's first entrepreneurs in the GPT era, he has 8 years of experience in artificial intelligence and a strong curiosity for new technologies.",
        careerTitle: "Career Experience",
        career: [
          {
            company: "BEEBEE AI",
            description:
              "Founded in 2022, headquartered in New Zealand, teams distributed in New Zealand, the UK, Canada, the USA, Thailand, and China, focusing on AI and knowledge management product development",
          },
          {
            company: "Cheetah Mobile",
            description:
              "Senior Vice President, responsible for mobile App + AI business",
          },
          {
            company: "Quwan.com",
            description:
              "Founder, with rich practical experience in vertical e-commerce",
          },
          {
            company: "Baidu",
            description:
              "Director of Alliance & Client, leading search engine-related business expansion",
          },
          {
            company: "Topsoft & HJ Super Player",
            description:
              "Early experience gave him extensive toB and toC software product management experience",
          },
        ],
        visionTitle: "Entrepreneurial Philosophy",
        vision:
          "As a curious serial entrepreneur, Mr. Zhou constantly explores the boundaries of technology and business. He is also a father willing to share his AI education practice, committed to passing on his experience and insights in AI to the next generation, finding a perfect balance between technological innovation and educational practice.",
        quote:
          "Let every young person passionate about AI find their growth direction here, becoming a pillar of AI development.",
      },
    },

    // FAQ Section
    faq: {
      title: "Questions",
      titleHighlight: "Frequently Asked ",
      subtitle:
        "Answers to your concerns, helping you better understand our courses and services",
      q1: {
        question: "1. Who is the Beta three-stage course for?",
        answer: `Designed for students 18+, believing in **"Framework over Code"**, eager to build real products with AI.
Please choose your camp based on your technical background:

- **Galaxy Camp —— Zero Base, Logic First**
  Suitable for those with no/low coding experience. Goal: Master Cursor full-stack development, launch an independent product from scratch.
- **Cosmos Camp —— With Basics, Practice First**
  Suitable for those with coding experience. Goal: Master complex tech stacks like RAG/Agent, build production-grade applications.
- **Infinity Camp —— High Seniority, Loop First**
  Suitable for those with engineering/academic background. Goal: Mentored by founders, complete the commercial loop from product definition to fundraising roadshow.`
      },
      q2: {
        question: "2. What can I build by the end of the course?",
        answer: `Reject "Demo" level assignments, deliver **Real Online AI Products**.

- **Hardcore Results**: Hand-craft a production-level product with independent domain, payment integration, and commercial deployment.
- **Core Capabilities**: Master frontline combat technologies like RAG, Agent, Private Deployment, establishing a "Engineering + Product" moat.
- **Career Endorsement**: Internship opportunities upon completion; Founder's recommendation letter for outstanding students, and seed investment opportunities for exceptional works.`
      },
      q3: {
        question: "3. Why emphasize \"Product before Engineering\"?",
        answer: `Because in the AI era, **the ability to define problems is more important than writing code**.

- **AI Manufactures**: Code generation is no longer a difficulty, AI can help you complete most of the work.
- **You Define**: What is truly scarce is the eye to discover problems. We train you to use product thinking to drive engineering implementation, ensuring technology is for solving real pain points, not just showing off skills.`
      },
      q4: {
        question: "4. Why must products be launched?",
        answer: `**Launch is the only standard for testing results.**

- **Close the Loop**: Solve "Last Mile" problems like payment, deployment, network security, making the technical link truly complete.
- **Break Illusions**: Only by facing strange questions from real users can you verify if your RAG/Agent is truly robust.
- **Strongest Resume**: For interviewers or investors, an interactive online product is more convincing than any code repository.`
      },
      q5: {
        question: "5. How is it assessed? What does \"Beta\" mean?",
        answer: `**Market feedback is the only report card.**

"Beta" means **"Bring imperfect products to market"**.
We have no exam scores. Your graduation project must be published on real platforms like Product Hunt, collecting real feedback through Demo Day roadshows. Only products with strong feedback have truly completed the learning loop.`
      },
      q6: {
        question: "6. Learning format and schedule?",
        answer: `**Full Live Streaming + Companion Coaching**, refusing recorded courses.

- **High Frequency Interaction**: 1-2 core live classes per week, taught personally by frontline lecturers and founders.
- **Full Companionship**: Each course comes with centralized Q&A and homework checks, with TAs solving "blockers" hand-in-hand.
- **Global Friendly**: Live streams have replays and are arranged friendly for global main time zones, ensuring you can keep up wherever you are.`
      },
      q7: {
        question: "7. Is teaching quality guaranteed?",
        answer: `**Top Faculty + Small Class Size + Result Oriented.**

- **Frontline Combat Team**: 20+ engineers with backgrounds from prestigious schools and big tech, insisting on "50% engineering, 30% teaching", ensuring transmission of the most cutting-edge practical experience.
- **Strict Supervision System**: Adhering to 12 people/camp small class size, high frequency feedback, not letting problems stay overnight.
- **Market Result Verification**: The final evaluation standard is not a score, but whether your product can be successfully pushed to market and gain user recognition.`
      },
      q8: {
        question: "8. How to advance after camp?",
        answer: `We provide "Starry" and "Orbiter" systems to accompany your lifelong growth.

- **Starry Advanced Course**: Provides in-depth electives for vertical fields like Crawler, RAG, K8s, helping you reach industry upper-middle level.
- **Orbiter Companion Course**: Provides 1v1 engineering mentor customized coaching for graduates, solving specific difficulties in subsequent actual combat.`
      },
      moreQuestions: "Have other questions?",
      contactUs: "Contact us for more help",
    },

    // Contact Section
    contact: {
      title: "Us",
      titleHighlight: "Contact ",
      subtitle:
        "Have any questions or suggestions? Feel free to contact us anytime, we're here to serve you",
      dialogTitle: "Contact Us",
      dialogDescription:
        "If you have any questions or need further assistance, please fill out the form below and we'll get back to you soon",
      contactInfoTitle: "Contact Information",
      emailLabel: "Email Contact",
      followUs: "Follow Us",
      wechat: "WeChat",
      emails: {
        email1Description: "Reply within 24 hours on weekdays",
        email2Description: "Reply within 24 hours on weekdays",
      },
      form: {
        title: "Leave a Message",
        name: "Student Name",
        namePlaceholder: "Enter student name",
        age: "Student Age",
        agePlaceholder: "Enter student age (optional)",
        country: "Country",
        countryPlaceholder: "Enter country",
        email: "Email",
        emailPlaceholder: "Enter email",
        phone: "Phone",
        phonePlaceholder: "Enter your phone number",
        message: "Inquiry Details",
        messagePlaceholder: "Tell us your questions or needs",
        defaultMessage: "I would like to inquire about BEE Beta courses, please contact me.",
        submit: "Submit Message",
        submitting: "Submitting...",
        successMessage:
          "Thank you for your message! We will contact you soon.",
        errorMessage:
          "Submission failed, please try again later or contact us directly via email.",
        noPhone: "Not provided",
        noAge: "Not provided",
        defaultSource: "Official Website Contact Form", // 默认留言来源
      },
    },

    // Footer
    footer: {
      copyright:
        "© 2025 Bee Beta. All rights reserved. Learn AI, Shape the Future.",
    },

    // CEO Letter Page
    ceoLetter: {
      pageTitle: "致学员的一封信",
      subtitle: "Learn AI, Build Reality. 学AI,造真实产品。",
      backToHome: "返回首页",

      ceoName: "Pin Zhou 周品",
      ceoTitle: "BEEBEE AI 创始人",
      ceoSubtitle: "BEE BETA 项目发起人",

      greeting: "亲爱的同学：",
      intro1: "你好，我是 BEE BETA 三阶课程体系的发起人 Pin。",
      intro2:
        "非常感谢你愿意花时间了解我们的课程。我想借这封信，和你坦诚聊聊：",
      intro3:
        "为什么我们要为大学生和在职学习者打造这样一套强度不低、目标极实的 AI 产品工程体系；",
      intro4: "它究竟解决你未来发展的哪些核心问题；",
      intro5:
        "以及，我们如何陪你一起从「会用 AI」走向「能做产品」「能做工程」「能做事业」。",

      section1: {
        title:
          "1. 为什么要为大学生与准职业人群开设 BETA 体系？",
        p1: "过去几年里，我们与来自 MIT、康奈尔、UIUC、清华、浙大、UCL 等名校背景的同学合作过不少项目。",
        p2: "他们聪明、会学、有理论功底，但也普遍面临一个现实：",
        quote1: "理论到实践的跨越，远比想象中艰难。",
        p3: '尤其在 AI 时代，真正有竞争力的不是"会提示词""会调 API"，',
        p4: "而是：",
        list1: [
          "能把抽象想法拆成清晰的需求",
          "能用正确的提问驱动 AI 给出可靠产物",
          "能把模型能力整合成一个能跑、能用、能上线的产品",
          "能让产品跑到真实市场里，拿到反馈，持续迭代",
        ],
        p5: "换句话说，仅仅会写代码、会调用模型，不足以在新的技术周期站稳脚跟。",
        p6: "如李飞飞所说：",
        quote2:
          '"我们的人类教育系统早已僵化，固步自封一二百年了。我最担心的就是现在缺乏优质的AI公共教育。"',
        p7: "学校教的是知识；",
        p8: "企业要的是能力；",
        p9: "而时代要的是能把 AI 变成现实价值的人。",
        p10: "BETA 就是为这个断层诞生的：",
        p11: "帮助你在年轻阶段，就获得 AI 产品工程 + 市场验证 的核心实战力。",
      },

      section2: {
        title: "2. BETA 三阶课程体系的逻辑",
        p1: "BETA 不讲概念、不做虚假承诺，不让你在 PPT 上发明产品。",
        p2: "我们的体系从第一天开始，就是奔着「真实上线」去的。",
        p3: "它由三大阶段组成，对应三种能力：",

        stage1: {
          title:
            "Beta 星空营（Galaxy）——初阶 AI Native 产品工程",
          suitable: "适合：",
          suitableText:
            "基础薄弱、有想法、希望快速做出第一款 AI 产品的人",
          goal: "目标：",
          goals: [
            "在 6 周内做出一个可公开发布的成品",
            "拥有自己的域名、部署、用户、冷启动",
            "体验完整的产品从 0→1 流程",
            "拿到能用于投递实习与申请的作品集",
          ],
        },

        stage2: {
          title:
            "Beta 深空营（Cosmos）——高阶全链条 AI 工程实战",
          suitable: "适合：",
          suitableText:
            "有基本工程能力，希望突破硬核 AI 技术栈的人",
          master: "你将掌握：",
          skills: [
            "多模态（OCR/ASR/YouTube/TikTok API）",
            "RAG、向量库、关键词图谱",
            "Agent + 工具链",
            "React + FastAPI 全栈",
            "私有化部署（vLLM/LMStudio）",
            "Stripe、自动部署、容器化",
          ],
          goal: "目标是一款能被企业使用的生产级 AI 产品。",
        },

        stage3: {
          title:
            "Beta 无界营（Infinity）——AI 产品创始人引领课程",
          suitable: "适合：",
          suitableText:
            "有工程背景、明确目标，希望打造创业级产品的人",
          weeks: "12 周完成：",
          milestones: [
            "大模型环境、数据接入、RAG、Agent",
            "全链条工程体系搭建",
            "产品战略、市场验证、品牌化",
            "Beta 测试、产品发布、演讲路演",
          ],
          benefits: "优秀学员还会得到：",
          benefitsList: [
            "创始人推荐信",
            "大厂/AI公司实习推荐",
            "种子投资机会",
          ],
        },

        p4: '三阶体系不走"培训路线"，走的是"产品路线"。',
        p5: "它不是教你技能，而是帮你建立：",
        p6: "从认知 → 工程 → 产品 → 市场 → 战略 的完整能力闭环。",
      },

      section3: {
        title: "3. 为什么大学生在 AI 学习上具备天然优势？",
        p1: "很多人误以为自己起步晚了。",
        p2: "其实，你可能正处在最好的节点。",
        p3: "我们观察到大学生（或刚工作1-3年的人）有几项关键优势：",
        advantages: [
          {
            title: "思维尚未固化：",
            desc: '能快速接受"AI辅助工程"这种新范式',
          },
          {
            title: "对未来仍有期待：",
            desc: "愿意投入时间做真正困难的事",
          },
          {
            title: "没有职业框架束缚：",
            desc: "敢尝试、敢推翻、敢重来",
          },
          {
            title: "学习速度快：",
            desc: "只要方法正确，6周做出产品十分现实",
          },
        ],
        p4: "我们见过：",
        examples: [
          "刚读大学一年级就做出 Agent 应用并获上千用户的人",
          "非计算机专业却做出功能完整的多模态 AI 网站",
          "在职工程师完成了自己拖延两年的创业 MVP",
        ],
        p5: "他们并不是天才，只是给自己一个进入实战的出口。",
      },

      section4: {
        title: "4. BETA 与传统工程学习的差异",
        traditional: {
          title: "传统路线：",
          path: "语法 → 框架 → 项目模板 → 未来再说",
          result: "过程枯燥，结果有限。",
        },
        beta: {
          title: "BETA 的路线：",
          path: "提问 → 产品 → 工程 → 市场 → 上线",
          result: "每一步都指向一个成果：做出真实产品。",
        },
        p1: "我们的底层设计很简单：",
        principles: [
          {
            title: "框架重于代码：",
            desc: "会写代码不够，你要能驱动 AI 写",
          },
          {
            title: "产品先于工程：",
            desc: '你不是在做课程作业，而是在做"产品"',
          },
          {
            title: "审美优于制造：",
            desc: "你作品的品味，会决定它的命运",
          },
          {
            title: "反馈大于功能：",
            desc: "上线比完美重要，市场比老师重要",
          },
          {
            title: "提问高于一切：",
            desc: "所有能力从提问开始，也被提问驱动",
          },
        ],
        p2: "这是企业的真实逻辑，也是时代真正的需求。",
      },

      section5: {
        title: "5. 挑战是真实的，但支持也是完整的",
        p1: "我不会告诉你这门课很轻松。",
        p2: "说轻松是对你的不尊重。",
        p3: "但我可以保证：你不会独自面对困境。",
        p4: "我们提供：",
        support: [
          "来自一线工程师的实战教学",
          "每周固定答疑",
          "营长带队的作业检查",
          "工程师陪练",
          "AI 工具链与 400+ API 资源",
          "完整部署、发布、营销指导",
          "真实 Demo Day、真实用户反馈",
        ],
        p5: '我们的目标不是让你"学会"，',
        p6: "而是让你真实地「做出」。",
      },

      section6: {
        title: "6. 对你的职业与未来发展的价值",
        p1: "参加 BETA 体系，你将获得：",
        value1: {
          title: "升学 / 工作竞争力",
          items: [
            "一款真实上线的产品作品集",
            "工程师与创始人背书",
            "对大模型、RAG、Agent 的掌握",
            "真实团队协作经验",
          ],
        },
        value2: {
          title: "技能提升",
          items: [
            "全链条 AI 工程能力",
            "产品拆解与市场验证",
            "多模态、私有化部署、容器化",
          ],
        },
        value3: {
          title: "职业方向判断力",
          items: [
            "是否要走工程？",
            "是否适合创业？",
            "是否能做更好的产品？",
          ],
          note: "实践会给你答案。",
        },
      },

      section7: {
        title: "7. 如果你决定加入，这是我给你的建议",
        advice: [
          {
            title: "不要害怕难度",
            desc: "——真实的成长从不轻松",
          },
          {
            title: "尽量全力投入",
            desc: "——AI时代属于执行密度高的人",
          },
          {
            title: "把每一次困惑写下来",
            desc: "——提问是你的武器",
          },
          { title: '放弃"完美主义"', desc: "——先上线，再优化" },
          {
            title: "允许自己失败",
            desc: "——失败是产品的日常，不是你的问题",
          },
        ],
        p1: '你的目标不是"完成作业"，',
        p2: "而是成为能凭自己做出真实 AI 产品的人。",
      },

      final: {
        title: "最后的话",
        p1: "在 AI 的时代浪潮里，你可能还没意识到一件事：",
        quote:
          "能把 AI 变成产品的人，会成为这个时代最稀缺的人。",
        p2: "这也是我们创办 BEE BETA 的根本原因。",
        p3: "如果你愿意，我们会和你一起：",
        p4: "从提问、到创造、到验证、到发布，",
        p5: "走完真实世界的第一段路。",
        closing: "期待在 BETA 与你相遇。",
      },

      signature: {
        sincerely: "诚挚的，",
        date: "2025年10月",
      },

      quoteHighlight:
        '"能把 AI 变成产品的人，会成为这个时代最稀缺的人。"',
      quoteAuthor: "— Pin Zhou 周品",
    },

    // Advanced Courses Section
    advancedCoursesSection: {
      title: "Advanced & Coaching Programs",
      description:
        "Professional advanced courses and 1-on-1 coaching for continued growth of Alpha/Beta learners and graduates",
      dialogDescription:
        "Fill in the information below, our course advisor will contact you within 24 hours",
      starry: {
        target: "For Alpha/Beta Learners",
        subtitle: "Starry: Professional Advanced Course",
        description:
          "Complete advanced AI courses from beginner to mastery, focusing on professional skills to reach industry mid-to-upper level",
        duration: "Duration",
        durationValue: "4 weeks, 1 main + 1 homework check/week",
        classSize: "Class Size",
        classSizeValue: "4-6 small class",
        language: "Language",
        languageValue: "Chinese",
        instructors: "Teaching Team",
        instructorsValue: "Top Industry Engineers",
        courseOptions: "12 Specialized Courses Available:",
        courses: [
          "Browser Performance",
          "AI Frontend Workflow",
          "Cross-platform Dev",
          "Model Fine-tuning",
          "RAG Architecture",
          "Cursor Advanced",
          "Data Collection",
          "MCP Agent",
          "Docker Operations",
          "K8s Cluster",
          "Transformer Architecture",
          "Enterprise AI Bot",
        ],
        cta: "Inquire Now",
      },
      orbiter: {
        target: "For Graduated Learners",
        subtitle: "Orbiter: 1v1 Coaching Course",
        description:
          "For graduated learners, leveraging our strong engineering team for 1v1 product upgrade coaching",
        courseFormat: "Format",
        courseFormatValue: "Online 1-on-1",
        duration: "Session Length",
        durationValue: "1 hour/session",
        instructors: "Instructor",
        instructorsValue: "Engineering Mentor",
        eligibility: "Enrollment",
        eligibilityValue: "Alpha/Beta Graduates",
        features: [
          "✓ 1-on-1 personalized coaching with engineering mentors",
          "✓ Goal-oriented practice, no theoretical lectures",
          "✓ Product upgrade and optimization coaching",
          "✓ Reinforcement of learned course content only",
        ],
        cta: "Inquire Now",
      },
    },
  },
};

export type TranslationKeys = typeof translations.zh;