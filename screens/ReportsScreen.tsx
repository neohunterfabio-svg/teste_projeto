import React from 'react';
import Sidebar from '../components/Sidebar';
import MobileHeader from '../components/MobileHeader';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip, AreaChart, Area, XAxis, YAxis, CartesianGrid } from 'recharts';

const categoryData = [
  { name: 'Habitação', value: 3500, color: '#137fec' },
  { name: 'Transporte', value: 1200, color: '#10b981' },
  { name: 'Alimentação', value: 800, color: '#f59e0b' },
  { name: 'Lazer', value: 500, color: '#8b5cf6' },
  { name: 'Outros', value: 300, color: '#ef4444' },
];

const monthlyTrend = [
  { month: 'Jan', amount: 4200 },
  { month: 'Fev', amount: 3800 },
  { month: 'Mar', amount: 5100 },
  { month: 'Abr', amount: 4600 },
  { month: 'Mai', amount: 5400 },
  { month: 'Jun', amount: 4900 },
];

const ReportsScreen: React.FC = () => {
  return (
    <div className="flex h-screen w-full overflow-hidden bg-background-light dark:bg-background-dark">
      <Sidebar />
      <main className="flex-1 flex flex-col h-full overflow-hidden">
        <MobileHeader title="Relatórios" />
        
        <header className="hidden lg:flex h-16 shrink-0 items-center justify-between px-8 border-b border-[#e5e7eb] dark:border-[#283039] bg-white dark:bg-[#111418]">
          <h2 className="text-xl font-bold tracking-tight text-[#111418] dark:text-white">Relatórios Financeiros</h2>
          <div className="flex items-center gap-4">
            <div className="flex bg-[#f3f4f6] dark:bg-[#283039] p-1 rounded-lg">
              <button className="px-4 py-1.5 text-xs font-bold rounded-md bg-white dark:bg-primary text-primary dark:text-white shadow-sm">Mensal</button>
              <button className="px-4 py-1.5 text-xs font-bold rounded-md text-[#637588] dark:text-[#9dabb9]">Anual</button>
            </div>
          </div>
        </header>

        <div className="flex-1 overflow-y-auto p-6 lg:p-8 space-y-8">
          <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
            <div className="xl:col-span-2 bg-white dark:bg-surface-dark p-6 rounded-xl border border-[#e5e7eb] dark:border-[#283039] shadow-sm">
              <h3 className="text-lg font-bold text-[#111418] dark:text-white mb-6">Tendência de Gastos</h3>
              <div className="h-[320px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={monthlyTrend}>
                    <defs>
                      <linearGradient id="colorAmount" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#137fec" stopOpacity={0.1}/>
                        <stop offset="95%" stopColor="#137fec" stopOpacity={0}/>
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#3b4754" opacity={0.1} />
                    <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{fill: '#9dabb9', fontSize: 12}} />
                    <YAxis axisLine={false} tickLine={false} tick={{fill: '#9dabb9', fontSize: 12}} />
                    <Tooltip 
                      contentStyle={{backgroundColor: '#1a242f', border: 'none', borderRadius: '8px', color: '#fff'}}
                    />
                    <Area type="monotone" dataKey="amount" stroke="#137fec" strokeWidth={3} fillOpacity={1} fill="url(#colorAmount)" />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </div>

            <div className="bg-white dark:bg-surface-dark p-6 rounded-xl border border-[#e5e7eb] dark:border-[#283039] shadow-sm">
              <h3 className="text-lg font-bold text-[#111418] dark:text-white mb-6">Gastos por Categoria</h3>
              <div className="h-[250px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={categoryData}
                      cx="50%"
                      cy="50%"
                      innerRadius={60}
                      outerRadius={80}
                      paddingAngle={5}
                      dataKey="value"
                    >
                      {categoryData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip 
                      contentStyle={{backgroundColor: '#1a242f', border: 'none', borderRadius: '8px', color: '#fff'}}
                    />
                  </PieChart>
                </ResponsiveContainer>
              </div>
              <div className="mt-6 space-y-3">
                {categoryData.map((item, i) => (
                  <div key={i} className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="size-2 rounded-full" style={{backgroundColor: item.color}}></div>
                      <span className="text-sm font-medium text-[#637588] dark:text-[#9dabb9]">{item.name}</span>
                    </div>
                    <span className="text-sm font-bold text-[#111418] dark:text-white">R$ {item.value.toLocaleString('pt-BR')}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-surface-dark p-6 rounded-xl border border-[#e5e7eb] dark:border-[#283039] shadow-sm">
            <h3 className="text-lg font-bold text-[#111418] dark:text-white mb-6">Resumo Comparativo</h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {[
                { label: 'Crescimento Mensal', value: '+12%', icon: 'trending_up', color: 'text-green-500' },
                { label: 'Economia Sugerida', value: 'R$ 450,00', icon: 'savings', color: 'text-primary' },
                { label: 'Maior Credor', value: 'Imobiliária S.', icon: 'account_balance', color: 'text-orange-500' },
                { label: 'Média Diária', value: 'R$ 154,00', icon: 'schedule', color: 'text-blue-500' },
              ].map((res, i) => (
                <div key={i} className="flex flex-col gap-1 p-4 rounded-lg bg-[#f9fafb] dark:bg-[#1a242f]/50">
                  <div className="flex items-center gap-2 mb-2">
                    <span className={`material-symbols-outlined text-[18px] ${res.color}`}>{res.icon}</span>
                    <span className="text-[11px] font-bold text-[#637588] dark:text-[#9dabb9] uppercase tracking-wider">{res.label}</span>
                  </div>
                  <span className="text-xl font-bold text-[#111418] dark:text-white">{res.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ReportsScreen;