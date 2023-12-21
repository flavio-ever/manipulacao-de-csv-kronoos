module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  moduleFileExtensions: ["ts", "js"],
  testRegex: "(/tests/.*\\.(test|spec))\\.(ts|js)$",
  globals: {
    "ts-jest": {
      tsconfig: "tsconfig.json",
    },
  },
};
