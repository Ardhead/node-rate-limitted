module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'airbnb',
  ],
  rules: {
    'max-len': ['error', {
      code: 140,
    }],
    'class-methods-use-this': 'off',
    'consistent-return': 'off',
    'no-await-in-loop': 'off',
    'no-underscore-dangle': 'off',
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'import/extensions': ['off', 'always', {
      js: 'never',
    }],
    'no-param-reassign': 'off',
    'arrow-parens': 'off',
    'arrow-body-style': 'off',
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
};
