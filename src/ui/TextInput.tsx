import React, { useState } from 'react'
import { TextInput as PaperTextInput } from 'react-native-paper'

interface TextInputProps {
    label: string
    error?: boolean
}

export const TextInput = (props: TextInputProps) => {
    const [value, setValue] = useState('')
    return (
        <PaperTextInput
            label={props.label}
            error={props.error}
            value={value}
            onChangeText={(text) => setValue(text)}
            mode="flat"
            // @todo theme: refactor with dynamic value
            style={{ backgroundColor: '#FFFFFF' }}
        />
    )
}
