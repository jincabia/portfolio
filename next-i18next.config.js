// next-i18next.config.js
const path = require('path');

module.exports = {
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'de'],
  },
  localePath:
    typeof window === 'undefined'
      ? path.resolve('./my-custom/path')
      : '/public/my-custom/path',
  ns: ['common'],
};
