//
// L14S03 - Truthy and Falsy
//

// Take a look at strings
//
var string1;
var string2 = null;
var string3 = 'Hello, world!';
gs.info('string1=' + ((string1) ? 'true' : 'false'));
gs.info('string2=' + ((string2) ? 'true' : 'false'));
gs.info('string3=' + ((string3) ? 'true' : 'false'));

// Lab 4:
// Create a script that takes a string variable "Hello world"
// and translates it to at least 3 different languages
// based on a 'language' variable.
// Make the default language English if a match isn't found.


var sayHello = "Hello world"; // Hola Mundo, こんにちは世界, ਸਤਿ ਸ੍ਰੀ ਅਕਾਲ ਦੁਨਿਆ
var message = '';

switch (sayHello) {
    case "ਸਤਿ ਸ੍ਰੀ ਅਕਾਲ ਦੁਨਿਆ":
        message = 'Punjabi';
        break;
    case 'Hola Mundo':
        message = 'Spanish';
        break;
    case 'こんにちは世界':
        message = 'Japanese'
        break;
    default:
        message = "I don't know"
}
gs.info('Name is the language is ' + message);