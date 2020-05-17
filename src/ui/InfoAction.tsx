import React from 'react'
import { useTheme } from './ThemeProvider'
import { Box } from './primitives/Layout'
import { Text } from './Text'
import { Title } from './Title'
import { Button } from './Button'
import { IconButton, IconType } from './IconButton'

interface InfoActionProps {
    onAction?: () => void
    actionLabel: string
    title: string
    description: string
    icon?: IconType
}

export const InfoAction = ({
    onAction,
    actionLabel,
    title,
    description,
    icon,
}: InfoActionProps) => {
    const theme = useTheme()
    return (
        <Box>
            {icon && (
                <Box alignItems="center">
                    <IconButton
                        type={icon}
                        size="xl"
                        color={theme.colors.primary}
                    />
                </Box>
            )}
            <Box alignItems="center" marginBottom={theme.spacing.s}>
                <Title size="s">{title}</Title>
            </Box>
            <Text color="secondary">{description}</Text>
            <Box marginTop={theme.spacing.m}>
                <Button onPress={onAction}>{actionLabel}</Button>
            </Box>
        </Box>
    )
}
