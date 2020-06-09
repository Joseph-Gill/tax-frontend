module.exports = {
    root: true,
    settings: {
        react: {
            'version': 'detect'
        }
    },
    parserOptions: {
        'ecmaVersion': 2017,
        'sourceType': 'module',
        'ecmaFeatures': {
            'jsx': true
        }
    },
    env: {
        browser: true,
    },
    extends: [
        'eslint:recommended',
        'plugin:react/all'
    ],
    // required to lint *.jsx files
    plugins: [
        'react'
    ],
    // add your custom rules here
    rules: {
        'no-var': 'error',
        'react/jsx-no-literals': 'off',
        'react/jsx-no-bind': 'off',
        'react/jsx-one-expression-per-line': 'off',
        'react/function-component-definition': ['error', {
            'namedComponents': 'arrow-function',
            'unnamedComponents': 'function-expression'
        }],
        'react/jsx-props-no-spreading': 'off',
        'react/prop-types': 'off'
    }
}
