const { CucumberJSAllureFormatter } = require('allure-cucumberjs');
const { AllureRuntime } = require('allure-cucumberjs');

function Reporter(options) {
  return new CucumberJSAllureFormatter(
    options,
    new AllureRuntime({ resultsDir: './allure-results' }),
    {
      labels: {
        epic: [/@feature:(.*)/],
        severity: [/@severity:(.*)/]
      },
      links: {
        issue: {
          pattern: [/@issue=(.*)/],
          urlTemplate: "http://localhost:8080/issue/%s"
        },
        tms: {
          pattern: [/@tms=(.*)/],
          urlTemplate: "http://localhost:8080/tms/%s"
        }
      }
    }
  );
}
Reporter.prototype = Object.create(CucumberJSAllureFormatter.prototype);
Reporter.prototype.constructor = Reporter;

exports.default = Reporter;