# date_formater-js 2.0.3
An npm package for easy date formate conversion.

This package enable you to convert date to different formats.

Available formats : 

Input can be provided in the format YYYY-MM-DD and for current date conversion either null or new Date() can be passed as argumets along with mode.

    
    # Input Formate => formatDate(date,mode) => formatDate("2020-04-15","DD-MM-YYYY")

available modes and output

|MODE         |   OUTPUT                  |
|-------------|---------------------------|
|DD-MM-YYYY   |   15-04-2020              |
|DD-MM-YY     |   15-04-20                |
|DDMMMYYYY    |   15 APR 2020             |
|DDMonthYYYY  |   15 April 2020           |
|LONGFULL     |   Wednesday April,15 2020 |
|LONG         |   Wed April,15 2020       |
|DAY          |   Wednesday               |
|MONTH        |   April                   |
|DDMmmYYYY    |   15 Apr 2020             |

  # USAGE
  add to your package.json => "date_formater-js":2.0.2  or run npm install date_formater-js
  
  # const date_formater = require('date_formater-js')
  
  # const date = date_formater.formatDate(null,"DDMMMYYYY"); 
  **************************************************************
  # sample
  formatDate("2020-04-16","DDMMMYYYY")  will return date in formate 16 APR 2020
  
  # for converting current Date 
  formatDate(null,"DDMMMYYYY") or formatDate(new Date(),"DDMMMYYYY")  # can be used
