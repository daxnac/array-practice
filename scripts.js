//alert("Let's get to work! ")

// TODO: Assign value of "answers" variable to an array of strings
// that could be answers to magic 8 ball type questions
var answers = ['Sure you can', 'I believe you', 'What do you think you should do?', 'Yes', 'No', 'Maybe']

/* TODO: Write a form handler function that will:
  1. capture the question asked in the form, and assign it to a variable
  2. console log something conversational including the question, like
     "Oh, you want to know if you'll win the lottery?"
*/

function ansQ() {
  event.preventDefault()
  var q = document.qForm.question.value
  console.log("So you want to know " + q)
  
  var rando = Math.floor(Math.random() * answers.length)
  
  var ans = answers[rando]
  console.log(ans)
  
  document.qForm.question.value = ""
}

function addAns() {
  event.preventDefault()
  var a = document.aForm.answer.value
  var i = answers.indexOf(a)
  
if (i == -1) {
  answers.push(a)
  console.log(answers.length)
} else {
  console.log("Already Exists")
}
  document.aForm.answer.value = ""
}

function getMagic(message) {
  console.log("Magic! " + message)
  ansQ()
}