export type Locale = "en" | "zh";

export interface WorkItem {
  id: string;
  index: number;
  title: string;
  description: string;
  tags: string[];
  color: string;
}

export interface SoftwareItem {
  name: string;
  category: string;
}

export interface Dictionary {
  meta: {
    siteName: string;
    role: string;
  };
  nav: {
    home: string;
    about: string;
    portfolio: string;
    connect: string;
  };
  home: {
    welcome: string[];
    playground: string;
    of: string;
    introParen: string;
    nameLine1: string;
    nameLine2: string;
    roleLines: string[];
    tagline: string;
    marquee: string[];
    clickMore: string;
    philosophy: string;
    worksTitle: string;
    works: WorkItem[];
  };
  about: {
    headline: string[];
    headlineParen: string;
    hiTitle: string;
    role: string;
    bio1: string;
    bio2: string;
    bio3: string;
    cta: string;
    clientsTitle: string;
    clientsParen: string;
    clients: string[];
    traitsTitle: string;
    traits: { title: string; text: string }[];
  };
  portfolio: {
    title: string[];
    introParen: string;
    traitsTitle: string;
    traits: { title: string; text: string }[];
    worksTitle: string;
    works: WorkItem[];
    softwareTitle: string;
    softwareParen: string;
    software: SoftwareItem[];
  };
  footer: {
    copyright: string;
    sitemap: string;
    social: string;
    legal: string;
    terms: string;
    privacy: string;
    cookies: string;
    links: { home: string; about: string; portfolio: string };
    legalPlaceholder: string;
  };
  connect: {
    title: string;
    text: string;
    email: string;
    close: string;
  };
  lang: {
    label: string;
  };
}
