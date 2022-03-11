import { useMsal, useIsAuthenticated } from "@azure/msal-react";
import { getMsToken } from "../utils/azureAuth";
import { makeUrl } from "../utils/apiUtils";

type HookData = {
  recordResponse: () => Promise<Response>;
};

const useEngagement = (pid: any, response: any): HookData => {
  const { instance } = useMsal();
  // record user Engagement response
  const recordResponse = async () => {
    let dateResponded = new Date().toISOString;
    const payload = {
      response: response,
      dateResponded: dateResponded,
    };

    const url = makeUrl(`/api/engagements/${pid}/`);
    const resp = await fetch(url, {
      method: "PATCH",
      body: JSON.stringify(payload),
      headers: {
        Authorization: `Bearer ${await getMsToken(instance)}`,
        "Content-Type": "application/json",
      },
    });
    console.log(resp);

    return resp;
  };

  return {
    recordResponse: recordResponse,
  };
};

export default useEngagement;
