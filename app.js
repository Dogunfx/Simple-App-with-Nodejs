// to do
// write a basic Javascript Program to sort three numbers in asending order
// example when the user enters 5 , 2 , 6
// the program will out 2,  5 , 6

function sortNum(a, b, c) {
    let arr = [a, b, c];
    var minIdx, temp, len = arr.length;
    for (var i = 0; i < len; i++) {
        minIdx = i;
        for (var j = i + 1; j < len; j++) {
            if (arr[j] < arr[minIdx]) {
                minIdx = j;
            }
        }
        temp = arr[i];
        arr[i] = arr[minIdx];
        arr[minIdx] = temp;
    }
    console.log(arr);
}

sortNum(5, 2, 6);