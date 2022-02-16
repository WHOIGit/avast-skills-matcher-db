// Config object to be passed to Msal on creation
export const msalConfig = {
  auth: {
    clientId: "78cfd052-b92f-4221-a336-83c37bec0d48",
    authority:
      "https://login.microsoftonline.com/d44c5cc6-d18c-46cc-8abd-4fdf5b6e5944",
    redirectUri: "https://skillsdb.whoi.edu",
    postLogoutRedirectUri: "https://skillsdb.whoi.edu",
  },
};

// Add here scopes for id token to be used at MS Identity Platform endpoints.
export const loginRequest = {
  scopes: ["User.Read"],
};
