// next-i18next.config.js
import { resolve } from 'path';

export const i18n = {
  defaultLocale: 'en',
  locales: ['en', 'de'],
};
export const localePath = typeof window === 'undefined'
  ? resolve('./my-custom/path')
  : '/public/my-custom/path';
export const ns = ['common'];
