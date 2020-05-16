import React, { ReactNode } from 'react'
import {
    getStorybookUI,
    configure,
    addDecorator,
} from '@storybook/react-native'

import './rn-addons'
import { ThemeProvider } from '../src/ui/ThemeProvider'
import { ScrollView } from 'react-native-gesture-handler'

addDecorator((storyFn: () => ReactNode) => (
    <ThemeProvider>
        <ScrollView
            contentContainerStyle={{ flexGrow: 1 }}
            style={{ margin: 16 }}
        >
            {storyFn()}
        </ScrollView>
    </ThemeProvider>
))

// import stories
configure(() => {
    require('./stories')
}, module)

// Refer to https://github.com/storybookjs/storybook/tree/master/app/react-native#start-command-parameters
// To find allowed options for getStorybookUI
const StorybookUIRoot = getStorybookUI({
    asyncStorage: require('react-native').AsyncStorage || null,
})

export default StorybookUIRoot
