import Link from 'next/link';

export default function NavBar({ className }: { className?: string }) {
    return (
        <nav
            className={`${className} flex gap-12 bg-gradient-to-b from-[rgb(var(--accent-blue-light))] to-[rgb(var(--accent-blue-dark))] bg-clip-text font-medium text-transparent`}
        >
            <Link href="/">Home</Link>
            <Link href="/skills">Skills</Link>
            <Link href="/projects">Projects</Link>
        </nav>
    );
}
