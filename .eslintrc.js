module.exports = {
    root: true,
    settings: {
        react: {
            'version': 'detect'
        },
        linkComponents: ['PropulsionFooterLogoContainer']       // Components used as alternatives to <a> for linking, eg. <Link to={ url } />
    },
    parserOptions: {
        'ecmaVersion': 2018,
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
        'react/jsx-indent': ['error', 4],
        'react/jsx-no-literals': 'off',
        'react/jsx-no-bind': 'off',
        'react/jsx-one-expression-per-line': 'off',
        'react/function-component-definition': ['error', {
            'namedComponents': 'arrow-function',
            'unnamedComponents': 'function-expression'
        }],
        'react/jsx-props-no-spreading': 'off',
        'react/prop-types': 'off',
        'react/jsx-max-depth': ['error', {'max': 3}],
        'react/button-has-type': 'off',
        'react/jsx-child-element-spacing': 'off',
        'react/jsx-max-props-per-line': 'off'

    }
}
