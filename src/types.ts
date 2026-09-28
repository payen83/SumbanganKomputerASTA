export interface Donor {
  id: string;
  name: string;
  amount: number;
  date: string;
  packageType: string;
  message?: string;
  isAnonymous?: boolean;
  avatarSeed?: string;
  isCorporate?: boolean;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  subRole: string;
  quote: string;
  impactStory: string;
  avatarUrl: string;
  tag: string;
}

export interface BudgetItem {
  id: string;
  title: string;
  quantity: string;
  unitPrice: number;
  totalPrice: number;
  description: string;
  specs: string[];
  icon: string;
}

export interface DonationPackage {
  id: string;
  name: string;
  amount: number;
  badge?: string;
  description: string;
  impactLabel: string;
  popular?: boolean;
}
