let str="Atikur Rahman Pathan Boro Mia"
let chr=str.toLowerCase()
let vow="aeiou"
let count=0

for (let i=0; i<chr.length; i++){
    if (vow.includes(chr[i])){
        count++;
    }
}
console.log(count);