import React from 'react';
import { Spotlight } from '@/components/ui/Spotlight';
import { Description } from '@/components/ui/Description';
import Name from '@/components/ui/Name';
import { ProfileLinks } from '@/components/ui/ProfileLinks';
import NavBar from '@/components/ui/NavBar';
import Squares from '@/components/ui/Squares';
import { Metadata } from 'next';

export const metadata: Metadata = {
    alternates: {
        canonical: `${process.env.NEXT_PUBLIC_BASE_URL}`,
    },
};

export default function Home() {
    return (
        <div className="min-h-screen">
            <Squares
                speed={0.2}
                className="fixed inset-0 z-0"
                direction="diagonal"
            />

            <main className="relative z-10 flex min-h-screen w-full flex-col items-center">
                <Spotlight
                    className="-top-20 left-0 md:-top-20 md:left-72"
                    fill="rgb(var(--accent-blue))"
                />

                <NavBar className="mt-4" />
                <div className="relative z-10 mx-auto mt-24 flex w-full max-w-7xl flex-col items-center justify-center p-4 lg:mt-48">
                    <Name />
                    <div className="mx-auto mt-4 mb-0 max-w-lg text-center">
                        <Description />
                    </div>

                    <ProfileLinks className="mt-24 p-0" />
                </div>
            </main>
        </div>
    );
}
