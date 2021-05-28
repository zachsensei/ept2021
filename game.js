
const question = document.querySelector('#question');
const choices = Array.from(document.querySelectorAll('.choice-text'));
const progressText = document.querySelector('#progressText');
const scoreText = document.querySelector('#score');
const progressBarFull = document.querySelector('#progressBarFull');

let currentQuestion = {}
let accpetingAnswers = true
let score= 0
let questionCounter = 0
let availableQuestions = []

let questions = [
	
	{
		question: 'Jack is ______ a model airplane.', 
		choice1: 'build',
		choice2: 'builder',
		choice3: 'built',
		choice4: 'building',
		answer: 4

	},
	{
		question: 'We bought a ____ books.', 
		choice1: 'few    ',
		choice2: 'little   ',
		choice3: 'some   ',
		choice4: 'lot',
		answer: 1

	},
	{
		question: 'The lady _______ in this city since 1997.', 
		choice1: 'lives    ',
		choice2: 'is living   ',
		choice3: 'lived   ',
		choice4: 'has lived',
		answer: 4

	},
	{
		question: '_____ will you finish your work?', 
		choice1: 'What    ',
		choice2: 'When   ',
		choice3: 'Any time  ',
		choice4: 'Why',
		answer: 2

	},
	{
		question: 'I am interested _____ receiving free samples of your product.', 
		choice1: 'in        ',
		choice2: 'to   ',
		choice3: 'on   ',
		choice4: 'for',
		answer: 1

	},
	{
		question: 'This lake is much ______ than the one near my house.', 
		choice1: 'deep        ',
		choice2: 'deeper       ',
		choice3: 'deeply   ',
		choice4: 'more deeply',
		answer: 2

	},
	{
		question: 'After you collect the money, you need to count ______ .', 
		choice1: 'it        ',
		choice2: 'them      ',
		choice3: 'itself   ',
		choice4: 'they',
		answer: 1

	},
	{
		question: 'The _______ office is on Main Street.', 
		choice1: 'doctor        ',
		choice2: 'doctor’s      ',
		choice3: 'Adoctor whose   ',
		choice4: 'of the doctor',
		answer: 2

	},
	{
		question: 'The meeting was ________ because no one has time to come.', 
		choice1: 'cancelled        ',
		choice2: 'cancellation      ',
		choice3: 'cancel   ' ,
		choice4: 'canceling',
		answer: 1

	},
	{
		question: 'The party is on the _____ of January.', 
		choice1: 'two eight    ',
		choice2: 'twenty-eight     ',
		choice3: 'twenty-eighth  ',
		choice4: 'twentieth and eighth',
		answer: 3

	},
	{
		question: 'Jane became an English teacher and I did _____ .', 
		choice1: 'become',
		choice2: 'too   ',
		choice3: 'well   ' ,
		choice4: 'neither',
		answer: 2

	},
	{
		question: 'You can’t have dessert ______ you eat your dinner.', 
		choice1: 'but    ',
		choice2: 'unless',
		choice3: 'therefore' ,
		choice4: 'whether',
		answer: 2

	},
	{
		question: 'Buy a loaf of _____ when you’re at the supermarket.', 
		choice1: 'books    ',
		choice2: 'boxes   ',
		choice3: 'butter   ' ,
		choice4: 'bread',
		answer: 4

	},
	{
		question: 'The manager ______ to send this fax before noon today.', 
		choice1: 'liked    ',
		choice2: 'is liking   ',
		choice3: 'would like   ' ,
		choice4: 'is being liked',
		answer: 3

	},
	{
		question: 'You can either rent _____ buy this house.', 
		choice1: 'or    ',
		choice2: 'and   ',
		choice3: 'nor   ' ,
		choice4: 'whether',
		answer: 1

	},
	{
		question: '_______ these dishes will take at least an hour.', 
		choice1: 'I wash ',
		choice2: 'The wash   ',
		choice3: 'Washing' ,
		choice4: 'Wash',
		answer: 3

	},
	{
		question: 'You had _______ study for the exam.', 
		choice1: 'go    ',
		choice2: 'supposed to   ',
		choice3: 'better   ' ,
		choice4: 'ought',
		answer: 3

	},
	{
		question: 'We felt that the recent reports were not particularly _________ .', 
		choice1: 'informs    ',
		choice2: 'information   ',
		choice3: 'informative   ' ,
		choice4: 'inform',
		answer: 3

	},
	{
		question: 'Please call the travel agent this afternoon to ______ your travel plans.', 
		choice1: 'confirmation    ',
		choice2: 'confirm   ',
		choice3: 'confirmed   ' ,
		choice4: 'confirming',
		answer: 2

	},
	{
		question: 'Our team worked ______ hard that we finished the project two days before the deadline.', 
		choice1: 'too    ',
		choice2: 'not   ',
		choice3: 'so   ' ,
		choice4: 'such',
		answer: 3

	},
	{
		question:'Juan___________ in the library this morning.',
		choice1:'is study',
		choice2:'studying',
		choice3:'is studying',
		choice4:'are studying',
		answer: 3
	},
	{
		question:"Alicia, __________ the windows please. It's too hot in here. ",
		choice1:'opens',
		choice2:'open',
		choice3:'opened',
		choice4:'will opened',
		answer: 2
	},
	{
		question:'The movie was __________ the book.',
		choice1:'as',
		choice2:'as good',
		choice3:'good as',
		choice4:'as good as',
		answer: 4
	},
	{
		question:"Eli's hobbies include jogging, swimming, and __________.",
		choice1:'to climb mountains',
		choice2:'climb mountains',
		choice3:'to climb',
		choice4:'climbing mountains',
		answer: 4
	},
	{
		question:'Mr. Hawkins requests that someone _________ the data by fax immediately.',
		choice1:'sent',
		choice2:'sends',
		choice3:'send',
		choice4:'to send',
		answer: 3
	},
	{
		question:'Who is ____________ , Marina or Sachiko?',
		choice1:'tallest',
		choice2:'tall',
		choice3:'taller',
		choice4:'the tallest',
		answer: 3
	},
	{
		question:'The concert will begin ________ fifteen minutes.',
		choice1:'in',
		choice2:'on',
		choice3:'with',
		choice4:'with',
		answer: 1
	},
	{
		question:'I have only a ________ Christmas cards left to write',
		choice1:'few',
		choice2:'fewer',
		choice3:'less',
		choice4:'little',
		answer: 1
	},
	{
		question:'Each of the Olympic athletes ____________ for months, even years. ',
		choice1:'have been training',
		choice2:'were training',
		choice3:'has been training',
		choice4:'been training',
		answer: 3
	},
	{
		question:'Maria __________ never late for work.',
		choice1:'am',
		choice2:'are',
		choice3:'were',
		choice4:'is',
		answer: 4
	},
	{
		question:'The company will upgrade _________ computer information systems next month.',
		choice1:'there',
		choice2:'their',
		choice3:"it's",
		choice4:'its',
		answer: 4
	},
	{
		question:'Cheryl likes apples, _________ she does not like oranges. ',
		choice1:'so',
		choice2:'for',
		choice3:'but',
		choice4:'or',
		answer: 3
	},
	{
		question:'You were ____________ the New York office before 2 p.m. ',
		choice1:'suppose call',
		choice2:'supposed to call',
		choice3:'supposed calling',
		choice4:'supposed call',
		answer: 2
	},
	{
		question:'When I graduate from college next June, I _____________ a student here for five years.',
		choice1:'will have been',
		choice2:'have been',
		choice3:'has been',
		choice4:'will have',
		answer: 1
	},
	{
		question:'Ms. Guth _________ rather not invest that money in the stock market.',
		choice1:'has to',
		choice2:'could',
		choice3:'would',
		choice4:'must',
		answer: 3
	},
]

