import { api } from './api'

describe('api', () => {
    it('inventoryPriceLimit should be 40000 ', async () => {
        const result = await api.getInventoryPriceLimit()
        expect(result).toBe(40000)
    })

    it("should return an error when contract id doesn't exist", async () => {
        const result = await api.getContractById('2')
        if (result.isErr()) {
            expect(result.error).toBe('bad_contract_id')
        }
    })

    it('should return contract when it already exist', async () => {
        const result = await api.getContractById('0')
        if (result.isOk()) {
            expect(result.value.id).toBe('0')
        }
    })

    it('should add inventory object inside a contract', async () => {
        const object = {
            name: 'Flower Ring',
            price: 0,
            categoryId: '2',
            purchaseDate: '01/07/1018',
            pictureUri: 'file',
            invoiceUri: 'file',
        } as any
        await api.createInventoryObject(object, '0')
        const contract = await api.getContractById('0')
        if (contract.isOk()) {
            expect(contract.value.inventory[0].name).toBe('Flower Ring')
        }
    })

    it('should return missing_parameter error', async () => {
        const object = {
            name: 'Limited price',
            price: 100,
            categoryId: '1',
        } as any

        const result = await api.createInventoryObject(object, '0')
        if (result.isErr()) {
            expect(result.error).toBe('missing_parameter')
        }
    })

    it('should retrun inventory_price_limit error', async () => {
        const object = {
            name: 'Limited price',
            price: 50000000000,
            categoryId: '1',
            purchaseDate: '01/01/2019',
            pictureUri: 'image.jpg',
            invoiceUri: 'image.jpg',
        } as any

        const result = await api.createInventoryObject(object, '0')
        if (result.isErr()) {
            expect(result.error).toBe('inventory_price_limit')
        }
    })

    it('should throw duplicate_inventory_object when object is not unique', async () => {
        const object = {
            name: 'Ring Cartier',
            price: 1780,
            categoryId: '2',
            purchaseDate: '01/07/2017',
            pictureUri: 'file',
            invoiceUri: 'file',
        } as any

        const result = await api.createInventoryObject(object, '0')
        if (result.isErr()) {
            expect(result.error).toBe('duplicate_inventory_object')
        }
    })
})
