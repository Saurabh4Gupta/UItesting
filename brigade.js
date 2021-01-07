const { Job, Group } = require('brigadier');
const devops = require('devops-brigade');

async function getValues(teamEnv, project){
  const env1 = devops.Utilities.getCoreEnvFromTeamEnv(teamEnv);
  const values = {
    node_env: `${project.secrets[`${teamEnv}_node_env`]}`,
    is_bypass_security: `${project.secrets[`${teamEnv}_is_bypass_security`]}`,
    port: 80,
    teamEnv,
    image: {
      tag: '${APP_VER}',
      repository: `${project.secrets.app_container_reg}/${project.secrets.app_name}`,
    },
    apollo_graphql_uri: `https://${project.secrets[`${teamEnv}_sharedEnvGA`]}-kong-proxy.az.${project.secrets[`${teamEnv}-target_name`]}.gdpdentsu.net/prodman`,
    apollo_subscription_uri: `wss://${project.secrets[`${teamEnv}_sharedEnvGA`]}-kong-proxy.az.${project.secrets[`${teamEnv}-target_name`]}.gdpdentsu.net/prodman`,
    okta_issuer: project.secrets[`${teamEnv}_okta_issuer`],
    client_id: project.secrets[`${teamEnv}_client_id`],
    skip_preflight_check: project.secrets[`${teamEnv}_skip_preflight_check`],
    ingress: {
      class: 'nginx',
      enabled: true,
      hosts: [`${teamEnv}-${project.secrets.app_name}.az.${project.secrets[`${teamEnv}-target_name`]}.gdpdentsu.net`],
      tls: [
        {
          secretName: `${teamEnv}-${project.secrets.app_name}.az.${project.secrets[teamEnv + "-target_name"]}.gdpdentsu.net`,
          hosts: [
            `${teamEnv}-${project.secrets.app_name}.az.${project.secrets[teamEnv + "-target_name"]}.gdpdentsu.net`,
          ],
        },
      ]
    },
  };
  
  if (devops.MEUtilities.isRouteToLive(teamEnv)) {
    values.apollo_graphql_uri =  `https://ga-api-gw.wal.${env1}.az.eu.mediaecosystem.io/prodman`,
    values.apollo_subscription_uri = `wss://ga-api-gw.wal.${env1}.az.eu.mediaecosystem.io/prodman`;
    values.ingress.hosts = [`productivity-ui.wal.${env1}.az.eu.mediaecosystem.io`];
    values.ingress.class = "external";
    values.ingress.tls = [{
      secretName: `productivity-ui.wal.${env1}.az.eu.mediaecosystem.io`,
      hosts: [
        `productivity-ui.wal.${env1}.az.eu.mediaecosystem.io`,
      ],
    }, ];
  }

  if (devops.MEUtilities.isRouteToPitch(teamEnv)) {
    values.ingress.class = "external";
  
  }

  if (devops.MEUtilities.isRouteToHotfix(teamEnv)) {
    values.apollo_graphql_uri =  `https://${project.secrets[`${teamEnv}_sharedEnvGA`]}-kong-proxy.az.${project.secrets[`${teamEnv}-target_name`]}.gdpdentsu.net/prodman`;
    values.apollo_subscription_uri = `wss://${project.secrets[`${teamEnv}_sharedEnvGA`]}-kong-proxy.az.${project.secrets[`${teamEnv}-target_name`]}.gdpdentsu.net/prodman`;
  }

  return values;
}

devops.MEPipelineFactory.createJSPipeline({
  deployValuesProvider: getValues,
  useACR: true,
  buildOptions: {
    packageManager: "npm",
    buildCommand: "npm run build:prod",
  },
  unitTestOptions: {
   enabled: false,
   command: "npm run test:c",
   coverageReport: "coverage"
 },
  sonarOptions: {
    enabled: false,
  },
  componentTestOptions: {
   enabled: false,
  },
  meFunctions: ["ga"],
  skipTest: true,
});