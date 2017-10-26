
console.log(5 + 6);
var name = "Michael DAntuono"
console.log("Hello, " + name)
var numbers= [47, 22, 48, 22, 13, 85, 33, 19, 24, 36];
var smallestNumber = numbers[0]
for (var number = 1; number < numbers.length; number += 1) {
    if (numbers[number] < smallestNumber) {
        smallestNumber = numbers[number];
    }
}
console.log(smallestNumber)