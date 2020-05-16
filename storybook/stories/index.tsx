import React from 'react'

import { storiesOf } from '@storybook/react-native'
import { linkTo } from '@storybook/addon-links'

// @ts-ignore
import Welcome from './Welcome'
import { TextInput } from '../../src/ui/TextInput'
import { IconButton, iconTypes, IconType } from '../../src/ui/IconButton'
import { SearchBar } from '../../src/ui/SearchBar'
import { Title } from '../../src/ui/Title'
import { Text } from '../../src/ui/Text'
import { Box, Row, Column } from '../../src/ui/primitives/Layout'
import { defaultTheme, Color } from '../../src/ui/theme'

storiesOf('Welcome', module).add('to Storybook', () => (
    <Welcome showApp={linkTo('Button')} />
))

const createBox = (color: string) => (
    <Box width={50} height={50} margin={10} backgroundColor={color} />
)

storiesOf('foundation', module).add('colors', () => (
    <>
        <Box backgroundColor="#eee" padding={30}>
            {Object.keys(defaultTheme.colors).map((key) => (
                <Column>
                    <Text>{key}</Text>
                    {createBox(defaultTheme.colors[key as Color])}
                </Column>
            ))}
        </Box>
    </>
))

storiesOf('foundation', module).add('IconButton', () => (
    <>
        {Object.keys(iconTypes).map((key) => (
            <IconButton type={key as IconType} key={key} />
        ))}
        {Object.keys(defaultTheme.colors).map((key) => createBox(key))}
    </>
))

storiesOf('foundation', module).add('Text', () => (
    <>
        <Title>Main Title</Title>
        <Text>Text</Text>
    </>
))

storiesOf('Layout', module).add('Box', () => (
    <>
        <Text>Box</Text>
        {createBox(defaultTheme.colors.primary)}
        <Text>Row</Text>
        <Row marginRight={10}>
            {createBox(defaultTheme.colors.secondary)}
            {createBox(defaultTheme.colors.secondary)}
            {createBox(defaultTheme.colors.secondary)}
        </Row>
        <Text>Column</Text>
        <Column marginTop={10}>
            {createBox(defaultTheme.colors.black)}
            {createBox(defaultTheme.colors.black)}
            {createBox(defaultTheme.colors.black)}
        </Column>
    </>
))

storiesOf('form', module).add('TextInput', () => (
    <>
        <TextInput label="Email" />
        <TextInput label="Email" error />
    </>
))

storiesOf('form', module).add('SearchBar', () => (
    <>
        <SearchBar />
    </>
))
