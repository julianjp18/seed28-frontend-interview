export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-[#111714]">
      <main>{children}</main>
    </div>
  );
}
