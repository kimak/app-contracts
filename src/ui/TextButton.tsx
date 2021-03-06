import React from 'react'
import { Button as PaperButton } from 'react-native-paper'

interface TextButtonProps {
    onPress?: () => void
    children: string
}

export const TextButton = (props: TextButtonProps) => {
    return (
        <PaperButton mode="text" onPress={props.onPress}>
            {props.children}
        </PaperButton>
    )
}
