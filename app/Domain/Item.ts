import { ItemQuality } from './ItemValues/ItemQuality';
import { ItemSellIn } from './ItemValues/ItemSellIn';

export abstract class Item
{
    protected name: string;
    protected sellIn: ItemSellIn;
    protected quality: ItemQuality;

    constructor(name: string, sellIn: ItemSellIn, quality: ItemQuality)
    {
        this.name = name;
        this.sellIn = sellIn;
        this.quality = quality;
    }

    public update(): void
    {
        this.updateSellIn()
        this.updateQuality();
    }
    
    protected updateSellIn(): void
    {
        this.sellIn.decrease()
    }

    protected abstract updateQuality(): void;
    
    public getName()
    {
        return this.name
    }

    public getSellIn()
    {
        return this.sellIn.getValue()
    }

    public getQuality()
    {
        return this.quality.getValue()
    }

    public toString(): string
    {
        return `${this.name} ${this.sellIn.getValue()} ${this.quality.getValue()}`
    }
}
