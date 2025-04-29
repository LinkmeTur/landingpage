import { NextRequest, NextResponse } from 'next/server';

export function middleware(req: NextRequest) {
    const url = req.nextUrl;

    if (url.hostname === 'app.linkmetur.com.br' && url.pathname === '/') {
        return NextResponse.rewrite(new URL('/app', req.url));
    }

    // if (url.hostname === "linkmetur.com.br" && url.pathname === "/") {
    //     return NextResponse.rewrite(new URL("/pages/landingPage", req.url));
    // }
}
