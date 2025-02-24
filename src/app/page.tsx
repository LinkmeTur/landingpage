'use client';

import { DotLottieReact } from '@lottiefiles/dotlottie-react';

export default function Home() {
    return (
        <div
            style={{
                backgroundColor: '#fff',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100vh',
                width: '100vw',
            }}
        >
            <div style={{ height: '50%' }}>
                <DotLottieReact src='LinkMe Tur.lottie' autoplay />
            </div>
            <div>
                <svg>
                    <text x='50%' y='50%' dy='.35em' text-anchor='middle'>
                        EM BREVE
                    </text>
                </svg>
            </div>
        </div>
    );
}
