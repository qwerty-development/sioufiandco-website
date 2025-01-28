// AI/types.ts

export interface Message {
  sender: 'user' | 'bot';
  text: string;
}

export interface InsuranceProduct {
  title: string;
  description?: string;
  features: string[];
  conditions?: string[];
  additionalInfo?: { [key: string]: string | string[] };
}

export interface CompanyInfo {
  name: string;
  locations: {
    address: string;
    postalCode?: string;
  }[];
  contact: {
    phones: string[];
  };
  about: {
    founded: number;
    founder: string;
    vision: string;
    history: string;
  };
  values: {
    [key: string]: {
      title: string;
      description: string;
    };
  };
  methodology: {
    steps: {
      name: string;
      description: string;
    }[];
  };
}

export interface SearchResult {
  section: string;
  content: string;
  relevance: number;
}

export interface QueryAnalysis {
  type: 'location' | 'contact' | 'insurance' | 'company' | 'general';
  insuranceType?: string;
  relevantInfo: string;
}