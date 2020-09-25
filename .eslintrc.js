const { resolve } = require('path')

module.exports = {
  root: true,

  parserOptions: {
    parser: "babel-eslint",
    sourceType: "module",
  },

  env: {
    browser: true,
  },

  plugins: ["import", "@typescript-eslint"],

  // add your custom rules here
  rules: {
    // allow async-await
    "generator-star-spacing": "off",
    // allow paren-less arrow functions
    "arrow-parens": "off",
    "one-var": "off",

    "import/first": "off",
    "import/named": "error",
    "import/namespace": "error",
    "import/default": "error",
    "import/export": "error",
    "import/extensions": "off",
    "import/no-unresolved": "off",
    "import/no-extraneous-dependencies": "off",
    "prefer-promise-reject-errors": "off",

    quotes: ["warn", "single"],

    // allow console.log during development only
    "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
    // allow debugger during development only
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
  },
  overrides: [
    {
      files: ["*.ts"],
      parser: "@typescript-eslint/parser",
      parserOptions: {
        sourceType: "module",
        project: resolve(__dirname, "./tsconfig.json"),
        tsconfigRootDir: __dirname,
        ecmaVersion: 2018,
      },
      rules: {
        "@typescript-eslint/explicit-function-return-type": "off",
        "@typescript-eslint/member-delimiter-style": [
          "error",
          {
            multiline: {
              delimiter: "none",
              requireLast: false,
            },
            singleline: {
              delimiter: "comma",
              requireLast: false,
            },
          },
        ],
      },
      extends: [
        "plugin:@typescript-eslint/eslint-recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:@typescript-eslint/recommended-requiring-type-checking",
      ],
    },
  ],
}
