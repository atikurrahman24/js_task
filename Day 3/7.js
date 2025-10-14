function smallestDig(num){
    let smallest=9
    while (num>0){
        let dig=num%10
        if (dig<smallest){
            smallest=dig
        }
        num=Math.floor(num/10)
    }
    return smallest
}
console.log(smallestDig(154));