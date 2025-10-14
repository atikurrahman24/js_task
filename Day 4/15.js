function firstEven(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            return arr[i];
        }
    }
}

let numbers = [1, 3, 6, 7, 8, 10];
console.log(firstEven(numbers));
