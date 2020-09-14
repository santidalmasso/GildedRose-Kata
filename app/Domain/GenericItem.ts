import { ItemFactoryInterface } from './ItemFactoryInterface';
import { Item } from './Item';

export class GenericItem
{
    private itemFactory: ItemFactoryInterface

    constructor(itemFactory: ItemFactoryInterface)
    {
        this.itemFactory = itemFactory
    }

    public create(itemCategory: string, sellIn: number, quality: number): Item 
    {
        return this.itemFactory.createItem(itemCategory, sellIn, quality)
    }
}