# runtimeconfig-spike-nodejs

Spike of storing and retrieving values from the
[https://cloud.google.com/deployment-manager/runtime-configurator/reference/rest/](Google Cloud Runtime Configuration API)
v1beta1 using Node.js and TypeScript.

## Authentication

    export GOOGLE_APPLICATION_CREDENTIALS=$(pwd)/service-account.json

References:

- [Runtime Configurator Fundamentals](https://cloud.google.com/deployment-manager/runtime-configurator/)
- [Setting and Getting Data](https://cloud.google.com/deployment-manager/runtime-configurator/set-and-get-variables)
