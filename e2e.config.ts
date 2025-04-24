import {PlaywrightTestConfig} from '@playwright/test'

const e2e: PlaywrightTestConfig = {
  timeout:180000, // лимит времени на выполнение теста
  retries: 2, // количество попыток на выолнение теста в случае его падения (полезно при падении теста из-за)
  workers: 2, // количество потоков для параллеьного запуска тестов
  testDir: "tests/e2e", // директория тестов
  reporter: "allure-playwright", // аллюр
  
  use:{
    headless: true,
    viewport:{width: 1920, height:1080}, // развер экрана для тестов
    actionTimeout:60000, // таймаут на 1 действие
    video: 'off', // видео при ошибке
    screenshot: 'off', // скриншот при ошибке
  },

  projects: [
    {
      name: "Chromium",
      use: {browserName: 'chromium'},
    },
    {
      name: "Firefox",
      use: {browserName: 'firefox'},
    },
    {
      name: "Webkit",
      use: {browserName: 'webkit'},
    },
  ],
}

export default e2e