export const formateDate = (date, mode) => {};

export const currentDateFormater = (mode) => {
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
      formateddate = day + " " + months[month].slice(3) + " " + year;
      return formateddate;
	}
	default:{
		return "invalid mode";
	}
  }
};
