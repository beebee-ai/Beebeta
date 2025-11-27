export interface OperationsMentorData {
  id: string;
  name: string;
  nameEn: string;
  title: string;
  titleEn: string;
  summary: string;
  summaryEn: string;
  details: string;
  detailsEn: string;
  quote?: string;
  quoteEn?: string;
}

export const operationsMentors: OperationsMentorData[] = [
  {
    id: "ops-claire",
    name: "Claire Chen",
    nameEn: "Claire Chen",
    title: "用户体验设计师 & 项目经理",
    titleEn: "UX Designer & Project Manager",
    summary: "专业的用户体验设计师和经验丰富的项目经理，拥有8年以上数字产品设计和教育项目管理经验。Claire将用户中心设计思维与战略项目协调相结合，创造卓越的学习体验并确保项目无缝交付。",
    summaryEn: "Professional UX designer and experienced project manager with 8+ years in digital product design and educational program management. Claire combines user-centered design thinking with strategic project coordination to create exceptional learning experiences and ensure seamless program delivery.",
    details: `
      <h4>用户体验设计专长</h4>
      <ul>
        <li>教育平台用户研究和角色开发</li>
        <li>信息架构和用户旅程映射</li>
        <li>交互原型设计和可用性测试</li>
        <li>设计系统创建和视觉识别开发</li>
        <li>无障碍和包容性设计实施</li>
      </ul>
      
      <h4>项目管理技能</h4>
      <ul>
        <li>教育项目敏捷方法和冲刺规划</li>
        <li>跨职能团队协调和利益相关者管理</li>
        <li>风险评估和缓解策略</li>
        <li>质量保证和持续改进流程</li>
        <li>绩效指标和成功衡量框架</li>
      </ul>
      
      <h4>教育创新</h4>
      <p>在AI教育中开创以用户为中心的设计方法，创造直观的学习界面和简化的项目工作流程。将UX研究洞察与教育心理学相结合，开发适应不同学生需求和学习风格的引人入胜、易于访问且有效的学习体验。</p>
    `,
    detailsEn: `
      <h4>UX Design Expertise</h4>
      <ul>
        <li>User research and persona development for educational platforms</li>
        <li>Information architecture and user journey mapping</li>
        <li>Interactive prototype design and usability testing</li>
        <li>Design system creation and visual identity development</li>
        <li>Accessibility and inclusive design implementation</li>
      </ul>
      
      <h4>Project Management Skills</h4>
      <ul>
        <li>Agile methodology and sprint planning for educational programs</li>
        <li>Cross-functional team coordination and stakeholder management</li>
        <li>Risk assessment and mitigation strategies</li>
        <li>Quality assurance and continuous improvement processes</li>
        <li>Performance metrics and success measurement frameworks</li>
      </ul>
      
      <h4>Educational Innovation</h4>
      <p>Pioneers user-centered design approaches in AI education, creating intuitive learning interfaces and streamlined project workflows. Combines UX research insights with educational psychology to develop engaging, accessible, and effective learning experiences that adapt to diverse student needs and learning styles.</p>
    `,
    quote: "优秀的设计是无形的。优秀的项目管理是无缝的。当两者结合时，我们创造的不只是满足需求，而是超越期望的体验。",
    quoteEn: "Great design is invisible. Great project management is seamless. When both come together, we create experiences that not only meet needs but exceed expectations."
  },
  {
    id: "ops-alan",
    name: "Alan Peng",
    nameEn: "Alan Peng",
    title: "助教",
    titleEn: "Teaching Assistant",
    summary: "美国奥古斯塔纳大学大三学生，数学和物理专业，担任BEEBEE测试工程师和助理Pacer。Alan将扎实的学术基础与实践技术经验相结合，为学生掌握AI概念和技能提供全面支持和指导。",
    summaryEn: "Junior student at Augustana University majoring in Mathematics and Physics, serving as BEEBEE test engineer and assistant Pacer. Alan combines strong academic foundation with practical technical experience to provide comprehensive support and guidance for students mastering AI concepts and skills.",
    details: `
      <h4>学术背景</h4>\n      <ul>\n        <li>美国奥古斯塔纳大学大三学生，数学和物理专业</li>\n        <li>扎实的数学建模和计算方法基础</li>\n        <li>将理论概念应用于实际问题解决的经验</li>\n        <li>积极参与学术研究和协作项目</li>\n        <li>中英文双语熟练，适合国际交流</li>\n      </ul>\n      \n      <h4>专业经验</h4>\n      <ul>\n        <li>BEEBEE AI测试工程师，负责质量保证和系统验证</li>\n        <li>助理Pacer，为教育项目协调提供全面支持</li>\n        <li>技术问题解决与调试专长</li>\n        <li>代码审查与最佳实践指导</li>\n        <li>为学生提供一对一辅导与指导</li>\n      </ul>\n      \n      <h4>教学理念</h4>\n      <p>将学术严谨性与实际应用相结合，使用现实世界的例子使复杂的AI概念易于理解。采用耐心和系统化的方法，将复杂主题分解为可管理的部分，同时保持对AI理解至关重要的数学精度。</p>\n    `,
    detailsEn: `
      <h4>Academic Background</h4>\n      <ul>\n        <li>Junior student at Augustana University, majoring in Mathematics and Physics</li>\n        <li>Strong foundation in mathematical modeling and computational methods</li>\n        <li>Experience in applying theoretical concepts to practical problem solving</li>\n        <li>Active participation in academic research and collaborative projects</li>\n        <li>Bilingual proficiency in English and Chinese for international communication</li>\n      </ul>\n      \n      <h4>Professional Experience</h4>\n      <ul>\n        <li>BEEBEE AI test engineer, responsible for quality assurance and system validation</li>\n        <li>Assistant Pacer, providing comprehensive support for educational program coordination</li>\n        <li>Technical problem solving and debugging expertise</li>\n        <li>Code review and best practices guidance</li>\n        <li>One-on-one tutoring and mentoring for students</li>\n      </ul>\n      \n      <h4>Teaching Philosophy</h4>\n      <p>Combines academic rigor with practical application, using real-world examples to make complex AI concepts accessible. Adopts a patient and systematic approach, breaking down complex topics into manageable parts while maintaining the mathematical precision essential for AI understanding.</p>\n    `,
    quote: "数学教会我们逻辑思维，物理展示世界如何运作，AI帮助我们解决实际问题。我在这里连接这些世界，指导您的学习之旅。",
    quoteEn: "Mathematics teaches us to think logically, physics shows us how the world works, and AI helps us solve real problems. I'm here to bridge these worlds and guide you through your learning journey."
  }
];