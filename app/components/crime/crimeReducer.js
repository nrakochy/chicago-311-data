(function(){
	angular
		.module('app')
		.factory('CrimeReducer', CrimeReducer)

		function CrimeReducer(){
			var service = {
				filter: filter
			}

			return service;

			function qualified?(){
			}

			function reduce(data, attribute, qual){
				_.filter(obj[attribute])){ return object }
		}
})();

/*
arrest
:
true
beat
:
"0813"
block
:
"043XX W 63 ST"
case_number
:
"G647862"
date
:
"2001-10-28T02:31:05.000"
description
:
"POSS: CANNABIS 30GMS OR LESS"
district
:
"008"
domestic
:
false
fbi_code
:
"18"
id
:
"1820935"
iucr
:
"1811"
latitude
:
"41.778661199"
location
:
Object
location_description
:
"ALLEY"
longitude
:
"-87.731624599"
primary_type
:
"NARCOTICS"
updated_on
:
"2015-08-17T15:03:40.000"
x_coordinate
:
"1148368"
y_coordinate
:
"1862509"
year
:
"2001"