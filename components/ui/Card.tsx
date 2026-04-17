export default function Card({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-white/5 backdrop-blur-glass border border-border rounded-2xl p-6 shadow-glow">
      {children}
    </div>
  );
}
