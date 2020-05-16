import React from 'react'
import { Title as PaperTitle } from 'react-native-paper'

interface TitleProps {
    children: string
}

export const Title = (props: TitleProps) => (
    <PaperTitle style={{ fontSize: 34, lineHeight: 40, fontWeight: '600' }}>
        {props.children}
    </PaperTitle>
)
