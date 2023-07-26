module.exports = {
  extends: 'standard-with-typescript',
  parserOptions: {
    project: './tsconfig.json'
  },
  rules: {
    '@typescript-eslint/no-redeclare': 'off',
    '@typescript-eslint/strict-boolean-expressions': 'off',
    '@typescript-eslint/quotes': 'off',
    '@typescript-eslint/semi': 'off',
    '@typescript-eslint/comma-dangle': 'off',
    '@typescript-eslint/space-before-function-paren': 'off',
    '@typescript-eslint/naming-convention': 'off',
    '@typescript-eslint/no-useless-escape': 'off',
    '@typescript-eslint/no-var-requires': 'off',
    '@typescript-eslint/import/first': 'off'
  }
}
