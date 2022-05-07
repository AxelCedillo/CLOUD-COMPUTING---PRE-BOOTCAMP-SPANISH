function timesTwoAgain(num) {
    console.log('num es', num);
    y = num*2;
    return y;
}
var result = timesTwoAgain(3) + timesTwoAgain(5);
console.log('el resultado es', result);