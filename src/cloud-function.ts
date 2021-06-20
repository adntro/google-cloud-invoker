interface InvokeFunctionParams {
  projectId?: string;
  region?: string;
}

export function composeFunctionUrl(
  functionName: string,
  extra?: InvokeFunctionParams
): string {
  extra = {
    projectId: process.env.PROJECT_ID,
    region: 'europe-west1',
    ...(extra || {}),
  };
  if (!functionName) throw new Error('No function name provided');
  if (!extra.projectId)
    throw new Error('No projectId provided (or via PROJECT_ID)');
  return `https://${extra.region}-${extra.projectId}.cloudfunctions.net/${functionName}`;
}
