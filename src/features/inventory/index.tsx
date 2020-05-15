import React from 'react'
import { View, Text, Button } from 'react-native'

import { useNavigation } from '@react-navigation/native'
import { useT } from '../../i18n'

export const InventoryScreen = () => {
    const { navigate } = useNavigation()
    const t = useT()
    return (
        <View
            style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}
        >
            <Text>{t('inventory::title')}</Text>
            <Text>Work in progress...</Text>
            <Button
                title="open modal"
                onPress={() => navigate('AddInventory')}
            />
        </View>
    )
}
