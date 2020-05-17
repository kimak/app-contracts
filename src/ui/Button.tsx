import React from 'react'
import { Button as PaperButton } from 'react-native-paper'

interface ButtonProps {
    onPress?: () => void
    children: string
}

export const Button = (props: ButtonProps) => {
    return (
        <PaperButton mode="contained" onPress={props.onPress}>
            {props.children}
        </PaperButton>
    )
}
