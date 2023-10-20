module.exports = {
  parser: '@typescript-eslint/parser',
  env: {
    node: true
  },
  extends: ['airbnb', 'airbnb-typescript', 'prettier'],
  rules: {
    semi: [0],
    'import/order': [
      'error',
      {
        groups: [
          'builtin',
          'external',
          'internal',
          'parent',
          'sibling',
          'index',
          'object',
          'type'
        ]
      }
    ],
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        argsIgnorePattern: '^_',
        varsIgnorePattern: '^_'
      }
    ],
    'react/self-closing-comp': [
      'error',
      {
        component: true,
        html: true
      }
    ],
    'no-restricted-imports': [
      'error',
      {
        patterns: ['../']
      }
    ]
  }
}
