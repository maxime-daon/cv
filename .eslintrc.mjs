// @ts-check
export default /** @type {import("eslint").Linter.Config[]} */ ([
  {
    files: ["**/*.{ts,tsx,astro}"],
    languageOptions: {
      parser: (await import("@typescript-eslint/parser")).default,
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
      },
    },
    plugins: {
      "@typescript-eslint": (await import("@typescript-eslint/eslint-plugin")).default,
    },
    rules: {
      "@typescript-eslint/no-explicit-any": "error",
      "@typescript-eslint/no-unused-vars": ["error", { argsIgnorePattern: "^_" }],
    },
  },
  {
    files: ["**/*.astro"],
    languageOptions: {
      parser: (await import("eslint-plugin-astro")).default.parser,
    },
    plugins: {
      astro: (await import("eslint-plugin-astro")).default,
    },
    rules: {
      .../** @type {Record<string, import("eslint").Linter.RuleEntry>} */ (
        (await import("eslint-plugin-astro")).default.configs?.recommended?.rules ?? {}
      ),
    },
  },
])
