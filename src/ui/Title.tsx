import React from 'react'
import { Title as PaperTitle } from 'react-native-paper'

const sizes = {
    s: 22,
    m: 28,
    l: 34,
}

type TitleSize = keyof typeof sizes
interface TitleProps {
    children: string
    size?: TitleSize
}

export const Title = ({ children, size = 'l' }: TitleProps) => (
    <PaperTitle
        style={{
            fontSize: sizes[size],
            lineHeight: 40,
            fontWeight: '600',
        }}
    >
        {children}
    </PaperTitle>
)
