'use client';
import { useEffect, useRef } from 'react';

export default function Background() {
    const backgroundRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            if (!backgroundRef.current) return;

            const { clientX, clientY } = e;
            const { innerWidth, innerHeight } = window;

            // Calculate the distance from the mouse to the center of the screen
            const xOffset = (clientX - innerWidth / 2) * 0.02;
            const yOffset = (clientY - innerHeight / 2) * 0.02;

            // Apply the transform with perspective for a 3D effect
            backgroundRef.current.style.transform = `perspective(1000px) rotateY(${xOffset}deg) rotateX(${-yOffset}deg)`;
        };

        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return (
        <div className="fixed inset-0 -z-10">
            <div
                ref={backgroundRef}
                className="absolute inset-0 transition-transform duration-200 ease-out"
                style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23a3a3a3' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                    backgroundSize: '40px 40px',
                    backgroundRepeat: 'repeat',
                    opacity: 0.15,
                    transformOrigin: 'center center',
                }}
            ></div>
        </div>
    );
}
