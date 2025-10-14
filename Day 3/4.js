function isPrime(num) {
    for (let i = 2; i < num; i++) {
        if (num % i == 0) {
            let ans1 = "Its not a prime number";
            return ans1
        }
    }
    let ans2 = "Its a prime Number";
    return ans2
}
console.log(isPrime(199)); 

// Bujhi nai///////