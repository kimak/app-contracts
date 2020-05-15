import React from 'react'
import { Navigation } from './navigation'
import { ThemeProvider } from './ui/ThemeProvider'

export const App = () => {
    return (
        <ThemeProvider>
            <Navigation />
        </ThemeProvider>
    )
}
