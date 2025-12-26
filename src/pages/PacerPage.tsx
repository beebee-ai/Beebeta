import { useNavigate } from "react-router-dom";
import { ArrowLeft, Globe, Award, Briefcase, GraduationCap, Users, ChevronDown, ChevronUp } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";
import { pacerMentors, MentorData } from "../data/pacerData";
import { expertMentors, ExpertData } from "../data/prosData";
import { operationsMentors, OperationsMentorData } from "../data/OperationsManagement";
import { useEffect, useState, useRef } from "react";
import pacerImages from "../img/pacer";

// 懒加载卡片包装组件
function LazyCard({ 
  children, 
  cardId,
  forceLoad = false
}: { 
  children: React.ReactNode; 
  cardId: string;
  forceLoad?: boolean;
}) {
  const [isVisible, setIsVisible] = useState(forceLoad);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (forceLoad) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // 一旦可见就停止观察
          if (ref.current) {
            observer.unobserve(ref.current);
          }
        }
      },
      {
        rootMargin: "200px", // 提前200px开始加载
        threshold: 0.01,
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [forceLoad]);

  return (
    <div ref={ref} id={cardId}>
      {isVisible ? (
        children
      ) : (
        // 占位符 - 保持布局稳定
        <div className="w-full h-[340px] lg:h-[345px] bg-gray-100 rounded-2xl border-2 border-[#FF6900]/10 animate-pulse"></div>
      )}
    </div>
  );
}

