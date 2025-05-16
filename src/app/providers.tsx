'use client';
import { HeroUIProvider } from '@heroui/react';
import { ToastProvider } from '@heroui/toast';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme/themeMUI';

export function Providers({ children }: { children: React.ReactNode }) {
    return (
        <AppRouterCacheProvider options={{ enableCssLayer: true }}>
            <HeroUIProvider>
                <ThemeProvider theme={theme}>
                    <ToastProvider />
                    {children}
                </ThemeProvider>
            </HeroUIProvider>
        </AppRouterCacheProvider>
    );
}
