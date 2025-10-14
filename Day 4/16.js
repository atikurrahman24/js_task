function firsGreat(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] >5) {
            return arr[i];
        }
    }
}

let num = [1, 3, 7, 6, 8, 10];
console.log(firsGreat(num));