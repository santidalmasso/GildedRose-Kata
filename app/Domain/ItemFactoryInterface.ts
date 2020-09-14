import { Item } from './Item';

export interface ItemFactoryInterface
{    
    createItem(category: string, sellIn: number, quality: number ): Item;
}