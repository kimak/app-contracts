import React from 'react'
import { Box } from './primitives/Layout'
import { useTheme } from './ThemeProvider'
import { ViewStyle } from 'react-native'

interface CardProps extends ViewStyle {
    children: React.ReactNode[] | React.ReactNode
}

export const Card = ({ children, ...rest }: CardProps) => {
    const theme = useTheme()
    return (
        <Box
            borderRadius={theme.radii.m}
            backgroundColor={theme.colors.white}
            {...theme.shadows.s}
            {...rest}
        >
            {children}
        </Box>
    )
}
