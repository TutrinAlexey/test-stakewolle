import type { Metadata, Viewport } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";
import { CssBaseline } from "@mui/material";

const roboto = Roboto({weight: ['400', '700'], subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Test Stakewolle",
  description: "Test Stakewolle",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${roboto.className} body-container`}>
        <AppRouterCacheProvider>
          <CssBaseline />
          {children}
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
