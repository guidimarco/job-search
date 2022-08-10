module.exports = {
  preset: "@vue/cli-plugin-unit-jest",
  testMatch: ["**/__test__/**/*.[jt]s?(x)", "**/??(*.)+(spec|test).[jt]s?(x)"],
  watchPlugins: [
    "jest-watch-typeahead/filename",
    "jest-watch-typeahead/testname",
  ],
};
