function filterString(arr) {
    let onlyString = arr.filter(str => typeof str ==="string");
    console.log(onlyString);
}
let mixedArray = ["Atik", 2, true, "Shafin", 5, "Huzaifa", 10, "Butterfly"]
filterString(mixedArray)