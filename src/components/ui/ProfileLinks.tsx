'use client';
import Link from 'next/link';

export function ProfileLinks({ className }: { className?: string }) {
    return (
        <div
            className={`${className} m-40 flex justify-center gap-4 text-center`}
        >
            <TwitterLogo />
            <LinkedInLogo />
            <GitHubLogo />
            <InstagramLogo />
            <EmailLogo />
        </div>
    );
}

const TwitterLogo = () => {
    return (
        <Link
            href="https://x.com/zytact"
            target="_blank"
            rel="noreferrer noopener"
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="45"
                height="45"
                viewBox="0 0 50 50"
                className="fill-current text-neutral-400 hover:scale-75"
            >
                <title>Twitter/X</title>
                <path d="M 11 4 C 7.134 4 4 7.134 4 11 L 4 39 C 4 42.866 7.134 46 11 46 L 39 46 C 42.866 46 46 42.866 46 39 L 46 11 C 46 7.134 42.866 4 39 4 L 11 4 z M 13.085938 13 L 21.023438 13 L 26.660156 21.009766 L 33.5 13 L 36 13 L 27.789062 22.613281 L 37.914062 37 L 29.978516 37 L 23.4375 27.707031 L 15.5 37 L 13 37 L 22.308594 26.103516 L 13.085938 13 z M 16.914062 15 L 31.021484 35 L 34.085938 35 L 19.978516 15 L 16.914062 15 z"></path>
            </svg>
        </Link>
    );
};

const LinkedInLogo = () => {
    return (
        <Link
            href="https://www.linkedin.com/in/zytact/"
            target="_blank"
            rel="noreferrer noopener"
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="45"
                height="45"
                viewBox="0 0 50 50"
                className="fill-current text-neutral-400 hover:scale-75"
            >
                <title>LinkedIn</title>
                <path d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M17,20v19h-6V20H17z M11,14.47c0-1.4,1.2-2.47,3-2.47s2.93,1.07,3,2.47c0,1.4-1.12,2.53-3,2.53C12.2,17,11,15.87,11,14.47z M39,39h-6c0,0,0-9.26,0-10 c0-2-1-4-3.5-4.04h-0.08C27,24.96,26,27.02,26,29c0,0.91,0,10,0,10h-6V20h6v2.56c0,0,1.93-2.56,5.81-2.56 c3.97,0,7.19,2.73,7.19,8.26V39z"></path>
            </svg>
        </Link>
    );
};

const GitHubLogo = () => {
    return (
        <Link
            href="https://github.com/zytact"
            target="_blank"
            rel="noreferrer noopener"
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="45"
                height="45"
                viewBox="0 0 50 50"
                className="fill-current text-neutral-400 hover:scale-75"
            >
                <title>GitHub</title>
                <path d="M17.791,46.836C18.502,46.53,19,45.823,19,45v-5.4c0-0.197,0.016-0.402,0.041-0.61C19.027,38.994,19.014,38.997,19,39 c0,0-3,0-3.6,0c-1.5,0-2.8-0.6-3.4-1.8c-0.7-1.3-1-3.5-2.8-4.7C8.9,32.3,9.1,32,9.7,32c0.6,0.1,1.9,0.9,2.7,2c0.9,1.1,1.8,2,3.4,2 c2.487,0,3.82-0.125,4.622-0.555C21.356,34.056,22.649,33,24,33v-0.025c-5.668-0.182-9.289-2.066-10.975-4.975 c-3.665,0.042-6.856,0.405-8.677,0.707c-0.058-0.327-0.108-0.656-0.151-0.987c1.797-0.296,4.843-0.647,8.345-0.714 c-0.112-0.276-0.209-0.559-0.291-0.849c-3.511-0.178-6.541-0.039-8.187,0.097c-0.02-0.332-0.047-0.663-0.051-0.999 c1.649-0.135,4.597-0.27,8.018-0.111c-0.079-0.5-0.13-1.011-0.13-1.543c0-1.7,0.6-3.5,1.7-5c-0.5-1.7-1.2-5.3,0.2-6.6 c2.7,0,4.6,1.3,5.5,2.1C21,13.4,22.9,13,25,13s4,0.4,5.6,1.1c0.9-0.8,2.8-2.1,5.5-2.1c1.5,1.4,0.7,5,0.2,6.6c1.1,1.5,1.7,3.2,1.6,5 c0,0.484-0.045,0.951-0.11,1.409c3.499-0.172,6.527-0.034,8.204,0.102c-0.002,0.337-0.033,0.666-0.051,0.999 c-1.671-0.138-4.775-0.28-8.359-0.089c-0.089,0.336-0.197,0.663-0.325,0.98c3.546,0.046,6.665,0.389,8.548,0.689 c-0.043,0.332-0.093,0.661-0.151,0.987c-1.912-0.306-5.171-0.664-8.879-0.682C35.112,30.873,31.557,32.75,26,32.969V33 c2.6,0,5,3.9,5,6.6V45c0,0.823,0.498,1.53,1.209,1.836C41.37,43.804,48,35.164,48,25C48,12.318,37.683,2,25,2S2,12.318,2,25 C2,35.164,8.63,43.804,17.791,46.836z"></path>
            </svg>
        </Link>
    );
};

