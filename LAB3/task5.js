function createCounter() {
    let count = 0
    return function() {
        return ++count
    }
}

const count = createCounter();

count(); // 1
count(); // 2
count(); // 3
count(); // 4

console.log(count()); // 5