function remDup(arr) {
    let newArr=[]
    for (let i=0; i<arr.length; i++){
        if (!newArr.includes(arr[i])){
            newArr.push(arr[i])
        }
    }
    return newArr
}
let num = [1, 2, 2, 3, 4, 4, 5];
console.log(remDup(num));