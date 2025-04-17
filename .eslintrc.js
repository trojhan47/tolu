module.exports = {
  root: true,
  extends: ['next', 'next/core-web-vitals', 'eslint:recommended', 'plugin:react/recommended'],
  rules: {
    // disable unescaped entities error
    'react/no-unescaped-entities': 'off',
    // optionally turn off next/image warning
    '@next/next/no-img-element': 'off',
  },
};
