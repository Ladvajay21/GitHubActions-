// @ts-check
const { defineConfig, devices } = require('@playwright/test');


module.exports = defineConfig({
  testDir: './tests',
 timeout : 60*1000,
  reporter: 'html',
  expect:  {
 timeout : 6000
  },
  
  use: {
    browserName : 'chromium',
    headless: true 
  }
}
)

