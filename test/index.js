
import * as assert from 'assert';
import {formateDate} from '../src/index';


describe('date format testing',()=>{
    it('date test',()=>{
       // assert.equal(formateDate(null,"DDMMMYYYY"),"16 APR 2020");
       // assert.equal(formateDate(new Date(),"DD-MM-YY"),"16-04-20");
        assert.equal(formateDate("2020-04-15","DD-MM-YY"),"15-04-20");
        assert.equal(formateDate("2020-04-15","DDMMMYYYY"),"15 APR 2020");
        assert.equal(formateDate("2020-04-15","DDMONTHYYYY"),"15 APRIL 2020");
        assert.equal(formateDate("2020-04-15","DD-MM-YYYY"),"15-04-2020");
        assert.equal(formateDate("2020-04-15","LONGFULL"),"Wednesday APRIL,15 2020");
        assert.equal(formateDate("2020-04-15","LONG"),"Wed APRIL,15 2020");
        assert.equal(formateDate("2020-04-15","DDDMMMYYYY"),"invalid Conversion code");
    })
})