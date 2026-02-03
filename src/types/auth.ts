/**
 * Tipos para autenticación JWT (Bulltrack Pro)
 */

export interface LoginCredentials {
  email: string;
  password: string;
}

export interface AuthResponse {
  access_token: string;
  user: {
    id: number;
    email: string;
  };
}

export interface User {
  id: number;
  email: string;
}
