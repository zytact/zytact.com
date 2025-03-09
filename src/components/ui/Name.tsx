'use client';
import React from 'react';
import { LinkPreview } from '@/components/ui/link-preview';

export default function Name() {
    return (
        <h1 className="bg-opacity-50 bg-linear-to-b from-neutral-50 to-neutral-400 bg-clip-text text-center text-4xl font-bold text-transparent md:text-7xl">
            <LinkPreview
                url="https://x.com/zytact/"
                className="bg-opacity-50 bg-clip-text text-center text-4xl font-bold text-transparent md:text-7xl dark:text-neutral-300"
            >
                @zytact
            </LinkPreview>{' '}
            <br /> Arnab Chakraborty
        </h1>
    );
}
