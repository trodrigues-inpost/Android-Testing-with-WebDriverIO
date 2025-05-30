import typescriptEslint from '@typescript-eslint/eslint-plugin';
import * as wdio from 'eslint-plugin-wdio';
import tsParser from '@typescript-eslint/parser';
import js from '@eslint/js';
import { FlatCompat } from '@eslint/eslintrc';

const compat = new FlatCompat({
    baseDirectory: __dirname,
    recommendedConfig: js.configs.recommended,
    allConfig: js.configs.all
});

export default [
    {
        ignores: ['allure-report/', 'node_modules/']
    },
    ...compat.extends(
        'eslint:recommended',
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended'
    ),
    {
        plugins: {
            '@typescript-eslint': typescriptEslint,
            wdio
        },

        languageOptions: {
            parser: tsParser
        },

        rules: {
            'no-mixed-spaces-and-tabs': 0,
            indent: [2, 4],
            '@typescript-eslint/no-var-requires': 0,
            '@typescript-eslint/no-explicit-any': 0,
            '@typescript-eslint/ban-ts-comment': 'off',
            'number-literal-format': 'off'
        }
    }
];
