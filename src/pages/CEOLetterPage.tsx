import { Quote, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "../components/ui/button";
import { useLanguage } from "../contexts/LanguageContext";
import { useEffect } from "react";

// BEE Beta Logo - 使用网络链接
const logoImage =
  "https://beebee-s3-sit.s3.us-west-2.amazonaws.com/bee-beta/icon/bee_beta.png";
// CEO 图片 - 使用网络链接
const ceoImage =
  "https://beebee-s3-sit.s3.us-west-2.amazonaws.com/bee-beta/pacer/pin.png";

export function CEOLetterPage() {
  const { language } = useLanguage();
  const isEn = language === "en";

  useEffect(() => {
    document.title = "Bee-Beta - CEO Letter";
  }, []);

  return (
    <div className="min-h-screen bg-black">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-black/95 backdrop-blur-sm border-b border-[#ffc75a]/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            <Link to="/" className="flex items-center">
              <img
                src={logoImage}
                alt="BEE Beta"
                className="h-8 lg:h-10 w-auto"
              />
            </Link>
            <Link to="/">
              <Button
                variant="ghost"
                className="text-[#ffc75a] hover:text-[#ffc75a]/80 hover:bg-[#ffc75a]/10"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                {isEn ? "Back to Home" : "返回首页"}
              </Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            {/* Page Title */}
            <div className="text-center mb-16">
              <h1 className="text-[#ffc75a] mb-4">
                {isEn
                  ? "A Letter to Students"
                  : "致学员的一封信"}
              </h1>
              <p className="text-gray-400">
                {isEn
                  ? "Learn AI, Shape the Future"
                  : "Learn AI, Build Reality. 学AI，创未来。"}
              </p>
            </div>

            {/* CEO Info */}
            <div className="flex flex-col md:flex-row items-center gap-8 mb-12">
              <div className="flex-shrink-0">
                <img
                  src={ceoImage}
                  alt="CEO"
                  className="w-32 h-32 rounded-full object-cover border-4 border-[#ffc75a]/20"
                />
              </div>
              <div className="text-center md:text-left">
                <h2 className="text-white mb-2">
                  {isEn ? "Pin Zhou" : "Pin Zhou 周品"}
                </h2>
                <p className="text-[#ffc75a] mb-2">
                  {isEn
                    ? "Founder of BEEBEE AI"
                    : "BEEBEE AI 创始人"}
                </p>
                <p className="text-gray-400 text-sm">
                  {isEn
                    ? "Initiator of BEE BETA Program"
                    : "BEE BETA 项目发起人"}
                </p>
              </div>
            </div>

            {/* Letter Content */}
            <div className="bg-zinc-900 rounded-lg p-8 lg:p-12 border border-[#ffc75a]/10 relative">
              <Quote className="absolute top-6 left-6 w-12 h-12 text-[#ffc75a]/20" />

              <div className="relative z-10 space-y-8 text-gray-400 leading-loose text-base">
                <p className="text-white leading-relaxed">
                  {isEn ? "Dear Student:" : "亲爱的同学："}
                </p>

                <p>
                  <span className="block mb-5 leading-loose">
                    {isEn
                      ? "Hello! I'm Pin Zhou, initiator of the BEE Beta three-stage curriculum system. First of all, thank you for taking the time to learn about our AI curriculum. As an experienced AI practitioner team, we would like to share some genuine thoughts with you:"
                      : "您好！我是 BEE Beta 三阶课程体系的发起人周品。首先，感谢您花时间了解我们的 AI 课程体系。作为一支由资深 AI 从业者组成的团队，我们希望与您分享一些真诚的想法："}
                  </span>
                  <span className="block pl-6 space-y-4">
                    <span className="block leading-loose">
                      • {isEn
                        ? "Why we've created this intensive, real-world AI product engineering system for college students and working learners"
                        : "为什么我们要为大学生和在职学习者打造这样一套强度不低、目标极实的 AI 产品工程体系"}
                    </span>
                    <span className="block leading-loose">
                      • {isEn
                        ? "What core challenges it solves for your future development"
                        : "它如何解决你未来发展的核心挑战"}
                    </span>
                    <span className="block leading-loose">
                      • {isEn
                        ? "How we'll accompany you from 'using AI' to 'building products,' 'engineering systems,' and 'creating ventures'"
                        : "我们如何帮助你从「会用 AI」走向「能做产品」「能做工程」「能做事业」"}
                    </span>
                  </span>
                </p>

                {/* Section 1 */}
                <div className="pt-6">
                  <h3 className="text-[#ffc75a] mb-6">
                    {isEn
                      ? "1. Why Create the BETA System for Students and Early-Career Professionals?"
                      : "1. 为什么要为大学生与准职业人群开设 BETA 体系？"}
                  </h3>

                  <p className="mb-4">
                    {isEn
                      ? "Over the past few years, we've worked with students from MIT, Cornell, UIUC, Tsinghua, Zhejiang, UCL and other top universities. They're smart, capable learners with strong theoretical foundations, but they all face a common reality:"
                      : "过去几年里，我们与来自 MIT、康奈尔、UIUC、清华、浙大、UCL 等名校背景的同学合作过不少项目。他们聪明、会学、有理论功底，但也普遍面临一个现实："}
                  </p>

                  <p className="text-white text-lg mb-4 pl-4 border-l-2 border-[#ffc75a]">
                    {isEn
                      ? "The gap from theory to practice is far more challenging than imagined."
                      : "理论到实践的跨越，远比想象中艰难。"}
                  </p>

                  <p className="mb-4">
                    {isEn
                      ? "In other words, just knowing how to code or call models isn't enough to stay competitive in the new tech cycle."
                      : "换句话说，仅仅会写代码、会调用模型，不足以在新的技术周期站稳脚跟。"}
                  </p>

                  <div className="my-6 py-4 px-5 bg-black/30 border-l-4 border-[#ffc75a]/60 rounded-r">
                    <p className="text-gray-400 text-sm mb-2">
                      {isEn
                        ? "As Fei-Fei Li said:"
                        : "如李飞飞所说："}
                    </p>
                    <p className="text-[#ffc75a] italic">
                      {isEn
                        ? '"Our human education system has been stagnant for one or two hundred years. What worries me most is the current lack of quality public AI education."'
                        : '"我们的人类教育系统早已僵化，固步自封一二百年了。我最担心的就是现在缺乏优质的AI公共教育。"'}
                    </p>
                  </div>

                  <p className="mb-4 leading-relaxed">
                    {isEn
                      ? "Schools teach knowledge; companies need capabilities; "
                      : "学校教的是知识；企业要的是能力；"}
                    <span className="text-white">
                      {isEn
                        ? "and the era demands people who can turn AI into real value."
                        : "而时代要的是能把 AI 变成现实价值的人。"}
                    </span>
                  </p>

                  <p className="leading-relaxed">
                    <span className="text-[rgb(255,255,255)]">
                      {isEn
                        ? "BETA was born to bridge this gap: "
                        : "BETA 就是为这个断层诞生的："}
                    </span>
                    {isEn
                      ? "Helping you gain core practical skills in "
                      : "帮助你在年轻阶段，就获得 "}
                    <span className="text-white">
                      {isEn
                        ? "AI product engineering + market validation"
                        : "AI 产品工程 + 市场验证"}
                    </span>
                    {isEn
                      ? " while you're young."
                      : " 的核心实战力。"}
                  </p>
                </div>

                {/* Section 2 */}
                <div className="pt-6">
                  <h3 className="text-[#ffc75a] mb-4">
                    {isEn
                      ? "2. The Logic Behind BETA's Three-Stage Curriculum"
                      : "2. BETA 三阶课程体系的逻辑"}
                  </h3>

                  <p className="mb-6">
                    {isEn
                      ? "BETA doesn't teach concepts, make false promises, or have you invent products in PowerPoint. From day one, our system is focused on "
                      : "BETA 不讲概念、不做虚假承诺，不让你在 PPT 上发明产品。我们的体系从第一天开始，就是奔着"}
                    <span className="text-[#ffc75a]">
                      {isEn ? '"real launch."' : "「真实上线」"}
                    </span>
                    {isEn ? " " : "去的。"}
                    {isEn
                      ? "It consists of three major stages, corresponding to three types of capabilities:"
                      : "它由三大阶段组成，对应三种能力："}
                  </p>

                  <div className="bg-black/30 p-6 rounded-lg border border-[#ffc75a]/20 mt-4">
                    <h4 className="text-white mb-3">
                      {isEn
                        ? "Beta Galaxy Camp — Foundational AI Native Product Engineering"
                        : "Beta 星空营（Galaxy）——初阶 AI Native 产品工程"}
                    </h4>
                    <p className="mb-3">
                      <span className="text-[#ffc75a]">
                        {isEn ? "Suitable for: " : "适合："}
                      </span>
                      {isEn
                        ? "Those with weak foundations, ideas, and hoping to quickly build their first AI product"
                        : "基础薄弱、有想法、希望快速做出第一款 AI 产品的人"}
                    </p>
                    <p className="mb-2">
                      <span className="text-[#ffc75a]">
                        {isEn ? "Goals:" : "目标："}
                      </span>
                    </p>
                    <ul className="list-disc list-inside space-y-1 ml-4">
                      {isEn ? (
                        <>
                          <li>
                            Build a publicly launchable product
                            in 6 weeks
                          </li>
                          <li>
                            Have your own domain, deployment,
                            users, cold start
                          </li>
                          <li>
                            Experience the complete 0→1 product
                            process
                          </li>
                          <li>
                            Get a portfolio for internship
                            applications
                          </li>
                        </>
                      ) : (
                        <>
                          <li>
                            在 6 周内做出一个可公开发布的成品
                          </li>
                          <li>
                            拥有自己的域名、部署、用户、冷启动
                          </li>
                          <li>体验完整的产品从 0→1 流程</li>
                          <li>
                            拿到能用于投递实习与申请的作品集
                          </li>
                        </>
                      )}
                    </ul>
                  </div>

                  <div className="bg-black/30 p-6 rounded-lg border border-[#ffc75a]/20 mt-4">
                    <h4 className="text-white mb-3">
                      {isEn
                        ? "Beta Cosmos Camp — Advanced Full-Chain AI Engineering"
                        : "Beta 深空营（Cosmos）——高阶全链条 AI 工程实战"}
                    </h4>
                    <p className="mb-3">
                      <span className="text-[#ffc75a]">
                        {isEn ? "Suitable for: " : "适合："}
                      </span>
                      {isEn
                        ? "Those with basic engineering skills wanting to master hardcore AI tech stacks"
                        : "有基本工程能力，希望突破硬核 AI 技术栈的人"}
                    </p>
                    <p className="mb-2">
                      <span className="text-[#ffc75a]">
                        {isEn ? "You'll master:" : "你将掌握："}
                      </span>
                    </p>
                    <ul className="list-disc list-inside space-y-1 ml-4">
                      {isEn ? (
                        <>
                          <li>
                            Multimodal (OCR/ASR/Web Crawl)
                          </li>
                          <li>
                            RAG, vector databases, knowledge
                            graphs
                          </li>
                          <li>Agent + tool chains</li>
                          <li>React + FastAPI full-stack</li>
                          <li>
                            Private deployment (vLLM/LMStudio)
                          </li>
                          <li>
                            Payment, auto-deployment,
                            containerization
                          </li>
                        </>
                      ) : (
                        <>
                          <li>多模态（OCR/ASR/Web Crawl）</li>
                          <li>RAG、向量库、关键词图谱</li>
                          <li>Agent + 工具链</li>
                          <li>React + FastAPI 全栈</li>
                          <li>私有化部署（vLLM/LMStudio）</li>
                          <li>支付、自动部署、容器化</li>
                        </>
                      )}
                    </ul>
                    <p className="mt-3">
                      {isEn
                        ? "The goal is a production-grade AI product that enterprises can use."
                        : "目标是一款能被企业使用的生产级 AI 产品。"}
                    </p>
                  </div>

                  <div className="bg-black/30 p-6 rounded-lg border border-[#ffc75a]/20 mt-4">
                    <h4 className="text-white mb-3">
                      {isEn
                        ? "Beta Infinity Camp — AI Product Founder Leadership Course"
                        : "Beta 无界营（Infinity）——AI 产品创始人引领课程"}
                    </h4>
                    <p className="mb-3">
                      <span className="text-[#ffc75a]">
                        {isEn ? "Suitable for: " : "适合："}
                      </span>
                      {isEn
                        ? "Those with engineering background, clear goals, wanting to build startup-level products"
                        : "有工程背景、明确目标，希望打造创业级产品的人"}
                    </p>
                    <p className="mb-2">
                      <span className="text-[#ffc75a]">
                        {isEn
                          ? "Complete in 12 weeks:"
                          : "12 周完成："}
                      </span>
                    </p>
                    <ul className="list-disc list-inside space-y-1 ml-4">
                      {isEn ? (
                        <>
                          <li>
                            LLM environment, data integration,
                            RAG, Agent
                          </li>
                          <li>Full-chain engineering system</li>
                          <li>
                            Product strategy, market validation,
                            branding
                          </li>
                          <li>
                            Beta testing, product launch, pitch
                            presentation
                          </li>
                        </>
                      ) : (
                        <>
                          <li>
                            大模型环境、数据接入、RAG、Agent
                          </li>
                          <li>全链条工程体系搭建</li>
                          <li>产品战略、市场验证、品牌化</li>
                          <li>Beta 测试、产品发布、演讲路演</li>
                        </>
                      )}
                    </ul>
                    <p className="mt-3 mb-2">
                      <span className="text-[#ffc75a]">
                        {isEn
                          ? "Outstanding students will also receive:"
                          : "优秀学员还会得到："}
                      </span>
                    </p>
                    <ul className="list-disc list-inside space-y-1 ml-4">
                      {isEn ? (
                        <>
                          <li>Founder recommendation letter</li>
                          <li>
                            Big tech/AI company internship
                            referrals
                          </li>
                          <li>Seed investment opportunities</li>
                        </>
                      ) : (
                        <>
                          <li>创始人推荐信</li>
                          <li>大厂/AI公司实习推荐</li>
                          <li>种子投资机会</li>
                        </>
                      )}
                    </ul>
                  </div>

                  <p className="mt-6 text-gray-300 leading-relaxed">
                    {isEn
                      ? 'The three-stage system doesn\'t follow a "training route," it follows a '
                      : '三阶体系不走"培训路线"，走的是'}
                    <span className="text-[#ffc75a]">
                      {isEn ? '"product route."' : '"产品路线"'}
                    </span>
                    {isEn
                      ? " It's not about teaching you skills, but helping you build: "
                      : "。它不是教你技能，而是帮你建立："}
                    <span className="text-white">
                      {isEn
                        ? "A complete capability loop from cognition → engineering → product → market → strategy."
                        : "从认知 → 工程 → 产品 → 市场 → 战略 的完整能力闭环。"}
                    </span>
                  </p>
                </div>

                {/* Section 3 */}
                <div className="pt-6">
                  <h3 className="text-[#ffc75a] mb-6">
                    {isEn
                      ? "3. Why Do College Students Have Natural Advantages in AI Learning?"
                      : "3. 为什么大学生在 AI 学习上具备天然优势？"}
                  </h3>

                  <p className="mb-5">
                    {isEn
                      ? "Many people mistakenly think they started too late. Actually, you might be at the perfect moment."
                      : "很多人误以为自己起步晚了。其实，你可能正处在最好的节点。"}
                  </p>

                  <p className="mb-5">
                    {isEn
                      ? "We've observed that college students (or those with 1-3 years of work experience) have several key advantages:"
                      : "我们观察到大学生（或刚工作1-3年的人）有几项关键优势："}
                  </p>

                  <ul className="list-disc list-inside space-y-3 ml-4 mb-6">
                    {isEn ? (
                      <>
                        <li>
                          <span className="text-white">
                            Flexible thinking:
                          </span>{" "}
                          Can quickly adapt to the new paradigm
                          of "AI-assisted engineering"
                        </li>
                        <li>
                          <span className="text-white">
                            Still have expectations for the
                            future:
                          </span>{" "}
                          Willing to invest time in truly
                          difficult things
                        </li>
                        <li>
                          <span className="text-white">
                            No career framework constraints:
                          </span>{" "}
                          Dare to try, dare to overturn, dare to
                          restart
                        </li>
                        <li>
                          <span className="text-white">
                            Fast learning speed:
                          </span>{" "}
                          With the right method, building a
                          product in 6 weeks is very realistic
                        </li>
                      </>
                    ) : (
                      <>
                        <li>
                          <span className="text-white">
                            思维尚未固化：
                          </span>
                          能快速接受"AI辅助工程"这种新范式
                        </li>
                        <li>
                          <span className="text-white">
                            对未来仍有期待：
                          </span>
                          愿意投入时间做真正困难的事
                        </li>
                        <li>
                          <span className="text-white">
                            没有职业框架束缚：
                          </span>
                          敢尝试、敢推翻、敢重来
                        </li>
                        <li>
                          <span className="text-white">
                            学习速度快：
                          </span>
                          只要方法正确，6周做出产品十分现实
                        </li>
                      </>
                    )}
                  </ul>

                  <p className="mb-4">{isEn ? "We've seen:" : "我们见过："}</p>

                  <ul className="list-disc list-inside space-y-2 ml-4 mb-5">
                    {isEn ? (
                      <>
                        <li>
                          First-year college students building
                          Agent applications with thousands of
                          users
                        </li>
                        <li>
                          Non-CS majors creating fully
                          functional multimodal AI websites
                        </li>
                        <li>
                          Working engineers completing the
                          startup MVP they\'d been putting off
                          for two years
                        </li>
                      </>
                    ) : (
                      <>
                        <li>
                          刚读大学一年级就做出 Agent
                          应用并获上千用户的人
                        </li>
                        <li>
                          非计算机专业却做出功能完整的多模态 AI
                          网站
                        </li>
                        <li>
                          在职工程师完成了自己拖延两年的创业 MVP
                        </li>
                      </>
                    )}
                  </ul>

                  <p className="text-white">
                    {isEn
                      ? "They're not geniuses, they just gave themselves an outlet to enter real-world practice."
                      : "他们并不是天才，只是给自己一个进入实战的出口。"}
                  </p>
                </div>

                {/* Section 4 */}
                <div className="pt-6">
                  <h3 className="text-[#ffc75a] mb-4">
                    {isEn
                      ? "4. How BETA Differs from Traditional Engineering Learning"
                      : "4. BETA 与传统工程学习的差异"}
                  </h3>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-zinc-800/50 p-5 rounded-lg">
                      <p className="text-white mb-2">
                        {isEn
                          ? "Traditional route:"
                          : "传统路线："}
                      </p>
                      <p className="text-sm">
                        {isEn
                          ? "Syntax → Framework → Project template → Future later"
                          : "语法 → 框架 → 项目模板 → 未来再说"}
                      </p>
                      <p className="text-sm text-gray-500 mt-2">
                        {isEn
                          ? "Process is boring, results are limited."
                          : "过程枯燥，结果有限。"}
                      </p>
                    </div>
                    <div className="bg-[#ffc75a]/10 p-5 rounded-lg border border-[#ffc75a]/30">
                      <p className="text-[#ffc75a] mb-2">
                        {isEn ? "BETA route:" : "BETA 的路线："}
                      </p>
                      <p className="text-sm">
                        {isEn
                          ? "Questions → Product → Engineering → Market → Launch"
                          : "提问 → 产品 → 工程 → 市场 → 上线"}
                      </p>
                      <p className="text-sm text-gray-400 mt-2">
                        {isEn
                          ? "Every step points to an outcome: building real products."
                          : "每一步都指向一个成果：做出真实产品。"}
                      </p>
                    </div>
                  </div>

                  <p className="mt-6">
                    {isEn
                      ? "Our underlying design is simple:"
                      : "我们的底层设计很简单："}
                  </p>

                  <ul className="list-disc list-inside space-y-2 ml-4">
                    {isEn ? (
                      <>
                        <li>
                          <span className="text-[#ffc75a]">
                            Framework over code:
                          </span>{" "}
                          Knowing how to write code isn't
                          enough, you need to drive AI to write
                        </li>
                        <li>
                          <span className="text-[#ffc75a]">
                            Product before engineering:
                          </span>{" "}
                          You're not doing homework, you're
                          building a "product"
                        </li>
                        <li>
                          <span className="text-[#ffc75a]">
                            Aesthetics over manufacturing:
                          </span>{" "}
                          Your product's taste will determine
                          its fate
                        </li>
                        <li>
                          <span className="text-[#ffc75a]">
                            Feedback over features:
                          </span>{" "}
                          Launch is more important than perfect,
                          market is more important than teacher
                        </li>
                        <li>
                          <span className="text-[#ffc75a]">
                            Questions above all:
                          </span>{" "}
                          All capabilities start and are driven
                          by questioning
                        </li>
                      </>
                    ) : (
                      <>
                        <li>
                          <span className="text-[#ffc75a]">
                            框架重于代码：
                          </span>
                          会写代码不够，你要能驱动 AI 写
                        </li>
                        <li>
                          <span className="text-[#ffc75a]">
                            产品先于工程：
                          </span>
                          你不是在做课程作业，而是在做"产品"
                        </li>
                        <li>
                          <span className="text-[#ffc75a]">
                            审美优于制造：
                          </span>
                          你作品的品味，会决定它的命运
                        </li>
                        <li>
                          <span className="text-[#ffc75a]">
                            反馈大于功能：
                          </span>
                          上线比完美重要，市场比老师重要
                        </li>
                        <li>
                          <span className="text-[#ffc75a]">
                            提问高于一切：
                          </span>
                          所有能力从提问开始，也被提问驱动
                        </li>
                      </>
                    )}
                  </ul>

                  <p className="text-white">
                    {isEn
                      ? "This is the real logic of business and the true need of the era."
                      : "这是企业的真实逻辑，也是时代真正的需求。"}
                  </p>
                </div>

                {/* Section 5 */}
                <div className="pt-6">
                  <h3 className="text-[#ffc75a] mb-4">
                    {isEn
                      ? "5. The Challenge is Real, But Support is Complete"
                      : "5. 挑战是真实的，但支持也是完整的"}
                  </h3>

                  <p className="mb-4">
                    {isEn
                      ? "I won't tell you this course is easy. "
                      : "我不会告诉你这门课很轻松。"}
                    <span className="text-white">
                      {isEn
                        ? "Saying it's easy would be disrespectful to you."
                        : "说轻松是对你的不尊重。"}
                    </span>
                    {isEn ? " " : ""}
                    {isEn
                      ? "But I can guarantee: "
                      : " 但我可以保证："}
                    <span className="text-[#ffc75a]">
                      {isEn
                        ? "You won't face difficulties alone."
                        : "你不会独自面对困境。"}
                    </span>
                  </p>

                  <p>{isEn ? "We provide:" : "我们提供："}</p>

                  <ul className="list-disc list-inside space-y-2 ml-4">
                    {isEn ? (
                      <>
                        <li>
                          Hands-on teaching from frontline
                          engineers
                        </li>
                        <li>Weekly fixed Q&A sessions</li>
                        <li>
                          Camp leader-led assignment reviews
                        </li>
                        <li>Engineer mentorship</li>
                        <li>
                          AI toolchains & 400+ API resources
                        </li>
                        <li>
                          Complete deployment, launch, and
                          marketing guidance
                        </li>
                        <li>
                          Real Demo Days, real user feedback
                        </li>
                      </>
                    ) : (
                      <>
                        <li>来自一线工程师的实战教学</li>
                        <li>每周固定答疑</li>
                        <li>营长带队的作业检查</li>
                        <li>工程师陪练</li>
                        <li>AI 工具链与 400+ API 资源</li>
                        <li>完整部署、发布、营销指导</li>
                        <li>真实 Demo Day、真实用户反馈</li>
                      </>
                    )}
                  </ul>

                  <p className="mt-6 text-gray-300 leading-relaxed">
                    {isEn
                      ? "Our goal isn't to make you "
                      : "我们的目标不是让你"}
                    <span className="text-gray-500">
                      {isEn ? '"learn," ' : '"学会"，'}
                    </span>
                    {isEn
                      ? "but to actually make you "
                      : "而是让你真实地"}
                    <span className="text-[#ffc75a]">
                      {isEn ? '"build."' : "「做出」。"}
                    </span>
                  </p>
                </div>

                {/* Section 6 */}
                <div className="pt-6">
                  <h3 className="text-[#ffc75a] mb-4">
                    {isEn
                      ? "6. Value for Your Career and Future Development"
                      : "6. 对你的职业与未来发展的价值"}
                  </h3>

                  <p>
                    {isEn
                      ? "By participating in the BETA system, you'll gain:"
                      : "参加 BETA 体系，你将获得："}
                  </p>

                  <div className="space-y-4 mt-4">
                    <div className="bg-black/30 p-4 rounded-lg border-l-4 border-[#ffc75a]">
                      <p className="text-white mb-2">
                        {isEn
                          ? "Academic / Career Competitiveness"
                          : "升学 / 工作竞争力"}
                      </p>
                      <ul className="list-disc list-inside space-y-1 ml-4 text-sm">
                        {isEn ? (
                          <>
                            <li>
                              A real launched product portfolio
                            </li>
                            <li>
                              Engineer and founder endorsement
                            </li>
                            <li>
                              Mastery of LLMs, RAG, Agents
                            </li>
                            <li>
                              Real team collaboration experience
                            </li>
                          </>
                        ) : (
                          <>
                            <li>一款真实上线的产品作品集</li>
                            <li>工程师与创始人背书</li>
                            <li>对大模型、RAG、Agent 的掌握</li>
                            <li>真实团队协作经验</li>
                          </>
                        )}
                      </ul>
                    </div>

                    <div className="bg-black/30 p-4 rounded-lg border-l-4 border-[#ffc75a]">
                      <p className="text-white mb-2">
                        {isEn
                          ? "Skill Enhancement"
                          : "技能提升"}
                      </p>
                      <ul className="list-disc list-inside space-y-1 ml-4 text-sm">
                        {isEn ? (
                          <>
                            <li>
                              Full-chain AI engineering
                              capabilities
                            </li>
                            <li>
                              Product breakdown and market
                              validation
                            </li>
                            <li>
                              Multimodal, private deployment,
                              containerization
                            </li>
                          </>
                        ) : (
                          <>
                            <li>全链条 AI 工程能力</li>
                            <li>产品拆解与市场验证</li>
                            <li>多模态、私有化部署、容器化</li>
                          </>
                        )}
                      </ul>
                    </div>

                    <div className="bg-black/30 p-4 rounded-lg border-l-4 border-[#ffc75a]">
                      <p className="text-white mb-2">
                        {isEn
                          ? "Career Direction Judgment"
                          : "职业方向判断力"}
                      </p>
                      <ul className="list-disc list-inside space-y-1 ml-4 text-sm">
                        {isEn ? (
                          <>
                            <li>
                              Should I pursue engineering?
                            </li>
                            <li>
                              Am I suited for entrepreneurship?
                            </li>
                            <li>
                              Can I build better products?
                            </li>
                          </>
                        ) : (
                          <>
                            <li>是否要走工程？</li>
                            <li>是否适合创业？</li>
                            <li>是否能做更好的产品？</li>
                          </>
                        )}
                      </ul>
                      <p className="text-sm text-gray-400 mt-2">
                        {isEn
                          ? "Practice will give you answers."
                          : "实践会给你答案。"}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Section 7 */}
                <div className="pt-6">
                  <h3 className="text-[#ffc75a] mb-4">
                    {isEn
                      ? "7. If You Decide to Join, Here's My Advice"
                      : "7. 如果你决定加入，这是我给你的建议"}
                  </h3>

                  <ul className="list-disc list-inside space-y-2 ml-4">
                    {isEn ? (
                      <>
                        <li>
                          <span className="text-white">
                            Don't fear difficulty
                          </span>{" "}
                          — Real growth is never easy
                        </li>
                        <li>
                          <span className="text-white">
                            Go all in
                          </span>{" "}
                          — The AI era belongs to those with
                          high execution density
                        </li>
                        <li>
                          <span className="text-white">
                            Write down every confusion
                          </span>{" "}
                          — Questions are your weapon
                        </li>
                        <li>
                          <span className="text-white">
                            Give up "perfectionism"
                          </span>{" "}
                          — Launch first, optimize later
                        </li>
                        <li>
                          <span className="text-white">
                            Allow yourself to fail
                          </span>{" "}
                          — Failure is part of building
                          products, not a problem with you
                        </li>
                      </>
                    ) : (
                      <>
                        <li>
                          <span className="text-white">
                            不要害怕难度
                          </span>
                          ——真实的成长从不轻松
                        </li>
                        <li>
                          <span className="text-white">
                            尽量全力投入
                          </span>
                          ——AI时代属于执行密度高的人
                        </li>
                        <li>
                          <span className="text-white">
                            把每一次困惑写下来
                          </span>
                          ——提问是你的武器
                        </li>
                        <li>
                          <span className="text-white">
                            放弃"完美主义"
                          </span>
                          ——先上线，再优化
                        </li>
                        <li>
                          <span className="text-white">
                            允许自己失败
                          </span>
                          ——失败是产品的日常，不是你的问题
                        </li>
                      </>
                    )}
                  </ul>

                  <p className="text-white mt-4">
                    {isEn
                      ? "Your goal isn't to \"complete homework,\" but to become someone who can independently build real AI products."
                      : '你的目标不是"完成作业"，而是成为能凭自己做出真实 AI 产品的人。'}
                  </p>
                </div>

                {/* Final words */}
                <div className="pt-6">
                  <h3 className="text-[#ffc75a] mb-4">
                    {isEn ? "Final Words" : "最后的话"}
                  </h3>

                  <p className="mb-6 leading-relaxed">
                    {isEn
                      ? "In the wave of the AI era, you may not have realized one thing: "
                      : "在 AI 的时代浪潮里，你可能还没意识到一件事："}
                    <span className="text-white font-medium">
                      {isEn
                        ? "People who can turn AI into products will become the most scarce in this era."
                        : "能把 AI 变成产品的人，会成为这个时代最稀缺的人。"}
                    </span>
                    {isEn
                      ? " This is the fundamental reason we founded BEE BETA."
                      : " 这也是我们创办 BEE BETA 的根本原因。"}
                  </p>

                  <div className="bg-gradient-to-r from-[#ffc75a]/10 to-transparent border-l-4 border-[#ffc75a] p-6 rounded-lg">
                    <p className="text-gray-300 leading-relaxed">
                      {isEn
                        ? "If you're willing, we'll accompany you: "
                        : "如果你愿意，我们会和你一起："}
                      <span className="text-white">
                        {isEn
                          ? "From questioning, to creating, to validating, to launching, walking through the first stage of the real world."
                          : "从提问、到创造、到验证、到发布，走完真实世界的第一段路。"}
                      </span>
                    </p>
                  </div>

                  <p className="text-[#ffc75a] mt-6 text-lg">
                    {isEn
                      ? "Looking forward to meeting you in BETA."
                      : "期待在 BETA 与你相遇。"}
                  </p>
                </div>

                <div className="pt-8 border-t border-[#ffc75a]/20 mt-8">
                  <p className="text-white mb-6">
                    {isEn ? "Sincerely," : "诚挚的，"}
                  </p>
                  <p className="text-gray-500 text-sm mb-6">
                    {isEn ? "October 2025" : "2025年10月"}
                  </p>
                  <p className="text-white mb-1">
                    {isEn ? "Pin Zhou" : "Pin Zhou 周品"}
                  </p>
                  <p className="text-gray-500 text-sm">
                    {isEn
                      ? "Founder of BEEBEE AI"
                      : "BEEBEE AI 创始人"}
                  </p>
                  <p className="text-gray-500 text-sm">
                    {isEn
                      ? "Initiator of BEE BETA Program"
                      : "BEE BETA 项目发起人"}
                  </p>
                </div>
              </div>
            </div>

            {/* Quote Highlight */}
            <div className="mt-12 p-6 bg-[#ffc75a]/5 border-l-4 border-[#ffc75a] rounded">
              <p className="text-gray-400 italic">
                {isEn
                  ? '"People who can turn AI into products will become the most scarce in this era."'
                  : '"能把 AI 变成产品的人，会成为这个时代最稀缺的人。"'}
              </p>
              <p className="text-[#ffc75a] text-sm mt-2">
                — {isEn ? "Pin Zhou" : "Pin Zhou 周品"}
              </p>
            </div>

            {/* CTA */}
            <div className="mt-12 text-center">
              <Link to="/">
                <Button className="bg-[#ffc75a] hover:bg-[#ffc75a]/90 text-black">
                  {isEn ? "Back to Home" : "返回首页"}
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-[#ffc75a]/20 py-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-gray-500 text-sm">
            {isEn
              ? "© 2025 Bee Beta. All rights reserved. Learn AI, Shape the Future."
              : "© 2025 Bee Beta. 保留所有权利。学习AI，塑造未来。"}
          </p>
        </div>
      </footer>
    </div>
  );
}