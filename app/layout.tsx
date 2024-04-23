import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import './globals.css';
import { ClerkProvider } from '@clerk/nextjs';
import {shadesOfPurple} from "@clerk/themes";

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-poppins',
});

export const metadata: Metadata = {
  title: 'Evently',
  description:
    'Evently is a platform for event organizers to create and manage events.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider appearance={{
      baseTheme: shadesOfPurple
    }}>
      <html lang="en">
        <body className={poppins.className}>{children}</body>
      </html>
    </ClerkProvider>

  );
}
