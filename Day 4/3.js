function sumArr(arr){
    let smallest=9
    for ( let i=0; i<arr.length; i++){
        if (arr[i]<smallest){
            smallest=arr[i]
        }

    }
    return smallest
}
let array=[ 22, 6, 4, 15];
console.log(sumArr(array));