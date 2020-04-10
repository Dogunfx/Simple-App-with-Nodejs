// to do
// write a basic Javascript Program to sort three numbers in asending order
// example when the user enters 5 , 2 , 6
// the program will out 2,  5 , 6

function sumNum(a, b, c){
    let arr = [a, b, c].sort().toString();
    console.log(arr);
}

sumNum(5, 2, 6);