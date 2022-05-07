function sumNums(num1, num2) {
    var sum = num1 + num2;
    console.log('sum es', sum);
    return sum;
}
var result = sumNums(2,3) + sumNums(3,sumNums(2,1)) + sumNums(sumNums(2,1),sumNums(2,3));
console.log('el resultado es', result);