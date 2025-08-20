import {type UserConfig, defineConfig} from '@kubb/core';
import {pluginOas} from '@kubb/plugin-oas';
import {pluginTs} from '@kubb/swagger-ts';
import {pluginClient} from '@kubb/swagger-client';
import {pluginTanstackQuerry} from '@kubb/swagger-tanstack-query';

export default config({
    root: '.',
    input: {
        path: './openapi/swagger.json',
    },
    output: {
        path: './src/gen',
    },
    plugins: [
        pluginOas(),
        pluginTs(),
        pluginClient({
            output: {
                path: './src/gen/client',
                barrelType: 'all',
            },
        }),
        pluginTanstackQuerry({
            output: {
                path: './src/gen/hooks',
                exportType: 'barrel',
            },
            framework: 'react',
            client: {
                importPath: '../gen/client',
            },
            dataReturnType: 'data',
            group: {
                type: 'tag',
                output: './src/gen/hooks/{{tag}}Hppks',
                exportAs: '{{tag}}Hooks',
            },
        }),
    ],
})

export default defineConfig(config{})