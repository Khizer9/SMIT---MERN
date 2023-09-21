//  Assignment 1

// function dateTime(){
//     var date = new Date()
//     console.log(date, 'date')
// }

// dateTime()

// Assginment 2
// function greeting(fName, lName){
//     alert (`Welcome ${fName} ${lName}`)
// }

// greeting('Khizer', 'Ali')

// Assignment 3
// function sum(){
//     var firstNum = +prompt('Enter first Number')
//     var secondNum = +prompt('Enter Second Number')

//     var sumNum = firstNum + secondNum
//     alert(`Your total sum is ${sumNum}`)
// }
// sum()

// Assignment 4  
// function calculator(){
//     var firstNum = +prompt('Enter first Number')
//     var secondNum = +prompt('Enter second Number')
//     var operator = prompt('Enter Operator + - / *')

//     // if statement
//     // if(operator === '+'){
//     //     console.log(firstNum + secondNum) 
//     // }else if(operator === '-'){
//     //     console.log(firstNum - secondNum) 
//     // }else if(operator === '/'){
//     //     console.log(firstNum / secondNum) 
//     // }else if(operator === '*'){
//     //     console.log(firstNum * secondNum) 
//     // }else{
//     //     alert('Invalid Operation')
//     // }   

//     // switch case
//     switch (operator) {
//         case '+':
//             console.log(firstNum + secondNum)
//             break;
//         case '-':
//             console.log(firstNum - secondNum)
//             break;
//         case '/':
//             console.log(firstNum / secondNum)
//             break;
//         case '*':
//             console.log(firstNum * secondNum)
//             break;
//         default:
//             alert('Invalid Operations')
//             break;
//     }
// }
// calculator()

// Assignment 5
// function suqare(){
//     var num = +prompt('Enter a number you want to square')
//     alert(`This is your num: ${num} and here is square of it: ${num**2}`)
// }
// suqare()

// Assignment 6  // factorial number
// function factorialNum(){
//     var num = +prompt('Enter a number you want to Factorial')
//     var result = 1
//     for(var i=1; i<= num; i++){
//         result *= i
//     }
//     console.log(result)

// }
// factorialNum()


// Fibbonci number
// function fibonnci(){
//     var num = +prompt('Enter a number you want to Fibonnci')
//     let n1 = 0, n2 = 1, nextNum

//     for(var i = 0; i<=num; i++){
//         console.log(n1)

//         nextNum = n1 + n2
//         n1 = n2
//         n2 = nextNum
//     }   
// }
// fibonnci()

// Assignment 7
// function userInput(){
//     var firstNum = +prompt('Enter to start a number')
//     var secondNum = +prompt('Enter to end a number')

//     for(var i = firstNum; i<= secondNum; i++){
//         debugger
//         console.log(i)
//     }
// }
// userInput()

// Assignment 10
// function palindrome(){
//     var num = prompt('Enter a word to check palindrome')

//     var leng = num.length

//     for(let i = 0; i<=leng/2; i++){

//         if(num[i] !== num[leng - 1 - i]){
//             alert('Its not a palindrome')
//         }else {
//             alert('Its a palindrome')
//         }
//     }
// }
// palindrome()
