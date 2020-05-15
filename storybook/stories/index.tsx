import React from 'react'

import { storiesOf } from '@storybook/react-native'
import { linkTo } from '@storybook/addon-links'

// @ts-ignore
import Welcome from './Welcome'
import { TextInput } from '../../src/ui/TextInput'
import { IconButton, iconTypes, IconType } from '../../src/ui/IconButton'
import { SearchBar } from '../../src/ui/SearchBar'

storiesOf('Welcome', module).add('to Storybook', () => (
    <Welcome showApp={linkTo('Button')} />
))

storiesOf('foundation', module).add('IconButton', () => (
    <>
        {Object.keys(iconTypes).map((key) => (
            <IconButton type={key as IconType} key={key} />
        ))}
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
