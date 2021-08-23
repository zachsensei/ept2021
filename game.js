
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
	{
	question: 'Accounting practice _______ by distinct accounting standards, rules, methods and procedures.', 
	choice1: 'guide',
	choice2: 'guides',
	choice3: 'is guided',
	choice4: 'was guiding',
	answer: 3
	},
	{
	question: "Our bodies expect a constant supply of sleep _______ they function best when provided a full night's sleep every 24 hours.", 
	choice1: 'and',
	choice2: 'but',
	choice3: 'or',
	choice4: 'yet',
	answer: 1
	},
	{
	question: '_____ and rapid economic growth in recent years, have put a large and increasing stress on he water resources and environment in Ho Chi Mint City, Vietnam.', 
	choice1: 'Increase population',
	choice2: 'Increased population',
	choice3: 'Increasing population',
	choice4: 'Having increased population',
	answer: 2
	},
	{
	question: 'The term "medical reversal" refers to the replacement ____ that was widely believed to be beneficial.', 
	choice1: 'of a medical practice',
	choice2: 'to a medical practice',
	choice3: 'by a medical practice',
	choice4: 'with a medical practice',
	answer: 1
	},
	{
	question: 'Tardigrades also known as water bears, are microscopic animals that live ____ watery environment and feed on juices from plant cells. ', 
	choice1: 'in',
	choice2: 'on',
	choice3: 'for',
	choice4: 'over',
	answer: 1
	},
	{
	question: 'History, it is often said, ___ by the winners - a saying that suggests bias in historical records.', 
	choice1: 'is written',
	choice2: 'was written',
	choice3: 'has been written',
	choice4: 'had been written',
	answer: 1
	},
	{
	question: 'Foods rich in folate, a form of Vitamin B, ____ reduce the risk of stroke and heart disease.', 
	choice1: 'help',
	choice2: 'helps',
	choice3: 'helped',
	choice4: 'is helping',
	answer: 1
	},
	{
	question: 'The family went for two-week cruise on a ____ ocean liner.', 
	choice1: 'incredible, brand-new, Italian',
	choice2: 'brand-new, incredible, Italian',
	choice3: 'Italian, incredible, brand-new',
	choice4: 'incredible, Italian, brand-new',
	answer: 2
	},
	{
	question: 'Over years, economic growth ___ of greater concern than environment preservation.', 
	choice1: 'has been',
	choice2: 'have been',
	choice3: 'had been',
	choice4: 'will have been',
	answer: 1
	},
	{
	question: 'They ____ a few crises in the past, so they were able to handle this situation fairly well.', 
	choice1: 'have managed',
	choice2: 'had managed',
	choice3: 'has been managed',
	choice4: 'have been managed',
	answer: 2
	},
{
question: 'The ceremony ___ by the top officials and national officials of big companies last year.', 
	choice1: 'is graced',
	choice2: 'was graced',
	choice3: 'has graced',
	choice4: 'had graced',
	answer: 2
},
{
question: 'A history of depression, denial, injustice and abuse ___ greatest detriment to people with color.', 
	choice1: 'has been',
	choice2: 'had been',
	choice3: 'have been',
	choice4: 'having been',
	answer: 1
},
{
question: '____ should help you be better informed about potential risks, but it should not be a source of alarm.', 
	choice1: 'Know your family history',
	choice2: 'Knowing your family history',
	choice3: 'To have your family history known',
	choice4: 'Having your family history known',
	answer: 2
},
{
question: "We become nervous, doubtful ____ we don't see our good coming as quickly as we think.", 
	choice1: 'while',
	choice2: 'when',
	choice3: 'because',
	choice4: 'therefore',
	answer: 3
},
{
question: 'The child was advised to stay away ____ because of trauma.', 
	choice1: 'completed from his father',
	choice2: 'completely from his father',
	choice3: 'completed with his father',
	choice4: 'completely with his father',
	answer: 2
},
{
question: "Leni ___ out against President Duterte's drug war, which saw the killings of suspected drug dealers in the slums of Manila.", 
	choice1: 'have spoke',
	choice2: 'have spoken',
	choice3: 'has spoke',
	choice4: 'has spoken',
	answer: 4
},
{
question: 'Edgar unnecessarily ____ a quarrel with Bryan and left the party immediately.', 
	choice1: 'picked on',
	choice2: 'picked out',
	choice3: 'picked',
	choice4: 'picked up',
	answer: 3
},
{
question: 'Robert pleased ____ his teacher to ask and give him a chance.', 
	choice1: 'with',
	choice2: 'to',
	choice3: 'from',
	choice4: 'in',
	answer: 2
},
{
question: "Water is a nature's big gift to man ____ quenches his thirst.", 
	choice1: 'although',
	choice2: 'hence',
	choice3: 'because',
	choice4: 'moreover',
	answer: 3
},
{
question: 'Success in this examination depends ___ the hard work alone.', 
	choice1: 'at',
	choice2: 'in',
	choice3: 'on',
	choice4: 'from',
	answer: 3
},
{
question: 'It is observed that some new aspiring politicians usually make a ___ before running in Congress with great hope of bringing changes in the system and progress in the country.', 
	choice1: 'two-hour important decision',
	choice2: 'two-hours important decision',
	choice3: 'two hour important decisions',
	choice4: 'two hours important decision',
	answer: 1
},
{
question: '____ the serene city of Italy is her lifelong dream.', 
	choice1: 'Have visited',
	choice2: 'Having visited',
	choice3: 'Shall have visit',
	choice4: 'To visit',
	answer: 4
},
{
question: 'Despite a plea from the management, employees ___ a massive protest.', 
	choice1: 'stage',
	choice2: 'should staged',
	choice3: 'have stage',
	choice4: 'would stage',
	answer: 2
},{
question: 'The debutant received ___ roses.', 
	choice1: 'several red big',
	choice2: 'several big red',
	choice3: 'red several big',
	choice4: 'big red several',
	answer: 2
},
{
question: 'You ___ to stop drinking alcohol now before it ___ you.', 
	choice1: 'must-kill',
	choice2: 'have-kill',
	choice3: 'should-kill',
	choice4: 'shall-kill',
	answer: 2
},
{
question: 'Disaster preparedness and disaster reduction management are slowly being taught in schools because of the ____ of floods, earthquakes and other natural calamities in the world.', 
	choice1: 'continually increasing incident',
	choice2: 'continually increasing incidence',
	choice3: 'continual increase incidents',
	choice4: 'continually increase incidence',
	answer: 2
},
{
question: 'The child who caught up cheating ___ the teacher not to tell his parents about the incident.', 
	choice1: 'has implored',
	choice2: 'has imploring',
	choice3: 'implored',
	choice4: 'had implored',
	answer: 3
},
{
question: 'He ___ a beautiful poem for his mother.', 
	choice1: 'writing',
	choice2: 'written',
	choice3: 'wrote',
	choice4: 'write',
	answer: 3
},
{
question: 'The test was hard for Fred and ___.', 
	choice1: 'I',
	choice2: 'me',
	choice3: 'himself',
	choice4: 'myself',
	answer: 2
},
{
question: 'The means of transportation ___ dramatically changed since the end of the 20th century.', 
	choice1: 'will changed',
	choice2: 'have changed',
	choice3: 'will have changed',
	choice4: 'has changed',
	answer: 4
},
{
question: ' The flowers smell ____', 
	choice1: 'more sweet',
	choice2: 'sweetly',
	choice3: 'sweet',
	choice4: 'sweeter',
	answer: 3
},
{
question: 'We had the ___ news when he came.', 
	choice1: 'last',
	choice2: 'last of all',
	choice3: 'very last',
	choice4: 'latest',
	answer: 4
},
{
question: 'The rate of ___________ has been fluctuating wildly this week.', 
	choice1: 'money',
	choice2: 'bills',
	choice3: 'coins',
	choice4: 'exchange',
	answer: 4
},
{
question: 'The bus ___________ arrives late during bad weather.', 
	choice1: 'every week',
	choice2: 'later',
	choice3: 'yesterday',
	choice4: 'always',
	answer: 4
},
{
question: 'Do you ____________ where the nearest grocery store is?', 
	choice1: 'know',
	choice2: 'no',
	choice3: 'now',
	choice4: 'not',
	answer: 1
},
{
question: 'Jerry Seinfeld, the popular American comedian, has his audiences___________.', 
	choice1: 'putting too many irons in the fire',
	choice2: "keeping their noses out of someone's business",
	choice3: 'rolling in the aisles',
	choice4: 'going to bat for someone',
	answer: 3
},
{
question: 'The chairperson will ____________ members to the subcommittee. ', 
	choice1: 'appoint',
	choice2: 'disappoint',
	choice3: 'appointment',
	choice4: 'disappointed',
	answer: 1
},
{
question: 'The critics had to admit that the ballet ______________ was superb.', 
	choice1: 'procrastinate',
	choice2: 'performance',
	choice3: 'pathology',
	choice4: 'psychosomatic',
	answer: 2
},
{
question: "Peter says he can't ___________ our invitation to dinner tonight.", 
	choice1: 'angel',
	choice2: 'across',
	choice3: 'accept',
	choice4: 'almost',
	answer: 3
},
{
question: 'We were __________ friends in that strange but magical country.', 
	choice1: 'upon',
	choice2: 'among',
	choice3: 'toward',
	choice4: 'in addition to',
	answer: 2
},
{
question: 'The hurricane caused ____________ damage to the city.', 
	choice1: 'extend',
	choice2: 'extended',
	choice3: 'extensive',
	choice4: 'extension',
	answer: 3
},
{
question: "Many cultures have special ceremonies to celebrate a person's _________ of passage into adulthood.", 
	choice1: 'right',
	choice2: 'rite',
	choice3: 'writ',
	choice4: 'write',
	answer: 2
},
{
question: '_____ name is John. And my _____ is Johnson.', 
	choice1: 'Your/surname',
	choice2: 'My/surname',
	choice3: 'I/surname',
	choice4: 'I/name',
	answer: 2

},

