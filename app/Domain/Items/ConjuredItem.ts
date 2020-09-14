import { ItemQuality } from './../ItemValues/ItemQuality';
import { Item } from '../Item';

export class ConjuredItem extends Item
{
    public updateQuality(): void
    {
        this.quality.decrease(this.sellIn.isExpired(), 2*ItemQuality.NORMAL_STEPS)
    }
}