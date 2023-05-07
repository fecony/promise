export function config() {
  const clientID = process.env['GITHUB_CLIENT_ID'];
  const clientSecret = process.env['GITHUB_CLIENT_SECRET'];

  if (!clientID) {
    throw new Error('Missing GITHUB_CLIENT_ID environment variable.');
  }

  if (!clientSecret) {
    throw new Error('Missing GITHUB_CLIENT_SECRET environment variable.');
  }

  return { clientID, clientSecret, scope: ['user:email'] };
}

export async function getUserFields(context: any, args: any) {
  const { username, emails } = args.profile;
  const [email] = emails;

  return {
    username,
    email: email?.value || null,
  };
}
