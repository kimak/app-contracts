import React from 'react'
import {
    DefaultTheme,
    Theme as PaperTheme,
    Provider as PaperProvider,
} from 'react-native-paper'
import { defaultTheme } from './theme'

interface ThemeProviderProps {
    children: React.ReactNode
}

const paperTheme: PaperTheme = {
    ...DefaultTheme,
    roundness: 2,
    colors: {
        ...DefaultTheme.colors,
        primary: defaultTheme.colors.primary,
        surface: defaultTheme.colors.white,
        background: defaultTheme.colors.white,
        text: defaultTheme.colors.black,
        placeholder: defaultTheme.colors.secondary,
    },
}

// simple abstraction that could be update later
export const useTheme = () => defaultTheme

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
    return <PaperProvider theme={paperTheme}>{children}</PaperProvider>
}
