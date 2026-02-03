import type { AuthResponse, LoginCredentials } from "@/types/auth";
import { apiFetch } from "./api";

export const authService = {
  login: (credentials: LoginCredentials) =>
    apiFetch<AuthResponse>("/auth/login", {
      method: "POST",
      body: JSON.stringify(credentials),
    }),
};
