document.getElementById('enter').addEventListener('click', enterButton)

let age = 0
let day = 'Tuesday'

function enterButton () {
  age = document.getElementById('age').value
  age = parseInt(age)

  day = document.getElementById('day').value

  if ((day === 'Tuesday' || day === 'Thursday') || (age > 12 && age < 21)) {
    document.getElementById('price').innerHTML = 'You are eligible for student pricing'
  } else {
    document.getElementById('price').innerHTML = 'You must pay regular price'
  }
}
