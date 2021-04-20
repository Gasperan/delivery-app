"use strict";

module.exports = {
  verbose: true,
  roots: ["<rootDir>/src"],
  testRegex: "(/__tests__/.*|(\\.|/)(test))\\.(ts|js)?$",
  moduleFileExtensions: ["js", "json", "node"],
  testPathIgnorePatterns: ["<rootDir>/src/integration-test"],
  collectCoverageFrom: [
    "**/*.js",
    "!**/node_modules/**",
    "!**/index.js",
    "!**/server.js",
    "!**/integration-test/**",
    "!**/configuration/**",
  ],
  coverageThreshold: {
    global: {
      statements: 98,
      branches: 94,
      functions: 96,
      lines: 99,
    },
  },
};
