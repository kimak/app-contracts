import React, { useState } from 'react'
import { Menu } from 'react-native-paper'
import { TextInput } from './TextInput'
import { IconButton } from './IconButton'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { Box } from './primitives/Layout'

export interface SelectOption {
    value: string
    label: string
}

interface SelectProps {
    label: string
    error?: boolean
    data: SelectOption[]
    onSelect?: (option: SelectOption) => void
    initialIndex?: number
}

export const Select = (props: SelectProps) => {
    const [visible, setVisible] = useState(false)
    const { data, label, onSelect, initialIndex } = props
    const [index, setIndex] = useState<number | undefined>(initialIndex)
    return (
        <Menu
            visible={visible}
            onDismiss={() => setVisible(false)}
            anchor={
                <TouchableOpacity onPress={() => setVisible(true)}>
                    <TextInput
                        label={label}
                        pointerEvents="none"
                        value={
                            index !== undefined ? data[index].label : undefined
                        }
                        controlled
                    />
                    <Box position="absolute" bottom={0} right={0}>
                        <IconButton type="chevron-down" />
                    </Box>
                    <Box
                        position="absolute"
                        left={0}
                        right={0}
                        top={0}
                        bottom={0}
                        height="100%"
                        opacity={0}
                    />
                </TouchableOpacity>
            }
        >
            {props.data.map((item, index) => (
                <Menu.Item
                    key={label + index}
                    onPress={() => {
                        setIndex(index)
                        if (onSelect) onSelect(data[index])
                        setVisible(false)
                    }}
                    title={item.label}
                />
            ))}
        </Menu>
    )
}
