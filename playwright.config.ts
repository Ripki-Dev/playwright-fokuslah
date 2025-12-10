import { defineConfig, devices } from '@playwright/test';
import * as dotenv from 'dotenv';

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// import dotenv from 'dotenv';
// import path from 'path';
// dotenv.config({ path: path.resolve(__dirname, '.env') });

/**
 * See https://playwright.dev/docs/test-configuration.
 */

dotenv.config();
const ENV = process.env.ENV || "dev";

const BASE_URL_MAP: Record<string, string> = {
  dev: process.env.BASE_URL_DEV!,
  stg: process.env.BASE_URL_STG!,
  prod: process.env.BASE_URL_PROD!
};

export default defineConfig({
  timeout: 30000,

  testDir: 'tests',
  /* Run tests in files in parallel */
  fullyParallel: true,
  /* Retry on CI only */
  retries: 1,
  /* Opt out of parallel tests on CI. */
  workers: 3,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: [
    ['html', { open: 'never' }],
    ['json', { outputFile: 'playwright-report/results.json' }],
  ],
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    /* Base URL to use in actions like `await page.goto('')`. */
    // baseURL: 'http://localhost:3000',

    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    trace: 'retain-on-failure',
    headless: true,
    video: 'retain-on-failure',
    screenshot: 'only-on-failure',
    viewport: {
      width: 1366,
      height: 768,
    },
  },

  /* Configure projects for major browsers */
  projects: [
    {
      name: 'DEV',
      use: { ...devices['Desktop Chrome'], baseURL: process.env.BASE_URL_DEV, viewport: { width: 1366, height: 768 } },
    },

    {
      name: 'STG',
      use: { ...devices['Desktop Chrome'], baseURL: process.env.BASE_URL_STG, viewport: { width: 1366, height: 768 } },
    },

    {
      name: 'PRD',
      use: { ...devices['Desktop Chrome'], baseURL: process.env.BASE_URL_PROD, viewport: { width: 1366, height: 768 } },
    },

    // {
    //   name: 'firefox',
    //   use: { ...devices['Desktop Firefox'] },
    // },

    // {
    //   name: 'webkit',
    //   use: { ...devices['Desktop Safari'] },
    // },

    /* Test against mobile viewports. */
    // {
    //   name: 'Mobile Chrome',
    //   use: { ...devices['Pixel 5'] },
    // },
    // {
    //   name: 'Mobile Safari',
    //   use: { ...devices['iPhone 12'] },
    // },

    /* Test against branded browsers. */
    // {
    //   name: 'Microsoft Edge',
    //   use: { ...devices['Desktop Edge'], channel: 'msedge' },
    // },
    // {
    //   name: 'Google Chrome',
    //   use: { ...devices['Desktop Chrome'], channel: 'chrome' },
    // },
  ],

  /* Run your local dev server before starting the tests */
  // webServer: {
  //   command: 'npm run start',
  //   url: 'http://localhost:3000',
  //   reuseExistingServer: !process.env.CI,
  // },
});
