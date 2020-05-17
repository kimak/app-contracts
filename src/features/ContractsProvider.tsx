import React, { createContext, useCallback, useContext, useState } from 'react'
import { Contract, UserInfo, InventoryForm } from './types'
import { Alert } from 'react-native'
import { api } from './api'

interface DataState<T> {
    data?: T
    loading: boolean
    error: boolean
}

type ContractsContextProps = {
    fetchContractById: (id: string) => Promise<void>
    fetchUserInfo: () => Promise<void>
    contract: DataState<Contract>
    userInfo: DataState<UserInfo>
    inventoryForm: InventoryForm
    updateInventoryForm: (value: InventoryForm) => void
    saveInventoryForm: () => Promise<
        | {
              success: boolean
              error?: undefined
          }
        | {
              error: string
              success?: undefined
          }
    >
}

type ContractsProviderProps = {
    children: React.ReactNode
}

export const ContractsContext = createContext<ContractsContextProps>({
    fetchContractById: () => Promise.resolve(),
    fetchUserInfo: () => Promise.resolve(),
    contract: { loading: true, error: false },
    userInfo: { loading: true, error: false },
    inventoryForm: {},
    updateInventoryForm: () => {},
    saveInventoryForm: () => Promise.resolve({ error: '' }),
})

/**
 * This provider is a first iteration and could be split in a smaller one.
 */
export const ContractsProvider = (props: ContractsProviderProps) => {
    const [contract, setContract] = useState<{
        data?: Contract
        loading: boolean
        error: boolean
    }>({ loading: true, error: false })

    const [userInfo, setUserInfo] = useState<{
        data?: UserInfo
        loading: boolean
        error: boolean
    }>({ loading: true, error: false })

    const [inventoryForm, updateInventoryForm] = useState<InventoryForm>({})
    const fetchContractById = useCallback(async (id: string) => {
        const result = await api.getContractById(id)
        if (result.isOk()) {
            setContract({ loading: false, data: result.value, error: false })
        } else {
            Alert.alert('error: ', result.error)
        }
    }, [])

    const fetchUserInfo = useCallback(async () => {
        const result = await api.getUserInfo()
        if (result.isOk()) {
            setUserInfo({ loading: false, data: result.value, error: false })
            fetchContractById(Object.keys(result.value.contracts)[0])
        }
    }, [])

    const saveInventoryForm = useCallback(async () => {
        const params = {
            name: inventoryForm.name!,
            price: parseInt(inventoryForm.purchaseValue!),
            categoryId: inventoryForm.categoryId!,
            purchaseDate: inventoryForm.purchaseDate!,
            pictureUri: inventoryForm.pictureUri!,
            invoiceUri: inventoryForm.invoiceUri!,
            description: inventoryForm.description,
        }
        if (!contract.data) {
            Alert.alert('no_contract')
            return { error: 'no_contract' }
        }
        const result = await api.createInventoryObject(params, contract.data.id)
        if (result.isOk()) {
            updateInventoryForm({})
            setContract({ loading: false, data: result.value, error: false })
            return { success: true }
        } else {
            Alert.alert('error: ', result.error)
            return { error: result.error }
        }
    }, [contract, inventoryForm])

    return (
        <ContractsContext.Provider
            value={{
                fetchContractById,
                contract,
                fetchUserInfo,
                userInfo,
                inventoryForm,
                updateInventoryForm: (props: Partial<InventoryForm>) => {
                    updateInventoryForm({
                        ...inventoryForm,
                        ...props,
                    })
                },
                saveInventoryForm,
            }}
        >
            {props.children}
        </ContractsContext.Provider>
    )
}

export const useContracts = () => useContext(ContractsContext)
