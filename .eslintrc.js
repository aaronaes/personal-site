module.exports = {
  root: true,
  env: {
    node: true,
    commonjs: true,
    es6: true,
    browser: true,
    jquery: true
  },
  extends: [
    "plugin:vue/essential",
    "plugin:prettier/recommended",
  ],
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
    "prettier/prettier": "error",
    "import/no-webpack-loader-syntax": 0
  },
  parserOptions: {
    parser: "babel-eslint"
  }
};
