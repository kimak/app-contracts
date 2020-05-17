export type UserInfo = {
    contracts: { [key in string]: Omit<Contract, 'inventory'> }
    inventoryPriceLimit: number
    objectCategories: ObjectCategory[]
}

export type ObjectCategory = {
    name: string
    id: string
}

export type ContractsMap = { [key in string]: Contract }

export interface Contract {
    name: string
    id: string
    address: string
    inventory: InventoryObject[]
}

export interface InventoryBase {
    name: string
    price: number
    categoryId: string
    purchaseDate: string
    pictureUri: string
    invoiceUri: string
    description?: string
}

export interface InventoryObject extends InventoryBase {
    id: string
}

export interface InventoryForm {
    name?: string
    categoryId?: string
    purchaseDate?: string
    purchaseValue?: string
    pictureUri?: string
    invoiceUri?: string
    description?: string
}
