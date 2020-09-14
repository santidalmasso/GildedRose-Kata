import { ItemQuality } from './ItemValues/ItemQuality';
import { ItemSellIn } from './ItemValues/ItemSellIn';
import { CommonItem } from './Items/CommonItem';
import { ItemFactoryInterface } from './ItemFactoryInterface';
import { Item } from './Item';
export type ClassOfItem = Function
export type StringItem = string

export class ItemFactory implements ItemFactoryInterface
{
    private factories = {}

    private convertClassToCalleable(item: ClassOfItem): Function
    {
        return (itemCategory: string, sellIn: ItemSellIn, quality: ItemQuality) => new item.prototype.constructor(itemCategory, sellIn, quality)
    }

    public addItemFactory(itemCategory: StringItem, itemClass: ClassOfItem): void 
    {
        this.factories[itemCategory] = this.convertClassToCalleable(itemClass)
    }

    public createItem(itemCategory: string, sellInNumber: number, qualityNumber: number ): Item
    {
        const sellIn = new ItemSellIn(sellInNumber)
        const quality = new ItemQuality(qualityNumber)

        try
        {
            const factory = this.factories[itemCategory]
            const item = factory(itemCategory, sellIn, quality)
            return item
        }
        catch(err)
        {
            return new CommonItem(itemCategory, sellIn, quality)
        }

    }

}
