var authArray = []
var signupArray = []

var email = document.querySelector('#email')
var password = document.querySelector('#password')
var submit = document.querySelector('#submit-btn')
var heading = document.querySelector('.heading')


submit.addEventListener('click', ()=> {
    
    if(heading.textContent == 'Login'){
        if(email.value === '' && password.value === ''){
            alert('Please fill in all fields')
        } else if(!email.value.includes('@') || !email.value.includes('.')) {
            alert('Please write valid email address')
        }else {
            if (signupArray.includes(authArray) === false) {
                heading.textContent = 'Sign Up'
                alert('Register yourself!')
             }else {
                 authArray.push({
                     email: email.value,
                     password: password.value
                 })
                 console.log(authArray)
             }
        }
        
    }else if(heading.textContent === 'Sign Up'){
        signupArray.push({
            email: email.value,
            password: password.value
        })
    }
})