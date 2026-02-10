const fs = require('fs');
const path = require('path');

const outputDir = path.join(process.cwd(), 'public', 'images');

if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
}

const colors = {
    purple: '#b026ff',
    blue: '#5eead4',
    pink: '#f472b6',
    dark: '#0a0a0a',
    darker: '#050505'
};

const generateSVG = (filename, type, text) => {
    let content = '';
    const width = 800;
    const height = 600;

    if (type === 'hero') {
        content = `
            <svg width="1920" height="1080" xmlns="http://www.w3.org/2000/svg">
                <defs>
                    <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" style="stop-color:${colors.darker};stop-opacity:1" />
                        <stop offset="100%" style="stop-color:${colors.purple};stop-opacity:0.2" />
                    </linearGradient>
                    <radialGradient id="grad2" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
                        <stop offset="0%" style="stop-color:${colors.blue};stop-opacity:0.1" />
                        <stop offset="100%" style="stop-color:${colors.dark};stop-opacity:0" />
                    </radialGradient>
                    <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                        <path d="M 40 0 L 0 0 0 40" fill="none" stroke="${colors.purple}" stroke-width="0.5" opacity="0.1"/>
                    </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#grad1)" />
                <rect width="100%" height="100%" fill="url(#grid)" />
                <circle cx="50%" cy="50%" r="30%" fill="url(#grad2)" />
                <path d="M0 1080 L1920 1080 L1920 800 Q 960 600 0 800 Z" fill="${colors.dark}" opacity="0.8" />
            </svg>`;
    } else if (type === 'profile') {
        content = `
            <svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
                <defs>
                    <linearGradient id="gradProfile" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" style="stop-color:${colors.dark};stop-opacity:1" />
                        <stop offset="100%" style="stop-color:${colors.purple};stop-opacity:1" />
                    </linearGradient>
                </defs>
                <rect width="100%" height="100%" fill="${colors.darker}" />
                <circle cx="400" cy="300" r="200" fill="url(#gradProfile)" opacity="0.2" />
                <path d="M400 200 C 450 200 480 250 480 300 C 480 380 400 450 400 450 C 400 450 320 380 320 300 C 320 250 350 200 400 200" fill="${colors.blue}" opacity="0.1" />
                <text x="50%" y="45%" dominant-baseline="middle" text-anchor="middle" font-family="Arial" font-size="40" fill="${colors.blue}" font-weight="bold" letter-spacing="4">DJ NOVA</text>
                <text x="50%" y="55%" dominant-baseline="middle" text-anchor="middle" font-family="Arial" font-size="120" fill="none" stroke="${colors.pink}" stroke-width="2" opacity="0.3">BEATS</text>
            </svg>`;
    } else {
        // Concerts / Gallery
        const color = type === 'concert' ? colors.purple : colors.blue;
        const color2 = type === 'concert' ? colors.pink : colors.purple;
        content = `
            <svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
                <defs>
                    <linearGradient id="grad${text}" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" style="stop-color:${colors.dark};stop-opacity:1" />
                        <stop offset="100%" style="stop-color:#1a1a1a;stop-opacity:1" />
                    </linearGradient>
                </defs>
                <rect width="100%" height="100%" fill="url(#grad${text})" />
                <circle cx="${Math.random() * width}" cy="${Math.random() * height}" r="${Math.random() * 100 + 50}" fill="${color}" opacity="0.1" filter="blur(20px)" />
                <circle cx="${Math.random() * width}" cy="${Math.random() * height}" r="${Math.random() * 100 + 50}" fill="${color2}" opacity="0.1" filter="blur(20px)" />
                <line x1="0" y1="${Math.random() * height}" x2="${width}" y2="${Math.random() * height}" stroke="${color}" stroke-width="2" opacity="0.2" />
                <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-family="Arial" font-size="48" fill="white" font-weight="bold" opacity="0.1">${text}</text>
            </svg>`;
    }

    fs.writeFileSync(path.join(outputDir, filename), content.trim());
    console.log(`Generated ${filename}`);
};

// Generate files
generateSVG('hero-bg.svg', 'hero');
generateSVG('profile.svg', 'profile');

// Concerts
for (let i = 1; i <= 6; i++) {
    generateSVG(`concert-${i}.svg`, 'concert', `Concert ${i}`);
}

// Gallery
for (let i = 1; i <= 5; i++) {
    generateSVG(`gallery-${i}.svg`, 'gallery', `Gallery ${i}`);
}
