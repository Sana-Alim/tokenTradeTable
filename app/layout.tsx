import "./globals.css";
import { Providers } from "./providers";

export const metadata = { title: "Token Trading Table", description: "Axiom Trade Token Table Clone" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gray-950 text-white">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}