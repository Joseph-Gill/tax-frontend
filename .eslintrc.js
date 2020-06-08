// https://eslint.org/docs/user-guide/configuring
// https://eslint.vuejs.org

module.exports = {
    root: true,
    extends: [
        'eslint:recommended',
        'plugin:react/recommended'],
    // required to lint *.jsx files
    plugins: [
        'react'
    ],
    // add your custom rules here
    rules: {
        'vue/html-indent': ['error', 4], // Number is the base indent unit in spaces
        'vue/script-indent': ['error', 4, {
            'baseIndent': 1,
            'switchCase': 0,
            'ignores': []
        }],
        'vue/max-attributes-per-line': 'off',
        'vue/mustache-interpolation-spacing': 'off',
    }
}
