// function double(num){
//     console.log(num*2);
// }
// let arr=[2, 3, 4, 5, 6, 7]
// arr.forEach(double)


function double(numbers){
    let doubled = numbers.map(num => num * 2);
    console.log(doubled);
}
let arr=[2, 3, 4, 5, 6, 7]
double(arr)