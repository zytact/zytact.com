import { LinkPreview } from '@/components/ui/link-preview';
import NavBar from '@/components/ui/NavBar';
import { useId } from 'react';
import type { Metadata } from 'next';
import Squares from '@/components/ui/Squares';

export const metadata: Metadata = {
    title: 'Projects',
    description: 'watashi wa enjinia desu',
    alternates: {
        canonical: `${process.env.NEXT_PUBLIC_BASE_URL}/projects`,
    },
};

export default function Projects() {
    return (
        <div className="min-h-screen">
            <Squares
                speed={0.2}
                className="fixed inset-0 z-0"
                direction="diagonal"
            />
            <main className="relative z-10 flex h-full w-full flex-col items-center justify-center overflow-hidden rounded-md bg-black/[0.96] bg-white/[0.02] antialiased">
                <NavBar className="mt-4" />
                <div className="px-5 py-20 lg:px-0 lg:py-60">
                    <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-3 md:gap-2 lg:grid-cols-4">
                        {grid.map((project) => (
                            <div
                                key={project.id}
                                className="relative overflow-hidden rounded-3xl border border-[rgb(var(--accent-blue-dark))] bg-gradient-to-b from-black to-neutral-950 p-6 transition-colors duration-300"
                            >
                                <Grid size={20} />
                                <p className="relative z-20 text-center text-base font-bold text-white">
                                    <LinkPreview url={project.link}>
                                        {project.title}
                                    </LinkPreview>
                                </p>
                                <p className="relative z-20 text-center text-base font-medium text-[rgba(var(--accent-blue),0.7)]">
                                    {project.year}
                                </p>
                                <p className="relative z-20 mt-4 text-center text-base font-normal text-[rgba(var(--accent-blue-light),0.8)]">
                                    {project.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </main>
        </div>
    );
}

interface Project {
    id: number;
    title: string;
    year: string;
    description: string;
    link: string;
}

const grid: Project[] = [
    {
        id: 1,
        title: 'Strokeshare',
        year: '2025',
        description:
            'A Whiteboarding app made with Next.js, Tailwind CSS, Shadcn UI, React Konva and Vitest.',
        link: 'https://strokeshare.zytact.com',
    },
    {
        id: 2,
        title: 'InvenTrack',
        year: '2025',
        description:
            'An inventory management system with the power of AI, made with Next.js, Tailwind CSS, Shadcn UI, TanStack Query, Clerk, Drizzle ORM, PostgreSQL and Gemini.',
        link: 'https://inventrack.zytact.com',
    },
    {
        id: 3,
        title: 'ExifTuner',
        year: '2024',
        description:
            'A Web App to modify Exif Data in Images using Next.js and Piexif JS.',
        link: 'https://exiftuner.zytact.com/',
    },
    {
        id: 4,
        title: 'Jiyu',
        year: '2020',
        description:
            'A simple anime list tracker for your phone using Flutter. This app uses the Jikan API (unofficial Myanimelist API) to fetch images.',
        link: 'https://github.com/zytact/Jiyu',
    },
    {
        id: 5,
        title: 'Sorting Visualizer',
        year: '2021',
        description: 'A simple sorting visualizer made with Python.',
        link: 'https://github.com/zytact/Sorting-Visualizer',
    },
    {
        id: 6,
        title: 'Informer Python',
        year: '2020',
        description: 'Whatsapp online tracker written in Python.',
        link: 'https://github.com/zytact/Informer-python',
    },
    {
        id: 7,
        title: 'No Save Chat',
        year: '2020',
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
        <div className="pointer-events-none absolute top-0 left-1/2 -mt-2 -ml-20 h-full w-full [mask-image:linear-gradient(white,transparent)]">
            <div className="absolute inset-0 bg-linear-to-r from-zinc-100/30 from-zinc-900/30 to-zinc-300/30 to-zinc-900/30 [mask-image:radial-gradient(farthest-side_at_top,white,transparent)] opacity-100">
                <GridPattern
                    width={size ?? 20}
                    height={size ?? 20}
                    x="-12"
                    y="4"
                    squares={p}
                    className="absolute inset-0 h-full w-full fill-black/10 fill-blue-600/40 stroke-black/10 stroke-blue-600/40 mix-blend-overlay lg:fill-blue-600/10 lg:stroke-blue-600/10"
                />
            </div>
        </div>
    );
};

function GridPattern({
    width,
    height,
    x,
    y,
    squares,
    ...props
}: {
    width: number;
    height: number;
    x: string;
    y: string;
    squares: number[][];
    className: string;
}) {
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
                    {squares.map(([x, y]: number[]) => (
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
