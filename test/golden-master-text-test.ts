import { SulfurasItem } from './../app/Domain/Items/SulfurasItem';
import { BackstagePassesItem } from './../app/Domain/Items/BackstagePassesItem';
import { ConjuredItem } from './../app/Domain/Items/ConjuredItem';
import { GenericItem } from './../app/Domain/GenericItem';
import { ItemFactory } from '../app/Domain/ItemFactory';
import { GildedRose } from '../app/Application/gilded-rose';
import { AgedBrieItem } from '../app/Domain/Items/AgedBrieItem';

const itemFactory = new ItemFactory()

itemFactory.addItemFactory('Aged Brie', AgedBrieItem)
itemFactory.addItemFactory('Sulfuras, Hand of Ragnaros', SulfurasItem)
itemFactory.addItemFactory('Backstage passes to a TAFKAL80ETC concert', BackstagePassesItem)
itemFactory.addItemFactory('Conjured Mana Cake', ConjuredItem)

const genericItem = new GenericItem(itemFactory)

const items = [
    genericItem.create("+5 Dexterity Vest", 10, 20), //
    genericItem.create("Aged Brie", 2, 0), //
    genericItem.create("Elixir of the Mongoose", 5, 7), //
    genericItem.create("Sulfuras, Hand of Ragnaros", 0, 80), //
    genericItem.create("Sulfuras, Hand of Ragnaros", -1, 80),
    genericItem.create("Backstage passes to a TAFKAL80ETC concert", 15, 20),
    genericItem.create("Backstage passes to a TAFKAL80ETC concert", 10, 49),
    genericItem.create("Backstage passes to a TAFKAL80ETC concert", 5, 49),
    // now this conjured item works
    genericItem.create("Conjured Mana Cake", 3, 6)];


const gildedRose = new GildedRose(items);
var days: number = 5;
for (let i = 0; i < days; i++) 
{
    console.log("-------- day " + i + " --------");
    console.log("name, sellIn, quality");
    items.forEach(element => {
        console.log(element.toString());
    });
    console.log()
    gildedRose.updateQuality();
}


/*
function addAllCustomItemsFactoriesToItemFactory(itemFactories: [StringCategory, ClassOfItem][], factory: ItemFactory) {
    
    itemFactories.map(([name, item]) => (
        
        factory.addItemFactory(
            name,
            (itemCategory: string, sellIn: ItemSellIn, quality: ItemQuality) => new item.prototype.constructor(itemCategory, sellIn, quality)

        ))
    )
}
*/
