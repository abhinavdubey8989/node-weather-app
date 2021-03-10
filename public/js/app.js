console.log('Client side javascript file is loaded!')

const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const messageOne = document.querySelector('#message-1')
const messageTwo = document.querySelector('#message-2')

weatherForm.addEventListener('submit', (e) => {
    e.preventDefault()

    const location = search.value

    messageOne.textContent = 'Loading...'
    messageTwo.textContent = ''

    //for heroku : we've remove http://localhost:3000 from front
    fetch('/weather?address=' + location).then((resp) => {
        resp.json().then((data) => {
            if (data.error) {
                messageOne.textContent = data.error
            } else {
                messageOne.innerHTML = `Current temperature at ${data.location} is : ${data.temperature}`
                messageTwo.textContent = `Current chances of rain at ${data.location} : ${data.rainPercent} `
            }
        })
    })
})