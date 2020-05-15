import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { ProfileScreen } from '../features/profile'
import { InsuranceScreen } from '../features/insurance'
import { InventoryScreen } from '../features/inventory'
import { ProtectionScreen } from '../features/protection'
import { IconButton } from '../ui/IconButton'

const Tab = createBottomTabNavigator()
const RootStack = createStackNavigator()

const MainStackScreen = () => {
    return (
        <Tab.Navigator initialRouteName="InventoryScreen">
            <Tab.Screen
                name="Protection"
                component={ProtectionScreen}
                options={{ tabBarIcon: () => <IconButton type="home" /> }}
            />
            <Tab.Screen
                name="Insurance"
                component={InsuranceScreen}
                options={{ tabBarIcon: () => <IconButton type="umbrella" /> }}
            />
            <Tab.Screen
                name="Inventory"
                component={InventoryScreen}
                options={{ tabBarIcon: () => <IconButton type="layers" /> }}
            />
            <Tab.Screen
                name="Profile"
                component={ProfileScreen}
                options={{ tabBarIcon: () => <IconButton type="account" /> }}
            />
        </Tab.Navigator>
    )
}

export const Navigation = () => (
    <NavigationContainer>
        <RootStack.Navigator mode="modal">
            <RootStack.Screen
                name="Main"
                component={MainStackScreen}
                options={{ headerShown: false }}
            />
            <RootStack.Screen name="AddInventory" component={ProfileScreen} />
        </RootStack.Navigator>
    </NavigationContainer>
)
