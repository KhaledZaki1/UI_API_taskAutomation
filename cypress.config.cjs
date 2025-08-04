const { defineConfig } = require("cypress");
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const createEsbuildPlugin = require("@badeball/cypress-cucumber-preprocessor/esbuild");
const { addCucumberPreprocessorPlugin } = require("@badeball/cypress-cucumber-preprocessor");
const { addMatchImageSnapshotPlugin } = require('cypress-image-snapshot/plugin');


module.exports = defineConfig({
  e2e: {
    async setupNodeEvents(on, config) {
      require('@cypress/code-coverage/task')(on, config);
      await addCucumberPreprocessorPlugin(on, config);
      addMatchImageSnapshotPlugin(on, config);
      on(
        "file:preprocessor",
        createBundler({
          plugins: [createEsbuildPlugin.default(config)],
        })
      );

      return config;
    },
    specPattern: "cypress/e2e/**/*.feature",
  },
});

