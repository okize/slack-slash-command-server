import { FlatCompat } from '@eslint/eslintrc';

const compat = new FlatCompat();

export default [
  ...compat.config({
    extends: ['airbnb-base'],
    plugins: ['prettier'],
    rules: {
      'prettier/prettier': 'error',
      'new-cap': [
        'error',
        {
          capIsNewExceptions: ['express.Router'],
        },
      ],
    },
  }),
];
