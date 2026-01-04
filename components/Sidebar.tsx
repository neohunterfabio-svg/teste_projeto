
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Sidebar: React.FC = () => {
  const location = useLocation();
  
  const isActive = (path: string) => location.pathname === path;
  const getLinkClass = (path: string) => 
    `flex items-center gap-3 px-3 py-3 rounded-lg transition-colors group ${
      isActive(path) 
        ? 'bg-primary/10 text-primary dark:text-primary font-bold' 
        : 'text-[#637588] dark:text-[#9dabb9] hover:bg-[#f3f4f6] dark:hover:bg-[#1a242f] font-medium'
    }`;
    
  const getIconClass = (path: string) => 
    `material-symbols-outlined text-[24px] transition-colors ${
      isActive(path) ? 'filled' : 'group-hover:text-[#111418] dark:group-hover:text-white'
    }`;

  return (
    <aside className="hidden lg:flex w-[280px] flex-col border-r border-[#e5e7eb] dark:border-[#283039] bg-white dark:bg-[#111418] shrink-0 h-full">
      <div className="flex h-full flex-col justify-between p-4">
        <div className="flex flex-col gap-6">
          <div className="flex items-center gap-3 px-2">
            <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10 ring-2 ring-primary/20" 
                 style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAxauHgPRJrQu1IHWuM4aVr9QJwwXWMbcGDTQ4TDx4Xbs_WXAk__doMjzRvJePui5sKCpLbjVoiVo4LEv8a3Ad34Q4IZR6PVi5ml-Jr5pq3Lnn_906bHVByUZTkza14zp6We2AVrSOBuKWaSptZF3PqHsLg4taIDdacq1EPVzBa1YM_5hPUQbtkMtaIXWL4aYN7Dew1pbmnUl0qbOAj7P2huOkwHlGE4ItytmLBNPgS0UyryHpMe2i7p-ko841LZzCiv_JXY_1anElk")'}}></div>
            <div className="flex flex-col">
              <h1 className="text-base font-bold leading-tight text-[#111418] dark:text-white uppercase tracking-tight">FinTrack</h1>
              <p className="text-[#637588] dark:text-[#9dabb9] text-xs font-medium">Gestão Financeira</p>
            </div>
          </div>
          <nav className="flex flex-col gap-2">
            <Link to="/dashboard" className={getLinkClass('/dashboard')}>
              <span className={getIconClass('/dashboard')}>dashboard</span>
              <span className="text-sm">Dashboard</span>
            </Link>
            <Link to="/add-debt" className={getLinkClass('/add-debt')}>
              <span className={getIconClass('/add-debt')}>add_circle</span>
              <span className="text-sm">Registrar Dívida</span>
            </Link>
            <Link to="/history" className={getLinkClass('/history')}>
              <span className={getIconClass('/history')}>history</span>
              <span className="text-sm">Histórico</span>
            </Link>
            <Link to="/reports" className={getLinkClass('/reports')}>
              <span className={getIconClass('/reports')}>bar_chart</span>
              <span className="text-sm">Relatórios</span>
            </Link>
            <div className="my-2 border-t border-[#e5e7eb] dark:border-[#283039]"></div>
            <Link to="/" className={getLinkClass('/')}>
              <span className={getIconClass('/')}>logout</span>
              <span className="text-sm">Sair / Cadastro</span>
            </Link>
          </nav>
        </div>
        <div className="flex items-center gap-3 px-3 py-3 rounded-lg hover:bg-[#f3f4f6] dark:hover:bg-[#1a242f] cursor-pointer transition-colors">
          <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-8" 
               style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBBLRmlSvr0xXZ8zGAsfI1wO93x_Rh22z3OKEerz36pECi8me3vvR_IZuGeQAbIka32lN0I4pwvBnVBfJiPygn4zpgOSIAI8CNKXJ2sGPgkwQ7Hk5CyJcKVa0LazkzC70lCDUh_XM2o4jDFCu17niFvC55Y-JUsxcUfunk9pqQa9bAn9KgzxDpb5taujzL6njG3nuUCBlS3HX-hbwhMH3U1sN3sQShLJSC9hFwmZ-Yh6fIG8aqksHcYQBhgY1DoKHvxRe2skCVfTB4g")'}}></div>
          <div className="flex flex-col overflow-hidden">
            <p className="text-sm font-bold truncate text-[#111418] dark:text-white">Carlos Silva</p>
            <p className="text-xs text-[#637588] dark:text-[#9dabb9] truncate">carlos.silva@email.com</p>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
