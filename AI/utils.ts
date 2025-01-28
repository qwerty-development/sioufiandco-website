// AI/utils.ts
import { SearchResult, QueryAnalysis } from './types';
import { companyInfo, insuranceProducts } from './data';

export function normalizeText(text: string): string {
  return text.toLowerCase().trim();
}

export function calculateRelevance(searchText: string, content: string): number {
  const normalizedSearch = normalizeText(searchText);
  const normalizedContent = normalizeText(content);
  const searchWords = normalizedSearch.split(/\s+/);
  const contentWords = new Set(normalizedContent.split(/\s+/));
  
  let matchCount = 0;
  for (const word of searchWords) {
    if (contentWords.has(word)) matchCount++;
  }
  
  return matchCount / searchWords.length;
}

export function analyzeQuery(question: string): QueryAnalysis {
  const normalizedQuestion = normalizeText(question);

  // Location queries
  if (normalizedQuestion.includes('where') || 
      normalizedQuestion.includes('location') || 
      normalizedQuestion.includes('address')) {
    return {
      type: 'location',
      relevantInfo: getLocationInfo()
    };
  }

  // Contact queries
  if (normalizedQuestion.includes('contact') || 
      normalizedQuestion.includes('phone') || 
      normalizedQuestion.includes('call')) {
    return {
      type: 'contact',
      relevantInfo: getContactInfo()
    };
  }

  // Company information
  if (normalizedQuestion.includes('about') || 
      normalizedQuestion.includes('company') || 
      normalizedQuestion.includes('history')) {
    return {
      type: 'company',
      relevantInfo: JSON.stringify({
        name: companyInfo.name,
        about: companyInfo.about,
        values: companyInfo.values
      })
    };
  }

  // Insurance-specific queries
  const insuranceTypes = Object.keys(insuranceProducts);
  for (const type of insuranceTypes) {
    if (normalizedQuestion.includes(type)) {
      return {
        type: 'insurance',
        insuranceType: type,
        relevantInfo: getInsuranceInfo(type) || 'Information not available'
      };
    }
  }

  // General search
  return {
    type: 'general',
    relevantInfo: JSON.stringify(searchContent(question))
  };
}

export function getLocationInfo(): string {
  return companyInfo.locations
    .map(loc => `${loc.address}${loc.postalCode ? ` (${loc.postalCode})` : ''}`)
    .join('\n');
}

export function getContactInfo(): string {
  return `Phone numbers:\n${companyInfo.contact.phones.join('\n')}`;
}

export function getInsuranceInfo(type: string): string | null {
  const product = insuranceProducts[type];
  if (!product) return null;

  return `
${product.title}
${product.description || ''}

Key Features:
${product.features.join('\n')}

${product.additionalInfo ? 
  Object.entries(product.additionalInfo)
    .map(([key, value]) => `${key}: ${Array.isArray(value) ? value.join(', ') : value}`)
    .join('\n') 
  : ''}`
    .trim();
}

export function searchContent(query: string): SearchResult[] {
  const results: SearchResult[] = [];
  const normalizedQuery = normalizeText(query);

  // Search company information
  Object.entries(companyInfo).forEach(([section, content]) => {
    if (typeof content === 'string') {
      const relevance = calculateRelevance(normalizedQuery, content);
      if (relevance > 0) {
        results.push({
          section: `company.${section}`,
          content,
          relevance
        });
      }
    }
  });

  // Search insurance products
  Object.entries(insuranceProducts).forEach(([key, product]) => {
    const content = [
      product.title,
      product.description,
      ...product.features
    ].filter(Boolean).join(' ');

    const relevance = calculateRelevance(normalizedQuery, content);
    if (relevance > 0) {
      results.push({
        section: `insurance.${key}`,
        content,
        relevance
      });
    }
  });

  return results.sort((a, b) => b.relevance - a.relevance);
}