import {google} from 'googleapis';
import {v4 as uuid} from 'uuid';

async function main() {
  const client = await google.auth.getClient({
    scopes: [
      'https://www.googleapis.com/auth/cloud-platform',
      'https://www.googleapis.com/auth/cloudruntimeconfig'
    ]
  });
  const projectId = await google.auth.getDefaultProjectId();
  const runtimeconfig =
      google.runtimeconfig({version: 'v1beta1', auth: client});
  const configShortName = uuid();
  console.log(`Config   short name: ${configShortName}`);
  const configCreateResponse = await runtimeconfig.projects.configs.create({
    parent: `projects/${projectId}`,
    requestId: `${configShortName}-config-create`,  // optional
    requestBody: {
      name: `projects/${projectId}/configs/${configShortName}`,
      description: 'Configuration created via API'
    }
  });
  const configFullName = configCreateResponse.data.name;
  console.log(`Config    full name: ${configFullName}`);

  const serviceAccountName =
      `runtimeconfig-spike@${projectId}.iam.gserviceaccount.com`;
  const setIamPolicyResponse =
      await runtimeconfig.projects.configs.setIamPolicy({
        resource_: configFullName,
        requestBody: {
          policy: {
            bindings: [{
              role: 'roles/viewer',
              members: [`serviceAccount:${serviceAccountName}`]
            }]
          }
        }
      });

  const getIamPolicyResponse =
      await runtimeconfig.projects.configs.getIamPolicy(
          {resource_: configFullName});
  console.log(JSON.stringify(getIamPolicyResponse.data));

  const variableShortName = 'myvar1';
  console.log(`Variable short name: ${variableShortName}`);
  const variableCreateResponse =
      await runtimeconfig.projects.configs.variables.create({
        parent: configFullName,
        requestId: `${configShortName}-variable-create`,  // optional
        requestBody: {
          name: `${configFullName}/variables/${variableShortName}`,
          text: uuid()  // UTF-8 encoded string (alternative to value)
          // value:  // Base64 encoded string (alternative to text)
        }
      });
  const variableFullName = variableCreateResponse.data.name;
  console.log(`Variable  full name: ${variableFullName}`);

  const variableGetResponse =
      await runtimeconfig.projects.configs.variables.get(
          {name: variableFullName});
  console.log(`Variable text value: ${variableGetResponse.data.text}`);
}

main().catch(console.error);
