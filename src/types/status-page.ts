export type ServiceHealthStatus =
  | "operational"
  | "degraded"
  | "maintenance"
  | "planned";

export type ServiceHealthCategory = "website" | "api" | "data" | "integration";

export type ServiceHealthComponent = {
  id: string;
  name: string;
  category: ServiceHealthCategory;
  status: ServiceHealthStatus;
  description: string;
};
