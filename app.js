
const signupForm = document.querySelector('#signup-form')
const username = document.querySelector('#username')
const message = document.querySelector('.message')

/*
signupForm.addEventListener('submit', (e) => {
  e.preventDefault()
 // console.log('Form submited');
 // console.log(username.value)
  // console.log(signupForm.username.value)    // form ichidagi inputni olish

  const regEX = /^[a-zA-Z0-9]{6,12}$/
  const inputValue = signupForm.username.value 
  if(regEX.test(inputValue)) {
    message.textContent = 'Malumot togri kiritildi'
  }
  else {
    message.textContent = 'Kiritilayotgan malumot 6 dan 12 gacha kiritilishi kerak. Shuningdek kichik va katta lotin harflaridan iborat bolishi shart. Raqamlardan ham foydalanishingiz mumkin' 
  }
})*/


// const ism = 'Akmal83'

// const result = regEX.test(ism)

// const results = ism.search(regEX)


/*-------------------life feedback----------------------- */

const regEX = /^[a-zA-Z0-9]{6,12}$/
signupForm.addEventListener('submit', (e) => {
  e.preventDefault()

 
  const inputValue = signupForm.username.value 

  if(regEX.test(inputValue)) {
    message.textContent = 'Malumot togri kiritildi'
  }
  else {
    message.textContent = 'Kiritilayotgan malumot 6 dan 12 gacha kiritilishi kerak. Shuningdek kichik va katta lotin harflaridan iborat bolishi shart. Raqamlardan ham foydalanishingiz mumkin' 
  }
})

signupForm.username.addEventListener('keyup',(e) => {
  if (regEX.test(e.target.value)) {
    signupForm.username.setAttribute('class', 'success')
  }
  else{
    signupForm.username.setAttribute('class', 'error')
  }
})