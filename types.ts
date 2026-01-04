
export interface Debt {
  id: string;
  description: string;
  creditor: string;
  amount: number;
  date: string;
  category: string;
  status: 'Paid' | 'Pending';
}

export interface SummaryStats {
  totalPaid: number;
  paidThisMonth: number;
  remainingDebt: number;
}

export enum Category {
  Housing = 'Habitação',
  Transport = 'Transporte',
  Food = 'Alimentação',
  Health = 'Saúde',
  Leisure = 'Lazer',
  Other = 'Outros'
}
