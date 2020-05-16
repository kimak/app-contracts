import React from 'react'
import { View, ViewStyle } from 'react-native'

type LayoutProps = {
    children?: React.ReactNode[] | React.ReactNode
} & ViewStyle

export const Box = ({ children, ...rest }: LayoutProps) => {
    return <View style={{ ...rest }}>{children}</View>
}

export const Row = (props: LayoutProps) => (
    <Box {...props} flexDirection="row" />
)

export const Column = (props: LayoutProps) => (
    <Box {...props} flexDirection="column" />
)
