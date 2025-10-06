// Refer to the online docs for more details:
// https://nightwatchjs.org/gettingstarted/configuration/
//

//  _   _  _         _      _                     _          _
// | \ | |(_)       | |    | |                   | |        | |
// |  \| | _   __ _ | |__  | |_ __      __  __ _ | |_   ___ | |__
// | . ` || | / _` || '_ \ | __|\ \ /\ / / / _` || __| / __|| '_ \
// | |\  || || (_| || | | || |_  \ V  V / | (_| || |_ | (__ | | | |
// \_| \_/|_| \__, ||_| |_| \__|  \_/\_/   \__,_| \__| \___||_| |_|
//             __/ |
//            |___/
const chromedriver = require('chromedriver');

module.exports = {
  src_folders: ['test', 'nightwatch/examples', 'tests'],
  page_objects_path: ['nightwatch/Pages'],
  custom_commands_path: ['nightwatch/custom-commands'],
  custom_assertions_path: ['nightwatch/custom-assertions'],
  plugins: [],
  globals_path: 'globals.js',

  test_workers: {
    enabled: true
  },

  test_settings: {
    default: {
      launch_url: 'https://www.automationexercise.com',

      webdriver: {
        start_process: true,
        server_path: chromedriver.path
      },

      desiredCapabilities: {
        browserName: 'chrome'
      },

      screenshots: {
        enabled: true,
        path: 'screens',
        on_failure: true
      }

      // ✅ Notice: no test_runner block here
    },

    chrome: {
      desiredCapabilities: {
        browserName: 'chrome',
        'goog:chromeOptions': {
          args: [
            //'--headless=new',
            //'--no-sandbox'
          ]
        }
      }
    },

    remote: {
      selenium: {
        start_process: false,
        host: '<remote-hostname>',
        port: 4444
      },
      username: '${REMOTE_USERNAME}',
      access_key: '${REMOTE_ACCESS_KEY}',
      webdriver: {
        keep_alive: true,
        start_process: false
      }
    },

    'remote.chrome': {
      extends: 'remote',
      desiredCapabilities: {
        browserName: 'chrome',
        'goog:chromeOptions': {
          w3c: true
        }
      }
    }
  }
};
