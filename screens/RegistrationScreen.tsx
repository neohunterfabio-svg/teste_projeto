
import React from 'react';
import { useNavigate } from 'react-router-dom';

const RegistrationScreen: React.FC = () => {
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate('/dashboard');
  };

  return (
    <div className="min-h-screen flex flex-col bg-background-light dark:bg-background-dark">
      <header className="flex items-center justify-between border-b border-[#e5e7eb] dark:border-[#283039] px-6 lg:px-10 py-3 bg-white dark:bg-background-dark sticky top-0 z-50">
        <div className="flex items-center gap-4">
          <div className="size-8 text-primary">
            <svg className="w-full h-full" fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
              <path d="M39.5563 34.1455V13.8546C39.5563 15.708 36.8773 17.3437 32.7927 18.3189C30.2914 18.916 27.263 19.2655 24 19.2655C20.737 19.2655 17.7086 18.916 15.2073 18.3189C11.1227 17.3437 8.44365 15.708 8.44365 13.8546V34.1455C8.44365 35.9988 11.1227 37.6346 15.2073 38.6098C17.7086 39.2069 20.737 39.5564 24 39.5564C27.263 39.5564 30.2914 39.2069 32.7927 38.6098C36.8773 37.6346 39.5563 35.9988 39.5563 34.1455Z" fill="currentColor"></path>
              <path clipRule="evenodd" d="M10.4485 13.8519C10.4749 13.9271 10.6203 14.246 11.379 14.7361C12.298 15.3298 13.7492 15.9145 15.6717 16.3735C18.0007 16.9296 20.8712 17.2655 24 17.2655C27.1288 17.2655 29.9993 16.9296 32.3283 16.3735C34.2508 15.9145 35.702 15.3298 36.621 14.7361C37.3796 14.246 37.5251 13.9271 37.5515 13.8519C37.5287 13.7876 37.4333 13.5973 37.0635 13.2931C36.5266 12.8516 35.6288 12.3647 34.343 11.9175C31.79 11.0295 28.1333 10.4437 24 10.4437C19.8667 10.4437 16.2099 11.0295 13.657 11.9175C12.3712 12.3647 11.4734 12.8516 10.9365 13.2931C10.5667 13.5973 10.4713 13.7876 10.4485 13.8519ZM37.5563 18.7877C36.3176 19.3925 34.8502 19.8839 33.2571 20.2642C30.5836 20.9025 27.3973 21.2655 24 21.2655C20.6027 21.2655 17.4164 20.9025 14.7429 20.2642C13.1498 19.8839 11.6824 19.3925 10.4436 18.7877V34.1275C10.4515 34.1545 10.5427 34.4867 11.379 35.027C12.298 35.6207 13.7492 36.2054 15.6717 36.6644C18.0007 37.2205 20.8712 37.5564 24 37.5564C27.1288 37.5564 29.9993 37.2205 32.3283 36.6644C34.2508 36.2054 35.702 35.6207 36.621 35.027C37.4573 34.4867 37.5485 34.1546 37.5563 34.1275V18.7877ZM41.5563 13.8546V34.1455C41.5563 36.1078 40.158 37.5042 38.7915 38.3869C37.3498 39.3182 35.4192 40.0389 33.2571 40.5551C30.5836 41.1934 27.3973 41.5564 24 41.5564C20.6027 41.5564 17.4164 41.1934 14.7429 40.5551C12.5808 40.0389 10.6502 39.3182 9.20848 38.3869C7.84205 37.5042 6.44365 36.1078 6.44365 34.1455L6.44365 13.8546C6.44365 12.2684 7.37223 11.0454 8.39581 10.2036C9.43325 9.3505 10.8137 8.67141 12.343 8.13948C15.4203 7.06909 19.5418 6.44366 24 6.44366C28.4582 6.44366 32.5797 7.06909 35.657 8.13948C37.1863 8.67141 38.5667 9.3505 39.6042 10.2036C40.6278 11.0454 41.5563 12.2684 41.5563 13.8546Z" fill="currentColor" fillRule="evenodd"></path>
            </svg>
          </div>
          <h2 className="text-[#111418] dark:text-white text-lg font-bold leading-tight tracking-[-0.015em]">FinTrack</h2>
        </div>
        <div className="flex items-center gap-4">
          <span className="material-symbols-outlined text-[#111418] dark:text-white cursor-pointer">help</span>
          <button onClick={() => navigate('/dashboard')} className="text-sm font-medium text-[#111418] dark:text-white hover:text-primary transition-colors">Login</button>
        </div>
      </header>
      <div className="layout-container flex h-full grow flex-col justify-center items-center py-10 px-4 sm:px-6 lg:px-8">
        <div className="layout-content-container flex flex-col w-full max-w-[480px]">
          <div className="flex flex-col gap-2 mb-8 text-center">
            <h1 className="text-[#111418] dark:text-white text-4xl font-black leading-tight tracking-[-0.033em]">Crie sua conta</h1>
            <p className="text-[#637588] dark:text-[#9dabb9] text-base font-normal leading-normal">Gerencie suas dívidas pagas com facilidade</p>
          </div>
          <div className="bg-white dark:bg-surface-dark border border-[#e5e7eb] dark:border-[#283039] rounded-xl shadow-sm p-6 sm:p-8 flex flex-col gap-5">
            <div className="flex flex-col gap-2">
              <label className="text-[#111418] dark:text-white text-base font-medium leading-normal">Nome Completo</label>
              <input className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-[#111418] dark:text-white focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-[#d1d5db] dark:border-[#3b4754] bg-transparent focus:border-primary h-14 placeholder:text-[#9ca3af] dark:placeholder:text-[#9dabb9] p-[15px] text-base font-normal leading-normal transition-all" placeholder="Digite seu nome" />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-[#111418] dark:text-white text-base font-medium leading-normal">Email</label>
              <div className="relative flex items-center">
                <input className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-[#111418] dark:text-white focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-[#d1d5db] dark:border-[#3b4754] bg-transparent focus:border-primary h-14 placeholder:text-[#9ca3af] dark:placeholder:text-[#9dabb9] p-[15px] text-base font-normal leading-normal transition-all" placeholder="ex: joao@email.com" type="email" />
                <span className="material-symbols-outlined absolute right-4 text-[#9ca3af] dark:text-[#9dabb9] pointer-events-none">mail</span>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-[#111418] dark:text-white text-base font-medium leading-normal">Senha</label>
              <div className="relative flex w-full flex-1 items-stretch rounded-lg">
                <input className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-[#111418] dark:text-white focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-[#d1d5db] dark:border-[#3b4754] bg-transparent focus:border-primary h-14 placeholder:text-[#9ca3af] dark:placeholder:text-[#9dabb9] p-[15px] pr-12 text-base font-normal leading-normal transition-all" placeholder="••••••••" type="password" />
                <div className="absolute right-0 top-0 h-full flex items-center justify-center pr-4 cursor-pointer text-[#9ca3af] dark:text-[#9dabb9] hover:text-primary transition-colors">
                  <span className="material-symbols-outlined">visibility</span>
                </div>
              </div>
            </div>
            <div className="flex items-start gap-3 mt-2">
              <div className="flex h-6 items-center">
                <input className="h-5 w-5 rounded border-[#d1d5db] dark:border-[#3b4754] bg-transparent text-primary focus:ring-primary/50 focus:ring-offset-0" id="terms" name="terms" type="checkbox" />
              </div>
              <div className="text-sm leading-6">
                <label className="font-medium text-[#111418] dark:text-white" htmlFor="terms">Eu concordo com os <a className="text-primary hover:underline" href="#">Termos de Uso</a> e <a className="text-primary hover:underline" href="#">Política de Privacidade</a>.</label>
              </div>
            </div>
            <button onClick={handleSubmit} className="mt-4 flex w-full cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-5 bg-primary text-white text-base font-bold leading-normal tracking-[0.015em] hover:bg-primary/90 transition-all focus:outline-none focus:ring-4 focus:ring-primary/30 shadow-md">
              <span className="truncate">Registrar Conta</span>
            </button>
            <div className="text-center mt-2">
              <p className="text-[#637588] dark:text-[#9dabb9] text-sm font-normal">
                Já possui uma conta? <button onClick={() => navigate('/dashboard')} className="text-primary font-bold hover:underline ml-1">Faça Login</button>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegistrationScreen;
