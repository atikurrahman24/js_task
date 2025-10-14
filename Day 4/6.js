function sumArr(arr){
    let count=0
    for ( let i=0; i<arr.length; i++){
        if(arr[i]> 10){
            greater=arr[i]
        }
    }
    return greater
}
let array=[1, 2, 3, 4, 5, 6, 7, 9, 11];
console.log(sumArr(array));