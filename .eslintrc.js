module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    "plugin:react/recommended",
    "next/core-web-vitals",
    "standard-with-typescript"
  ],
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    project: "tsconfig.json"
  },
  plugins: [
    "react"
  ],
  rules: {
    "react/react-in-jsx-scope": "off",
    "react/jsx-filename-extension": [1, { extensions: [".js", ".tsx"] }],
    quotes: "off",
    "@typescript-eslint/quotes": ["error", "double"]
  }
}
