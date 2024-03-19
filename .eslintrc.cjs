module.exports = {
  root: true,
  env: {browser: true, es2020: true},
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:import/recommended',
    'plugin:import/typescript',
    'plugin:prettier/recommended',
    'plugin:@tanstack/eslint-plugin-query/recommended'
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh', 'import', 'unused-imports', '@tanstack/query'],
  settings: {
    react: {
      version: 'detect',
    },
    'import/resolver': {
      typescript: true,
      node: true,
    },
  },
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      {allowConstantExport: true},
    ],
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
    '@typescript-eslint/no-unused-vars': 0,
    '@typescript-eslint/no-explicit-any': 0,
    'import/no-unresolved': 0,
    'import/order': 2,
    'import/no-named-as-default-member': 0,
    'import/no-named-as-default': 0,
    'import/no-duplicates': 0,
    'import/default': 0,
    'import/namespace': 0,
    'unused-imports/no-unused-imports': 2,
    'unused-imports/no-unused-vars': 2,
    'react/jsx-sort-props': 2,
    'react/no-unescaped-entities': 0,
    'no-unused-vars': 0,
  },
}