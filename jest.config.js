module.exports = {
  roots: ['<rootDir>/src'],
  testMatch: [
    '**/__tests__/**/*.+(ts|tsx|js)',
    '**/?(*.)+(spec|test).+(ts|tsx|js)',
  ],
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
  },
  moduleNameMapper: {
    '@state/todos': ['<rootDir>/src/state/todos/index.ts'],
    '@state/ui': ['<rootDir>/src/state/ui/index.ts'],
  },
};
