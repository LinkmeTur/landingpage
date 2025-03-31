'use client';

import LP from './(pages)/lp/page';

export default function Home() {
    return (
        <div
            style={{
                backgroundColor: '#fff',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            <LP />
        </div>
    );
}
