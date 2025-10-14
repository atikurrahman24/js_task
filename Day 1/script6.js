let num=30;

let ans= (num%3==0 && num%7==0)? "Num is Multiple of both 3 and 7":(num%3==0)?"Num is only multiple of 3":(num%7==0)?"Num is only multiple of 7":"Num is not a multiple of 7 or 3";

console.log(ans);