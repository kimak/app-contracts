import React from 'react'
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper'
import { defaultTheme } from './theme'

interface ThemeProviderProps {
    children: React.ReactNode
}

const paperTheme = {
    ...DefaultTheme,
    roundness: 2,
    colors: {
        ...DefaultTheme.colors,
        primary: defaultTheme.colors.primary,
        surface: defaultTheme.colors.white,
        background: defaultTheme.colors.white,
    },
}

// simple abstraction that could be replace later
export const useTheme = () => defaultTheme

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
    return <PaperProvider theme={paperTheme}>{children}</PaperProvider>
}
