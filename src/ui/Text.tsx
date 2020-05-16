import React from 'react'
import { Text as PaperText } from 'react-native-paper'
import { Color } from './theme'
import { useTheme } from './ThemeProvider'

const sizes = {
    s: 14,
    m: 16,
    l: 20,
}

type TextSize = keyof typeof sizes

interface TextProps {
    children: string
    size?: TextSize
    bold?: boolean
    color?: Color
}

export const Text = ({ size = 's', color, bold, children }: TextProps) => {
    const theme = useTheme()
    return (
        <PaperText
            style={{
                fontSize: sizes[size],
                color: color ? theme.colors[color] : theme.colors.black,
                fontWeight: bold ? '600' : 'normal',
            }}
        >
            {children}
        </PaperText>
    )
}
