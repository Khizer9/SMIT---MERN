// Assignment 1
// const myArr = [
//     []
// ]

// Assignment 2
// const myArr = [
//     [0, 1, 2, 3],
//     [1, 0, 1, 2],
//     [2, 1, 0, 1]
// ]

// Assignment 3
// for(i=0; i<=10; i++){
//     console.log(i)
// }

// Assignment 4
// var numberToMultiply = prompt('Enter a number to multiply')
// var numberTillLength = prompt('Enter a number for length')

// for(i=1; i<=numberTillLength; i++){

//     console.log(
//         `${numberToMultiply} X ${i} = ${numberToMultiply * numberTillLength}`
//     )
// }

//Assignment 5
// var fruits = ['apple', 'orange', 'mango', 'banana', 'strawberry']

// for(let i=0; i<fruits.length; i++){
//     console.log(
//         `Element at index ${i} is ${fruits[i]}`
//     )
// }

// Assigment 6
// var arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]

// for (var i=0; i<=arr.length; i++){
//     if(arr[i] % 2 === 1){
//         console.log(arr[i])
//     }
// }

// Assigment 7
// var bakeryArr = ['cake', 'apple pie', 'cookie', 'chips', 'patties']

// var userInput = prompt('Welcome! Enter anything you want to order')

// for(var i = 0; i<=bakeryArr.length; i++){
//     if(userInput === bakeryArr[i]){
//         console.log(
//             `${bakeryArr[i]} is Available in ${i} index`
//         )
//         break
//     }else{
//         console.log(
//             `We are sorry! ${userInput} is not available`
//         )
//     }
// }

// Assignment 8
// var arr = [24, 53, 78, 92, 12]
// var max = arr[0]
// for(var i=0; i<arr.length; i++){
//     if(arr[i] > max){
//         max = arr[i]
//     }
// }
// console.log(max)


// Assignment 9
// var arr = [24, 53, 78, 92, 12]
// var max = arr[0]
// for(var i=0; i<arr.length; i++){
//     if(arr[i] < max){
//         max = arr[i]
//     }
// }
// console.log(max)

// Assignment 10

// for(var i=5; i<=20; i*5){
//     console.log(i)
// }

let x = 1
let y = 2

let res = [x,y] = [y,x]

console.log(res)