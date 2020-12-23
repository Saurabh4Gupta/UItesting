const envConfig = {

    env: process.env.E2E_ENV || 'brp',

    dev: {
        web: {
            HOST_URL: 'https://www.google.com/',
        },
        server: {
            serverURL: 'http://mappingui01-dev-dan-mapping-svr.az.mapping.gdpdentsu.net/graphql',
        },
    },

    test: {
        web: {
            HOST_URL: 'https://www.google.com/',
        },
        server: {
            serverURL: 'http://mappingui01-test-dan-mapping-svr.az.mapping.gdpdentsu.net/graphql',
        },
    },

    'int-g1ds': {
        web: {
            HOST_URL: 'http://gdp-client01-int-dentsu-platform-client.az.gdpintegration.gdpdentsu.net',
        },
        server: {
            serverURL: 'https://shared01-int-g1ds-kong-proxy.az.eu-az-int-wal.gdpdentsu.net/mapping/graphql',
        },
        marketCode: "",
        clientCode: "",
        tenantId: "",
        subTenantId: "",
        CMSCollection:"",
        market: 'General Motors France',
        client: 'General Motors'
    },

    'stg-g1ds': {
        web: {
            HOST_URL: 'http://gdp-client01-stg-dentsu-platform-client.az.gdpintegration.gdpdentsu.net',
        },
        server: {
            serverURL: 'https://shared01-stg-g1ds-kong-proxy.az.eu-az-stg-wal.gdpdentsu.net/mapping/graphql',
        },
        marketCode: "",
        clientCode: "",
        tenantId: "",
        subTenantId: "",
        CMSCollection:"",
        market: 'General Motors United States of America (the)',
        client: 'General Motors',
    },

    brp: {
        web: {
            HOST_URL: 'https://gdp-client01-brp-g1ga-media-ecosystem.az.brp.gdpdentsu.net/productivity-manager',
        },
        server: {
            serverURL: 'http://mappingui01-dev-dan-mapping-svr.az.mapping.gdpdentsu.net/graphql',
        },
    },

};

module.exports = envConfig;
