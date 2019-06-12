module.exports = {
  server: {
    command: 'npm run start:prod',
    port: process.env.PORT || 8080,
    launchTimeout: 10000,
  },
  launch: {
    dumpio: true,
    args: ['--disable-dev-shm-usage', '--no-sandbox'],
    executablePath: process.env.PUPPETEER_EXEC_PATH,
    devtools: JSON.parse(process.env.DEBUG || false),
    slowMo: +process.env.SLOW_MO || 0,
    defaultViewport: {
      width: 1366,
      height: 768,
    },
  },
};
