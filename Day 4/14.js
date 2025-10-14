function revArr(arr) {
    let reversed=[]
    for (let i = arr.length - 1; i >= 0; i--) {
        reversed.push(arr[i])
    }
    return reversed
}
let num = [1, 2, 3, 4, 5];
console.log(revArr(num));