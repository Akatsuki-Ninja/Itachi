module.exports = {
  root: true,
  env: {browser: true, es2020: true},
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:prettier/recommended',
    'plugin:@tanstack/eslint-plugin-query/recommended',
    'plugin:perfectionist/recommended-alphabetical',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh', 'unused-imports', '@tanstack/query', 'perfectionist'],
  settings: {
    react: {
      version: 'detect',
    },
  },
  rules: {
    'prettier/prettier': ['error',
      {
        'arrowParens': 'always',
        'bracketSameLine': false,
        'bracketSpacing': true,
        'htmlWhitespaceSensitivity': 'css',
        'insertPragma': false,
        'jsxSingleQuote': true,
        'singleQuote': true,
        'printWidth': 80,
        'proseWrap': 'preserve',
        'quoteProps': 'as-needed',
        'requirePragma': false,
        'semi': false,
        'singleAttributePerLine': true,
        'tabWidth': 2,
        'trailingComma': 'es5',
        'endOfLine': 'auto',
      }],
    'perfectionist/sort-imports': [2, {
      'type': 'natural',
      'order': 'asc',
      'groups': ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
      'custom-groups': {
        'value': {
          'builtin': 'node:*',
        }
      },
      'newlines-between': 'always',
      'internal-pattern': [
        '@/**',
      ],
    }],
    'unused-imports/no-unused-imports': 2,
    'unused-imports/no-unused-vars': 2,
    'react/jsx-sort-props': 2,
    'react/no-unescaped-entities': 0,
    'react-refresh/only-export-components': [
      'warn',
      {allowConstantExport: true},
    ],
    '@typescript-eslint/no-explicit-any': 0,
    '@typescript-eslint/no-unused-vars': 0,
  },
}