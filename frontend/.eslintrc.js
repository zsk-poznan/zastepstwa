module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: ['plugin:react/recommended', 'airbnb', 'prettier'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: ['react'],
  rules: {
    'react/prop-types': [2, { ignore: ['children'] }],
    "react/require-default-props": "warn",
    "indent": [2, "tab", { "SwitchCase": 1, "VariableDeclarator": 1 }],
    "no-tabs": 0,
    "react/prop-types": 0,
    "react/jsx-indent": [2, "tab"],
    "react/jsx-indent-props": [2, "tab"],
    "import/no-named-as-default": 0,
    "import/no-named-as-default-member": 0,
    "react/jsx-props-no-spreading": 0
  },
};
