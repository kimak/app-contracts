import React from 'react'
import { Box, Row } from '../ui/primitives/Layout'
import { useTheme } from '../ui/ThemeProvider'
import { IconButton, IconType } from '../ui/IconButton'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { Text } from '../ui/Text'
import { ViewStyle, Image } from 'react-native'

export type ImageBoxProps = {
    icon: IconType
    label?: string
    onPress?: () => void
    image?: string
} & ViewStyle

export const ImageBox = ({
    icon,
    label,
    image,
    onPress,
    ...rest
}: ImageBoxProps) => {
    const theme = useTheme()
    return (
        <TouchableOpacity onPress={onPress}>
            <Box
                borderStyle="dashed"
                borderWidth={image ? 0 : 1}
                borderColor={theme.colors.secondary}
                borderRadius={theme.radii.m}
                width={128}
                height={128}
                justifyContent="center"
                alignItems="center"
                overflow="hidden"
                {...rest}
            >
                {image && (
                    <Image
                        style={{ width: '100%', height: 158 }}
                        source={{ uri: image }}
                        resizeMode="cover"
                    />
                )}
                {!image && (
                    <>
                        <IconButton
                            type={icon}
                            size="l"
                            color={theme.colors.primary}
                        />
                        {label && <Text size="m">{label}</Text>}
                    </>
                )}
            </Box>
        </TouchableOpacity>
    )
}
