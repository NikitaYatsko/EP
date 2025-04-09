function celsiusToFahrenheit(celsius) {
    const fahrenheit = (celsius * 9 / 5) + 32;
    return fahrenheit;
}

console.log(celsiusToFahrenheit(0));
console.log(celsiusToFahrenheit(25));

function isPrime(n) {
    if (n <= 1) return false;
    if (n === 2) return true;
    if (n % 2 === 0) return false;

    const sqrt = Math.sqrt(n);
    for (let i = 3; i <= sqrt; i += 2) {
        if (n % i === 0) return false;
    }
    return true;
}

console.log(isPrime(7));
console.log(isPrime(10));
console.log(isPrime(2));


const myArray = [1, 2, 3, 4];

/*const myArray = ["a","b","c"];*/

function reverseArray(arrayToReverse) {
    return arrayToReverse.reverse();
}

console.log(reverseArray(myArray));

function mergeObjects(firstObj, secondObj) {
    return {...firstObj, ...secondObj}
}

console.log(mergeObjects({a: 1, b: 2}, {b: 3, c: 4}));

//task 7
const appendButton = document.getElementById('addButton');
const list = document.getElementById('myList');

appendButton.addEventListener('click', () => {
    list.innerHTML += `<li>New Item</li>`;
});