const SCORE_POINTS = 1
const MAX_QUESTIONS = 35

startGame = () =>{
	questionCounter = 0
	score = 0
	availableQuestions = [...questions]
	getNewQuestion()
}

getNewQuestion = () => {
	if (availableQuestions.length === 0 || questionCounter > MAX_QUESTIONS){
		localStorage.setItem('mostRecentScore', score)

		return window.location.assign('end.html')
	}

	questionCounter++
	progressText.innerText = `Question ${questionCounter} of ${MAX_QUESTIONS}`
	progressBarFull.style.width = `${(questionCounter/MAX_QUESTIONS) * 100}%`

	const questionIndex = Math.floor(Math.random() * availableQuestions.length)
	currentQuestion = availableQuestions[questionIndex]
	question.innerText = currentQuestion.question

	choices.forEach(choice => {
		const number = choice.dataset['number']
		choice.innerText = currentQuestion['choice' + number]
	})

	availableQuestions.splice(questionIndex, 1)

	acceptingAnswers = true
}

choices.forEach(choice =>{
	choice.addEventListener('click', e =>{
		if(!acceptingAnswers) return

			acceptingAnswers = false
			const selectedChoice = e.target
			const selectedAnswer = selectedChoice.dataset['number']

			let classToApply = selectedAnswer == currentQuestion.answer ? 'correct':
			'incorrect'

			if(classToApply === 'correct'){
				incrementScore(SCORE_POINTS)
			}

			selectedChoice.parentElement.classList.add(classToApply)

			setTimeout(() =>{
				selectedChoice.parentElement.classList.remove(classToApply)
				getNewQuestion()
			}, 1000)
	})
})

incrementScore = num => {
	score += num
	scoreText.innerText = score
}

startGame()
