import { createClient } from "@sanity/client";

export const client = createClient({
  projectId: "k8177nxd", // same as sanity.config.ts
  dataset: "production",
  useCdn: true,
  apiVersion: "2024-01-01",
});
