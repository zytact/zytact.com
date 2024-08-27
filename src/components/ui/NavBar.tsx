import Link from 'next/link';

export default function NavBar({ className }: { className?: string }) {
    return (
        <nav
            className={`${className} flex gap-12 bg-gradient-to-b from-neutral-50 to-neutral-400 bg-clip-text font-medium text-transparent`}
        >
            <Link href="/">Home</Link>
            <Link href="/skills">Skills</Link>
            <Link href="/projects">Projects</Link>
        </nav>
    );
}
