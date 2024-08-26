'use client';
import { TextGenerateEffect } from './text-generate-effect';

const words = `I am a 20 y/o IT Undergrad Student. I am learning Fullstack Web Development. When I am not coding, I am probably watching anime, obsessing over philosophy and mythology or doing something stupid.`;

export function Description() {
    return <TextGenerateEffect duration={2} filter={false} words={words} />;
}
