const { jestConfig } = require("@salesforce/sfdx-lwc-jest/config");

module.exports = {
  ...jestConfig,
  // setupFilesAfterEnv: ["<rootDir>/jest-setup.js"],
  modulePathIgnorePatterns: ["<rootDir>/.localdevserver"]
};
