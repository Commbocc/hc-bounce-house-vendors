const baseURL =
  "https://hc-county-data-stack.netlify.app/api/v1/content_types/bounce_house_vendors";

async function get<T>(path: string): Promise<T> {
  const response = await fetch(`${baseURL}${path}`);

  if (!response.ok) {
    throw new Error(`HTTP ${response.status}: ${response.statusText}`);
  }

  return response.json() as Promise<T>;
}

const api = { get };

export default api;
