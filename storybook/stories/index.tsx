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
import { ImageBox } from '../../src/ui/ImageBox'
import { CardImage } from '../../src/ui/CardImage'
import { Card } from '../../src/ui/Card'

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
                <Row key={key} alignItems="center">
                    {createBox(defaultTheme.colors[key as Color])}
                    <Text>{key}</Text>
                </Row>
            ))}
        </Box>
    </>
))

storiesOf('foundation', module).add('IconButton', () => (
    <>
        {Object.keys(iconTypes).map((key) => (
            <Row key={key} alignItems="center">
                <IconButton type={key as IconType} key={key} />
                <Text>{key}</Text>
            </Row>
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

storiesOf('layout', module).add('Box / Row / Column', () => (
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

storiesOf('components', module).add('ImageBox', () => (
    <>
        <ImageBox icon="umbrella" />
        <ImageBox icon="camera" label="Photos" marginTop={10} />
        <ImageBox icon="file-document" label="document" marginTop={10} />
    </>
))

storiesOf('components', module).add('Cards', () => (
    <>
        <Text>Card</Text>
        <Box margin={40}>
            <Card width={100} alignItems="center">
                {createBox(defaultTheme.colors.primary)}
            </Card>
        </Box>
        <Text>CardImage</Text>
        <Box margin={40}>
            <CardImage
                name="name"
                label="label"
                source={require('../../src/assets/01.png')}
            />
        </Box>
    </>
))
