import "./globals.css";

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
      <body className="bg-background text-white antialiased">
        {children}
      </body>
    </html>
  );
}
