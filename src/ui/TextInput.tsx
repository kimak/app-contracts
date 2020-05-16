import React, { useState } from 'react'
import { TextInput as PaperTextInput } from 'react-native-paper'
import { useTheme } from './ThemeProvider'

interface TextInputProps {
    label: string
    error?: boolean
}

export const TextInput = (props: TextInputProps) => {
    const [value, setValue] = useState('')
    const theme = useTheme()
    return (
        <PaperTextInput
            label={props.label}
            error={props.error}
            value={value}
            onChangeText={(text) => setValue(text)}
            mode="flat"
            style={{ backgroundColor: theme.colors.white }}
        />
    )
}
