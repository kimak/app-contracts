import React from 'react'
import { View, Text, Button } from 'react-native'

import { useNavigation } from '@react-navigation/native'

export const InventoryScreen = () => {
    const { navigate } = useNavigation()
    return (
        <View
            style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}
        >
            <Text>Inventory</Text>
            <Text>Work in progress...</Text>
            <Button
                title="open modal"
                onPress={() => navigate('AddInventory')}
            />
        </View>
    )
}
