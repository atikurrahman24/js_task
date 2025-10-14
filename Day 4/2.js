function sumArr(arr){
    let largest=0
    for ( let i=0; i<arr.length; i++){
        if (arr[i]>largest){
            largest=arr[i]
        }

    }
    return largest
}
let array=[1, 22, 6, 4, 15];
console.log(sumArr(array));