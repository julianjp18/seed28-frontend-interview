"use client";

import { useCallback, useState } from "react";
import { authService } from "@/services/auth.service";
import type { LoginCredentials, User } from "@/types/auth";

const TOKEN_KEY = "bulltrack_token";
const USER_KEY = "bulltrack_user";

export function useAuth() {
  const [token, setTokenState] = useState<string | null>(null);
  const [user, setUser] = useState<User | null>(null);

  const setToken = useCallback((newToken: string | null, newUser: User | null) => {
    setTokenState(newToken);
    setUser(newUser);
    if (typeof window !== "undefined") {
      if (newToken) {
        localStorage.setItem(TOKEN_KEY, newToken);
        if (newUser) localStorage.setItem(USER_KEY, JSON.stringify(newUser));
      } else {
        localStorage.removeItem(TOKEN_KEY);
        localStorage.removeItem(USER_KEY);
      }
    }
  }, []);

  const login = useCallback(
    async (credentials: LoginCredentials) => {
      const res = await authService.login(credentials);
      setToken(res.access_token, res.user);
      return res;
    },
    [setToken]
  );

  const logout = useCallback(() => {
    setToken(null, null);
  }, [setToken]);

  const getStoredToken = useCallback(() => {
    if (typeof window === "undefined") return null;
    return localStorage.getItem(TOKEN_KEY);
  }, []);

  const getStoredUser = useCallback((): User | null => {
    if (typeof window === "undefined") return null;
    const raw = localStorage.getItem(USER_KEY);
    if (!raw) return null;
    try {
      return JSON.parse(raw) as User;
    } catch {
      return null;
    }
  }, []);

  return {
    token,
    user,
    login,
    logout,
    setToken,
    getStoredToken,
    getStoredUser,
    isAuthenticated: !!token,
  };
}
