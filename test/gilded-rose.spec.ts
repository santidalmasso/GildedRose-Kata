import { GenericItem } from './../app/Domain/GenericItem';
import { ItemFactory } from './../app/Domain/ItemFactory';
import { expect } from 'chai';
import { GildedRose } from '../app/Application/gilded-rose';

describe('Gilded Rose', function () 
{

    it('should foo', function()
    {
        const genericItem = new GenericItem(new ItemFactory())
        const gildedRose = new GildedRose([genericItem.create('foo', 0, 0) ]);
        const items = gildedRose.updateQuality();
        expect(items[0].getName()).to.equal('foo');
    });

});
