module.exports = {
    env: {
      browser: true,
      es2021: true,
    },
    extends: [
      'airbnb',
      'airbnb-typescript',
      'plugin:react/recommended',
      'plugin:prettier/recommended',
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
      project: './tsconfig.json',
    },
    plugins: ['react', '@typescript-eslint'],
    rules: {
      'react/react-in-jsx-scope': 'off', // Не нужен с React 18
      'import/no-extraneous-dependencies': 'off',
      'import/prefer-default-export': 'off',
    },
  };
  