export class ItemSellIn 
{
    private value: number
    public static readonly EXPIRED_DATE = 0
    public static readonly DEFAULT_QUANTITY_TO_DECREASE = 1
    
    public constructor(sellIn: number)
    {
        this.value = sellIn
    }

    public decrease(): void
    {
        this.value -= ItemSellIn.DEFAULT_QUANTITY_TO_DECREASE
    }

    public getValue(): number
    {
        return this.value
    }

    public isExpired(): boolean
    {
        return this.value < ItemSellIn.EXPIRED_DATE
    }
}