export function composeCloudRunUrl(
  serviceName: string,
  projectHash: string | undefined = process.env.CLOUD_RUN_PROJECT_HASH,
  path = ''
): string {
  if (!projectHash) {
    throw new Error(
      'No projectHash provided directly or indirectly (via CLOUD_RUN_PROJECT_HASH env param)'
    );
  }
  return `https://${serviceName}-${projectHash}.a.run.app/${path}`;
}
