module.exports = {
    env: {
        browser: true,
        es2020: true,
        jest: true,
    },
    extends: [
        'airbnb-typescript',
        'airbnb/hooks',
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
        'prettier',
        'prettier/@typescript-eslint',
    ],
    settings: {
        react: {
            pragma: 'React',
            version: 'detect',
        },
    },
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 11,
        sourceType: 'module',
        project: 'tsconfig.json',
    },
    plugins: ['@typescript-eslint', 'prettier', '@typescript-eslint/eslint-plugin'],
    rules: {
        'react/jsx-filename-extension': 0,
        'react/jsx-props-no-spreading': 0,
        'import/no-named-default': 0,
        'import/no-named-as-default': 0,
        'import/prefer-default-export': 0,
        '@typescript-eslint/ban-ts-ignore': 0,
        'jsx-a11y/accessible-emoji': 0,
        'no-param-reassign': 0,
        "no-unbound-method": true,
        '@typescript-eslint/interface-name-prefix': 'off',
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/no-explicit-any': 'off',
        // Indent with 4 spaces
        "indent": ["error", 4],

        // Indent JSX with 4 spaces
        "react/jsx-indent": ["error", 4],

        // Indent props with 4 spaces
        "react/jsx-indent-props": ["error", 4],
    },
};
