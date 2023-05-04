let namee = "Mynameisharshal"
console.log(namee)
console.log(namee.length) // varible.length method is use to return the length of string

// extracting the substring from string
let uname1 = namee.slice(2, 5) // slice is use for extract the string from main stirng using position of strings and store the extracted part in new string
console.log(uname1)

let uname2 = namee.slice(4) // if we give only one parameter it return remaining string after the first parameter
console.log(uname2) // if we give negative parameter it extract string form end of the string

let uname3 = namee.substring(-4, 3)
console.log(uname3) // in substrign method parameter less than 0 treated as 0

let uname4 = namee.substr(5, 6) // here the first parameter start the extraction and second parameter define the length of extraced part
console.log(uname4)

let namee2 = "my name is harshal wankhade"
console.log(namee2)

// to replace the string with replace("orignalstring", "replacestrign")
// 1. it doesn not change the orignal string
// 2. it return the new string
// 3. it only change the first occurance
// 4. use /i flag to replace insensetive
let uname5 = namee2.replace("harshal", "Vasudha")
console.log(uname5)

// to return the specific character in string
let namee3 = "abcdef"
console.log(namee3)
let uname7 = namee3.charAt(4)
console.log(uname7)

// to convert the string into array
let uname8 = namee3.split("")
console.log(uname8)