import {google} from 'googleapis';

async function main() {
  const client = await google.auth.getClient({
    scopes: [
      'https://www.googleapis.com/auth/cloud-platform',
      'https://www.googleapis.com/auth/devstorage.read_only'
    ]
  });
  const projectId = await google.auth.getDefaultProjectId();
  const storage = google.storage({
    version: 'v1',
    auth: client
  });
  const storage_object = await storage.objects.get({
    alt: 'media',
    bucket: `${projectId}-runtimeconfig-spike`,
    object: 'file.json'
  });
  console.log(storage_object.data);
}

main().catch(console.error);
