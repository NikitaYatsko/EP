//task 1
function celsiusToFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32;
}

console.log(celsiusToFahrenheit(0));
console.log(celsiusToFahrenheit(25));


//task 2

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

//task 3
const myArray = [1, 2, 3, 4];

/*const myArray = ["a","b","c"];*/

function reverseArray(arrayToReverse) {
    return arrayToReverse.reverse();
}

console.log(reverseArray(myArray));


//task 4
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

//task 5

function objectToArray(obj) {
    return Object.entries(obj)
}

console.log(objectToArray({name: 'Alice', age: 25}));
console.log(objectToArray({city: 'New York', country: 'USA'}));


//task 4

function countOccurrences(arr, value) {
    return arr.filter(item => item === value).length;
}

console.log(countOccurrences([1, 2, 2, 3, 2, 4], 2))
console.log(countOccurrences(['a', 'b', 'a', 'c'], 'a'));

//task 8
function startLoading() {
    const progressBar = document.getElementById('progressBar');
    const statusText = document.getElementById('statusText');
    let progress = 0;

    const interval = setInterval(() => {
        if (progress >= 100) {
            alert('done');
            clearInterval(interval);
        } else {
            progress += 1;
            progressBar.style.width = progress + '%';
            statusText.textContent = `Progress: ${progress}%`;
        }
    }, 50);
}

document.getElementById('startButton').addEventListener('click', startLoading);