const InstagramLogo = () => {
    return (
        <Link
            href="https://instagram.com/that_arnab"
            target="_blank"
            rel="noreferrer noopener"
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="45"
                height="45"
                viewBox="0 0 50 50"
                className="fill-current text-neutral-400 hover:scale-75"
            >
                <title>Instagram</title>
                <path d="M 16 3 C 8.83 3 3 8.83 3 16 L 3 34 C 3 41.17 8.83 47 16 47 L 34 47 C 41.17 47 47 41.17 47 34 L 47 16 C 47 8.83 41.17 3 34 3 L 16 3 z M 37 11 C 38.1 11 39 11.9 39 13 C 39 14.1 38.1 15 37 15 C 35.9 15 35 14.1 35 13 C 35 11.9 35.9 11 37 11 z M 25 14 C 31.07 14 36 18.93 36 25 C 36 31.07 31.07 36 25 36 C 18.93 36 14 31.07 14 25 C 14 18.93 18.93 14 25 14 z M 25 16 C 20.04 16 16 20.04 16 25 C 16 29.96 20.04 34 25 34 C 29.96 34 34 29.96 34 25 C 34 20.04 29.96 16 25 16 z"></path>
            </svg>
        </Link>
    );
};

const EmailLogo = () => {
    return (
        <Link
            href="mailto:iam-arnab@outlook.com"
            target="_blank"
            rel="noreferrer noopener"
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="45"
                height="45"
                viewBox="0 0 50 50"
                className="fill-current text-neutral-400 hover:scale-75"
            >
                <title>Email</title>
                <path d="M41 4H16c-1.657 0-3 1.343-3 3v2h31V7C44 5.343 42.657 4 41 4zM44.94 46.5C44.37 46.82 43.7 47 43 47H14c-2.21 0-4-1.79-4-4v-6h9c1.09 0 2.1-.35 2.92-.95L44.94 46.5zM47 31.08V43c0 .72-.19 1.4-.54 1.99l-15.72-7.13L47 31.08zM35 11H44V18H35zM24 11H33V18H24zM35 20H44V27H35zM24 20H33V27H24zM33 29L33 34.75 28.25 36.73 24 34.8 24 29zM44 29L44 30.16 35 33.92 35 29zM22 11v3c-.83-.63-1.87-1-3-1h-6v-2H22zM19 35H5c-1.657 0-3-1.343-3-3V18c0-1.657 1.343-3 3-3h14c1.657 0 3 1.343 3 3v14C22 33.657 20.657 35 19 35zM12 19c-3.516 0-5.634 2.686-5.634 6s2.11 6 5.634 6c3.525 0 5.634-2.686 5.634-5.999C17.634 21.686 15.516 19 12 19zM12 28.975c-1.995 0-3.187-1.779-3.187-3.974s1.198-3.974 3.187-3.974 3.188 1.78 3.188 3.974S13.994 28.975 12 28.975z"></path>
            </svg>
        </Link>
    );
};
