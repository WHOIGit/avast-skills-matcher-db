const AZURE_SCOPE_ID = process.env.NEXT_PUBLIC_AZURE_SCOPE_ID;

export async function getMsToken(instance: any) {
  let accessToken;
  // get token from Azure AD for backen API
  // required scope format: "<backend_applicationid>/read" (DON'T USE "api://" starter from MS docs)
  const response = await instance.acquireTokenSilent({
    scopes: [`${AZURE_SCOPE_ID}/read`],
  });

  accessToken = response.accessToken;
  return accessToken;
}

// async fetcher function for useSWR hook using token from MSAL
export async function fetcherWithToken(url: string, instance: any) {
  return fetch(url, {
    headers: {
      Authorization: `Bearer ${await getMsToken(instance)}`,
    },
  }).then((r) => r.json());
}
