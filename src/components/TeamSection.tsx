import { Linkedin, ChevronLeft, ChevronRight, Lock } from 'lucide-react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from './ui/dialog';
import { ContactSection } from './ContactSection';
import { useLanguage } from '../contexts/LanguageContext';
import { Button } from './ui/button';
import { toast } from 'sonner@2.0.3';

export function TeamSection() {
  const { t } = useLanguage();
  const navigate = useNavigate();
  
  // 项目导师
  const projectMentors = [
    {
      id: 1,
      name: t.team.mentors.drH.name,
      title: t.team.mentors.drH.title,
      bio: t.team.mentors.drH.bio,
      expertise: t.team.mentors.drH.expertise,
      image: 'https://images.unsplash.com/photo-1761740533449-b8d4385e60b0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      category: 'project' as const
    },
    {
      id: 2,
      name: t.team.mentors.masterC.name,
      title: t.team.mentors.masterC.title,
      bio: t.team.mentors.masterC.bio,
      expertise: t.team.mentors.masterC.expertise,
      image: 'https://images.unsplash.com/photo-1664526937033-fe2c11f1be25?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      category: 'project' as const
    },
    {
      id: 3,
      name: t.team.mentors.engineerX.name,
      title: t.team.mentors.engineerX.title,
      bio: t.team.mentors.engineerX.bio,
      expertise: t.team.mentors.engineerX.expertise,
      image: 'https://images.unsplash.com/photo-1617791160536-598cf32026fb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      category: 'project' as const
    },
    {
      id: 4,
      name: t.team.mentors.masterK.name,
      title: t.team.mentors.masterK.title,
      bio: t.team.mentors.masterK.bio,
      expertise: t.team.mentors.masterK.expertise,
      image: 'https://images.unsplash.com/photo-1763568258482-c45010ae3528?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      category: 'project' as const
    },
    {
      id: 5,
      name: t.team.mentors.engineerS.name,
      title: t.team.mentors.engineerS.title,
      bio: t.team.mentors.engineerS.bio,
      expertise: t.team.mentors.engineerS.expertise,
      image: 'https://images.unsplash.com/photo-1740908900846-4bbd4f22c975?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      category: 'project' as const
    },
    {
      id: 6,
      name: t.team.mentors.engineerV.name,
      title: t.team.mentors.engineerV.title,
      bio: t.team.mentors.engineerV.bio,
      expertise: t.team.mentors.engineerV.expertise,
      image: 'https://images.unsplash.com/photo-1613677135043-a2512fbf49fa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      category: 'project' as const
    }
  ];

  // 专业讲师
  const professionalLecturers = [
    {
      id: 11,
      name: t.team.lecturers.teacherA.name,
      title: t.team.lecturers.teacherA.title,
      bio: t.team.lecturers.teacherA.bio,
      expertise: t.team.lecturers.teacherA.expertise,
      image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      category: 'lecturer' as const
    },
    {
      id: 12,
      name: t.team.lecturers.teacherM.name,
      title: t.team.lecturers.teacherM.title,
      bio: t.team.lecturers.teacherM.bio,
      expertise: t.team.lecturers.teacherM.expertise,
      image: 'https://images.unsplash.com/photo-1658604520420-7569f9685b69?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      category: 'lecturer' as const
    },
    {
      id: 13,
      name: t.team.lecturers.teacherR.name,
      title: t.team.lecturers.teacherR.title,
      bio: t.team.lecturers.teacherR.bio,
      expertise: t.team.lecturers.teacherR.expertise,
      image: 'https://images.unsplash.com/photo-1742238616989-655cbb4bdf6e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      category: 'lecturer' as const
    },
    {
      id: 14,
      name: t.team.lecturers.drY.name,
      title: t.team.lecturers.drY.title,
      bio: t.team.lecturers.drY.bio,
      expertise: t.team.lecturers.drY.expertise,
      image: 'https://images.unsplash.com/photo-1761311984305-8cdd650d5b26?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      category: 'lecturer' as const
    },
    {
      id: 15,
      name: t.team.lecturers.teacherN.name,
      title: t.team.lecturers.teacherN.title,
      bio: t.team.lecturers.teacherN.bio,
      expertise: t.team.lecturers.teacherN.expertise,
      image: 'https://images.unsplash.com/photo-1738003667850-a2fb736e31b3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      category: 'lecturer' as const
    },
    {
      id: 999,
      name: '',
      title: '',
      bio: '',
      expertise: [],
      image: 'https://images.unsplash.com/photo-1732532399621-afd080eb0b52?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      category: 'lecturer' as const,
      isInviteCard: true
    }
  ];

  const ITEMS_PER_PAGE = 6;
  const [activeCategory, setActiveCategory] = useState<'project' | 'lecturer'>('project');
  const [currentPage, setCurrentPage] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isInviteDialogOpen, setIsInviteDialogOpen] = useState(false);
  const [inviteCode, setInviteCode] = useState('');
  const [showApplyForm, setShowApplyForm] = useState(false);
  
  // 邀请码列表
  const VALID_INVITE_CODES = ['BEEVIP', 'BEE2A3W'];
  
  // 缓存键名
  const INVITE_VERIFIED_KEY = 'bee_invite_verified';
  
  // 检查是否已验证
  const isAlreadyVerified = () => {
    return sessionStorage.getItem(INVITE_VERIFIED_KEY) === 'true';
  };
  
  // 验证邀请码
  const handleVerifyCode = () => {
    if (VALID_INVITE_CODES.includes(inviteCode.toUpperCase().trim())) {
      // 保存验证状态到sessionStorage
      sessionStorage.setItem(INVITE_VERIFIED_KEY, 'true');
      
      toast.success(t.team.verifySuccess, {
        duration: 2000,
      });
      setTimeout(() => {
        navigate('/pacer');
      }, 500);
    } else {
      toast.error(t.team.verifyFailed, {
        duration: 3000,
      });
    }
  };

  // 获取当前分类的导师列表
  const currentTeam = activeCategory === 'project' ? projectMentors : professionalLecturers;
  const shouldUseCarousel = currentTeam.length > 6;

  // 计算总页数
  const totalPages = Math.ceil(currentTeam.length / ITEMS_PER_PAGE);

  // 获取当前页的导师
  const getCurrentPageTeam = () => {
    const startIndex = currentPage * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;
    return currentTeam.slice(startIndex, endIndex);
  };

  // 切换分类时重置页码
  const handleCategoryChange = (category: 'project' | 'lecturer') => {
    setActiveCategory(category);
    setCurrentPage(0);
    setDirection(0);
  };

  // 切换到上一页
  const handlePrev = () => {
    setDirection(-1);
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  };

  // 切换到下一页
  const handleNext = () => {
    setDirection(1);
    setCurrentPage((prev) => (prev + 1) % totalPages);
  };

  // 渲染单个导师卡片
  const renderTeamCard = (member: typeof projectMentors[0]) => {
    // 如果是邀请卡片，渲染特殊样式
    if ((member as any).isInviteCard) {
      return (
        <motion.div
          key={member.id}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
          onClick={() => {
            // 检查是否已验证
            if (isAlreadyVerified()) {
              // 已验证，直接跳转
              navigate('/pacer');
            } else {
              // 未验证，显示邀请码对话框
              setIsInviteDialogOpen(true);
            }
          }}
          className="group bg-zinc-900 rounded-lg overflow-hidden border-2 border-[#ffc75a]/30 hover:border-[#ffc75a] transition-all flex flex-col cursor-pointer relative"
        >
          {/* Image with overlay */}
          <div className="relative h-64 overflow-hidden">
            <img
              src={member.image}
              alt="邀请查看"
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 opacity-40"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/60 to-zinc-900/40" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <Lock className="w-16 h-16 text-[#ffc75a] mx-auto mb-4 group-hover:scale-110 transition-transform" />
                <p className="text-[#ffc75a] px-4">{t.team.needInviteCode}</p>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="p-6 flex flex-col flex-1 items-center justify-center text-center">
            <h3 className="text-white mb-3">{t.team.viewAllInstructors}</h3>
            <p className="text-gray-400 text-sm mb-6">
              {t.team.moreInstructors}
            </p>
            <button className="px-6 py-2 bg-[#ffc75a] text-black rounded-lg hover:bg-[#ffc75a]/90 transition-colors font-medium">
              {t.team.applyInviteCode}
            </button>
          </div>
        </motion.div>
      );
    }

    // 普通导师卡片
    return (
      <motion.div
        key={member.id}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
        className="group bg-zinc-900 rounded-lg overflow-hidden border border-[#ffc75a]/10 hover:border-[#ffc75a]/30 transition-all flex flex-col"
      >
        {/* Image */}
        <div className="relative h-64 overflow-hidden">
          <img
            src={member.image}
            alt={member.name}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/30 to-transparent" />
        </div>

        {/* Content */}
        <div className="p-6 flex flex-col flex-1">
          <div className="flex items-start justify-between mb-3">
            <div>
              <h3 className="text-white mb-1">{member.name}</h3>
              <p className="text-[#ffc75a] text-sm">{member.title}</p>
            </div>
            {/* <Linkedin className="w-5 h-5 text-gray-500 group-hover:text-[#ffc75a] transition-colors cursor-pointer" /> */}
          </div>

          <p className="text-gray-400 text-sm mb-4 flex-1">{member.bio}</p>

          {/* Expertise Tags */}
          <div className="flex flex-wrap gap-2">
            {member.expertise.map((skill) => (
              <span
                key={skill}
                className="px-2 py-1 bg-[#ffc75a]/10 border border-[#ffc75a]/20 rounded text-[#ffc75a] text-xs"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    );
  };

  // 定义滑动动画变体
  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      x: direction > 0 ? -1000 : 1000,
      opacity: 0
    })
  };

  return (
    <section id="team" className="py-8 lg:py-16 bg-zinc-950">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Category Tabs */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex bg-zinc-900 rounded-lg p-1 border border-[#ffc75a]/10">
            <button
              onClick={() => handleCategoryChange('project')}
              className={`px-8 py-3 rounded-md transition-all ${
                activeCategory === 'project'
                  ? 'bg-[#ffc75a] text-black'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              {t.team.projectMentors}
            </button>
            <button
              onClick={() => handleCategoryChange('lecturer')}
              className={`px-8 py-3 rounded-md transition-all ${
                activeCategory === 'lecturer'
                  ? 'bg-[#ffc75a] text-black'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              {t.team.professionalLecturers}
            </button>
          </div>
        </div>

        {/* Team Display */}
        {shouldUseCarousel ? (
          /* 轮播模式 - 当导师数量超过6个时 */
          <div className="relative">
            {/* 左箭头 */}
            <button
              onClick={handlePrev}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 lg:-translate-x-12 z-10 w-12 h-12 rounded-full bg-[#ffc75a] text-black hover:bg-[#ffc75a]/90 transition-all flex items-center justify-center shadow-lg"
              aria-label="上一页"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* 导师网格 - 带动画 */}
            <div className="relative min-h-[700px]">
              <AnimatePresence initial={false} custom={direction}>
                <motion.div
                  key={`${activeCategory}-${currentPage}`}
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{
                    x: { type: "spring", stiffness: 300, damping: 30 },
                    opacity: { duration: 0.3 }
                  }}
                  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 absolute w-full"
                >
                  {getCurrentPageTeam().map((member) => renderTeamCard(member))}
                </motion.div>
              </AnimatePresence>
              {/* 占位元素，保持容器高度 - 始终显示6个占位 */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 opacity-0 pointer-events-none">
                {Array.from({ length: ITEMS_PER_PAGE }).map((_, index) => (
                  <div key={index} className="bg-zinc-900 rounded-lg overflow-hidden border border-[#ffc75a]/10">
                    <div className="h-64"></div>
                    <div className="p-6">
                      <div className="mb-3">
                        <h3 className="text-white mb-1">占位标题</h3>
                        <p className="text-[#ffc75a] text-sm">占位职位</p>
                      </div>
                      <p className="text-gray-400 text-sm mb-4">占位简介</p>
                      <div className="flex flex-wrap gap-2">
                        <span className="px-2 py-1 bg-[#ffc75a]/10 border border-[#ffc75a]/20 rounded text-[#ffc75a] text-xs">
                          占位
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* 右箭头 */}
            <button
              onClick={handleNext}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 lg:translate-x-12 z-10 w-12 h-12 rounded-full bg-[#ffc75a] text-black hover:bg-[#ffc75a]/90 transition-all flex items-center justify-center shadow-lg"
              aria-label="下一页"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* 页面指示器 */}
            <div className="flex items-center justify-center gap-2 mt-16">
              {Array.from({ length: totalPages }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setDirection(index > currentPage ? 1 : -1);
                    setCurrentPage(index);
                  }}
                  className={`h-2 rounded-full transition-all ${
                    index === currentPage
                      ? 'bg-[#ffc75a] w-8'
                      : 'bg-gray-600 hover:bg-gray-500 w-2'
                  }`}
                  aria-label={`第 ${index + 1} 页`}
                />
              ))}
            </div>
          </div>
        ) : (
          /* 网格模式 - 当导师数量不超过6个时 */
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {currentTeam.map((member) => renderTeamCard(member))}
          </div>
        )}

        {/* 邀请码对话框 */}
        <Dialog open={isInviteDialogOpen} onOpenChange={(open) => {
          setIsInviteDialogOpen(open);
          if (!open) {
            setShowApplyForm(false);
            setInviteCode('');
          }
        }}>
          <DialogContent className={`${showApplyForm ? 'w-[85vw] !max-w-[85vw] h-[90vh] max-h-[90vh] overflow-y-auto' : 'w-[85vw] !max-w-[600px]'} bg-zinc-950 border-2 border-[#ffc75a]/30 p-8 lg:p-10 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]`}>
            <DialogHeader className="border-b border-[#ffc75a]/20 pb-6 mb-8">
              <DialogTitle className="text-2xl lg:text-3xl text-white">
                {showApplyForm ? t.team.applyInviteCode : t.team.enterInviteCode}
              </DialogTitle>
              <DialogDescription className="text-gray-400 mt-3 text-base">
                {showApplyForm ? t.team.inviteDialogDescription : t.team.enterInviteCodeDescription}
              </DialogDescription>
            </DialogHeader>
            
            {!showApplyForm ? (
              /* 邀请码输入表单 */
              <div className="space-y-6">
                <div>
                  <label htmlFor="inviteCode" className="block text-gray-400 mb-2">
                    {t.team.inviteCodeLabel}
                  </label>
                  <input
                    type="text"
                    id="inviteCode"
                    value={inviteCode}
                    onChange={(e) => setInviteCode(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter') {
                        handleVerifyCode();
                      }
                    }}
                    className="w-full px-4 py-3 bg-zinc-900 border border-[#ffc75a]/20 rounded-lg text-white placeholder-gray-500 focus:border-[#ffc75a] focus:outline-none transition-colors uppercase"
                    placeholder={t.team.inviteCodePlaceholder}
                  />
                </div>
                
                <div className="flex gap-4">
                  <Button
                    onClick={() => setShowApplyForm(true)}
                    variant="outline"
                    className="flex-1 border-[#ffc75a]/30 text-[#ffc75a] hover:text-[#ffc75a]/80 hover:bg-[#ffc75a]/10 hover:border-[#ffc75a]/50"
                  >
                    {t.team.applyForCodeButton}
                  </Button>
                  <Button
                    onClick={handleVerifyCode}
                    className="flex-1 bg-[#ffc75a] hover:bg-[#ffc75a]/90 text-black"
                    disabled={!inviteCode.trim()}
                  >
                    {t.team.verifyButton}
                  </Button>
                </div>
                
                <p className="text-center text-gray-500 text-sm">
                  {t.team.noCodeHint}
                </p>
              </div>
            ) : (
              /* 申请表单 */
              <div>
                <ContactSection 
                  isDialog={true}
                  source={t.team.title + t.team.titleHighlight + ' - ' + t.team.applyInviteCode}
                />
                <button
                  onClick={() => setShowApplyForm(false)}
                  className="mt-6 w-full text-gray-400 cursor-pointer hover:text-gray-300 transition-colors py-2"
                >
                  {t.team.backToEnterCode}
                </button>
              </div>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
}