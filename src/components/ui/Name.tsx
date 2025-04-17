'use client';
import React from 'react';
import { LinkPreview } from '@/components/ui/link-preview';

export default function Name() {
    return (
        <h1 className="bg-opacity-50 bg-gradient-to-b from-[rgb(var(--accent-blue-light))] to-[rgb(var(--accent-blue-dark))] bg-clip-text text-center text-4xl font-bold text-transparent md:text-7xl">
            <LinkPreview
                url="https://x.com/zytact/"
                className="bg-opacity-50 bg-clip-text text-center text-4xl font-bold text-transparent hover:text-[rgb(var(--accent-blue))] md:text-7xl"
            >
                @zytact
            </LinkPreview>{' '}
            <br /> Arnab Chakraborty
        </h1>
    );
}
