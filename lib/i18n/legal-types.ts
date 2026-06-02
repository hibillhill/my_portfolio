export interface LegalSection {
  title: string;
  paragraphs: string[];
  list?: string[];
}

export interface LegalDocument {
  title: string;
  intro: string;
  sections: LegalSection[];
  lastUpdated?: string;
}

export type LegalDocuments = Record<
  "terms" | "privacy" | "cookies",
  LegalDocument
>;
