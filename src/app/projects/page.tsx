import { LinkPreview } from '@/components/ui/link-preview';
import NavBar from '@/components/ui/NavBar';
import { useId } from 'react';
import type { Metadata } from 'next';
import Background from '@/components/ui/Background';

export const metadata: Metadata = {
    title: 'Projects',
    description: 'watashi wa enjinia desu',
};

export default function Projects() {
    return (
        <main className="min-h-screen overflow-auto">
            <div className="relative flex h-full w-full flex-col items-center justify-center overflow-hidden rounded-md bg-black/[0.96] bg-white/[0.02] antialiased">
                <Background />
                <NavBar className="mt-4" />
                <div className="px-5 py-20 lg:px-0 lg:py-60">
                    <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-3 md:gap-2 lg:grid-cols-4">
                        {grid.map((project) => (
                            <div
                                key={project.title}
                                className="relative overflow-hidden rounded-3xl bg-gradient-to-b from-neutral-900 to-neutral-950 p-6"
                            >
                                <Grid size={20} />
                                <p className="relative z-20 text-center text-base font-bold text-white">
                                    <LinkPreview url={project.link}>
                                        {project.title}
                                    </LinkPreview>
                                </p>
                                <p className="relative z-20 mt-4 text-center text-base font-normal text-neutral-400">
                                    {project.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </main>
    );
}

const grid = [
    {
        title: 'ExifTuner',
        description: 'An Web App to modify Exif Data in Images using Next.js.',
        link: 'https://exiftuner.zytact.in/',
    },
    {
        title: 'Jiyu',
        description:
            'A simple anime list tracker for your phone using Flutter. This app uses the Jikan API (unofficial Myanimelist API) to fetch images.',
        link: 'https://github.com/zytact/Jiyu',
    },
    {
        title: 'Sorting Visualizer',
        description: 'A simple sorting visualizer made with Python.',
        link: 'https://github.com/zytact/Sorting-Visualizer',
    },
    {
        title: 'Informer Python',
        description: 'Whatsapp online tracker written in Python.',
        link: 'https://github.com/zytact/Informer-python',
    },
    {
        title: 'No Save Chat',
        description:
            'An app to help you quickly start a whatsapp chat without saving phone number using Flutter.',
        link: 'https://github.com/zytact/No-Save-Chat',
    },
];

const Grid = ({ pattern, size }: { pattern?: number[][]; size?: number }) => {
    const p = pattern ?? [
        [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
        [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
        [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
        [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
        [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
    ];
    return (
        <div className="pointer-events-none absolute left-1/2 top-0 -ml-20 -mt-2 h-full w-full [mask-image:linear-gradient(white,transparent)]">
            <div className="absolute inset-0 bg-gradient-to-r from-zinc-100/30 from-zinc-900/30 to-zinc-300/30 to-zinc-900/30 opacity-100 [mask-image:radial-gradient(farthest-side_at_top,white,transparent)]">
                <GridPattern
                    width={size ?? 20}
                    height={size ?? 20}
                    x="-12"
                    y="4"
                    squares={p}
                    className="absolute inset-0 h-full w-full fill-black/10 fill-white/10 stroke-black/10 stroke-white/10 mix-blend-overlay"
                />
            </div>
        </div>
    );
};

function GridPattern({ width, height, x, y, squares, ...props }: any) {
    const patternId = useId();

    return (
        <svg aria-hidden="true" {...props}>
            <defs>
                <pattern
                    id={patternId}
                    width={width}
                    height={height}
                    patternUnits="userSpaceOnUse"
                    x={x}
                    y={y}
                >
                    <path d={`M.5 ${height}V.5H${width}`} fill="none" />
                </pattern>
            </defs>
            <rect
                width="100%"
                height="100%"
                strokeWidth={0}
                fill={`url(#${patternId})`}
            />
            {squares && (
                <svg x={x} y={y} className="overflow-visible">
                    {squares.map(([x, y]: any) => (
                        <rect
                            strokeWidth="0"
                            key={`${x}-${y}`}
                            width={width + 1}
                            height={height + 1}
                            x={x * width}
                            y={y * height}
                        />
                    ))}
                </svg>
            )}
        </svg>
    );
}
