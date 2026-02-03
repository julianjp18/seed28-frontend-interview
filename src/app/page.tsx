import Link from "next/link";

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-6 bg-background p-4">
      <h1 className="text-2xl font-semibold text-foreground">Bulltrack Pro</h1>
      <p className="max-w-md text-center text-muted-foreground">
        Plataforma de ranking genético bovino. Accede al dashboard de resultados
        de clasificación.
      </p>
      <Link
        href="/login"
        className="rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90"
      >
        Iniciar sesión
      </Link>
    </div>
  );
}
