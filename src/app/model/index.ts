export interface RequestObject {
  model: string;
  prompt: string;
  quality: string;
  size: string;
  n: number;
}

export interface ModelList {
  label: string;
  model: string;
  token?: string;
}

export interface QualityList {
  label: string;
  quality: string;
}

export interface SizeList {
  label: string;
  size: string;
}

export interface LanguageList {
  label: string;
  language: string;
}

export interface MessageList {
  role: string;
  content: string;
}

export interface CodeRequestObject {
  model: string;
  message: MessageList[];
  temperature: number;
}

export interface CodeRequestObjectClaude {
  model: string;
  prompt: string;
  temperature: number;
}
