function remDig(str){
    let result =""
    for (let i =0; i<str.length; i++){
        if (str[i]<"0" || str[i]>"9"){
            result +=str[i]
        }
    }
    return result
}
console.log(remDig("Ajhdugy76437hgdjfhj"));