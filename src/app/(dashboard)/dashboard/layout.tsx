export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border bg-card px-4 py-3">
        <h1 className="text-lg font-semibold text-foreground">
          Bulltrack Pro — Resultados de clasificación
        </h1>
      </header>
      <main className="p-4">{children}</main>
    </div>
  );
}
