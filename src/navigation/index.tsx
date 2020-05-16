import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { ProfileScreen } from '../features/profile'
import { InsuranceScreen } from '../features/insurance'
import { InventoryScreen, AddInventoryScreen } from '../features/inventory'
import { ProtectionScreen } from '../features/protection'
import { IconButton, IconType } from '../ui/IconButton'
import { useTheme } from '../ui/ThemeProvider'

const Tab = createBottomTabNavigator()
const RootStack = createStackNavigator()

const createTabBarIcon = (type: IconType) => ({
    focused,
}: {
    focused: boolean
}) => {
    const theme = useTheme()
    return (
        <IconButton
            type={type}
            color={focused ? theme.colors.primary : theme.colors.secondary}
            size="l"
        />
    )
}

const MainStackScreen = () => {
    const theme = useTheme()
    return (
        <Tab.Navigator
            initialRouteName="InventoryScreen"
            tabBarOptions={{ activeTintColor: theme.colors.primary }}
        >
            <Tab.Screen
                name="Inventory"
                component={InventoryScreen}
                options={{ tabBarIcon: createTabBarIcon('layers') }}
            />
            <Tab.Screen
                name="Protection"
                component={ProtectionScreen}
                options={{
                    tabBarIcon: createTabBarIcon('home'),
                }}
            />
            <Tab.Screen
                name="Insurance"
                component={InsuranceScreen}
                options={{ tabBarIcon: createTabBarIcon('umbrella') }}
            />
            <Tab.Screen
                name="Profile"
                component={ProfileScreen}
                options={{ tabBarIcon: createTabBarIcon('account') }}
            />
        </Tab.Navigator>
    )
}

export const Navigation = () => (
    <SafeAreaProvider>
        <NavigationContainer>
            <RootStack.Navigator mode="modal" initialRouteName="AddInventory">
                <RootStack.Screen
                    name="Main"
                    component={MainStackScreen}
                    options={{ headerShown: false }}
                />
                <RootStack.Screen
                    name="AddInventory"
                    component={AddInventoryScreen}
                />
            </RootStack.Navigator>
        </NavigationContainer>
    </SafeAreaProvider>
)
