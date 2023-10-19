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

function singleNumber(nums) {
	let result = 0
	for (const num of nums) {
		result ^= num
	}
    console.log(result)
	return result
}

singleNumber([1,2,2,3,3]);