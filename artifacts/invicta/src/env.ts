const SITE_URL = import.meta.env.VITE_SITE_URL || "http://localhost:3000";

export const env = {
  NODE_ENV: import.meta.env.MODE as "development" | "test" | "production",
  VITE_SITE_URL: SITE_URL,
  NEXT_PUBLIC_SITE_URL: SITE_URL,
};
