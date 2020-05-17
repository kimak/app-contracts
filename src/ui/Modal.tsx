import React from 'react'
import RnModal from 'react-native-modal'
import { useTheme } from './ThemeProvider'
import { Box } from './primitives/Layout'

interface ModalProps {
    children: React.ReactNode
    visible: boolean
    onDismiss?: () => void
}

export const Modal = ({ visible, onDismiss, children }: ModalProps) => {
    const theme = useTheme()
    return (
        <RnModal
            isVisible={visible}
            style={{ justifyContent: 'flex-end' }}
            swipeDirection={['up', 'down']}
            onBackdropPress={onDismiss}
            onSwipeComplete={onDismiss}
        >
            <Box
                backgroundColor={theme.colors.white}
                borderRadius={theme.radii.m}
                padding={theme.spacing.l}
            >
                {children}
            </Box>
        </RnModal>
    )
}
