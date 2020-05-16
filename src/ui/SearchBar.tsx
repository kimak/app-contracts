import React, { useState } from 'react'
import { Searchbar as PaperSearchBar } from 'react-native-paper'
import { useTheme } from './ThemeProvider'

interface SearchBarProps {
    onChangeText?: (value: string) => void
}

export const SearchBar = (props: SearchBarProps) => {
    const [value, setValue] = useState('')
    const theme = useTheme()
    return (
        <PaperSearchBar
            placeholder="Search"
            onChangeText={(value: string) => {
                setValue(value)
                // @todo implement debounce script for better performance
                if (props.onChangeText) props.onChangeText(value)
            }}
            value={value}
            style={{
                elevation: 0,
                backgroundColor: theme.colors.third,
                borderRadius: theme.radii.s,
                height: 36,
            }}
        />
    )
}
