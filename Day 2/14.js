// let str = "Programming"
// let vow = "aeiouAEIOU"
// let i=0
// let r =""
// while( i<str.length){
//     if (!vow.includes(str[i])){
//         r+=str[i]
//     }
//     i++
// }
// console.log(r);

let str="Programming"
let vow="aeiouAEIOU"
let r=""

for (let i=0; i<str.length; i++){
    if (!vow.includes(str[i])){
        r+=str[i]
    }
}
console.log(r);