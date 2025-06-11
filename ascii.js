// Ascii vaneko purano computer digit langauge ho jasle. words harlai computer le bujhen bhasama number ma translate grcha;

let userOne = "vhim";
let userOneConvert = userOne.charCodeAt(0).toString(2); // CharCodeCat converst the value to the ascii and toString helps to conver the value 
// to the binary numbers; 
console.log(userOneConvert);

// Converting the binary to the string; 
let binary = "1001 0001 00101";
// Note : parseInt it helps to conver the string to the integer. It gives the first integer numbers; 
// How this below code is working > first spliting all the value and seting it to the arrays and maping passing the spliting value
// and converting all the to the string.fromCharCode > it is a static methods return a string created by the sequence of the utf 
// and after that return the value string and join it together; 
// utf > uniform transforamtion format : yo vaneko chai yesle chai savai value lai symbol ma convert grcha. That computer can read it. 
let binaryConvert = binary.split("").map(d => String.fromCharCode(parseInt(d,2))).join(" ")
console.log(binaryConvert);

