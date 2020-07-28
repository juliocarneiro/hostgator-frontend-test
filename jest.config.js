module.exports = {
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: ['/node_modules/', '/.next/'],
  collectCoverage: true,
  //collectCoverageFrom: ['src/**/*.ts(x)?', '!src/**/stories.tsx'],
  collectCoverageFrom: ['src/**/*.tsx', '!src/**/stories.tsx'],
  setupFilesAfterEnv: ['<rootDir>/.jest/setup.ts'],
  modulePaths: ['<rootDir>/src/'],
  moduleDirectories: ['node_modules', 'src'],
  modulePathIgnorePatterns: ['src/pages/', 'src/styles']
}
