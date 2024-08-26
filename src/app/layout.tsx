import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

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
            <body className={inter.className}>{children}</body>
        </html>
    );
}
