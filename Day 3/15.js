function chk(str){
    let count=0
    for (let i=0; i<str.length; i++){
        let ch=str[i]
        if (!((ch>="a" && ch<="z") || (ch>="A" && ch<="Z") || (ch>="0" && ch<="9"))){
            count++
        }
    }
    return count
}
console.log(chk("ashgriew%@^%%^ytr756$%GVFGH"));