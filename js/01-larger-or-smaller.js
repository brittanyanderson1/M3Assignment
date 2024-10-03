let num1 = prompt('Enter the 1st number below.')
let num2 = prompt('Enter the 2nd number below.')

num1 = parseInt(num1, 10)
num2 = parseInt(num2, 10)

if (num1 > num2) {
    document.write(num1 + ' is larger than ' + num2)
} else if (num1 < num2) {
    document.write(num1 + ' is smaller than ' + num2)
} else {
    document.write(num1 + ' and ' + num2 + ' are equal to one another.')
}
