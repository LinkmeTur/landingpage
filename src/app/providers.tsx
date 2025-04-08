'use client';
import { HeroUIProvider } from '@heroui/react';
import { ToastProvider } from '@heroui/toast';
import AppBar from './components/appbar/appbar';

export function Providers({ children }: { children: React.ReactNode }) {
    return (
        <HeroUIProvider>
            <ToastProvider />
            <AppBar />
            {children}
        </HeroUIProvider>
    );
}
