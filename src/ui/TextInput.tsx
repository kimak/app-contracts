import React, { useState } from 'react'
import { TextInput as PaperTextInput } from 'react-native-paper'
import { useTheme } from './ThemeProvider'

interface TextInputProps {
    label: string
    error?: boolean
    pointerEvents?: 'box-none' | 'none' | 'box-only' | 'auto'
    value?: string
    controlled?: boolean
    onChange?: (value: string) => void
    placeholder?: string
    type?: 'text' | 'number'
}

export const TextInput = ({
    label,
    error,
    pointerEvents,
    controlled,
    value,
    onChange,
    placeholder,
    type = 'text',
}: TextInputProps) => {
    const [innerValue, setValue] = useState('')
    const theme = useTheme()
    return (
        <PaperTextInput
            pointerEvents={pointerEvents}
            label={label}
            error={error}
            value={controlled ? value : innerValue}
            onChangeText={!controlled ? (text) => setValue(text) : onChange}
            mode="flat"
            placeholder={placeholder}
            style={{
                backgroundColor: theme.colors.white,
                marginTop: theme.spacing.m,
            }}
            keyboardType={type === 'text' ? 'default' : 'numeric'}
        />
    )
}
