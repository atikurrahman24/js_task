let str= "Atikur Rahman aaaa"
let chr= str.toLowerCase()
let chk="a"
let count=0

for (i=0; i<chr.length; i++){
    if (chk===(chr[i])){
        count++
    }
}

console.log("a Appears", count, "Times");