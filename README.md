# runtimeconfig-spike-nodejs

Spike of storing and retrieving values from the
[https://cloud.google.com/deployment-manager/runtime-configurator/reference/rest/](Google Cloud Runtime Configuration API)
v1beta1 using Node.js and TypeScript.

## Authentication

Use [Application Default Credentials](https://cloud.google.com/docs/authentication/production):

    gcloud auth application-default login

(This stores a credentials file in `${HOME}/.config/gcloud/application_default_credentials.json`.)

or

    export GOOGLE_APPLICATION_CREDENTIALS=$(pwd)/service-account.json

References:

- [Runtime Configurator Fundamentals](https://cloud.google.com/deployment-manager/runtime-configurator/)
- [Setting and Getting Data](https://cloud.google.com/deployment-manager/runtime-configurator/set-and-get-variables)
- [Google Cloud Runtime Configuration API](https://cloud.google.com/deployment-manager/runtime-configurator/reference/rest/)
- [Cloud Identity and Access Management (IAM) Overview](https://cloud.google.com/iam/docs/overview)
- [Understanding Roles](https://cloud.google.com/iam/docs/understanding-roles)
- [Runtime Configurator Access Control Options](https://cloud.google.com/deployment-manager/runtime-configurator/access-control)
- [IAM Policy](https://cloud.google.com/deployment-manager/runtime-configurator/reference/rest/v1beta1/Policy)
- [Google APIs Node.js Client](https://github.com/google/google-api-nodejs-client/blob/master/README.md)
- [Google Auth Library](https://github.com/google/google-auth-library-nodejs/blob/master/README.md)
