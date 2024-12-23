/* eslint-disable @typescript-eslint/naming-convention */
// eslint-disable-next-line no-undef
module.exports = {
  extends: [
    'eslint:recommended',
    'prettier',
    'plugin:react-hooks/recommended',
    'plugin:react/recommended',
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:import/recommended',
    'plugin:import/electron',
    'plugin:import/typescript',
  ],
  plugins: ['@typescript-eslint', 'unused-imports', 'import', 'react-hooks', 'react'],
  parser: '@typescript-eslint/parser',
  settings: {
    'import/resolver': {
      typescript: {
        project: './tsconfig.json',
      },
    },
    react: {
      version: 'detect',
    },
  },
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  ignorePatterns: ['node_modules/', 'public/'],
  rules: {
    curly: 'error',
    'no-console': 'error',
    'no-multiple-empty-lines': ['error', { max: 1, maxBOF: 0, maxEOF: 0 }],
    'object-shorthand': 'error',
    'func-style': 'error',
    'prefer-const': 'error',
    '@typescript-eslint/no-explicit-any': 'error',
    'no-restricted-syntax': [
      'error',
      {
        selector: 'TSEnumDeclaration',
        message: "Don't declare enums",
      },
      {
        selector: 'TSModuleDeclaration',
        message: "Don't declare module or namespace",
      },
    ],
    'one-var': ['error', 'never'],
    'padding-line-between-statements': [
      'error',
      {
        blankLine: 'always',
        prev: '*',
        next: 'return',
      },
    ],
    'no-unused-vars': [
      'error',
      { vars: 'all', varsIgnorePattern: '^_', args: 'after-used', argsIgnorePattern: '^_' },
    ],
    'unused-imports/no-unused-imports': 'error',
    'unused-imports/no-unused-vars': [
      'error',
      { vars: 'all', varsIgnorePattern: '^_', args: 'after-used', argsIgnorePattern: '^_' },
    ],
    '@typescript-eslint/consistent-type-imports': [
      'error',
      {
        prefer: 'type-imports',
      },
    ],
    '@typescript-eslint/naming-convention': [
      'error',
      {
        selector: ['variable'],
        format: ['PascalCase', 'camelCase'],
      },
      {
        selector: ['function'],
        format: ['PascalCase', 'camelCase'],
      },
    ],
    '@typescript-eslint/consistent-type-definitions': ['error', 'interface'],
    'react/display-name': 'off',
    'react/jsx-boolean-value': ['error', 'always'],
    'react/jsx-curly-brace-presence': ['error', { props: 'always' }],
    'react-hooks/rules-of-hooks': 'error',
    'react/prop-types': 'off',
    'react/self-closing-comp': [
      'error',
      {
        component: true,
        html: true,
      },
    ],
    'react/button-has-type': 'error',
    'react/jsx-fragments': ['error', 'syntax'],
    'react-hooks/exhaustive-deps': 'error',
    'react/react-in-jsx-scope': 'off',
    'import/no-unresolved': 2,
    'import/named': 2,
    'import/namespace': 2,
    'import/order': 2,
    'import/default': 2,
    'import/export': 2,
    'import/no-duplicates': 2,
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        vars: 'all',
        args: 'after-used',
        argsIgnorePattern: '_',
        ignoreRestSiblings: false,
        varsIgnorePattern: '_',
      },
    ],
    '@typescript-eslint/no-empty-function': 'off',
  },
};
