//
//  L08S01 - Changing and detecting variable types
//
var i = 5;
var iStr = i.toString();
gs.info(typeof i);
gs.info(typeof iStr);

var n = parseInt(iStr);
gs.info(typeof n + ' n=' + n);


/*
Create 3 string variables 
Print the lenght of each string
concatenate them together and using new line character, save it to a new variable 
then print the lenght of the new variable
*/

var myName = "Anks"
var myPhone = "0430361020"
var myEmail = "anks.aqua@yahoo.com"

gs.info('My Name lenght is ' + myName.length);
gs.info('My Phone lenght is ' + myPhone.length);
gs.info('My Email lenght is ' + myEmail.length);

var myDetails = myName + '\n' + myPhone + '\n' + myEmail;

gs.info(myDetails);

gs.info(myDetails.length);