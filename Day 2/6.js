let str = "Tot"
let lwStr = str.toLowerCase()
let reversed=""

for (i=lwStr.length-1; i>=0; i--){
    reversed+=lwStr[i]
}
if( reversed===lwStr){
    console.log("Is a Palindrome");
}
else{
    console.log("Not a Palindrome");
}