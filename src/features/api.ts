import {
    Contract,
    InventoryObject,
    UserInfo,
    ContractsMap,
    InventoryBase,
} from './types'
import { uuidv4 } from '../helpers/uuidv4'
import { ok, err } from 'neverthrow'

const contracts = {
    '0': {
        id: '0',
        name: 'Principal residence',
        address: '10 rue de Chabrol 75010',
        inventory: [
            {
                id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
                name: 'Cartier Ring',
                price: 5780,
                categoryId: '2',
                purchaseDate: '01/07/2015',
                pictureUri:
                    'https://cdn1.jolicloset.com/imgr/full/2019/12/160143-1/other-cartier-ring-love-model-in-platinum-diamond.jpg',
                invoiceUri: '',
            },
            {
                id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
                name: 'Lou.Yetu Necklace',
                price: 60,
                categoryId: '2',
                purchaseDate: '01/07/2015',
                pictureUri:
                    'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTRYa_4vOgV8Px0HYf9O5b6UeXvi7kvRZNuxpiIkbjwMFfG5nyU&usqp=CAU',
                invoiceUri: '',
            },
        ],
    },
    '1': {
        id: '1',
        name: 'Second home',
        address: '20 rue de la fleche 14200',
        inventory: [
            {
                id: 'c1b1-46c2-aed5-3ad53abb28ba-bd7acbea',
                name: 'Ring Cartier',
                price: 1780,
                categoryId: '2',
                purchaseDate: '01/07/2017',
                pictureUri:
                    'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTNq2cqJ4f-HC9KdGaPwcVPuSgPCvEQdweFp1lJBrOT7falJzqn&usqp=CAU',
                invoiceUri: '',
            },
        ],
    },
}

const userInfo = {
    contracts,
    inventoryPriceLimit: 40000,
    objectCategories: [
        { id: '0', name: 'art' },
        { id: '1', name: 'electronic' },
        { id: '2', name: 'jewelry' },
        { id: '3', name: 'musical instruments' },
    ],
}

const getUserInfo = async () => {
    return ok(userInfo as UserInfo)
}

const getUserContracts = async () => {
    return userInfo.contracts as ContractsMap
}

const getContractById = async (contractId: string) => {
    const contracts = await getUserContracts()
    const contract = contracts[contractId] as Contract
    if (!contract) return err('bad_contract_id')
    return ok(contract)
}

const getObjectCategories = async () => {
    return userInfo.objectCategories
}

const getInventoryPriceLimit = () => userInfo.inventoryPriceLimit

const createInventoryObject = async (
    props: InventoryBase,
    contractId: string
) => {
    const contract = await getContractById(contractId)
    if (contract.isOk()) {
        if (
            props.name === undefined ||
            props.price === undefined ||
            props.categoryId === undefined ||
            props.purchaseDate === undefined ||
            props.pictureUri === undefined ||
            props.invoiceUri === undefined
        )
            return err('missing_parameter')

        const total =
            props.price +
            contract.value.inventory.reduce(
                (prev, current) => prev + current.price,
                0
            )

        if (total >= getInventoryPriceLimit()) {
            return err('inventory_price_limit')
        }

        const isUnique = (item: InventoryObject) =>
            item.name === props.name &&
            item.price === props.price &&
            item.purchaseDate === props.purchaseDate &&
            item.categoryId === props.categoryId

        const allContracts = await getUserContracts()
        Object.keys(allContracts).forEach((id) => {
            if (allContracts[id].inventory.filter(isUnique).length > 0) {
                return err('duplicate_inventory_object')
            }
        })
        const id = uuidv4()
        contract.value.inventory.unshift({
            id,
            name: props.name,
            price: props.price,
            categoryId: props.categoryId,
            purchaseDate: props.purchaseDate,
            pictureUri: props.pictureUri,
            invoiceUri: props.invoiceUri,
            description: props.description,
        })
        return ok(contract.value)
    } else {
        return err('bad_contract_id')
    }
}

export const api = {
    getUserInfo,
    getUserContracts,
    getContractById,
    getInventoryPriceLimit,
    getObjectCategories,
    createInventoryObject,
}
