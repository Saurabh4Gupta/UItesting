/* you can use url like this:- envURL[envURL.envConfig].web.HOST_URL before this you have to add require this envConfig file.
this envConfig file is use to manage all the URLS of your app you can use multiple base ulr like this:-
I.amOnPage(envURL[envURL.env].web.HOST_URL+"/dashboard")

and also you can use this in
API like this:- I.sendGetRequest(envURL[envURL.env].api.REST_API_ENDPOINT+`/api/...`)

"process.envConfig.e2e_env" is for set envType from node script like
for Windows :- "(SET e2e_env=test) && codeceptjs run --steps"" "
or for linux :- "(e2e_env=test) && codeceptjs run --steps "
for pipeline :- "(e2e_env=test) && npm run test:e2e"
"process.envConfig.AppEnv" is use for set envType from your system variable or test is by default. */

//All the urls should be encoded by URL_ENcode.js

const envConfig = {

  env: process.env.E2E_ENV || 'hint-g1ds',

  dev: {
    web: {
      HOST_URL: 'https://gdp-client01-brp-g1ga-media-ecosystem.az.brp.gdpdentsu.net/productivity-manager',
    },
    server: {
      serverURL: 'https://gdp-client01-brp-g1ga-media-ecosystem.az.brp.gdpdentsu.net/productivity-manager',
    },
  },

  test: {
    web: {
      HOST_URL: 'https://gdp-client01-brp-g1ga-media-ecosystem.az.brp.gdpdentsu.net/productivity-manager',
    },
    server: {
      serverURL: 'https://gdp-client01-brp-g1ga-media-ecosystem.az.brp.gdpdentsu.net/productivity-manager',
    },
  },

  'int-g1ds': {
    web: {
      HOST_URL: 'https://gdp-client01-brp-g1ga-media-ecosystem.az.brp.gdpdentsu.net/productivity-manager',
    },
    server: {
      serverURL: 'https://gdp-client01-brp-g1ga-media-ecosystem.az.brp.gdpdentsu.net/productivity-manager',
    },
    appName: 'Productivity Manager',
    market: 'United States of America (the)',
    client: 'Abbott',
  },

  'stg-g1ds': {
    web: {
      HOST_URL: 'https://gdp-client01-brp-g1ga-media-ecosystem.az.brp.gdpdentsu.net/productivity-manager',
    },
    server: {
      serverURL: 'https://gdp-client01-brp-g1ga-media-ecosystem.az.brp.gdpdentsu.net/productivity-manager',
    },
    appName: 'Client Portal',
    market: 'France',
    client: 'Abbott',
  },

  'hint-g1ds': {
    web: {
      HOST_URL: 'https://gdp-client01-brp-g1ga-media-ecosystem.az.brp.gdpdentsu.net/productivity-manager',
    },
    server: {
      serverURL: 'https://gdp-client01-brp-g1ga-media-ecosystem.az.brp.gdpdentsu.net/productivity-manager',
    },
    appName: 'Client Portal',
    market: 'France',
    client: 'General Motors',
  },
};

module.exports = envConfig;
