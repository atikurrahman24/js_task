function totalChr(arr) {
    let total = 0;
    for (let i = 0; i < arr.length; i++) {
        total += arr[i].length;
    }
    return total;
}

let words = ["Hi", "JS", "World"];
console.log(totalChr(words));