{
question: 'Pierre is a French boy. _____ from _____.', 
	choice1: "He's - France",
	choice2: 'His - France',
	choice3: "His's - French",
	choice4: 'He - France',
	answer: 1

},

{
question: 'English is _____ international languange.', 
	choice1: 'a',
	choice2: 'an',
	choice3: 'the',
	choice4: '*',
	answer: 2

},

{
question: '"Is your elder brother married?" "No, ______."', 
	choice1: "Brother isn't",
	choice2: "He isn't",
	choice3: "He is not",
	choice4: "She isn't",
	answer: 2

},

{
question: 'I live _____ a house ______ Los Angeles.', 
	choice1: 'on - in',
	choice2: 'in - in',
	choice3: 'in - at',
	choice4: 'at - in',
	answer: 2

},

{
question: "I'm _____ a class _____ eight other students.", 
	choice1: 'in - for',
	choice2: 'at - with',
	choice3: 'in - with',
	choice4: 'on - with',
	answer: 3

},

{
question: 'This is not just a computer. It is a 4 ____ computer.', 
	choice1: "students'",
	choice2: "students's",
	choice3: "student's",
	choice4: 'student',
	answer: 1

},

{
question: 'He ____ his car every weekend.', 
	choice1: 'wash',
	choice2: 'washing',
	choice3: 'washes',
	choice4: 'washed',
	answer: 3

},

