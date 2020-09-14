import { Item } from '../Item';

export class CommonItem extends Item
{
    protected updateQuality(): void
    {
        this.quality.decrease(this.sellIn.isExpired())
    }
}