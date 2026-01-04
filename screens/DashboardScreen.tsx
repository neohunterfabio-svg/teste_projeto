
import React from 'react';
import Sidebar from '../components/Sidebar';
import MobileHeader from '../components/MobileHeader';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';

const data = [
  { name: 'Mai', value: 850 },
  { name: 'Jun', value: 1850 },
  { name: 'Jul', value: 950 },
  { name: 'Ago', value: 1200 },
  { name: 'Set', value: 450 },
  { name: 'Out', value: 1200 },
];

const DashboardScreen: React.FC = () => {
  return (
    <div className="flex h-screen w-full overflow-hidden bg-background-light dark:bg-background-dark">
      <Sidebar />
      <main className="flex-1 flex flex-col h-full overflow-hidden relative">
        <MobileHeader title="Visão Geral" />
        
        {/* Desktop Header */}
        <header className="hidden lg:flex h-16 shrink-0 items-center justify-between px-8 border-b border-[#e5e7eb] dark:border-[#283039] bg-white dark:bg-[#111418]">
          <h2 className="text-xl font-bold tracking-tight text-[#111418] dark:text-white">Visão Geral</h2>
          <div className="flex items-center gap-4">
            <button className="relative flex items-center justify-center size-10 rounded-full hover:bg-[#f3f4f6] dark:hover:bg-[#283039] text-[#637588] dark:text-[#9dabb9]">
              <span className="material-symbols-outlined">notifications</span>
              <span className="absolute top-2 right-2 size-2 bg-red-500 rounded-full border-2 border-white dark:border-[#111418]"></span>
            </button>
          </div>
        </header>

        <div className="flex-1 overflow-y-auto p-6 lg:p-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {[
              { label: 'Total Pago', value: 'R$ 12.450,00', icon: 'payments', color: 'text-green-500', bg: 'bg-green-500/10' },
              { label: 'Pago este Mês', value: 'R$ 1.200,00', icon: 'calendar_today', color: 'text-primary', bg: 'bg-primary/10' },
              { label: 'Dívida Restante', value: 'R$ 4.320,00', icon: 'pending_actions', color: 'text-orange-500', bg: 'bg-orange-500/10' },
            ].map((stat, i) => (
              <div key={i} className="bg-white dark:bg-surface-dark p-6 rounded-xl border border-[#e5e7eb] dark:border-[#283039] shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center justify-between mb-4">
                  <span className={`material-symbols-outlined ${stat.icon === 'payments' ? 'filled' : ''} ${stat.bg} ${stat.color} p-2 rounded-lg`}>{stat.icon}</span>
                  <span className="text-xs font-bold text-green-500 flex items-center bg-green-500/10 px-2 py-1 rounded">+2.5%</span>
                </div>
                <p className="text-[#637588] dark:text-[#9dabb9] text-sm font-medium mb-1">{stat.label}</p>
                <h3 className="text-2xl font-bold text-[#111418] dark:text-white">{stat.value}</h3>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
            <div className="bg-white dark:bg-surface-dark p-6 rounded-xl border border-[#e5e7eb] dark:border-[#283039] shadow-sm">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-bold text-[#111418] dark:text-white">Fluxo de Pagamentos</h3>
                <select className="bg-transparent border-none text-sm font-medium text-primary focus:ring-0 cursor-pointer">
                  <option>Últimos 6 meses</option>
                  <option>Último ano</option>
                </select>
              </div>
              <div className="h-[300px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={data}>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#3b4754" opacity={0.1} />
                    <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#9dabb9', fontSize: 12}} dy={10} />
                    <YAxis axisLine={false} tickLine={false} tick={{fill: '#9dabb9', fontSize: 12}} />
                    <Tooltip 
                      cursor={{fill: 'rgba(19, 127, 236, 0.05)'}}
                      contentStyle={{backgroundColor: '#1a242f', border: 'none', borderRadius: '8px', color: '#fff'}}
                    />
                    <Bar dataKey="value" radius={[4, 4, 0, 0]} barSize={32}>
                      {data.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={index === 5 ? '#137fec' : '#3b4754'} />
                      ))}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>

            <div className="bg-white dark:bg-surface-dark p-6 rounded-xl border border-[#e5e7eb] dark:border-[#283039] shadow-sm">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-bold text-[#111418] dark:text-white">Pagamentos Recentes</h3>
                <button className="text-sm font-bold text-primary hover:underline">Ver todos</button>
              </div>
              <div className="space-y-4">
                {[
                  { title: 'Aluguel Mensal', subtitle: 'Imobiliária Silva', amount: 'R$ 1.200,00', date: 'Hoje, 14:30', icon: 'home' },
                  { title: 'Parcela Carro', subtitle: 'Banco Itaú', amount: 'R$ 850,00', date: 'Ontem', icon: 'directions_car' },
                  { title: 'Internet Fibra', subtitle: 'Vivo S.A.', amount: 'R$ 120,00', date: '12 Out', icon: 'wifi' },
                  { title: 'Cartão de Crédito', subtitle: 'Nubank', amount: 'R$ 2.450,00', date: '10 Out', icon: 'credit_card' },
                ].map((item, i) => (
                  <div key={i} className="flex items-center justify-between p-3 rounded-lg hover:bg-[#f3f4f6] dark:hover:bg-[#283039] transition-colors group cursor-pointer">
                    <div className="flex items-center gap-4">
                      <div className="size-10 rounded-full bg-[#f3f4f6] dark:bg-[#283039] flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                        <span className="material-symbols-outlined text-[#637588] dark:text-[#9dabb9] group-hover:text-primary">{item.icon}</span>
                      </div>
                      <div>
                        <p className="text-sm font-bold text-[#111418] dark:text-white">{item.title}</p>
                        <p className="text-xs text-[#637588] dark:text-[#9dabb9]">{item.subtitle}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-bold text-[#111418] dark:text-white">{item.amount}</p>
                      <p className="text-xs text-[#637588] dark:text-[#9dabb9]">{item.date}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default DashboardScreen;
