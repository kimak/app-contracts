import React from 'react'
import { Box, Row } from '../ui/primitives/Layout'
import { useTheme } from '../ui/ThemeProvider'
import { IconButton, IconType } from '../ui/IconButton'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { Text } from '../ui/Text'
import { ViewStyle } from 'react-native'

export type ImageBoxProps = {
    icon: IconType
    label?: string
    onPress?: () => void
} & ViewStyle

export const ImageBox = ({ icon, label, onPress, ...rest }: ImageBoxProps) => {
    const theme = useTheme()
    return (
        <TouchableOpacity onPress={onPress}>
            <Box
                borderStyle="dashed"
                borderWidth={1}
                borderColor={theme.colors.secondary}
                borderRadius={theme.radii.m}
                width={128}
                height={128}
                justifyContent="center"
                alignItems="center"
                {...rest}
            >
                <IconButton type={icon} size="l" color={theme.colors.primary} />
                {label && <Text size="m">{label}</Text>}
            </Box>
        </TouchableOpacity>
    )
}