export function PacerPage() {
  const navigate = useNavigate();
  const { language, setLanguage } = useLanguage();
  const [flippedCardId, setFlippedCardId] = useState<string | null>(null);
  const [forceLoadedCards, setForceLoadedCards] = useState<Set<string>>(new Set());
  
  // 折叠状态 - 默认只展开项目导师
  const [isProjectCollapsed, setIsProjectCollapsed] = useState(false);
  const [isExpertCollapsed, setIsExpertCollapsed] = useState(true);
  const [isOperationsCollapsed, setIsOperationsCollapsed] = useState(true);

  const isEnglish = language === "en";

  // 页面加载时滚动到顶部
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  // 切换卡片翻转状态 - 风琴效果
  const toggleCardFlip = (cardId: string) => {
    setFlippedCardId(prev => {
      if (prev === cardId) {
        return null;
      }
      return cardId;
    });
  };

  // 滚动到指定导师卡片 - 优化以支持懒加载
  const scrollToMentor = (mentorId: string) => {
    console.log('🎯 尝试滚动到导师:', mentorId);
    
    // 判断导师属于哪个分类，并自动展开对应分类
    const isPacer = pacerMentors.some(m => m.id === mentorId);
    const isExpert = expertMentors.some(m => m.id === mentorId);
    const isOperations = operationsMentors.some(m => m.id === mentorId);
    
    console.log('📂 分类判断:', { isPacer, isExpert, isOperations });
    
    let needsExpand = false;
    if (isPacer && isProjectCollapsed) {
      console.log('🔓 展开项目导师');
      setIsProjectCollapsed(false);
      needsExpand = true;
    } else if (isExpert && isExpertCollapsed) {
      console.log('🔓 展开专家导师');
      setIsExpertCollapsed(false);
      needsExpand = true;
    } else if (isOperations && isOperationsCollapsed) {
      console.log('🔓 展开运营管理');
      setIsOperationsCollapsed(false);
      needsExpand = true;
    }
    
    // 先强制加载该卡片
    setForceLoadedCards(prev => new Set(prev).add(mentorId));
    console.log('⚡ 强制加载卡片:', mentorId);
    
    // 递归查找元素，最多尝试20次
    let attempts = 0;
    const maxAttempts = 20;
    
    const tryScroll = () => {
      const element = document.getElementById(mentorId);
      console.log(`🔍 尝试 ${attempts + 1}/${maxAttempts}:`, element ? '✅ 找到元素' : '❌ 未找到');
      
      if (element) {
        console.log('📜 开始滚动...');
        // 使用 scrollIntoView 替代手动计算
        element.scrollIntoView({ 
          behavior: 'smooth', 
          block: 'start',
          inline: 'nearest'
        });
        
        // 滚动后微调位置，为固定头部留出空间
        setTimeout(() => {
          window.scrollBy({ top: -100, behavior: 'smooth' });
        }, 300);
      } else if (attempts < maxAttempts) {
        attempts++;
        setTimeout(tryScroll, 100); // 减少间隔到100ms
      } else {
        console.error('❌ 滚动失败：未找到元素', mentorId);
      }
    };
    
    // 根据是否需要展开来决定延迟时间
    const initialDelay = needsExpand ? 200 : 50; // 需要展开时200ms，否则50ms
    setTimeout(tryScroll, initialDelay);
  };

  const MentorCard = ({
    mentor,
    isExpert = false,
    isOperations = false,
  }: {
    mentor: MentorData | ExpertData;
    isExpert?: boolean;
    isOperations?: boolean;
  }) => {
    const isFlipped = flippedCardId === mentor.id;
    const isProjectMentor = !isExpert && !isOperations; // 判断是否为项目导师
    
    return (
      <>
        {/* 桌面端 - 3D翻转卡片 */}
        <div
          className="hidden lg:block w-full"
        >
          <div
            className="relative w-full cursor-pointer"
            style={{ 
              perspective: "1500px",
              minHeight: isFlipped ? '600px' : '340px',
              transition: 'min-height 0.3s ease-out'
            }}
            onClick={() => toggleCardFlip(mentor.id)}
          >
            <div
              className="relative w-full h-auto transition-transform duration-500 ease-out"
              style={{
                transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
                transformStyle: "preserve-3d",
                willChange: isFlipped ? 'transform' : 'auto',
              }}
            >
              {/* 正面 - 简介卡片 */}
              <div
                className="w-full rounded-2xl border-2 border-[#FF6900]/30 bg-white shadow-lg"
                style={{
                  backfaceVisibility: "hidden",
                  WebkitBackfaceVisibility: "hidden",
                }}
              >
                {/* 顶部装饰条 */}
                <div className={`h-1.5 rounded-t-xl ${isExpert ? 'bg-[#FF6900]' : 'bg-[#FF6900]/70'}`}></div>

                <div className="p-5 flex gap-5">
                  {/* 左侧：头像 */}
                  <div className="flex-shrink-0">
                    {pacerImages[mentor.id] ? (
                      <img 
                        src={pacerImages[mentor.id]} 
                        alt={isEnglish ? mentor.nameEn : mentor.name}
                        className="w-40 h-40 rounded-full object-cover ring-4 ring-[#FF6900]/20"
                        loading="lazy"
                      />
                    ) : (
                      <div className="w-40 h-40 rounded-full bg-[#FF6900] flex items-center justify-center text-5xl text-white ring-4 ring-[#FF6900]/20">
                        {mentor.nameEn.charAt(0)}
                      </div>
                    )}
                  </div>

                  {/* 右侧：信息内容 */}
                  <div className="flex-1 flex flex-col min-w-0">
                    {/* 名字 */}
                    <h3 className="text-3xl text-[#101828] mb-2">
                      {isEnglish ? mentor.nameEn : mentor.name}
                    </h3>

                    {/* 职位 */}
                    <div className="flex items-center gap-2 text-[#FF6900] mb-2">
                      <Briefcase className="w-4 h-4 flex-shrink-0" />
                      <p className="text-lg">
                        {isEnglish ? mentor.titleEn : mentor.title}
                      </p>
                    </div>

                    {/* 标签 - 单独一行 */}
                    <div className="flex items-center gap-3 mb-3">
                      {isExpert && (
                        <div className="inline-flex items-center gap-1 px-3 py-1 bg-[#FF6900]/20 border border-[#FF6900]/40 rounded-full text-[#FF6900] text-sm">
                          <GraduationCap className="w-4 h-4" />
                          <span>{isEnglish ? 'Expert Mentor' : '专家导师'}</span>
                        </div>
                      )}
                      {isOperations && (
                        <div className="inline-flex items-center gap-1 px-3 py-1 bg-[#FF6900]/20 border border-[#FF6900]/40 rounded-full text-[#FF6900] text-sm">
                          <Users className="w-4 h-4" />
                          <span>{isEnglish ? 'Operations' : '运营管理'}</span>
                        </div>
                      )}
                      {isProjectMentor && (
                        <div className="inline-flex items-center gap-1 px-3 py-1 bg-[#FF6900]/20 border border-[#FF6900]/40 rounded-full text-[#FF6900] text-sm">
                          <Briefcase className="w-4 h-4" />
                          <span>{isEnglish ? 'Project Mentor' : '项目导师'}</span>
                        </div>
                      )}
                    </div>

                    {/* 分割线 */}
                    <div className="h-px bg-[#FF6900]/30 mb-3"></div>

                    {/* 简介内容 - 完整显示，无截断 */}
                    <div className="mb-3">
                      <p className="text-[#4a5565] text-base leading-relaxed">
                        {isEnglish ? mentor.summaryEn : mentor.summary}
                      </p>
                    </div>

                    {/* 底部提示 */}
                    <div className="pt-3 border-t border-[#FF6900]/20">
                      <p className="text-center text-[#FF6900]/60 text-xs">
                        {isEnglish ? '👆 Click to view details' : '👆 点击查看详细信息'}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* 背面 - 详细信息 */}
              <div
                className="absolute top-0 left-0 w-full rounded-2xl border-2 border-[#FF6900]/50"
                style={{
                  transform: "rotateY(180deg)",
                  backfaceVisibility: "hidden",
                  WebkitBackfaceVisibility: "hidden",
                  background: 'linear-gradient(135deg, #FF8533 0%, #FFA366 50%, #FF8533 100%)'
                }}
              >
                {/* 顶部装饰条 */}
                <div className="h-2 bg-white/20 rounded-t-xl"></div>

                <div className="p-6 max-h-[600px] overflow-y-auto scrollbar-gold-bg">
                  {isFlipped && (
                    <>
                      <div 
                        className="mentor-details text-white text-base leading-relaxed"
                        dangerouslySetInnerHTML={{ 
                          __html: isEnglish ? mentor.detailsEn : mentor.details 
                        }}
                      />

                      {/* 引用语录 */}
                      {mentor.quote && (
                        <div className="mt-6 bg-white/10 border-l-4 border-white/30 p-4 rounded-lg">
                          <p className="text-white/90 italic text-base">
                            "{isEnglish ? mentor.quoteEn : mentor.quote}"
                          </p>
                        </div>
                      )}

                      {/* 底部返回提示 */}
                      <div className="pt-4 mt-4 border-t border-white/20">
                        <p className="text-center text-white/70 text-sm">
                          {isEnglish ? '👆 Click again to return' : '👆 再次点击返回简介'}
                        </p>
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 移动端 - 3D翻转卡片 */}
        <div
          className="lg:hidden w-full"
          id={`${mentor.id}-mobile`}
        >
          <div
            className="relative w-full cursor-pointer"
            style={{ 
              perspective: "1500px",
              minHeight: isFlipped ? '600px' : '300px', // 动态最小高度
              transition: 'min-height 0.3s ease-out'
            }}
            onClick={() => toggleCardFlip(mentor.id)}
          >
            <div
              className="relative w-full h-auto transition-transform duration-500 ease-out"
              style={{
                transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
                transformStyle: "preserve-3d",
                willChange: isFlipped ? 'transform' : 'auto',
              }}
            >
              {/* 正面 - 简介卡片 */}
              <div
                className="w-full rounded-2xl border-2 border-[#FF6900]/30 bg-white shadow-lg"
                style={{
                  backfaceVisibility: "hidden",
                  WebkitBackfaceVisibility: "hidden",
                }}
              >
                {/* 顶部装饰条 */}
                <div className={`h-1.5 rounded-t-xl ${isExpert ? 'bg-[#FF6900]' : 'bg-[#FF6900]/70'}`}></div>

                <div className="p-6">
                  {/* 上部分：头像区 - 居中显示 */}
                  <div className="flex flex-col items-center mb-6">
                    {/* 头像 */}
                    {pacerImages[mentor.id] ? (
                      <img 
                        src={pacerImages[mentor.id]} 
                        alt={isEnglish ? mentor.nameEn : mentor.name}
                        className="w-32 h-32 rounded-full object-cover ring-4 ring-[#FF6900]/20 mb-4"
                        loading="lazy"
                      />
                    ) : (
                      <div className="w-32 h-32 rounded-full bg-[#FF6900] flex items-center justify-center text-4xl text-white ring-4 ring-[#FF6900]/20 mb-4">
                        {mentor.nameEn.charAt(0)}
                      </div>
                    )}

                    {/* 名字 */}
                    <h3 className="text-3xl text-[#101828] text-center mb-2">
                      {isEnglish ? mentor.nameEn : mentor.name}
                    </h3>

                    {/* 职位 - 移动端无图标 */}
                    <div className="text-[#FF6900] mb-2">
                      <p className="text-lg text-center">
                        {isEnglish ? mentor.titleEn : mentor.title}
                      </p>
                    </div>

                    {/* 标签 - 单独一行 */}
                    <div className="flex items-center gap-3 mb-3">
                      {isExpert && (
                        <div className="inline-flex items-center gap-1 px-3 py-1 bg-[#FF6900]/20 border border-[#FF6900]/40 rounded-full text-[#FF6900] text-base">
                          <GraduationCap className="w-4 h-4" />
                          <span>{isEnglish ? 'Expert Mentor' : '专家导师'}</span>
                        </div>
                      )}
                      {isOperations && (
                        <div className="inline-flex items-center gap-1 px-3 py-1 bg-[#FF6900]/20 border border-[#FF6900]/40 rounded-full text-[#FF6900] text-base">
                          <Users className="w-4 h-4" />
                          <span>{isEnglish ? 'Operations' : '运营管理'}</span>
                        </div>
                      )}
                      {isProjectMentor && (
                        <div className="inline-flex items-center gap-1 px-3 py-1 bg-[#FF6900]/20 border border-[#FF6900]/40 rounded-full text-[#FF6900] text-base">
                          <Briefcase className="w-4 h-4" />
                          <span>{isEnglish ? 'Project Mentor' : '项目导师'}</span>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* 分割线 */}
                  <div className="h-px bg-[#FF6900]/30 mb-4"></div>

                  {/* 下部分：简介内容 */}
                  <div>
                    <p className="text-[#4a5565] text-base leading-relaxed">
                      {isEnglish ? mentor.summaryEn : mentor.summary}
                    </p>
                  </div>

                  {/* 底部提示 */}
                  <div className="mt-4 pt-4 border-t border-[#FF6900]/20">
                    <p className="text-center text-[#FF6900]/60 text-sm">
                      {isEnglish ? '👆 Click to view details' : '👆 点击查看详细信息'}
                    </p>
                  </div>
                </div>
              </div>

              {/* 背面 - 详细信息 */}
              <div
                className="absolute top-0 left-0 w-full rounded-2xl border-2 border-[#FF6900]/50 bg-[#FF6900]"
                style={{
                  transform: "rotateY(180deg)",
                  backfaceVisibility: "hidden",
                  WebkitBackfaceVisibility: "hidden",
                }}
              >
                {/* 顶部装饰条 */}
                <div className="h-2 bg-black/20 rounded-t-xl"></div>

                <div className="p-6 max-h-[600px] overflow-y-auto scrollbar-gold-bg">
                  {isFlipped && (
                    <>
                      <div 
                        className="mentor-details text-black/90 text-base leading-relaxed"
                        dangerouslySetInnerHTML={{ 
                          __html: isEnglish ? mentor.detailsEn : mentor.details 
                        }}
                      />

                      {/* 引用语录 */}
                      {mentor.quote && (
                        <div className="mt-6 bg-black/10 border-l-4 border-black/30 p-4 rounded-lg">
                          <p className="text-black/80 italic text-base">
                            "{isEnglish ? mentor.quoteEn : mentor.quote}"
                          </p>
                        </div>
                      )}

                      {/* 底部返回提示 */}
                      <div className="pt-4 mt-4 border-t border-black/20">
                        <p className="text-center text-black/60 text-sm">
                          {isEnglish ? '👆 Click again to return' : '👆 再次点击返回简介'}
                        </p>
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  };

  return (
    <div className="min-h-screen bg-white text-[#101828]">
      {/* 顶部固定栏 - 返回按钮和语言切换 */}
      <div className="fixed top-0 left-0 right-0 z-[100] bg-white/95 backdrop-blur-md border-b border-[#FF6900]/20">
        <div className="flex items-center justify-between px-5 py-4">
          {/* 返回按钮 */}
          <button
            onClick={() => navigate("/")}
            className="flex items-center gap-2 px-4 py-2 bg-[#FF6900]/10 hover:bg-[#FF6900]/20 rounded-lg transition-colors border border-[#FF6900]/30 text-[#101828]"
          >
            <ArrowLeft className="w-5 h-5 text-[#FF6900]" />
            <span>{isEnglish ? "Back to Home" : "返回首页"}</span>
          </button>

          {/* 中英文切换 - 参照首页样式 */}
          <button
            onClick={() => setLanguage(language === 'en' ? 'zh' : 'en')}
            className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white border border-[#FF6900]/20 hover:border-[#FF6900]/50 hover:bg-[#FFF5ED] transition-all duration-300"
            title={language === 'zh' ? '切换到英文' : 'Switch to Chinese'}
          >
            <Globe className="w-4 h-4 text-[#FF6900]" />
            <span className="text-sm font-medium text-[#FF6900]">{language === 'zh' ? 'EN' : 'ZH'}</span>
          </button>
        </div>
      </div>

      {/* 侧边导航 */}
      <nav className="fixed top-[73px] left-0 w-[200px] h-[calc(100vh-73px)] bg-white z-40 px-5 py-6 overflow-y-auto border-r border-[#FF6900]/20 hidden lg:block scrollbar-thin scrollbar-thumb-[#FF6900]/30 scrollbar-track-gray-100">
        {/* 项目导师部分 */}
        <div className="mb-8">
          <button
            onClick={() => setIsProjectCollapsed(!isProjectCollapsed)}
            className="w-full text-xs uppercase tracking-wider mb-3 text-[#FF6900] border-b-2 border-[#FF6900]/30 pb-2 flex items-center justify-between hover:text-[#FF6900]/80 transition-colors text-[14px]"
          >
            <div className="flex items-center gap-2">
              <Briefcase className="w-3 h-3" />
              {isEnglish ? "Project Mentors" : "项目导师"}
            </div>
            {isProjectCollapsed ? <ChevronDown className="w-4 h-4" /> : <ChevronUp className="w-4 h-4" />}
          </button>
          {!isProjectCollapsed && (
            <ul className="space-y-2">
              {pacerMentors.map((mentor) => (
                <li key={mentor.id}>
                  <button
                    onClick={() => scrollToMentor(mentor.id)}
                    className="block w-full text-left text-sm text-[#4a5565] hover:text-[#FF6900] hover:bg-[#FF6900]/10 px-3 py-2 rounded transition-colors"
                  >
                    {isEnglish
                      ? mentor.nameEn
                      : mentor.name.split("\n")[0]}
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* 专家导师部分 */}
        <div className="mb-8">
          <button
            onClick={() => setIsExpertCollapsed(!isExpertCollapsed)}
            className="w-full text-xs uppercase tracking-wider mb-3 text-[#FF6900] border-b-2 border-[#FF6900]/30 pb-2 flex items-center justify-between hover:text-[#FF6900]/80 transition-colors text-[14px]"
          >
            <div className="flex items-center gap-2">
              <Award className="w-3 h-3" />
              {isEnglish ? "Expert Mentors" : "专家导师"}
            </div>
            {isExpertCollapsed ? <ChevronDown className="w-4 h-4" /> : <ChevronUp className="w-4 h-4" />}
          </button>
          {!isExpertCollapsed && (
            <ul className="space-y-2">
              {expertMentors.map((expert) => (
                <li key={expert.id}>
                  <button
                    onClick={() => scrollToMentor(expert.id)}
                    className="block w-full text-left text-sm text-[#4a5565] hover:text-[#FF6900] hover:bg-[#FF6900]/10 px-3 py-2 rounded transition-colors"
                  >
                    {isEnglish
                      ? expert.nameEn
                      : expert.name.split("\n")[0]}
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* 运营管理部分 */}
        <div className="mb-8">
          <button
            onClick={() => setIsOperationsCollapsed(!isOperationsCollapsed)}
            className="w-full text-xs uppercase tracking-wider mb-3 text-[#FF6900] border-b-2 border-[#FF6900]/30 pb-2 flex items-center justify-between hover:text-[#FF6900]/80 transition-colors text-[14px]"
          >
            <div className="flex items-center gap-2">
              <Users className="w-3 h-3" />
              {isEnglish ? "Operations Team" : "运营管理"}
            </div>
            {isOperationsCollapsed ? <ChevronDown className="w-4 h-4" /> : <ChevronUp className="w-4 h-4" />}
          </button>
          {!isOperationsCollapsed && (
            <ul className="space-y-2">
              {operationsMentors.map((ops) => (
                <li key={ops.id}>
                  <button
                    onClick={() => scrollToMentor(ops.id)}
                    className="block w-full text-left text-sm text-[#4a5565] hover:text-[#FF6900] hover:bg-[#FF6900]/10 px-3 py-2 rounded transition-colors"
                  >
                    {isEnglish
                      ? ops.nameEn
                      : ops.name.split("\n")[0]}
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
      </nav>

      {/* 主要内容 */}
      <div className="lg:ml-[220px] px-5 py-10">
        {/* 标题 */}
        <div className="text-center mb-16 pt-16">
          <h1 className="text-5xl lg:text-7xl mb-6">
            <span className="text-[#FF6900]">
              {isEnglish ? "Training Mentor" : "培训导师"}
            </span>{" "}
            <span className="text-[#101828]">
              {isEnglish ? "Team" : "团队"}
            </span>
          </h1>
          <p className="text-xl text-[#4a5565] max-w-3xl mx-auto">
            {isEnglish
              ? "Gathering Top AI Experts, Leading the Path of Exploration and Practice"
              : "汇聚顶尖AI专家，引领探索实践之路"}
          </p>
          <div className="mt-4 h-1 w-32 bg-gradient-to-r from-transparent via-[#FF6900] to-transparent mx-auto"></div>
        </div>

        {/* 项目导师 */}
        <div className="mb-20">
          <div className="flex items-center justify-center gap-3 mb-12">
            <div className="h-px flex-1 max-w-xs bg-gradient-to-r from-transparent to-[#FF6900]/50"></div>
            <h2 className="text-4xl text-center text-[#FF6900] flex items-center gap-3">
              <Briefcase className="w-8 h-8" />
              {isEnglish ? "Project Mentors" : "项目导师"}
            </h2>
            <div className="h-px flex-1 max-w-xs bg-gradient-to-l from-transparent to-[#FF6900]/50"></div>
          </div>
          <div className="max-w-3xl mx-auto space-y-12">
            {pacerMentors.map((mentor) => (
              <LazyCard key={mentor.id} cardId={mentor.id} forceLoad={forceLoadedCards.has(mentor.id)}>
                <MentorCard key={mentor.id} mentor={mentor} />
              </LazyCard>
            ))}
          </div>
        </div>

        {/* 专家导师 */}
        <div className="mb-20">
          <div className="flex items-center justify-center gap-3 mb-12">
            <div className="h-px flex-1 max-w-xs bg-gradient-to-r from-transparent to-[#FF6900]/50"></div>
            <h2 className="text-4xl text-center text-[#FF6900] flex items-center gap-3">
              <Award className="w-8 h-8" />
              {isEnglish ? "Expert Mentors" : "专家导师"}
            </h2>
            <div className="h-px flex-1 max-w-xs bg-gradient-to-l from-transparent to-[#FF6900]/50"></div>
          </div>
          <div className="max-w-3xl mx-auto space-y-12">
            {expertMentors.map((expert) => (
              <LazyCard key={expert.id} cardId={expert.id} forceLoad={forceLoadedCards.has(expert.id)}>
                <MentorCard
                  key={expert.id}
                  mentor={expert}
                  isExpert={true}
                />
              </LazyCard>
            ))}
          </div>
        </div>

        {/* 运营导师 */}
        <div className="mb-20">
          <div className="flex items-center justify-center gap-3 mb-12">
            <div className="h-px flex-1 max-w-xs bg-gradient-to-r from-transparent to-[#FF6900]/50"></div>
            <h2 className="text-4xl text-center text-[#FF6900] flex items-center gap-3">
              <Users className="w-8 h-8" />
              {isEnglish ? "Operations Team" : "运营管理"}
            </h2>
            <div className="h-px flex-1 max-w-xs bg-gradient-to-l from-transparent to-[#FF6900]/50"></div>
          </div>
          <div className="max-w-3xl mx-auto space-y-12">
            {operationsMentors.map((opMentor) => (
              <LazyCard key={opMentor.id} cardId={opMentor.id} forceLoad={forceLoadedCards.has(opMentor.id)}>
                <MentorCard
                  key={opMentor.id}
                  mentor={opMentor}
                  isOperations={true}
                />
              </LazyCard>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        /* GPU加速优化 */
        .fixed {
          transform: translateZ(0);
          -webkit-transform: translateZ(0);
        }
        
        /* 滚动条样式 */
        .scrollbar-thin::-webkit-scrollbar {
          width: 6px;
        }
        .scrollbar-thumb-\\[\\#FF6900\\]\\/30::-webkit-scrollbar-thumb {
          background: rgba(255, 105, 0, 0.3);
          border-radius: 3px;
        }
        .scrollbar-track-gray-100::-webkit-scrollbar-track {
          background: rgb(243, 244, 246);
          border-radius: 3px;
        }

        /* line-clamp 实现 */
        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        
        .line-clamp-6 {
          display: -webkit-box;
          -webkit-line-clamp: 6;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        /* 背面 HTML 内容样式 */
        .mentor-details h4 {
          font-size: 1.125rem;
          font-weight: 700;
          color: rgba(255, 255, 255, 0.95);
          margin-top: 1.5rem;
          margin-bottom: 0.75rem;
          padding-bottom: 0.5rem;
          border-bottom: 2px solid rgba(255, 255, 255, 0.3);
        }
        
        .mentor-details h4:first-child {
          margin-top: 0;
        }
        
        .mentor-details p {
          margin-bottom: 1rem;
          line-height: 1.625;
          color: rgba(255, 255, 255, 0.9);
        }
        
        .mentor-details ul {
          list-style: none;
          padding-left: 0;
          margin: 0.75rem 0;
        }
        
        .mentor-details ul li {
          position: relative;
          padding-left: 1.5rem;
          margin-bottom: 0.5rem;
          line-height: 1.625;
          color: rgba(255, 255, 255, 0.9);
        }
        
        .mentor-details ul li::before {
          content: "▸";
          position: absolute;
          left: 0;
          color: rgba(255, 255, 255, 0.95);
          font-weight: bold;
        }
        
        .mentor-details strong {
          font-weight: 700;
          color: rgba(255, 255, 255, 0.95);
        }

        /* 滚动条样式 - 金色背景 */
        .scrollbar-gold-bg::-webkit-scrollbar {
          width: 6px;
        }
        .scrollbar-gold-bg::-webkit-scrollbar-thumb {
          background: rgba(255, 255, 255, 0.4);
          border-radius: 3px;
        }
        .scrollbar-gold-bg::-webkit-scrollbar-track {
          background: rgba(0, 0, 0, 0.1);
          border-radius: 3px;
        }
      `}</style>
    </div>
  );
}