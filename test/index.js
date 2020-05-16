
import * as assert from 'assert';
import {formatDate} from '../src/index';


describe('date format testing',()=>{
    let currentdate ='';
    it('date test',()=>{
       // assert.equal(formateDate(null,"DDMMMYYYY"),"16 APR 2020");
       // assert.equal(formateDate(new Date(),"DD-MM-YY"),"16-04-20");
        assert.equal(formatDate("2020-04-15","DD-MM-YY"),"15-04-20");
        assert.equal(formatDate("2020-04-15","DDMMMYYYY"),"15 APR 2020");
        assert.equal(formatDate("2020-04-15","DDMmmYYYY"),"15 Apr 2020");
        assert.equal(formatDate("2020-04-15","DDMonthYYYY"),"15 April 2020");
        assert.equal(formatDate("2020-04-15","DD-MM-YYYY"),"15-04-2020");
        assert.equal(formatDate("2020-04-15","LONGFULL"),"Wednesday April,15 2020");
        assert.equal(formatDate("2020-04-15","LONG"),"Wed April,15 2020");
        assert.equal(formatDate("2020-04-15","DDDMMMYYYY"),"Invalid conversion code");
        assert.equal(formatDate("2020-04-15","DAY"),"Wednesday");
        assert.equal(formatDate("2020-04-15","MONTH"),"April");
        let today = new Date();
        currentdate = formatDate(today,"DD-MM-YY");
        assert.equal(formatDate(null,"DD-MM-YY"),currentdate);
        
//DDMmmYYYY
    })
})