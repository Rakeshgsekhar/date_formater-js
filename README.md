# date_formater-js 1.0.1
An npm package for easy date formate conversion.

This package enable you to convert date to different formats.

Available formats : 

Input can be provided in the format YYYY-MM-DD and for current date conversion either null or new Date() can be passed as argumets along with mode.

    
    # Input Formate => formateDate(date,mode) => formateDate("2020-04-15","DD-MM-YYYY")
available modes and output

|MODE         |   OUTPUT                  |
|-------------|---------------------------|
|DD-MM-YYYY   |   15-04-2020              |
|DD-MM-YY     |   15-04-20                |
|DDMMMYYYY    |   15 APR 2020             |
|DDMONTHYYYY  |   15 APRIL 2020           |
|LONGFULL     |   Wednesday APRIL,15 2020 |
|LONG         |   Wed APRIL,15 2020       |
|DAY          |   Wednesday               |
|MONTH        |   APRIL                   |

  # USAGE
  add to your package.json => "date_formater-js":1.0.1  or run npm install date_formater-js
  
  import {formateDate} from 'date_formater-js';
  
  # sample
  formateDate("2020-04-16","DDMMMYYYY")  will return date in formate 16 APR 2020
  
  # for converting current Date 
  formateDate(null,"DDMMMYYYY") or formateDate(new Date(),"DDMMMYYYY")  # can be used
