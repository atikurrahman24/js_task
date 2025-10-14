let char = "5";

if ((char >= "a" && char <="z") || (char >= "A" && char <="Z")){
    if ("aeiouAEIOU".includes (char)){
        console.log("Vowel");
    }
    else{
        console.log("Consonent");
    }
}
else {
    console.log("Not a Letter");
}