import React, { useEffect, useState } from 'react'
import { NavigationContainer, useNavigation } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { ProfileScreen } from '../features/profile'
import { InsuranceScreen } from '../features/insurance'
import { InventoryScreen, AddInventoryScreen } from '../features/inventory'
import { ProtectionScreen } from '../features/protection'
import { IconButton, IconType } from '../ui/IconButton'
import { useTheme } from '../ui/ThemeProvider'
import { ContractsProvider, useContracts } from '../features/ContractsProvider'
import { useT } from '../i18n'
import { SaveButton } from '../features/inventory/AddInventoryScreen'
import { Modal } from '../ui/Modal'
import { InfoAction } from '../ui/InfoAction'

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
    const { fetchUserInfo } = useContracts()
    useEffect(() => {
        fetchUserInfo()
    }, [])
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

const BackButton = () => {
    const { goBack } = useNavigation()
    return <IconButton type="close" size="l" onPress={() => goBack()} />
}

export const Navigation = () => {
    const t = useT()
    const [modalVisible, setModalVisible] = useState(false)
    return (
        <SafeAreaProvider>
            <ContractsProvider>
                <NavigationContainer>
                    <RootStack.Navigator mode="modal" initialRouteName="Main">
                        <RootStack.Screen
                            name="Main"
                            component={MainStackScreen}
                            options={{ headerShown: false }}
                        />
                        <RootStack.Screen
                            name="AddInventory"
                            component={AddInventoryScreen}
                            options={{
                                title: t('inventory:add:title'),
                                headerLeft: () => <BackButton />,
                                headerRight: () => (
                                    <SaveButton
                                        onSaved={() => {
                                            setModalVisible(true)
                                        }}
                                    />
                                ),
                            }}
                        />
                    </RootStack.Navigator>
                </NavigationContainer>
            </ContractsProvider>
            <Modal
                visible={modalVisible}
                onDismiss={() => setModalVisible(false)}
            >
                <InfoAction
                    title={t('inventory:saved:title')}
                    actionLabel={t('inventory:saved:action')}
                    description={t('inventory:saved:desc')}
                    icon="checkbox-marked-circle-outline"
                    onAction={() => {
                        setModalVisible(false)
                    }}
                />
            </Modal>
        </SafeAreaProvider>
    )
}
