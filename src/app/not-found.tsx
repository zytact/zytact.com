import Link from 'next/link';
import NavBar from '@/components/ui/NavBar';
import Squares from '@/components/ui/Squares';

export default function NotFound() {
    return (
        <div className="min-h-screen">
            <Squares
                speed={0.2}
                className="fixed inset-0 z-0"
                direction="diagonal"
            />
            <main className="relative z-10 flex h-full w-full flex-col items-center justify-center overflow-hidden rounded-md bg-black/[0.96] bg-white/[0.02] antialiased">
                <NavBar className="mt-4" />
                <div className="flex flex-col items-center justify-center px-4 py-20 text-center lg:py-40">
                    <h1 className="text-4xl font-extrabold tracking-tight text-[rgb(var(--accent-blue))] sm:text-5xl">
                        404
                    </h1>
                    <p className="mt-4 text-lg text-[rgba(var(--accent-blue-light),0.8)]">
                        Page not found
                    </p>
                    <p className="mt-2 text-sm text-[rgba(var(--accent-blue),0.7)]">
                        The page you&apos;re looking for doesn&apos;t exist or
                        has been moved.
                    </p>
                    <Link
                        href="/"
                        className="mt-8 rounded-md border border-[rgb(var(--accent-blue))] bg-black px-4 py-2 text-sm font-medium text-[rgb(var(--accent-blue))] transition-colors hover:bg-[rgba(var(--accent-blue),0.1)]"
                    >
                        Return Home
                    </Link>
                </div>
            </main>
        </div>
    );
}
