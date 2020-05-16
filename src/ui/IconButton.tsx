import React from 'react'
import { IconButton as PaperIconButton } from 'react-native-paper'

export const iconTypes = {
    'border-none-variant': true,
    camera: true,
    umbrella: true,
    account: true,
    layers: true,
    home: true,
    close: true,
    'plus-circle': true,
    'file-document': true,
    'square-edit-outline': true,
    'chevron-down': true,
}

export type IconType = keyof typeof iconTypes

const sizes = {
    s: 10,
    m: 20,
    l: 30,
    xl: 48,
}

interface IconButtonProps {
    type: IconType
    size?: keyof typeof sizes
    color?: string
    onPress?: () => void
}

export const IconButton = (props: IconButtonProps) => {
    return (
        <PaperIconButton
            onPress={props.onPress}
            icon={props.type}
            size={props.size ? sizes[props.size] : sizes['m']}
            color={props.color}
        />
    )
}
