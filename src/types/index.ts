export interface Contract {
  id: string;
  name: string;
  parties: string;
  expiry: string;
  status: 'Active' | 'Expired' | 'Renewal Due';
  risk: 'Low' | 'Medium' | 'High';
  startDate: string;
  value: string;
  clauses: Clause[];
  aiInsights: AIInsight[];
  evidence: Evidence[];
}

export interface Clause {
  id: string;
  title: string;
  summary: string;
  confidence: number;
}

export interface AIInsight {
  id: string;
  type: 'Risk' | 'Opportunity' | 'Info';
  title: string;
  description: string;
  severity: 'Low' | 'Medium' | 'High' | 'Critical';
  recommendation: string;
}

export interface Evidence {
  id: string;
  snippet: string;
  relevance: number;
  page: number;
  section: string;
}

export interface User {
  id: string;
  username: string;
  email: string;
}

export interface AuthContextType {
  user: User | null;
  login: (username: string, password: string) => Promise<boolean>;
  logout: () => void;
  isAuthenticated: boolean;
  loading: boolean;
}
