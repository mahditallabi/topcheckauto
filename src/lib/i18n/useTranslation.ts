'use client';

import { useLocale } from '@/lib/i18n/LocaleProvider';
import type { Locale } from '@/lib/i18n/config';

type TranslationPrimitive = string | string[] | number;

type TranslationValue = {
  ar: TranslationPrimitive;
  en: TranslationPrimitive;
};

type TranslationArray = TranslationNode[];

type Translations = {
  [key: string]: TranslationValue | Translations | TranslationArray;
};

type TranslationNode =
  | TranslationValue
  | Translations
  | TranslationPrimitive
  | TranslationArray;


import common from '@/locales/common.json';
import home from '@/locales/home.json';
import services from '@/locales/services.json';
import pricing from '@/locales/pricing.json';
import contact from '@/locales/contact.json';
import testimonials from '@/locales/testimonials.json';
import whyUs from '@/locales/whyUs.json';

const translations: Record<string, Translations> = {
  common,
  home,
  services,
  pricing,
  contact,
  testimonials,
  whyUs,
};

export function useTranslation(namespace: string = 'common') {
  const { locale } = useLocale();
  const lang = locale as Locale;

  const t = (key: string): TranslationPrimitive => {
    let current: TranslationNode | undefined = translations[namespace];

    if (!current) {
      console.warn(`[i18n] Missing namespace "${namespace}"`);
      return key;
    }

    for (const k of key.split('.')) {
      if (typeof current !== 'object' || current === null || !(k in current)) {
        console.warn(`[i18n] Missing key ${namespace}.${key}`);
        return key;
      }
      current = (current as Record<string, TranslationNode>)[k];
    }

    if (typeof current === 'object' && current !== null && lang in current) {
      return (
        (current as TranslationValue)[lang] ??
        (current as TranslationValue).ar ??
        key
      );
    }

    return key;
  };
const tString = (key: string): string => {
  const value = t(key);
  if (Array.isArray(value)) return value.join(' ');
  if (typeof value === 'number') return String(value);
  return value;
};


const tArray = <T = unknown>(key: string): T[] => {
  const v = t(key);
  return Array.isArray(v) ? (v as T[]) : [];
};

const tRawArray = <T = unknown>(key: string): T[] => {
  let current: TranslationNode | undefined = translations[namespace];

  for (const k of key.split('.')) {
    if (
      typeof current !== 'object' ||
      current === null ||
      Array.isArray(current)
    ) {
      return [];
    }

    const record = current as Record<string, TranslationNode>;

    if (!(k in record)) return [];

    current = record[k];
  }

  return Array.isArray(current) ? (current as T[]) : [];
};



  return { t, tString, tArray,tRawArray, locale: lang };
}
