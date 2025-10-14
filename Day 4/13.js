function sortAscending(arr) {

    for (let i = 0; i < arr.length; i++) {

        for (let j = i + 1; j < arr.length; j++) {

            if (arr[i] > arr[j]) {
                // swap
                let temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }
    return arr;
}

let numbers = [3, 1, 4, 2];
console.log(sortAscending(numbers));
