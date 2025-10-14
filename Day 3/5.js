function reverceDig(num) {
    let str = num.toString()
    let rev = ""

    for (let i = str.length - 1; i >= 0; i--) {
        rev += str[i]
    }
    rev = Number(rev)
    return rev
}
let ans = reverceDig(12345)
console.log(ans);