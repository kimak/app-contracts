import React from 'react'

import { useNavigation } from '@react-navigation/native'
import { useT } from '../../i18n'
import { SafeAreaView } from 'react-native-safe-area-context'
import { SearchBar } from '../../ui/SearchBar'
import { Title } from '../../ui/Title'
import { IconButton } from '../../ui/IconButton'
import { FlatList } from 'react-native-gesture-handler'
import { Box, Row } from '../../ui/primitives/Layout'
import { useTheme } from '../../ui/ThemeProvider'
import { CardImage } from '../../ui/CardImage'

const DATA = [
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        name: 'Cartier Ring',
        price: 5780,
    },
    {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
        name: 'Lou.Yetu Necklace',
        price: 60,
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d72',
        name: 'Chanel Pearl Bracelet',
        price: 2100,
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d72',
        name: 'Messika Earrings',
        price: 10090,
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571esfdsdfsdfs',
        name: 'Chopard Watch',
        price: 13420,
    },
]

export const InventoryScreen = () => {
    const { navigate } = useNavigation()
    const t = useT()
    const theme = useTheme()
    return (
        <SafeAreaView
            style={{
                backgroundColor: theme.colors.white,
                flexGrow: 1,
            }}
        >
            <Box flexGrow={1} flexBasis={1}>
                <Box margin={theme.spacing.m}>
                    <Row marginTop={theme.spacing.xl}>
                        <Box flexGrow={1}>
                            <Title>{t('inventory:title')}</Title>
                        </Box>
                        <IconButton
                            onPress={() => navigate('AddInventory')}
                            type="plus-circle"
                            color={theme.colors.primary}
                            size="l"
                        />
                    </Row>
                    <SearchBar />
                </Box>
                <FlatList
                    style={{ backgroundColor: theme.colors.third }}
                    data={DATA}
                    numColumns={2}
                    renderItem={({ item, index }) => (
                        <Box
                            width="50%"
                            paddingRight={
                                index % 1 ? theme.spacing.s : theme.spacing.m
                            }
                            paddingLeft={
                                index % 2 ? theme.spacing.s : theme.spacing.m
                            }
                            marginTop={theme.spacing.m}
                        >
                            {/* @todo manage dynamic currency and source */}
                            <CardImage
                                name={item.name}
                                label={item.price.toString() + '€'}
                                source={require('../../assets/01.png')}
                            />
                        </Box>
                    )}
                    keyExtractor={(item) => item.id}
                />
            </Box>
        </SafeAreaView>
    )
}
