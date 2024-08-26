import React from 'react';
import { Spotlight } from '@/components/ui/Spotlight';
import { Description } from '@/components/ui/Description';
import Name from '@/components/ui/Name';
import { ProfileLinks } from '@/components/ui/ProfileLinks';
import NavBar from '@/components/ui/NavBar';
import SelfImage from '@/../public/self.jpg';
import Image from 'next/image';

export default function Home() {
    return (
        <main className="min-h-screen overflow-auto">
            <div className="relative flex h-full w-full flex-col items-center justify-center overflow-hidden rounded-md bg-black/[0.96] bg-white/[0.02] antialiased">
                <Spotlight
                    className="-top-40 left-0 md:-top-20 md:left-60"
                    fill="white"
                />

                <NavBar className="mt-4" />
                <div className="relative z-10 mx-auto mt-12 flex w-full max-w-7xl flex-col items-center justify-center p-4 lg:mt-16">
                    <div className="m-3 h-20 w-20 p-0 lg:h-40 lg:w-40">
                        <Image
                            className="rounded-full"
                            src={SelfImage}
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
            </div>
        </main>
    );
}
