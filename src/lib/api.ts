const baseURL =
  "https://hc-county-data-stack.netlify.app/api/v1/content_types/bounce_house_vendors/entries";

async function get<T>(): Promise<T> {
  const today = new Date();
  today.setUTCHours(0, 0, 0, 0);

  const params = new URLSearchParams({
    asc: "title",
    query: JSON.stringify({
      $or: [
        {
          expiration_date: {
            $gte: today.toISOString(),
          },
        },
        {
          expiration_date: {
            $exists: false,
          },
        },
      ],
    }),
  });

  const response = await fetch(`${baseURL}?${params}`);

  if (!response.ok) {
    throw new Error(`HTTP ${response.status}: ${response.statusText}`);
  }
  const data = await response.json();

  return data as T;
}

const api = { get };

export default api;
