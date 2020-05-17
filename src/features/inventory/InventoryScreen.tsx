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
import { ImageBox } from '../../ui/ImageBox'
import { useContracts } from '../ContractsProvider'

export const InventoryScreen = () => {
    const { navigate } = useNavigation()
    const t = useT()
    const theme = useTheme()
    const { contract } = useContracts()
    return (
        <SafeAreaView
            style={{
                flexGrow: 1,
                backgroundColor: theme.colors.white,
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
                    style={{ backgroundColor: theme.colors.third, flexGrow: 1 }}
                    contentContainerStyle={{
                        flexGrow: 1,
                    }}
                    data={contract.data?.inventory}
                    ListEmptyComponent={
                        <Box alignItems="center" marginTop={theme.spacing.m}>
                            <ImageBox
                                icon="border-none-variant"
                                label="0 results"
                            />
                        </Box>
                    }
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
                            {/* @todo manage dynamic currency */}
                            <CardImage
                                name={item.name}
                                label={item.price.toString() + '€'}
                                source={{ uri: item.pictureUri }}
                            />
                        </Box>
                    )}
                    keyExtractor={(item) => item.id}
                />
            </Box>
        </SafeAreaView>
    )
}
