import dns from "dns";
import { defineConfig, devices } from "@playwright/test";

dns.setDefaultResultOrder("ipv4first");

export default defineConfig({
  testDir: "./tests",
  testMatch: "**/*.spec.js",
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
<<<<<<< HEAD
  reporter: [
    ['list'],
    [
      'allure-playwright',
      {
        resultsDir: 'allure-results'
      }
    ]
  ],

=======
  reporter: [["html"],
             ["list"],
             ["allure-playwright"]],
>>>>>>> eb0d37d0aab2f84765779775f17adb851b0c2de6
  use: {
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
    video: 'retain-on-failure'
  },
  
  projects: [
    { name: "chromium", use: { ...devices["Desktop Chrome"] } },
    { name: "firefox", use: { ...devices["Desktop Firefox"] } },
    { name: "webkit", use: { ...devices["Desktop Safari"] } },
  ],
});