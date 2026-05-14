import type { LongPage } from './types';

import { machineLearningDevelopment } from './services/machine-learning-development';
import { deepLearningSolutions } from './services/deep-learning-solutions';
import { naturalLanguageProcessing } from './services/natural-language-processing';
import { computerVision } from './services/computer-vision';
import { generativeAiDevelopment } from './services/generative-ai-development';
import { llmFineTuning } from './services/llm-fine-tuning';
import { conversationalAiChatbots } from './services/conversational-ai-chatbots';
import { aiAgentsAgenticWorkflows } from './services/ai-agents-agentic-workflows';
import { predictiveAnalytics } from './services/predictive-analytics';
import { recommendationSystems } from './services/recommendation-systems';
import { speechRecognitionVoiceAi } from './services/speech-recognition-voice-ai';
import { documentIntelligence } from './services/document-intelligence';
import { mlopsAiInfrastructure } from './services/mlops-ai-infrastructure';
import { selfHostedLlmInfrastructure } from './services/self-hosted-llm-infrastructure';
import { aiConsultingStrategy } from './services/ai-consulting-strategy';
import { aiIntegrationServices } from './services/ai-integration-services';
import { intelligentProcessAutomation } from './services/intelligent-process-automation';
import { dataEngineeringForAi } from './services/data-engineering-for-ai';
import { aiModelOptimization } from './services/ai-model-optimization';
import { responsibleAiGovernance } from './services/responsible-ai-governance';

import { governmentPublicSector } from './industries/government-public-sector';
import { bankingFinancialServices } from './industries/banking-financial-services';
import { healthcare } from './industries/healthcare';
import { retailEcommerce } from './industries/retail-ecommerce';
import { manufacturing } from './industries/manufacturing';
import { realEstateProptech } from './industries/real-estate-proptech';
import { energyUtilities } from './industries/energy-utilities';
import { logisticsSupplyChain } from './industries/logistics-supply-chain';
import { education } from './industries/education';
import { hospitalityTourism } from './industries/hospitality-tourism';

import { stack } from './technology/stack';
import { aiPlatformPartners } from './technology/ai-platform-partners';
import { cloudInfrastructurePartners } from './technology/cloud-infrastructure-partners';
import { openSource } from './technology/open-source';
import { methodology } from './technology/methodology';
import { qualityAssurance } from './technology/quality-assurance';

import { whitepapers } from './insights/whitepapers';
import { guides } from './insights/guides';
import { glossary } from './insights/glossary';
import { faqs } from './insights/faqs';

import { securityCompliance } from './legal/security-compliance';
import { privacyPolicy } from './legal/privacy-policy';
import { termsOfService } from './legal/terms-of-service';
import { cookiePolicy } from './legal/cookie-policy';

export const SERVICE_PAGES: Record<string, LongPage> = {
  'machine-learning-development': machineLearningDevelopment,
  'deep-learning-solutions': deepLearningSolutions,
  'natural-language-processing': naturalLanguageProcessing,
  'computer-vision': computerVision,
  'generative-ai-development': generativeAiDevelopment,
  'llm-fine-tuning': llmFineTuning,
  'conversational-ai-chatbots': conversationalAiChatbots,
  'ai-agents-agentic-workflows': aiAgentsAgenticWorkflows,
  'predictive-analytics': predictiveAnalytics,
  'recommendation-systems': recommendationSystems,
  'speech-recognition-voice-ai': speechRecognitionVoiceAi,
  'document-intelligence': documentIntelligence,
  'mlops-ai-infrastructure': mlopsAiInfrastructure,
  'self-hosted-llm-infrastructure': selfHostedLlmInfrastructure,
  'ai-consulting-strategy': aiConsultingStrategy,
  'ai-integration-services': aiIntegrationServices,
  'intelligent-process-automation': intelligentProcessAutomation,
  'data-engineering-for-ai': dataEngineeringForAi,
  'ai-model-optimization': aiModelOptimization,
  'responsible-ai-governance': responsibleAiGovernance
};

export const INDUSTRY_PAGES: Record<string, LongPage> = {
  'government-public-sector': governmentPublicSector,
  'banking-financial-services': bankingFinancialServices,
  healthcare,
  'retail-ecommerce': retailEcommerce,
  manufacturing,
  'real-estate-proptech': realEstateProptech,
  'energy-utilities': energyUtilities,
  'logistics-supply-chain': logisticsSupplyChain,
  education,
  'hospitality-tourism': hospitalityTourism
};

export const TECHNOLOGY_PAGES: Record<string, LongPage> = {
  stack,
  'ai-platform-partners': aiPlatformPartners,
  'cloud-infrastructure-partners': cloudInfrastructurePartners,
  'open-source': openSource,
  methodology,
  'quality-assurance': qualityAssurance
};

export const INSIGHT_PAGES: Record<string, LongPage> = {
  whitepapers,
  guides,
  glossary,
  faqs
};

export const LEGAL_PAGES: Record<string, LongPage> = {
  'security-compliance': securityCompliance,
  'privacy-policy': privacyPolicy,
  'terms-of-service': termsOfService,
  'cookie-policy': cookiePolicy
};

export const ALL_PAGES = {
  ...SERVICE_PAGES,
  ...INDUSTRY_PAGES,
  ...TECHNOLOGY_PAGES,
  ...INSIGHT_PAGES,
  ...LEGAL_PAGES
};
