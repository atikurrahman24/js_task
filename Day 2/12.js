// let s = "I love programming in JavaScript";
// let w = s.split(" "); 
// let lw = "";

// for (let i = 0; i < w.length; i++) {
//     if (w[i].length > lw.length) {
//         lw = w[i];
//     }
// }

// console.log("Longest word:", lw); 

let s="I love Javascript in Prongamming Languages"
let w=s.split(" ")
let i=0
let lw=""

while(i<w.length){
    if (w[i].length>lw.length){
        lw=w[i]
    }
    i++
}
console.log(lw);