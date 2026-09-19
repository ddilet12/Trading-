export interface CourseModule {
  id: number;
  title: string;
  duration: string;
  badge: string;
  description: string;
  lessons: string[];
  result: string;
}

export interface Tariff {
  id: string;
  name: string;
  price: string;
  oldPrice: string;
  badge?: string;
  popular?: boolean;
  description: string;
  features: { title: string; included: boolean }[];
  cta: string;
}

export interface ReviewCase {
  id: string;
  type: 'trade' | 'review' | 'swing';
  image: string;
  title: string;
  subtitle: string;
  author: string;
  role: string;
  pnl: string;
  pnlPercent: string;
  period: string;
  rr: string;
  quote: string;
  setup: string;
}

export interface AuthorImage {
  id: string;
  image: string;
  title: string;
  caption: string;
  tag: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface RegistrationData {
  name: string;
  telegramOrPhone: string;
  email: string;
  tariffId: string;
}
