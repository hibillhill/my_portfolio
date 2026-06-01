import { en } from "./en";
import { zh } from "./zh";
import type { Dictionary, Locale } from "./types";

export const dictionaries: Record<Locale, Dictionary> = { en, zh };

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}

export type { Dictionary, Locale, WorkItem, SoftwareItem } from "./types";