{
question: "Most of the people, work at 8 o'clock every morning", 
	choice1: 'finishes',
	choice2: 'goes',
	choice3: 'does',
	choice4: 'starts',
	answer: 4

},

{
question: 'Every time he ____ a glass of lemonade before breakfast.', 
	choice1: 'is',
	choice2: 'have',
	choice3: 'has',
	choice4: 'does',
	answer: 3
},
{
question: 'He drives the children ____ school.', 
	choice1: 'on',
	choice2: 'at',
	choice3: 'to',
	choice4: 'in',
	answer: 3

},

{
question: 'She likes going _____ walks _____ summer.', 
	choice1: 'for - at',
	choice2: 'to - at',
	choice3: 'for - in',
	choice4: 'on - at',
	answer: 3

},

{
question: 'What ____ you ____ at the weekend?', 
	choice1: 'does - does',
	choice2: 'do - does',
	choice3: 'does - do',
	choice4: 'do - do',
	answer: 4

},

{
question: 'Do you like _____ in your free time?', 
	choice1: 'read',
	choice2: 'reads',
	choice3: 'reading',
	choice4: 'to read',
	answer: 3

},

{
question: 'A friend of mine likes ____ on picnic at weekends.', 
	choice1: 'to go',
	choice2: 'going',
	choice3: 'goes',
	choice4: 'go',
	answer: 3

},
{
question: 'Every year millions of people _____ The London Museum.', 
	choice1: 'visit',
	choice2: 'go',
	choice3: 'come',
	choice4: 'want',
	answer: 1

},{
question: "Visitors _____ to India's Independence Day from all over the world.", 
	choice1: 'visit',
	choice2: 'come',
	choice3: 'leave',
	choice4: 'want',
	answer: 2

},{
question: 'Many foreigners in our country _____ to the Golden Bazaar.', 
	choice1: 'buy',
	choice2: 'go shopping',
	choice3: 'want',
	choice4: 'come',
	answer: 2

},{
question: 'She loves _____ to music.', 
	choice1: 'listening',
	choice2: 'to listen',
	choice3: 'listens',
	choice4: 'listen',
	answer: 1

},{
question: '_____ there three stereos in the living room? No, there _____', 
	choice1: "Are - aren't",
	choice2: 'Are - are',
	choice3: 'Are - not',
	choice4: 'Are - is',
	answer: 1

},

]

const SCORE_POINTS = 1
const MAX_QUESTIONS = 15

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
