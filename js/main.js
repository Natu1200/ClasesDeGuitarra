const username = document.getElementById('username')
const password = document.getElementById('password')
const button = document.getElementById('button')

button.addEventListener('click',(e) => {
    e.preventDefault()
    const data =  {
        username: usernamme.value,
        password: paassword.value
    }
    console.log(data)
})