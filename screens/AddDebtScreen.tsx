import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import MobileHeader from '../components/MobileHeader';
import { Category } from '../types';

const AddDebtScreen: React.FC = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      navigate('/dashboard');
    }, 800);
  };

  return (
    <div className="flex h-screen w-full overflow-hidden bg-background-light dark:bg-background-dark">
      <Sidebar />
      <main className="flex-1 flex flex-col h-full overflow-hidden">
        <MobileHeader title="Registrar Dívida" />
        
        <header className="hidden lg:flex h-16 shrink-0 items-center px-8 border-b border-[#e5e7eb] dark:border-[#283039] bg-white dark:bg-[#111418]">
          <h2 className="text-xl font-bold tracking-tight text-[#111418] dark:text-white">Registrar Nova Dívida</h2>
        </header>

        <div className="flex-1 overflow-y-auto p-6 lg:p-10 flex justify-center">
          <div className="w-full max-w-2xl bg-white dark:bg-surface-dark rounded-2xl border border-[#e5e7eb] dark:border-[#283039] shadow-lg overflow-hidden h-fit">
            <div className="p-8 border-b border-[#e5e7eb] dark:border-[#283039] bg-[#f9fafb] dark:bg-[#1a242f]/50">
              <h3 className="text-lg font-bold text-[#111418] dark:text-white">Detalhes do Pagamento</h3>
              <p className="text-sm text-[#637588] dark:text-[#9dabb9]">Insira as informações da dívida para manter seu histórico atualizado.</p>
            </div>
            
            <form onSubmit={handleSubmit} className="p-8 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-bold text-[#111418] dark:text-white">Descrição</label>
                  <input required className="form-input rounded-lg border-[#d1d5db] dark:border-[#3b4754] bg-transparent text-[#111418] dark:text-white focus:border-primary focus:ring-primary h-12" placeholder="Ex: Aluguel Mensal" />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-bold text-[#111418] dark:text-white">Credor / Empresa</label>
                  <input required className="form-input rounded-lg border-[#d1d5db] dark:border-[#3b4754] bg-transparent text-[#111418] dark:text-white focus:border-primary focus:ring-primary h-12" placeholder="Ex: Imobiliária Silva" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-bold text-[#111418] dark:text-white">Valor (R$)</label>
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-[#637588] dark:text-[#9dabb9] font-medium">R$</span>
                    <input required type="number" step="0.01" className="form-input w-full pl-12 rounded-lg border-[#d1d5db] dark:border-[#3b4754] bg-transparent text-[#111418] dark:text-white focus:border-primary focus:ring-primary h-12" placeholder="0,00" />
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-bold text-[#111418] dark:text-white">Data de Vencimento</label>
                  <input required type="date" className="form-input rounded-lg border-[#d1d5db] dark:border-[#3b4754] bg-transparent text-[#111418] dark:text-white focus:border-primary focus:ring-primary h-12" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-bold text-[#111418] dark:text-white">Categoria</label>
                  <select required className="form-select rounded-lg border-[#d1d5db] dark:border-[#3b4754] bg-transparent text-[#111418] dark:text-white focus:border-primary focus:ring-primary h-12">
                    {Object.entries(Category).map(([key, value]) => (
                      <option key={key} value={value}>{value}</option>
                    ))}
                  </select>
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-bold text-[#111418] dark:text-white">Status</label>
                  <div className="flex items-center gap-4 h-12">
                    <label className="flex items-center gap-2 cursor-pointer group">
                      <input type="radio" name="status" defaultChecked className="text-primary focus:ring-primary bg-transparent border-[#d1d5db] dark:border-[#3b4754]" />
                      <span className="text-sm text-[#637588] dark:text-[#9dabb9] group-hover:text-primary transition-colors">Pendente</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer group">
                      <input type="radio" name="status" className="text-primary focus:ring-primary bg-transparent border-[#d1d5db] dark:border-[#3b4754]" />
                      <span className="text-sm text-[#637588] dark:text-[#9dabb9] group-hover:text-primary transition-colors">Pago</span>
                    </label>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-sm font-bold text-[#111418] dark:text-white">Observações (Opcional)</label>
                <textarea className="form-textarea rounded-lg border-[#d1d5db] dark:border-[#3b4754] bg-transparent text-[#111418] dark:text-white focus:border-primary focus:ring-primary min-h-[100px]" placeholder="Algum detalhe adicional sobre este pagamento..."></textarea>
              </div>

              <div className="flex items-center justify-end gap-4 pt-6">
                <button 
                  type="button" 
                  onClick={() => navigate('/dashboard')}
                  className="px-6 h-12 rounded-lg text-sm font-bold text-[#637588] dark:text-[#9dabb9] hover:bg-[#f3f4f6] dark:hover:bg-[#283039] transition-colors"
                >
                  Cancelar
                </button>
                <button 
                  type="submit" 
                  disabled={loading}
                  className="px-8 h-12 rounded-lg bg-primary text-white text-sm font-bold hover:bg-primary/90 transition-all shadow-md disabled:opacity-70 flex items-center gap-2"
                >
                  {loading ? (
                    <>
                      <span className="material-symbols-outlined animate-spin text-sm">progress_activity</span>
                      Salvando...
                    </>
                  ) : 'Salvar Dívida'}
                </button>
              </div>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AddDebtScreen;