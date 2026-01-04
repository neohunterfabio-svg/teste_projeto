import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import MobileHeader from '../components/MobileHeader';

const HistoryScreen: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const historyData = [
    { id: '1', description: 'Aluguel Outubro', creditor: 'Imobiliária Silva', amount: 'R$ 1.200,00', date: '05/10/2024', category: 'Habitação', status: 'Pago' },
    { id: '2', description: 'Parcela Carro', creditor: 'Banco Itaú', amount: 'R$ 850,00', date: '10/10/2024', category: 'Transporte', status: 'Pago' },
    { id: '3', description: 'Supermercado', creditor: 'Carrefour', amount: 'R$ 450,20', date: '12/10/2024', category: 'Alimentação', status: 'Pago' },
    { id: '4', description: 'Internet Fibra', creditor: 'Vivo S.A.', amount: 'R$ 120,00', date: '15/10/2024', category: 'Outros', status: 'Pendente' },
    { id: '5', description: 'Curso Inglês', creditor: 'Open English', amount: 'R$ 290,00', date: '18/10/2024', category: 'Lazer', status: 'Pendente' },
    { id: '6', description: 'Plano de Saúde', creditor: 'Unimed', amount: 'R$ 620,00', date: '20/10/2024', category: 'Saúde', status: 'Pendente' },
  ];

  const filteredData = historyData.filter(item => 
    item.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.creditor.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="flex h-screen w-full overflow-hidden bg-background-light dark:bg-background-dark">
      <Sidebar />
      <main className="flex-1 flex flex-col h-full overflow-hidden">
        <MobileHeader title="Histórico" />
        
        <header className="hidden lg:flex h-16 shrink-0 items-center justify-between px-8 border-b border-[#e5e7eb] dark:border-[#283039] bg-white dark:bg-[#111418]">
          <h2 className="text-xl font-bold tracking-tight text-[#111418] dark:text-white">Histórico de Pagamentos</h2>
          <div className="flex items-center gap-4">
            <button className="flex items-center gap-2 px-4 h-10 rounded-lg bg-primary text-white text-sm font-bold hover:bg-primary/90 transition-all shadow-sm">
              <span className="material-symbols-outlined text-[20px]">file_download</span>
              Exportar
            </button>
          </div>
        </header>

        <div className="flex-1 overflow-y-auto p-6 lg:p-8">
          <div className="bg-white dark:bg-surface-dark rounded-xl border border-[#e5e7eb] dark:border-[#283039] shadow-sm overflow-hidden">
            <div className="p-4 border-b border-[#e5e7eb] dark:border-[#283039] flex flex-col sm:flex-row gap-4 justify-between items-center bg-[#f9fafb] dark:bg-[#1a242f]/50">
              <div className="relative w-full sm:w-96">
                <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-[#637588] dark:text-[#9dabb9] text-[20px]">search</span>
                <input 
                  type="text"
                  placeholder="Buscar por descrição ou credor..."
                  className="w-full pl-10 pr-4 h-10 rounded-lg border-[#d1d5db] dark:border-[#3b4754] bg-white dark:bg-[#111418] text-sm focus:ring-primary focus:border-primary transition-all text-[#111418] dark:text-white"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <div className="flex items-center gap-2">
                <select className="h-10 rounded-lg border-[#d1d5db] dark:border-[#3b4754] bg-white dark:bg-[#111418] text-sm text-[#637588] dark:text-[#9dabb9] px-4 focus:ring-primary">
                  <option>Todos Status</option>
                  <option>Pago</option>
                  <option>Pendente</option>
                </select>
                <select className="h-10 rounded-lg border-[#d1d5db] dark:border-[#3b4754] bg-white dark:bg-[#111418] text-sm text-[#637588] dark:text-[#9dabb9] px-4 focus:ring-primary">
                  <option>Todas Categorias</option>
                  {['Habitação', 'Transporte', 'Alimentação', 'Saúde', 'Lazer'].map(c => (
                    <option key={c}>{c}</option>
                  ))}
                </select>
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead className="bg-[#f9fafb] dark:bg-[#1a242f]/30 border-b border-[#e5e7eb] dark:border-[#283039]">
                  <tr>
                    <th className="px-6 py-4 text-xs font-bold text-[#637588] dark:text-[#9dabb9] uppercase tracking-wider">Descrição</th>
                    <th className="px-6 py-4 text-xs font-bold text-[#637588] dark:text-[#9dabb9] uppercase tracking-wider">Credor</th>
                    <th className="px-6 py-4 text-xs font-bold text-[#637588] dark:text-[#9dabb9] uppercase tracking-wider">Valor</th>
                    <th className="px-6 py-4 text-xs font-bold text-[#637588] dark:text-[#9dabb9] uppercase tracking-wider">Vencimento</th>
                    <th className="px-6 py-4 text-xs font-bold text-[#637588] dark:text-[#9dabb9] uppercase tracking-wider">Categoria</th>
                    <th className="px-6 py-4 text-xs font-bold text-[#637588] dark:text-[#9dabb9] uppercase tracking-wider">Status</th>
                    <th className="px-6 py-4 text-xs font-bold text-[#637588] dark:text-[#9dabb9] uppercase tracking-wider"></th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#e5e7eb] dark:divide-[#283039]">
                  {filteredData.map((item) => (
                    <tr key={item.id} className="hover:bg-[#f9fafb] dark:hover:bg-[#1a242f]/20 transition-colors">
                      <td className="px-6 py-4 text-sm font-bold text-[#111418] dark:text-white">{item.description}</td>
                      <td className="px-6 py-4 text-sm text-[#637588] dark:text-[#9dabb9]">{item.creditor}</td>
                      <td className="px-6 py-4 text-sm font-bold text-[#111418] dark:text-white">{item.amount}</td>
                      <td className="px-6 py-4 text-sm text-[#637588] dark:text-[#9dabb9]">{item.date}</td>
                      <td className="px-6 py-4">
                        <span className="px-2 py-1 rounded-full bg-[#f3f4f6] dark:bg-[#283039] text-[11px] font-bold text-[#637588] dark:text-[#9dabb9]">
                          {item.category}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <span className={`px-2 py-1 rounded-full text-[11px] font-bold ${
                          item.status === 'Pago' 
                            ? 'bg-green-500/10 text-green-500' 
                            : 'bg-orange-500/10 text-orange-500'
                        }`}>
                          {item.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-right">
                        <button className="text-[#637588] dark:text-[#9dabb9] hover:text-primary transition-colors">
                          <span className="material-symbols-outlined text-[20px]">more_vert</span>
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              {filteredData.length === 0 && (
                <div className="p-12 text-center">
                  <span className="material-symbols-outlined text-6xl text-[#d1d5db] dark:text-[#3b4754] mb-4">search_off</span>
                  <p className="text-[#637588] dark:text-[#9dabb9]">Nenhum registro encontrado para sua busca.</p>
                </div>
              )}
            </div>
            <div className="p-4 border-t border-[#e5e7eb] dark:border-[#283039] flex justify-between items-center bg-[#f9fafb] dark:bg-[#1a242f]/50">
              <p className="text-xs text-[#637588] dark:text-[#9dabb9]">Mostrando {filteredData.length} de {historyData.length} registros</p>
              <div className="flex gap-2">
                <button className="p-2 rounded-lg border border-[#d1d5db] dark:border-[#3b4754] hover:bg-white dark:hover:bg-[#111418] transition-colors disabled:opacity-50" disabled>
                  <span className="material-symbols-outlined text-[20px]">chevron_left</span>
                </button>
                <button className="p-2 rounded-lg border border-[#d1d5db] dark:border-[#3b4754] hover:bg-white dark:hover:bg-[#111418] transition-colors">
                  <span className="material-symbols-outlined text-[20px]">chevron_right</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default HistoryScreen;