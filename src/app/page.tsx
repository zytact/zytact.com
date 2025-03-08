import React from 'react';
import { Spotlight } from '@/components/ui/Spotlight';
import { Description } from '@/components/ui/Description';
import Name from '@/components/ui/Name';
import { ProfileLinks } from '@/components/ui/ProfileLinks';
import NavBar from '@/components/ui/NavBar';
import Image from 'next/image';
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
                    className="-top-40 left-0 md:-top-20 md:left-60"
                    fill="white"
                />

                <NavBar className="mt-4" />
                <div className="relative z-10 mx-auto mt-12 flex w-full max-w-7xl flex-col items-center justify-center p-4 lg:mt-16">
                    <div className="m-3 h-20 w-20 p-0 lg:h-40 lg:w-40">
                        <Image
                            className="rounded-full"
                            src="https://utfs.io/f/fb12dac7-f46d-4a6c-a557-a09b337c4f47-23l1o.jpg"
                            alt="Self"
                            width={120}
                            height={120}
                        />
                    </div>

                    <Name />
                    <div className="mx-auto mb-0 mt-4 max-w-lg text-center">
                        <Description />
                    </div>

                    <ProfileLinks className="mt-24 p-0" />
                </div>
            </main>
        </div>
    );
}
