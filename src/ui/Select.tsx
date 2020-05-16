import React, { useState } from 'react'
import { Menu } from 'react-native-paper'
import { TextInput } from './TextInput'
import { IconButton } from './IconButton'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { Box } from './primitives/Layout'

interface SelectOption {
    value: string | number
    label: string
}

interface SelectProps {
    label: string
    error?: boolean
    data: SelectOption[]
}

export const Select = (props: SelectProps) => {
    const [visible, setVisible] = useState(false)
    const [index, setIndex] = useState<number>()
    const { data, label } = props
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
                </TouchableOpacity>
            }
        >
            {props.data.map((item, index) => (
                <Menu.Item
                    key={label + index}
                    onPress={() => {
                        setIndex(index)
                        setVisible(false)
                    }}
                    title={item.label}
                />
            ))}
        </Menu>
    )
}
