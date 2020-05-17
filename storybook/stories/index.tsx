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
import { Select } from '../../src/ui/Select'
import { ImageBoxPicker } from '../../src/ui/ImageBoxPicker'
import { ImageInfo } from '../../src/sdk/ImagePicker'
import { TextButton } from '../../src/ui/TextButton'

storiesOf('Welcome', module).add('to Storybook', () => (
    <Welcome showApp={linkTo('Button')} />
))

const createBox = (color: string, key?: string) => (
    <Box key={key} width={50} height={50} margin={10} backgroundColor={color} />
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
                <IconButton type={key as IconType} />
                <Text>{key}</Text>
            </Row>
        ))}
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

storiesOf('button', module).add('TextButton', () => (
    <>
        <TextButton>Save</TextButton>
    </>
))

storiesOf('form', module).add('TextInput', () => (
    <>
        <TextInput label="Email" />
        <TextInput label="Email" error />
    </>
))

storiesOf('form', module).add('Select', () => (
    <>
        <Select
            label="select"
            data={[
                { label: 'Item 1', value: '1' },
                { label: 'Item 2', value: '2' },
                { label: 'Item 3', value: '3' },
            ]}
        />
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
        <ImageBox icon="file-document" label="document" marginTop={10} />
        <ImageBoxPicker
            icon="camera"
            label="Photos"
            marginTop={10}
            onFinish={(imageInfo: ImageInfo) => {
                alert('success: ' + imageInfo.uri)
            }}
        />
        <Text>ImageBoxPicker</Text>
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
