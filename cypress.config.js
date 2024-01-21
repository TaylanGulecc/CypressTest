const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "oq4t49",
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: 'https://demo.vercel.store/',
    watchForFileChanges: false,
    //Her değişiklik yapıldığında testin güncellenmemesi için
    viewportWidth: 1920,
    viewportHeight: 1080,
    pageLoadTimeout: 20000,
    defaultCommandTimeout: 10000,
    video:true
    },
});
