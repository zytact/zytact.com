import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Analytics } from '@vercel/analytics/react';
import './globals.css';
import NavBar from '@/components/ui/NavBar';
import { unstable_ViewTransition as ViewTransition } from 'react';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: {
        template: '%s | Arnab Chakraborty (@zytact)',
        default: 'Arnab Chakraborty (@zytact)',
    },
    description: 'watashi wa enjinia desu',
    metadataBase: new URL(`${process.env.NEXT_PUBLIC_BASE_URL}`),
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <Analytics />
            <script
                defer
                src="https://static.cloudflareinsights.com/beacon.min.js"
                data-cf-beacon='{"token": "0c1d64d1a6724f5383654f258ebaf4e4"}'
            ></script>
            <body className={inter.className}>
                <div className="relative z-50 flex w-full flex-col items-center justify-center px-4 pt-4">
                    <NavBar />
                </div>
                <ViewTransition name="page">{children}</ViewTransition>
            </body>
        </html>
    );
}
