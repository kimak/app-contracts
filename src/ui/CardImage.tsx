import React from 'react'
import { Card } from '../ui/Card'
import { Box, Column } from '../ui/primitives/Layout'
import { Text } from '../ui/Text'
import { Image, ImageSourcePropType } from 'react-native'
import { useTheme } from './ThemeProvider'

export type CardImageProps = {
    name: string
    label: string
    source: ImageSourcePropType
}

export const CardImage = (props: CardImageProps) => {
    const theme = useTheme()
    return (
        <Card>
            <Box
                height={158}
                borderTopLeftRadius={theme.radii.m}
                borderTopRightRadius={theme.radii.m}
                backgroundColor={theme.colors.secondary}
                overflow="hidden"
            >
                <Image
                    style={{ width: '100%', height: 158 }}
                    source={props.source}
                    resizeMode="cover"
                />
            </Box>
            <Box height={104} padding={theme.spacing.m}>
                <Column flexGrow={1}>
                    <Box flexGrow={1}>
                        <Text size="m">{props.name}</Text>
                    </Box>
                    <Text size="s" color="secondary">
                        {props.label}
                    </Text>
                </Column>
            </Box>
        </Card>
    )
}
