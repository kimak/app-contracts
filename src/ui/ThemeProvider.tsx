import React from 'react'
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper'

interface ThemeProviderProps {
    children: React.ReactNode
}

const paperTheme = {
    ...DefaultTheme,
    roundness: 2,
    colors: {
        ...DefaultTheme.colors,
        primary: '#0042da',
        surface: '#FFFFFF',
        accent: '#f1c40f',
        background: '#FFFFFF',

        /* primary: '#6200ee',
        accent: '#03dac4',
        background: '#f6f6f6',
        surface: white,
        error: '#B00020',
        text: black,
        onBackground: '#000000',
        onSurface: '#000000',
        disabled: color(black)
          .alpha(0.26)
          .rgb()
          .string(),
        placeholder: color(black)
          .alpha(0.54)
          .rgb()
          .string(),
        backdrop: color(black)
          .alpha(0.5)
          .rgb()
          .string(),
        notification: pinkA400, */
    },
}

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
    return <PaperProvider theme={paperTheme}>{children}</PaperProvider>
}
