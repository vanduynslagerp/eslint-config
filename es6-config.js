module.exports = {
  'extends': ['@metahub/eslint-config/import-config'],
  'parserOptions': {
    'ecmaVersion': 8,
    'sourceType': 'module'
  },
  'env': {
    'es6': true
 },
  'rules': {
    // ECMAScript 6
    'arrow-body-style': 2,
    'arrow-parens': 2,
    'arrow-spacing': 2,
    'constructor-super': 2,
    'generator-star-spacing': 2,
    'no-class-assign': 2,
    'no-confusing-arrow': 2,
    'no-const-assign': 2,
    'no-dupe-class-members': 2,
    'no-duplicate-imports': 2,
    'no-new-symbol': 2,
    'no-restricted-imports': 0,
    'no-this-before-super': 2,
    'no-useless-computed-key': 2,
    'no-useless-constructor': 2,
    'no-useless-rename': 2,
    'no-var': 2,
    'object-shorthand': 2,
    'prefer-arrow-callback': 2,
    'prefer-const': 2,
    'prefer-destructuring': 2,
    'prefer-numeric-literals': 2,
    'prefer-rest-params': 2,
    'prefer-spread': 2,
    'prefer-template': 2,
    'require-yield': 2,
    'rest-spread-spacing': 2,
    'sort-imports': 0,
    'symbol-description': 2,
    'template-curly-spacing': 2,
    'yield-star-spacing': 2
  }
};
