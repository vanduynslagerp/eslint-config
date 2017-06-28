module.exports = {
  'extends': ['./index.js'],
  'plugins': ['jasmine'],
  'env': {'jasmine': true},
  'rules': {
    'jasmine/missing-expect': 2,
    'jasmine/named-spy': 2,
    'jasmine/new-line-before-expect': 2,
    'jasmine/new-line-between-declarations': 2,
    'jasmine/no-assign-spyon': 2,
    'jasmine/no-describe-variables': 2,
    'jasmine/no-disabled-tests': 2,
    'jasmine/no-expect-in-setup-teardown': 2,
    'jasmine/no-focused-tests': 1,
    'jasmine/no-global-setup': 2,
    'jasmine/no-spec-dupes': [2, 'branch'],
    'jasmine/no-suite-callback-args': 2,
    'jasmine/no-suite-dupes': [2, 'branch'],
    'jasmine/no-unsafe-spy': 2,
    'jasmine/valid-expect': 2
  }
};
