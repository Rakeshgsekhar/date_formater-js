
//import {currentDateFormater} from '../src';

const currentDateFormater=(mode)=>{
    let currnetDate = new Date();
  let month = ("0" + (currnetDate.getMonth() + 1)).slice(-2);
  let day = ("0" + currnetDate.getDate()).slice(-2);
  let year = "" + currnetDate.getFullYear();

  const months = [
    "JANUARY",
    "FEBRUARY",
    "MARCH",
    "APRIL",
    "JUNE",
    "JULY",
    "AUGUST",
    "SEPTEMBER",
    "OCTOBER",
    "NOVEMBER",
    "DECEMBER",
  ];
  let formateddate = "";
  switch (mode) {
    case "DDMMMYYYY": {
      formateddate = day + " " + months[currnetDate.getMonth()].slice(0,3) + " " + year;
      return formateddate;
    }
    case "DD-MM-YY": {
		formateddate = day + "-" + month + "-" + year.slice(-2);
		return formateddate;
	  }
	default:{
		return "invalid mode";
	}
  }
}
describe('date format testing',()=>{
    it('date test',()=>{
        expect(currentDateFormater("DDMMMYYYY")).toBe("14 APR 2020");
        expect(currentDateFormater("DD-MM-YY")).toBe("14-04-20")
    })
})