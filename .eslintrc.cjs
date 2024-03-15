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
    'plugin:prettier/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh'],
  settings: {
    react: {
      version: 'detect'
    }
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
        'endOfLine': 'auto'
      }],
    'react/jsx-sort-props': 2,
    'import/no-unresolved': 0,
    'react/no-unescaped-entities': 0
  },
}