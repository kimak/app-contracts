import React, { useState } from 'react'
import { Button as PaperButton } from 'react-native-paper'
import { useTheme } from './ThemeProvider'

interface TextButtonProps {
    onPress?: () => void
    children: string
}

export const TextButton = (props: TextButtonProps) => {
    const theme = useTheme()
    return (
        <PaperButton mode="text" onPress={props.onPress}>
            {props.children}
        </PaperButton>
    )
}
