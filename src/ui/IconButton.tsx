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
}

export type IconType = keyof typeof iconTypes

const sizes = {
    s: 10,
    m: 20,
    l: 30,
}

interface IconButtonProps {
    type: IconType
    size?: keyof typeof sizes
}

export const IconButton = (props: IconButtonProps) => {
    return (
        <PaperIconButton
            icon={props.type}
            size={props.size ? sizes[props.size] : sizes['m']}
        />
    )
}
