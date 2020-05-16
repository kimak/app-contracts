import React from 'react'
import { Box } from './primitives/Layout'
import { useTheme } from './ThemeProvider'

interface CardProps {
    children: React.ReactNode[] | React.ReactNode
}

export const Card = (props: CardProps) => {
    const theme = useTheme()
    return (
        <Box
            borderRadius={theme.radii.m}
            backgroundColor={theme.colors.white}
            {...theme.shadows.s}
        >
            {props.children}
        </Box>
    )
}
