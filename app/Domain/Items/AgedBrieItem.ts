import { Item } from '../Item';

export class AgedBrieItem extends Item
{ 
    protected updateQuality(): void
    { 
        this.quality.increase(this.sellIn.isExpired())
    }
}