import React from 'react'

import { storiesOf } from '@storybook/react-native'
import { linkTo } from '@storybook/addon-links'

// @ts-ignore
import Welcome from './Welcome'

storiesOf('Welcome', module).add('to Storybook', () => (
    <Welcome showApp={linkTo('Button')} />
))
