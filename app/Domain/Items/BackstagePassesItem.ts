import { Item } from '../Item';

export class BackstagePassesItem extends Item
{
    protected updateQuality(): void
    { 
        const {quality, sellIn} = this

        switch (true) 
        {       
            case sellIn.getValue() >= 10:
                quality.increase(sellIn.isExpired())
                break;
            
            case sellIn.getValue() >= 5 :
                quality.increase(sellIn.isExpired(), 2)
                break;
            
            case sellIn.getValue() >= 0 :
                quality.increase(sellIn.isExpired(), 3)
                break;
        
            default:
                quality.reset()
                break;
        }
    }
}