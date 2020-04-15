
import * as assert from 'assert';
import {currentDateFormater} from '../src/index';


describe('date format testing',()=>{
    it('date test',()=>{
        assert.equal(currentDateFormater(null,"DDMMMYYYY"),"15 APR 2020");
        assert.equal(currentDateFormater(null,"DD-MM-YY"),"15-04-20");
        assert.equal(currentDateFormater("15-04-2020","DD-MM-YY"),"15-04-20");
    })
})