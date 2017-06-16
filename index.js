module.exports = {
  'root': true,
  'parser': 'babel-eslint',
  'parserOptions': {
    'sourceType': 'script',
    'ecmaFeatures': {
      'globalReturn': true,
      'impliedStrict': true,
      'modules': true
    }
  },
  'plugins': ['babel', 'json'],
  'env': {'node': true},
  'rules': {
    // Possible Errors
    'for-direction': 2,
    'no-await-in-loop': 2,
    'no-compare-neg-zero': 2,
    'no-cond-assign': 2,
    'no-console': 0,
    'no-constant-condition': 2,
    'no-control-regex': 2,
    'no-debugger': 2,
    'no-dupe-args': 2,
    'no-dupe-keys': 2,
    'no-duplicate-case': 2,
    'no-empty': 2,
    'no-empty-character-class': 2,
    'no-ex-assign': 2,
    'no-extra-boolean-cast': 2,
    'no-extra-parens': 2,
    'no-extra-semi': 2,
    'no-func-assign': 2,
    'no-inner-declarations': 2,
    'no-invalid-regexp': 2,
    'no-irregular-whitespace': 2,
    'no-obj-calls': 2,
    'no-prototype-builtins': 2,
    'no-regex-spaces': 2,
    'no-sparse-arrays': 2,
    'no-template-curly-in-string': 2,
    'no-unexpected-multiline': 2,
    'no-unreachable': 2,
    'no-unsafe-finally': 2,
    'no-unsafe-negation': 2,
    'use-isnan': 2,
    'valid-jsdoc': [2, {'requireReturn': false}],
    'valid-typeof': 2,

    // Best Practices
    'accessor-pairs': 2,
    'array-callback-return': 2,
    'block-scoped-var': 2,
    'class-methods-use-this': 2,
    'complexity': [2, 15],
    'consistent-return': 2,
    'curly': 2,
    'default-case': 2,
    'dot-location': [2, 'property'],
    'dot-notation': 2,
    'eqeqeq': 2,
    'guard-for-in': 2,
    'no-alert': 2,
    'no-caller': 2,
    'no-case-declarations': 2,
    'no-div-regex': 2,
    'no-else-return': 0,
    'no-empty-function': 2,
    'no-empty-pattern': 2,
    'no-eq-null': 2,
    'no-eval': 2,
    'no-extend-native': 2,
    'no-extra-bind': 2,
    'no-extra-label': 2,
    'no-fallthrough': 2,
    'no-floating-decimal': 2,
    'no-global-assign': 2,
    'no-implicit-coercion': 2,
    'no-implicit-globals': 2,
    'no-implied-eval': 2,
    'babel/no-invalid-this': 2,
    'no-invalid-this': 0,
    'no-iterator': 2,
    'no-labels': 2,
    'no-lone-blocks': 2,
    'no-loop-func': 2,
    'no-magic-numbers': [2,
      {
        'ignore': [
          0, 1, 2, -1, 0.99, 1000
        ],
        'ignoreArrayIndexes': true,
        'enforceConst': true
      }],
    'no-multi-spaces': 2,
    'no-multi-str': 2,
    'no-new': 2,
    'no-new-func': 2,
    'no-new-wrappers': 2,
    'no-octal': 2,
    'no-octal-escape': 2,
    'no-param-reassign': 2,
    'no-proto': 2,
    'no-redeclare': 2,
    'no-restricted-properties': 0,
    'no-return-assign': 2,
    'no-return-await': 2,
    'no-script-url': 2,
    'no-self-assign': 2,
    'no-self-compare': 2,
    'no-sequences': 2,
    'no-throw-literal': 2,
    'no-unmodified-loop-condition': 2,
    'no-unused-expressions': 2,
    'no-unused-labels': 2,
    'no-useless-call': 2,
    'no-useless-concat': 2,
    'no-useless-escape': 2,
    'no-useless-return': 2,
    'no-void': 2,
    'no-warning-comments': [1,
      {
        'terms': ['todo', 'fixme'],
        'location': 'start'
      }],
    'no-with': 2,
    'prefer-promise-reject-errors': 2,
    'radix': 2,
    'require-await': 2,
    'vars-on-top': 0,
    'wrap-iife': 2,
    'yoda': 2,

    // Strict mode
    'strict': 2,

    // Variables
    'init-declarations': 0,
    'no-catch-shadow': 2,
    'no-delete-var': 2,
    'no-label-var': 2,
    'no-restricted-globals': 0,
    'no-shadow': 2,
    'no-shadow-restricted-names': 2,
    'no-undef': 2,
    'no-undef-init': 2,
    'no-undefined': 0,
    'no-unused-vars': 2,
    'no-use-before-define': 0,

    // Node.js and CommonJS
    'callback-return': 0,
    'global-require': 0,
    'handle-callback-err': 0,
    'no-buffer-constructor': 0,
    'no-mixed-requires': 0,
    'no-new-require': 0,
    'no-path-concat': 0,
    'no-process-env': 0,
    'no-process-exit': 0,
    'no-restricted-modules': 0,
    'no-sync': 0,

    // Stylistic
    'array-bracket-newline': [2, {'minItems': 3}],
    'array-bracket-spacing': 2,
    'array-element-newline': [2, {'multiline': true}],
    'block-spacing': 2,
    'brace-style': 2,
    'camelcase': [2, {'properties': 'never'}],
    'capitalized-comments': [
      1, 'always', {'ignoreConsecutiveComments': true}
    ],
    'comma-dangle': [2, 'never'],
    'comma-spacing': 2,
    'comma-style': 2,
    'computed-property-spacing': 2,
    'consistent-this': 2,
    'eol-last': 2,
    'func-call-spacing': 2,
    'func-name-matching': 2,
    'func-names': [2, 'as-needed'],
    'func-style': 0,
    'id-blacklist': 0,
    'id-length': [2,
      {
        'exceptions': [
          'i', 'j', 'k', 't', 'x', 'y', 'z'
        ]
      }],
    'id-match': [2, '[a-zA-Z_][a-zA-Z0-9_]*$'],
    'indent': [2, 2],
    'jsx-quotes': 2,
    'key-spacing': 2,
    'keyword-spacing': 2,
    'line-comment-position': 2,
    'linebreak-style': 2,
    'lines-around-comment': 0,
    'max-depth': 2,
    'max-len': [2, 120],
    'max-lines': 0,
    'max-nested-callbacks': [2, 5],
    'max-params': [2, 7],
    'max-statements': 0,
    'max-statements-per-line': 2,
    'multiline-ternary': 0,
    'babel/new-cap': 0,
    'new-cap': 0,
    'new-parens': 2,
    'newline-per-chained-call': [2, {'ignoreChainWithDepth': 4}],
    'no-array-constructor': 2,
    'no-bitwise': 2,
    'no-continue': 0,
    'no-inline-comments': 2,
    'no-lonely-if': 2,
    'no-mixed-operators': 0,
    'no-mixed-spaces-and-tabs': 2,
    'no-multi-assign': 2,
    'no-multiple-empty-lines': [2, {'max': 1}],
    'no-negated-condition': 2,
    'no-nested-ternary': 0,
    'no-new-object': 2,
    'no-plusplus': [2, {'allowForLoopAfterthoughts': true}],
    'no-restricted-syntax': 0,
    'no-tabs': 2,
    'no-ternary': 0,
    'no-trailing-spaces': 2,
    'no-underscore-dangle': 0,
    'no-unneeded-ternary': 2,
    'no-whitespace-before-property': 2,
    'nonblock-statement-body-position': [2, 'beside'],
    'object-curly-newline': [2,
      {
        'minProperties': 2,
        'multiline': true
      }],
    'babel/object-curly-spacing': 2,
    'object-curly-spacing': 2,
    'object-property-newline': 2,
    'one-var': [2, 'never'],
    'one-var-declaration-per-line': 2,
    'operator-assignment': 2,
    'operator-linebreak': [2, 'after'],
    'padded-blocks': [2, 'never'],
    'padding-line-between-statements': [
      2,
      {
        'blankLine': 'always',
        'prev': 'function',
        'next': '*'
      },
      {
        'blankLine': 'always',
        'prev': '*',
        'next': 'function'
      },
      {
        'blankLine': 'always',
        'prev': 'class',
        'next': '*'
      },
      {
        'blankLine': 'always',
        'prev': '*',
        'next': 'class'
      },
      {
        'blankLine': 'always',
        'prev': 'const',
        'next': '*'
      },
      {
        'blankLine': 'never',
        'prev': 'const',
        'next': 'let'
      },
      {
        'blankLine': 'never',
        'prev': 'const',
        'next': 'const'
      },
      {
        'blankLine': 'always',
        'prev': 'let',
        'next': '*'
      },
      {
        'blankLine': 'never',
        'prev': 'let',
        'next': 'const'
      },
      {
        'blankLine': 'never',
        'prev': 'let',
        'next': 'let'
      },
      {
        'blankLine': 'always',
        'prev': 'import',
        'next': '*'
      },
      {
        'blankLine': 'always',
        'prev': 'cjs-import',
        'next': '*'
      },
      {
        'blankLine': 'always',
        'prev': 'import',
        'next': 'const'
      },
      {
        'blankLine': 'always',
        'prev': 'cjs-import',
        'next': 'const'
      },
      {
        'blankLine': 'always',
        'prev': 'import',
        'next': 'let'
      },
      {
        'blankLine': 'always',
        'prev': 'cjs-import',
        'next': 'let'
      },
      {
        'blankLine': 'never',
        'prev': '*',
        'next': 'import'
      },
      {
        'blankLine': 'never',
        'prev': '*',
        'next': 'cjs-import'
      },
      {
        'blankLine': 'always',
        'prev': 'directive',
        'next': '*'
      },
      {
        'blankLine': 'always',
        'prev': '*',
        'next': 'directive'
      }
    ],
    'quote-props': [2, 'consistent'],
    'quotes': [2, 'single'],
    'require-jsdoc': [1,
      {
        'require': {
          'FunctionDeclaration': true,
          'MethodDefinition': true,
          'ClassDeclaration': true
        }
      }],
    'babel/semi': [2, 'always'],
    'semi': 0,
    'semi-spacing': 2,
    'semi-style': 2,
    'sort-keys': 0,
    'sort-vars': 0,
    'space-before-blocks': 2,
    'space-before-function-paren': [2, 'never'],
    'space-in-parens': 2,
    'space-infix-ops': 2,
    'space-unary-ops': 2,
    'spaced-comment': 2,
    'switch-colon-spacing': 2,
    'template-tag-spacing': 2,
    'unicode-bom': 2,
    'wrap-regex': 2,

    // ECMAScript 6
    'arrow-body-style': 0,
    'arrow-parens': 0,
    'arrow-spacing': 0,
    'constructor-super': 0,
    'generator-star-spacing': 0,
    'no-class-assign': 0,
    'no-confusing-arrow': 0,
    'no-const-assign': 0,
    'no-dupe-class-members': 0,
    'no-duplicate-imports': 0,
    'no-new-symbol': 0,
    'no-restricted-imports': 0,
    'no-this-before-super': 0,
    'no-useless-computed-key': 0,
    'no-useless-constructor': 0,
    'no-useless-rename': 0,
    'no-var': 0,
    'object-shorthand': 0,
    'prefer-arrow-callback': 0,
    'prefer-const': 0,
    'prefer-destructuring': 0,
    'prefer-numeric-literals': 0,
    'prefer-rest-params': 0,
    'prefer-spread': 0,
    'prefer-template': 0,
    'require-yield': 0,
    'rest-spread-spacing': 0,
    'sort-imports': 0,
    'symbol-description': 0,
    'template-curly-spacing': 0,
    'yield-star-spacing': 0
  }
};
