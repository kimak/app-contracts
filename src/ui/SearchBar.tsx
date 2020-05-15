import React, { useState } from 'react'
import { Searchbar as PaperSearchBar } from 'react-native-paper'

interface SearchBarProps {
    onChangeText?: (value: string) => void
}

export const SearchBar = (props: SearchBarProps) => {
    const [value, setValue] = useState('')
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
                // @todo theme: refactor with dynamic value
                backgroundColor: '#f6f7fc',
                borderRadius: 10,
                height: 36,
            }}
        />
    )
}
