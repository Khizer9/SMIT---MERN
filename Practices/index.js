// var authArray = []
// var signupArray = []

// var email = document.querySelector('#email')
// var password = document.querySelector('#password')
// var submit = document.querySelector('#submit-btn')
// var heading = document.querySelector('.heading')

// var emailValue = email.value
// var passwordValue = password.value
// submit.addEventListener('click', ()=> {
    
//     if(heading.textContent == 'Login'){
//         if(emailValue === '' && password.value === ''){
//             alert('Please fill in all fields')
//         } else if(emailValue.includes('@') || emailValue.includes('.')) {
//             alert('Please write valid email address')
//         }else {
//             if(signupArray.includes(emailValue + passwordValue) === false){
//                 heading.textContent = 'Sign Up'
//                 alert('Register yourself!')
//             }else {
//                 alert('Welcome Back you are logged in')
//             }
//         }
//     }else if(heading.textContent === 'Sign Up'){
//         signupArray.push({
//             email: email.value,
//             password: password.value
//         })
//         heading.textContent = 'Login'
//         alert('Welcome Back you are logged in')
//         console.log(signupArray)
//     }
// })

// function singleNumber(nums) {
// 	let result = 0
// 	for (const num of nums) {
// 		result ^= num
// 	}
//     console.log(result)
// 	return result
// }

// singleNumber([1,2,2,3,3]);


// let a = [-3, 1, -6, 4]
// let b = [2, 3, -9, -6]
// let v = -9

// for (let i = 0; i < a.length; i++) {
//     for (let j = 0; j < b.length; j++) {
//         if (a[i] + b[j] === v) {
//             console.log(`${a[i]} + ${b[j]} = ${v}`);
//         }
//     }
// }


let arrOfArr = [
	[1, 2, 3],
	[4, 5, 6],
	[7, 8, 9],
  ];

//   [3, 6, 9] expected output
//   [2, 5, 8]
//   [1, 4, 7]
  
  let newArr = [  
	[],
	[],
	[],
  ];
  
  for (let i = 0; i < arrOfArr.length; i++) {
	newArr[0].push(arrOfArr[i][2]);
	newArr[1].push(arrOfArr[i][1]);
	newArr[2].push(arrOfArr[i][0]);
  }
  
  console.log(newArr);
  