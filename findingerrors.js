
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
	question: '',
	choice1: 'Marc Chaggall, a painter,',
	choice2: 'was considered a forefather of the art of surrealism',
	choice3: 'an art on how can be characterized by incongruous imagery',
	choice4: 'produced by unnatural juxtapositions and combinations.',
	answer: 3
},
{
	question: '',
	choice1: 'Since the time the World Wide Fund for nature reported',
	choice2: 'that more than 22 species of wild felines have declining.',
	choice3: 'different non-government agencies have given their support',
	choice4: 'to the program that would protect the species',
	answer: 2
},
{
	question: '',
	choice1: 'The threat of deculturation',
	choice2: 'now hangs over many small ethnic minority',
	choice3: 'that are scattered',
	choice4: 'in the depths of many forests.',
	answer: 2
},
{
	question: '',
	choice1: 'Unclean water and improper disposal of waste',
	choice2: 'can be carried highly communicable diseases',
	choice3: 'because of their injurious effects',
	choice4: 'to human life.',
	answer: 2
},
{
	question: '',
	choice1: 'Language was brought into the spotlight',
	choice2: 'as a crucial factor',
	choice3: 'for Nigeria’s social, economic, and the political future',
	choice4: ' because multilingualism inevitably results in communication problems.',
	answer: 3
},
{
	question: '',
	choice1: 'The failure of tree-planting project was due to the inconsistent reforestation program',
	choice2: 'haphazard community tree-planting schemes, and meddling practices of indifference individuals',
	choice3: 'who reduced the anti-erosion fences',
	choice4: 'just to benefit their pasture land businesses',
	answer: 2
}, 
{
	question: '',
	choice1: ' Because of new coffee growers',
	choice2: 'flooding the global market,',
	choice3: 'the official price of a pound of coffee in the United States',
	choice4: 'crashed into $6 in 1977 to 42 cents in 2001',
	answer: 4
},
{
	question: '',
	choice1: 'The navy contributes',
	choice2: ' to the protection of the environment and preservation of natural resources',
	choice3: 'by scuttle out cylindrical blocks',
	choice4: 'to serve as artificial reefs.',
	answer: 3
},
{
	question: '',
	choice1: 'Trinh Xuan Thuan, an astrophysicist from Vietnam',
	choice2: 'wrote The Birth of the Universe: The Big Bang and After, in 1993,',
	choice3: ' a book on how it elucidates',
	choice4: 'the information and evolution of galaxies.',
	answer: 3
},
{
	question: '',
	choice1: 'Susana earned money for her vacation',
	choice2: 'by working in an antique store all summer',
	choice3: 'but the amount was inefficient',
	choice4: 'for all that she needed',
	answer: 3
},
{
	question: '',
	choice1: 'The eruption of Mt. Pinatubo in 1991',
	choice2: 'was one of the many misfortunes',
	choice3: 'to wreak havoc',
	choice4: ' in Central Luzon.',
	answer: 3
},
{
	question: '',
	choice1: 'After participating the fertility rites,',
	choice2: 'the childless woman,',
	choice3: 'who was blessed with a healthy baby',
	choice4: 'experienced a blissful and contented life.',
	answer: 1
},
{
	question: '',
	choice1: 'Media produce',
	choice2: ' a sociology phenomenon',
	choice3: 'such as psychological, moral, and academic confusion',
	choice4: 'about the present culture.',
	answer: 2
},
{
	question: '',
	choice1: 'Concentrating on the physical intricacies',
	choice2: 'of different pose of the body',
	choice3: 'forces one to filter out',
	choice4: 'physiological anxieties.',
	answer: 2
},
{
	question: '',
	choice1: 'Any nation',
	choice2: 'that aspires to elevate morality',
	choice3: 'will have difficulty',
	choice4: 'stamp out prostitution.',
	answer: 4
},
{
	question: '',
	choice1: 'He is living in this country',
	choice2: ' ever since he came',
	choice3: 'but he makes no',
	choice4: 'attempt to speak our language.',
	answer: 1
},
{
	question: '',
	choice1: 'Some doubt about the state of truth of those who do not share their faith,',
	choice2: 'but they leniently tolerate the situation',
	choice3: 'even if they are hinder',
	choice4: 'the motives of others.',
	answer: 3
},
{
	question: '',
	choice1: 'Human beings',
	choice2: 'have this natural inclination',
	choice3: 'for fending off lonely, exile, and death',
	choice4: 'by dressing up the passing moment as a miracle.',
	answer: 3
},
{
	question: '',
	choice1: 'Costing more than $40 million and grossing $20 million in the first two weeks,',
	choice2: 'Pinocchio is one of the most expensive film',
	choice3: 'Made in Italy',
	choice4: 'To help put Rome back to the filmmakers’ maps.',
	answer: 2
},
{
	question: '',
	choice1: 'Oil prices have shaping the world economy for many years',
	choice2: 'but the emergence of the New Economy and the rise of service industries',
	choice3: 'have supposedly made oil',
	choice4: 'increasingly less vital to economic growth.',
	answer: 1
},
{
	question: '',
	choice1: 'The movie we have seen',
	choice2: ' is a precision-carved jigsaw puzzle',
	choice3: 'that it took us inside the head',
	choice4: 'of a deeply disturbed, isolated schizophrenic man.',
	answer: 3
},
{
	question: '',
	choice1: 'The most popular alumnae',
	choice2: 'of a barangay high school',
	choice3: 'is now serving a president',
	choice4: 'of a well-known state university in Manila.',
	answer: 1
},
{
	question: '',
	choice1: 'As of January 2003,',
	choice2: 'Okinawa has the highest proportion of centenarians in the world',
	choice3: ' but its ranking of male life expectancy',
	choice4: 'fell into first rank in 1985 to fourth rank in 1995.',
	answer: 4
}, 
{
	question: '',
	choice1: 'Any government',
	choice2: 'should implement certain policies',
	choice3: 'which would cater to the economic, political, moral,',
	choice4: 'and the social needs of the nation.',
	answer: 3
},
{
	question: '',
	choice1: 'The indication',
	choice2: 'of social distinct',
	choice3: 'or the credibility of a piece of information',
	choice4: 'can lead to interesting state of perplexity.',
	answer: 2
},

]

const SCORE_POINTS = 1
const MAX_QUESTIONS = 25

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
