

export const formateDate = (date,code) => {
  let currnetDate = (date === null)? new Date():new Date(date);
  let month = ("0" + (currnetDate.getMonth() + 1)).slice(-2);
  let day = ("0" + currnetDate.getDate()).slice(-2);
  let year = "" + currnetDate.getFullYear();
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
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
  switch (code) {
    case "DDMMMYYYY": {
      formateddate = day + " " + months[currnetDate.getMonth()].slice(0,3) + " " + year;
      return formateddate;
	}
	case "DDMONTHYYYY": {
		formateddate = day + " " + months[currnetDate.getMonth()] + " " + year;
		return formateddate;
	  }
	  case "DD-MM-YYYY": {
		formateddate = day + "-" + month + "-" + year;
		return formateddate;
	  }
	  case "DD-MM-YY": {
		formateddate = day + "-" + month + "-" + year.slice(-2);
		return formateddate;
    }
    case "LONGFULL":{
      formateddate = days[currnetDate.getDay()]+" "+months[currnetDate.getMonth()]+","+day+" "+year;
      return formateddate
    }
    case "LONG":{
      formateddate = days[currnetDate.getDay()].slice(0,3)+" "+months[currnetDate.getMonth()]+","+day+" "+year;
      return formateddate
    }
	default:{
		return "invalid Conversion code";
	}
  }
};


//console.log(currentDateFormater("DDMMMYYYY"))