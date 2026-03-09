// @ts-check
import { defineConfig, devices,expect } from '@playwright/test';
import { TIMEOUT } from 'node:dns';

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// import dotenv from 'dotenv';
// import path from 'path';
// dotenv.config({ path: path.resolve(__dirname, '.env') });

/**
 * @see https://playwright.dev/docs/test-configuration
 */
const config={
  testdir: './tests',
  TIMEOUT: 40*1000,
  expect:{
    TIMEOUT: 40*1000
  },
  reporter: 'html',

  use:{
    browsername: 'chromium',
    headleass: false
  },

};