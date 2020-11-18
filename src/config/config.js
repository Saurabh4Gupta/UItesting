const envVars = process.env;
console.log('envaaaaa', envVars);
const config = {
  uri: `${envVars.REACT_APP_APOLLO_GRAPHQL_URI}/graphql`,
  sUri: `${envVars.REACT_APP_APOLLO_SUBSCRIPTION_URI}/graphql`,
  okta: {
    issuer: envVars.REACT_APP_OKTA_ISSUER,
    redirect_uri: `${window.location.origin}/implicit/callback`,
    client_id: envVars.REACT_APP_CLIENT_ID,
  },
  cmsURL: envVars.REACT_APP_CMS_URL,
  isBypassSecurity: envVars.REACT_APP_IS_BYPASS_SECURITY,
  isEmbeddedApp: envVars.REACT_APP_FLAGIT_IS_EMBEDDED_APP,
  appOrigin: envVars.REACT_APP_APPORIGIN,
};
export default config;
