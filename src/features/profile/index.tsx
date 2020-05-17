import React, { useEffect } from 'react'
import { useContracts } from '../ContractsProvider'
import { Select, SelectOption } from '../../ui/Select'
import { Box } from '../../ui/primitives/Layout'
import { useTheme } from '../../ui/ThemeProvider'
import { Title } from '../../ui/Title'
import { SafeAreaView } from 'react-native-safe-area-context'
import { ImageBox } from '../../ui/ImageBox'

export const ProfileScreen = () => {
    const theme = useTheme()
    const { fetchContractById, userInfo } = useContracts()
    // @todo clean data structure with a selector
    const selectData =
        userInfo && userInfo.data
            ? Object.keys(userInfo.data.contracts).map((key) => {
                  const element = userInfo.data && userInfo.data.contracts[key]
                  return { value: element?.id, label: element?.name }
              })
            : []
    return (
        <SafeAreaView
            style={{
                backgroundColor: theme.colors.white,
                flexGrow: 1,
            }}
        >
            <Box padding={theme.spacing.m}>
                <Title>Profile</Title>
                <ImageBox icon="account" alignSelf="center" />
                {selectData && (
                    <Select
                        label="choose your contract"
                        initialIndex={0}
                        // @ts-ignore
                        data={selectData}
                        onSelect={(option: SelectOption) => {
                            fetchContractById(option.value)
                        }}
                    />
                )}
            </Box>
        </SafeAreaView>
    )
}
