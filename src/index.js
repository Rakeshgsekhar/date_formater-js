

function formatDate (date,format) {
  let currentDate = (date === null)? new Date():new Date(date);
  let month = ("0" + (currentDate.getMonth() + 1)).slice(-2);
  let day = ("0" + currentDate.getDate()).slice(-2);
  let year = "" + currentDate.getFullYear();
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const months = [
    "January",
    "February",
    "March",
    "April",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  let formattedDate = "";
  switch (format) {
    case "DDMmmYYYY": {
      formattedDate = day + " " + months[currentDate.getMonth()].slice(0,3) + " " + year;
      return formattedDate;
    }
    case "DDMMMYYYY": {
      formattedDate = day + " " + months[currentDate.getMonth()].slice(0,3).toUpperCase() + " " + year;
      return formattedDate;
    }
    case "DDMonthYYYY": {
      formattedDate = day + " " + months[currentDate.getMonth()] + " " + year;
      return formattedDate;
	  }
	  case "DD-MM-YYYY": {
      formattedDate = day + "-" + month + "-" + year;
      return formattedDate;
	  }
	  case "DD-MM-YY": {
      formattedDate = day + "-" + month + "-" + year.slice(-2);
      return formattedDate;
    }
    case "LONGFULL":{
      formattedDate = days[currentDate.getDay()]+" "+months[currentDate.getMonth()]+","+day+" "+year;
      return formattedDate
    }
    case "LONG":{
      formattedDate = days[currentDate.getDay()].slice(0,3)+" "+months[currentDate.getMonth()]+","+day+" "+year;
      return formattedDate
    }
    case "DAY":{
      formattedDate = days[currentDate.getDay()];
      return formattedDate
    }
    case "MONTH":{
      formattedDate = months[currentDate.getMonth()];
      return formattedDate
    }
	default:{
		return "Invalid conversion code";
	}
  }
};

exports.formatDate =formatDate;
