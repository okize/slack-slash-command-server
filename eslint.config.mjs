import { FlatCompat } from '@eslint/eslintrc'; // eslint-disable-line import/no-extraneous-dependencies

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
