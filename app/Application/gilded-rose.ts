import {Item} from '../Domain/Item'

export class GildedRose 
{
    items: Array<Item>;

    constructor(items = [] as Array<Item>) 
    {
        this.items = items;
    }

    updateQuality(): Array<Item> 
    {

        for (let item of this.items) 
        {
            item.update()
        }

        return this.items
    }
}
