import React from 'react'
import { TextInput } from '../../ui/TextInput'
import { useT } from '../../i18n'
import { Box, Row } from '../../ui/primitives/Layout'
import { useTheme } from '../../ui/ThemeProvider'
import { ScrollView } from 'react-native-gesture-handler'
import { Text } from '../../ui/Text'
import { Select } from '../../ui/Select'
import { ImageBoxPicker } from '../../ui/ImageBoxPicker'
import { KeyboardAvoidingView, Platform } from 'react-native'
import { useContracts } from '../ContractsProvider'
import { TextButton } from '../../ui/TextButton'
import { useNavigation } from '@react-navigation/native'
import { ImageInfo } from '../../sdk/ImagePicker'

export const SaveButton = ({ onSaved }: { onSaved: () => void }) => {
    const t = useT()
    const { saveInventoryForm } = useContracts()
    const { goBack } = useNavigation()

    return (
        <TextButton
            onPress={async () => {
                const result = await saveInventoryForm()
                if (result.success) {
                    onSaved()
                    goBack()
                }
            }}
        >
            {t('inventory:button:save')}
        </TextButton>
    )
}

export const AddInventoryScreen = () => {
    const t = useT()
    const theme = useTheme()
    const { userInfo, inventoryForm, updateInventoryForm } = useContracts()
    return (
        <KeyboardAvoidingView
            enabled={Platform.OS === 'ios'}
            behavior="position"
            keyboardVerticalOffset={-40}
            contentContainerStyle={{
                backgroundColor: theme.colors.white,
                flexGrow: 1,
            }}
        >
            <ScrollView
                contentContainerStyle={{
                    flexGrow: 1,
                    padding: theme.spacing.m,
                    backgroundColor: theme.colors.white,
                }}
            >
                <Box alignItems="center">
                    <ImageBoxPicker
                        icon="camera"
                        label={t('inventory:addPhoto')}
                        onFinish={(imageInfo: ImageInfo) => {
                            updateInventoryForm({
                                pictureUri: imageInfo.uri,
                            })
                        }}
                    />
                </Box>
                <Box>
                    <TextInput
                        label={t('inventory:name')}
                        controlled
                        value={inventoryForm.name}
                        onChange={(value) => {
                            updateInventoryForm({
                                name: value,
                            })
                        }}
                    />
                    {userInfo.data && (
                        <Select
                            label={t('inventory:category')}
                            data={userInfo.data?.objectCategories.map(
                                (item) => ({
                                    value: item.id,
                                    label: item.name,
                                })
                            )}
                            onSelect={(option) => {
                                updateInventoryForm({
                                    categoryId: option.value,
                                })
                            }}
                        />
                    )}
                    <TextInput
                        label={t('inventory:purchaseDate')}
                        controlled
                        value={inventoryForm.purchaseDate}
                        onChange={(value) => {
                            updateInventoryForm({
                                purchaseDate: value,
                            })
                        }}
                    />
                    <TextInput
                        label={t('inventory:purchaseValue')}
                        controlled
                        value={inventoryForm.purchaseValue}
                        type="number"
                        onChange={(value) => {
                            updateInventoryForm({
                                purchaseValue: value,
                            })
                        }}
                    />
                    <TextInput
                        label={t('inventory:description')}
                        controlled
                        value={inventoryForm.description}
                        onChange={(value) => {
                            updateInventoryForm({
                                description: value,
                            })
                        }}
                    />
                </Box>
                <Box marginTop={theme.spacing.m} marginBottom={theme.spacing.m}>
                    <Text color="secondary">{t('inventory:documents')}</Text>
                    <Row marginTop={theme.spacing.s}>
                        <ImageBoxPicker
                            icon="file-document"
                            label={t('inventory:addReceipt')}
                            onFinish={(imageInfo: ImageInfo) => {
                                updateInventoryForm({
                                    invoiceUri: imageInfo.uri,
                                })
                            }}
                        />
                        <ImageBoxPicker
                            icon="camera"
                            label={t('inventory:addPhotos')}
                            marginLeft={theme.spacing.s}
                        />
                    </Row>
                </Box>
            </ScrollView>
        </KeyboardAvoidingView>
    )
}
