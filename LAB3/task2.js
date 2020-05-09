// Реализуйте функцию sum
function sum(arr) {
    return arr.reduce((prev, cur) => prev + cur)
}

console.log(sum.call(this, [5, 5, 5, 5, 5, 5, 5, 5, 5]));