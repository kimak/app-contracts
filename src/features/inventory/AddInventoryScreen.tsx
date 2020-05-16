import React from 'react'
import { TextInput } from '../../ui/TextInput'
import { useT } from '../../i18n'
import { Box, Row } from '../../ui/primitives/Layout'
import { useTheme } from '../../ui/ThemeProvider'
import { ScrollView } from 'react-native-gesture-handler'
import { Text } from '../../ui/Text'
import { ImageBox } from '../../ui/ImageBox'
import { Select } from '../../ui/Select'

export const AddInventoryScreen = () => {
    const t = useT()
    const theme = useTheme()
    return (
        <ScrollView
            contentContainerStyle={{
                flexGrow: 1,
                backgroundColor: theme.colors.white,
                padding: theme.spacing.m,
            }}
        >
            <Box alignItems="center">
                <ImageBox icon="camera" label={t('inventory:addPhoto')} />
            </Box>
            <Box>
                <TextInput label={t('inventory:name')} />
                <Select
                    label={t('inventory:category')}
                    data={[
                        { label: 'Item 1', value: 1 },
                        { label: 'Item 2', value: 2 },
                        { label: 'Item 3', value: 3 },
                    ]}
                />
                <TextInput label={t('inventory:purschaseDate')} />
                <TextInput label={t('inventory:purchaseValue')} />
                <TextInput label={t('inventory:description')} />
            </Box>
            <Box marginTop={theme.spacing.m}>
                <Text color="secondary">{t('inventory:documents')}</Text>
                <Row marginTop={theme.spacing.s}>
                    <ImageBox
                        icon="file-document"
                        label={t('inventory:addReceipt')}
                    />
                    <ImageBox
                        icon="camera"
                        label={t('inventory:addPhotos')}
                        marginLeft={theme.spacing.s}
                    />
                </Row>
            </Box>
        </ScrollView>
    )
}
