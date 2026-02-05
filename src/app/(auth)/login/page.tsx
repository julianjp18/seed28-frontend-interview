"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/hooks";
import { Skeleton } from "@/components/atoms";

export default function LoginPage() {
  const router = useRouter();
  const { login } = useAuth();
  const [email, setEmail] = useState("admin@seed28.com");
  const [password, setPassword] = useState("seed28");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      await login({ email, password });
      router.push("/dashboard");
      router.refresh();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Error al iniciar sesión");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-[#F5F5F5] p-4">
      <form
        onSubmit={handleSubmit}
        className="relative w-full max-w-sm rounded-lg border border-border bg-card p-6 shadow-sm"
        aria-busy={loading}
      >
        <h1 className="mb-6 text-center text-2xl font-semibold text-foreground">
          Bulltrack Pro
        </h1>
        <p className="mb-4 text-center text-sm text-muted-foreground">
          Inicia sesión para acceder al dashboard
        </p>
        {loading ? (
          <div
            className="space-y-4"
            aria-hidden
          >
            <div className="space-y-4">
              <Skeleton className="h-10 w-full rounded-md bg-[#E0E0E0]" />
              <Skeleton className="h-10 w-full rounded-md bg-[#E0E0E0]" />
            </div>
            <Skeleton className="mt-6 h-10 w-full rounded-md bg-[#E0E0E0]" />
          </div>
        ) : (
          <>
            <div className="space-y-4">
              <div>
                <label htmlFor="email" className="mb-1 block text-sm font-medium">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                  required
                  disabled={loading}
                />
              </div>
              <div>
                <label htmlFor="password" className="mb-1 block text-sm font-medium">
                  Contraseña
                </label>
                <input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                  required
                  disabled={loading}
                />
              </div>
            </div>
          </>
        )}
        {error && (
          <p className="mt-3 text-sm text-red-600" role="alert">
            {error}
          </p>
        )}
        <button
          type="submit"
          disabled={loading}
          className="mt-6 w-full rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90 disabled:opacity-50"
        >
          {loading ? "Entrando…" : "Entrar"}
        </button>
      </form>
    </div>
  );
}
