
import React from 'react';

interface MobileHeaderProps {
  title: string;
}

const MobileHeader: React.FC<MobileHeaderProps> = ({ title }) => {
  return (
    <header className="h-16 shrink-0 flex items-center justify-between px-6 lg:hidden border-b border-[#e5e7eb] dark:border-[#283039] bg-white dark:bg-[#111418] sticky top-0 z-20">
      <div className="flex items-center gap-4">
        <button className="text-[#637588] dark:text-[#9dabb9]">
          <span className="material-symbols-outlined">menu</span>
        </button>
        <h2 className="text-lg font-bold tracking-tight text-[#111418] dark:text-white">{title}</h2>
      </div>
      <div className="flex items-center gap-4">
        <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-9" 
             style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDB2mI99bcrw8toOamHbSc64yIqd4U618TKCxnAZBvxVvWMHXEyEo5T4mdui92bY61u-Uooawd092ACy9qNfOUYBbh-wkfk7j3GJ9Bt7h2lavVxcTfN6QP7In-idVcKF7_HyKQsib2Xyu-r7hQ0N_dJWNvHHAng3yr3ZE_OwizCsAInZbEw1OHSnkOajsyDyfpcYx2GmAp7hVnq5jcL7B3hbNM1xhA0fEoeUjiUg1kZNH-YGIggiWGTVYK4Ll9zVtVBJbDA93RI3jET")'}}></div>
      </div>
    </header>
  );
};

export default MobileHeader;
