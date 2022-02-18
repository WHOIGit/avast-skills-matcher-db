export const API_BASE = process.env.NEXT_PUBLIC_API_HOST;

// standard no Auth fetcher for useSWR
export function fetcher(url: string) {
  return fetch(url).then((r) => r.json());
}

export function makeUrl(endpoint: string): string {
  return API_BASE + endpoint;
}
