// to do
// write a basic Javascript Program to sort three numbers in asending order
// example when the user enters 5 , 2 , 6
// the program will out 2,  5 , 6

function sortNum(a, b, c) {
    let arr = [a, b, c]
    var len = arr.length;
    for (var i = len - 1; i >= 0; i--) {
        for (var j = 1; j <= i; j++) {
            if (arr[j - 1] > arr[j]) {
                var temp = arr[j - 1];
                arr[j - 1] = arr[j];
                arr[j] = temp;
            }
        }
    }
    console.log(arr);
}

sortNum(5, 2, 6);