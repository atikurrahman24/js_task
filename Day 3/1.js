function sumofDig(num) {
    let sum = 0
    while (num > 0) {
        let dig = num % 10
        sum += dig
        num = Math.floor(num / 10)
    }
    console.log(sum);
}
sumofDig(132235)