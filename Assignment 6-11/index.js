// Chapter 9 - 11

//Assignment 1

// var cityName = prompt("Enter your city name")

// if(cityName === 'karachi'){
//     alert('Welcome to city of lights')
// }

//Assignment 2

// var gender = prompt('Enter your gender')
// if(gender === 'male'){
//     alert('Welcome Sir')
// } else if(gender === 'female'){
//     alert('Welcome Madam')
// }else {
//     alert('Please enter proper gender')
// }

//Assignment 3

// var trafficColor = prompt('Enter the traffic light color')
// if(trafficColor === 'red'){
//     alert('Must Stop')
// }else if(trafficColor === 'yellow'){
//     alert('Ready to move!')
// }else if(trafficColor === 'green'){
//     alert('Move now!')
// }else{
//     alert('Please enter proper color')
// }

//Assignment 4

// var carFuel = prompt('Enter your car Fuel in Litres')
//     if(carFuel <= 0.25){
//         alert('Please refill your car tank')
//     }else {
//         alert('You have enough fuel')
//     }

// Assignment 5

// var a = 4
// if(++a === 5){
//     alert('Given condition a is true')
// } // true

// var b = 82
// if(b++ === 83){
//     alert('Given condition b is true')
// } // false

//Guess Game

// var secretNum = 4
// var userSecretNumber = prompt('Enter secret number (1/10)')
// if(secretNum === +userSecretNumber){
//     alert('Bingooo! You are right')
// }else if(secretNum === ++userSecretNumber){
//     alert('You are close enough')
// }

// Divisible by 3

// var divisibleBy3 = prompt('Enter a number')
// if (divisibleBy3 % 3 === 0){
//     alert('divisible by 3')
// }else{
//     alert('not divisible by 3')
// }

// Even / odd numbers

// var isEven = prompt('Entera number')

// if(isEven % 2 === 0){
//     alert('even')
// }else if(isEven % 2 === 1){
//     alert('odd')
// }else {
//     alert('please enter a valid number')
// }

// calculator

// var firstNum = prompt('Enter a First number')
// var secondNum = prompt('Enter a Second number')
// var operations = prompt('Enter a Operations (+ - * /)')

// if(operations === '+'){
//     alert(+firstNum + +secondNum)
// }else if(operations === '-'){
//     alert(firstNum - secondNum)
// }else if(operations === '*'){
//     alert(firstNum * secondNum)
// }else if(operations === '/'){
//     alert(firstNum / secondNum)
// }else{
//     alert('Enter a Valid Operation or a number')
// }

// Chapter 6 - 9

// Assignment 1

// var a = 2, b = 1;
// var result = --a
// alert(result) // 1

// var a = 2, b = 1;
// var result = --a - --b
// alert(result)  // 1

// var a = 2, b = 1;
// var result = --a - --b + ++b
// alert(result)  // 2

// var a = 2, b = 1;
// var result = --a - --b + ++b + b--
// alert(result)  // 3

// Subject name and then calculate percentage

var subject1 = prompt("Please enter first subject name");
var subject2 = prompt("Please enter first subject name");
var subject3 = prompt("Please enter first subject name");

var toalMarks = 100

var subject1ObtainMarks = prompt("Please enter first subject Obtain marks");
var subject2ObtainMarks = prompt("Please enter second subject Obtain marks");
var subject3ObtainMarks = prompt("Please enter third subject Obtain marks");

var percentage = subject1ObtainMarks / toalMarks * 100;
console.log(percentage)