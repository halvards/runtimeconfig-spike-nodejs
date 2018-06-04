# runtimeconfig-spike-nodejs

Spike of storing and retrieving values from the
[https://cloud.google.com/deployment-manager/runtime-configurator/reference/rest/](Google Cloud Runtime Configuration API)
v1beta1 using Node.js and TypeScript.

## Authentication

Use [Application Default Credentials](https://cloud.google.com/docs/authentication/production):

    gcloud auth application-default login

or

    export GOOGLE_APPLICATION_CREDENTIALS=$(pwd)/service-account.json

References:

- [Runtime Configurator Fundamentals](https://cloud.google.com/deployment-manager/runtime-configurator/)
- [Setting and Getting Data](https://cloud.google.com/deployment-manager/runtime-configurator/set-and-get-variables)
- [Google Cloud Runtime Configuration API](https://cloud.google.com/deployment-manager/runtime-configurator/reference/rest/)
- [IAM Policy](https://cloud.google.com/deployment-manager/runtime-configurator/reference/rest/v1beta1/Policy)
- [Google APIs Node.js Client](https://github.com/google/google-api-nodejs-client/blob/master/README.md)
