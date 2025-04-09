function celsiusToFahrenheit(celsius) {
    const fahrenheit = (celsius * 9/5) + 32;
    return fahrenheit;
}
console.log(celsiusToFahrenheit(0));
console.log(celsiusToFahrenheit(25));


const myArray = [1,2,3,4];
/*const myArray = ["a","b","c"];*/

function reverseArray(arrayToReverse){
    return arrayToReverse.reverse();
}
console.log(reverseArray(myArray));