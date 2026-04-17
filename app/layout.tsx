export const metadata = {
  title: "Zevyqon",
  description: "Systems that turn ideas into automated growth engines",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-[#0B0B0F] text-white antialiased">
        {children}
      </body>
    </html>
  );
}
