// let s="     Love       you       Butterfly      "
// s=s.trim()
// let ns= s.replaceAll("       ", " ")
// console.log(ns);


let s="     Love       you       Butterfly      "
s=s.trim()
let ns= s.replaceAll(/\s+/g, " ")          //   "/s"= all space and "g"=used it globally
console.log(ns);