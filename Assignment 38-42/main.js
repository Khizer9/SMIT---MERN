// Assignment 2
// function checkLeapYear(){
// 	const year = prompt('Enter a year')
// 	if(year % 4 === 0){
// 		alert('Its a Leap Year!')
// 	}else{
// 		alert('Not a leap year.')
// 	}
//   }
//   checkLeapYear()

// Average marks
// function averageMarks(){
//     alert('Total Marks of each subject is 20!')
//     const sub1 = +prompt('Enter First Subject Marks')
//     const sub2 = +prompt('Enter Second Subject Marks')
//     const sub3 = +prompt('Enter Third Subject Marks')
//     const totalMarks = 60
//     const gainMarks = sub1 + sub2 + sub3
//     let avg = gainMarks / 3
//     const perMarks = (gainMarks * totalMarks) / 100
//     console.log(perMarks)
//     return perMarks
// }
// averageMarks()


// IndexOf - index of batat hai k item str ya arr mein hai ya nahi and uska index return krdeta hai

// let arr = [1, 2, 3]

// const str = 'Khizer here'
// const indexOfArr = str.indexOf('Khizer')
// console.log(indexOfArr, "indexOfArr")
// console.log(str.indexOf('Khizer'), "directConsole")
function indexOf(){
    const str = prompt('Enter a value to check its index')
    const splitWord = str.split(' ')
    console.log(splitWord, "splitWord")

    for(i=0; i<=splitWord.length; i++){
        if(splitWord[i] == str){
            console.log(i)
        }
    }
}
indexOf()