module.exports = {
  testEnvironment: "node",
  testMatch: [
    "**/target/ts/**/__tests__/**/*.[j]s?(x)",
    "**/target/ts/**/?(*.)+(spec|test).[j]s?(x)"
  ],
  transform: {
    "\\.m?js$": "esm"
  }
};
