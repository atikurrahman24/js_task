let str="kjesaryhiow ueqy5r09436578964w7iyr5 kjsefh"
let c=0

for (let i=0; i<str.length; i++){
    if (str[i] >= "0" && str[i] <= "9"){
        c++
    }
}
console.log(c);