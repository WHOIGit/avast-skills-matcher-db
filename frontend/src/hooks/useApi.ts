import useSWR from "swr";

/**
 * Re-usable SWR api implementation.
 *
 * @param {string} url
 * @param {object} params
 * @returns object
 */
function useApi(url: string, params: {}) {
  let usp = new URLSearchParams(params);

  // Create a stable key for SWR
  usp.sort();
  let qs = usp.toString();

  let { data, error } = useSWR(`${url}?${qs}`);

  return {
    loading: !error && !data,
    data,
    error,
  };
}

export default useApi;
