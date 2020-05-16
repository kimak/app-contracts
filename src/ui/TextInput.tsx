import React, { useState } from 'react'
import { TextInput as PaperTextInput } from 'react-native-paper'
import { useTheme } from './ThemeProvider'

interface TextInputProps {
    label: string
    error?: boolean
    pointerEvents?: 'box-none' | 'none' | 'box-only' | 'auto'
    value?: string
    controlled?: boolean
}

export const TextInput = (props: TextInputProps) => {
    const [value, setValue] = useState('')
    const theme = useTheme()
    return (
        <PaperTextInput
            pointerEvents={props.pointerEvents}
            label={props.label}
            error={props.error}
            value={props.controlled ? props.value : value}
            onChangeText={(text) => setValue(text)}
            mode="flat"
            style={{
                backgroundColor: theme.colors.white,
                marginTop: theme.spacing.m,
            }}
        />
    )
}
