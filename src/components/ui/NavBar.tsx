import Link from 'next/link';

export default function NavBar({ className }: { className?: string }) {
    return (
        <nav className={`${className} flex gap-10 font-medium`}>
            <Link href="/">Home</Link>
            <Link href="/skills">Skills</Link>
            <Link href="/projects">Projects</Link>
        </nav>
    );
}
