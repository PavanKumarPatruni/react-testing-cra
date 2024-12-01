import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./src/setupTests.ts", // Configure the testing setup file
    coverage: {
      all: true, // Include all source files in the coverage report
      include: ["src/**/*.{ts,tsx}"], // Include all TypeScript/TSX files
      exclude: [
        "src/index.tsx", // Exclude entry point
        "src/react-app-env.d.ts", // Exclude CRA-specific type declarations
        "src/reportWebVitals.ts", // Exclude CRA performance reporting
        "src/setupTests.ts", // Exclude testing setup file
        "src/**/*.stories.{ts,tsx}", // Exclude Storybook files if any
        "src/**/*.mock.{ts,tsx}", // Mock files for tests
        "**/*.d.ts", // Exclude all TypeScript declaration files
        "node_modules/**", // Exclude dependencies
        "build/**", // Build output
      ],
    },
  },
});
