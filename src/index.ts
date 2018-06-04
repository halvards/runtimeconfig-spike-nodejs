import {google} from 'googleapis';
import { v4 as uuid } from 'uuid';

async function main() {
  const client = await google.auth.getClient({
    scopes: [
      'https://www.googleapis.com/auth/cloud-platform',
      'https://www.googleapis.com/auth/cloudruntimeconfig'
    ]
  });
  const projectId = await google.auth.getDefaultProjectId();
  const runtimeconfig = google.runtimeconfig({
    version: 'v1beta1',
    auth: client
  });
  const configShortName = uuid();
  console.log(`Config   short name: ${configShortName}`);
  const config_create_response =
    await runtimeconfig.projects.configs.create({
      parent: `projects/${projectId}`,
      requestId: `${configShortName}-config-create`,  // optional
      requestBody: {
        name: `projects/${projectId}/configs/${configShortName}`,
        description: 'Configuration created via API'
      }
    });
  const configFullName = config_create_response.data.name;
  console.log(`Config    full name: ${configFullName}`);

  const variableShortName = 'myvar1'
  console.log(`Variable short name: ${variableShortName}`);
  const variable_create_response =
    await runtimeconfig.projects.configs.variables.create({
      parent: configFullName,
      requestId: `${configShortName}-variable-create`,  // optional
      requestBody: {
        name: `${configFullName}/variables/${variableShortName}`,
        text: uuid() // UTF-8 encoded string (alternative to value)
        // value:  // Base64 encoded string (alternative to text)
      }
    });
  const variableFullName = variable_create_response.data.name;
  console.log(`Variable  full name: ${variableFullName}`);

  const variable_get_response =
    await runtimeconfig.projects.configs.variables.get({
      name: variableFullName
    });
  console.log(`Variable text value: ${variable_get_response.data.text}`);
}

main().catch(console.error);
