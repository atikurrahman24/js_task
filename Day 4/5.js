function sumArr(arr){
    let count=0
    for ( let i=0; i<arr.length; i++){
        if(arr[i]%2!== 0){
            count++
        }
    }
    return count
}
let array=[1, 2, 3, 4, 5, 6, 7];
console.log(sumArr(array));