
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
{
	question: '',
	choice1: 'Depression will not be given an attention, it predisposes to hibernate and worse end his life.',
	choice2: 'so, therefore, we should all create a consciousness to spot',
	choice3: 'friends of family members who seem to be undergoing something',
	choice4: 'a listening ear, a warm hug or handshake matter most.',
	answer: 2
},
{
	question: '',
	choice1: 'Despite being a PWD,',
	choice2: 'Carina preserves in her studies',
	choice3: 'and ignores any hardship that come along in life',
	choice4: 'to pursued her dream of becoming a SPED teacher.',
	answer: 4
},
{
	question: '',
	choice1: 'The sudden demise of Ms.Gina Lopez created a large vacuum in the hearts of people',
	choice2: 'who admires her for being a staunch supporter of the anti-mining and deforestation.',
	choice3: 'She also had numerous foundations for the poor children',
	choice4: 'and programs that care for the environment.',
	answer: 2
},
{
	question: '',
	choice1: 'Before Richard Gomez become a popular actor in the local firm industry,',
	choice2: 'he was a waiter at a certain pizza parlor.',
	choice3: 'With his good looks, excel acting skills, diligence, and perseverance, he rose to stardom for several years.',
	choice4: 'His life changed when he got married. He is the incumbent mayor in Ormoc City.',
	answer: 3
},
{
	question: '',
	choice1: 'Quitting should never enter in the mind of us.',
	choice2: 'We should think forward and proactively. Remember no guts, no glory.',
	choice3: 'So start fixing your mind-set, do your best and persevere.',
	choice4: 'Just keep on going through life. You do your best and God will do the rest.',
	answer: 1
},
{
	question: '',
	choice1: 'The majority of scientific evidence',
	choice2: 'showed that for a healthy adult',
	choice3: 'moderate quantities of caffeine',
	choice4: 'pose no significant in health risk',
	answer: 3
},
{
	question: '',
	choice1: 'In 1964,',
	choice2: 'the African countries of Tanganyaki and Zanziban',
	choice3: 'has united to form',
	choice4: 'a single country, now called Tanzania.',
	answer: 3
},
{
	question: '',
	choice1: 'The students in the state college have prepared',
	choice2: 'a petition to remove a professor for bribery and immorality issues.',
	choice3: 'They are now gathered more signatures',
	choice4: 'to make the petition stronger.',
	answer: 3
},
{
	question: '',
	choice1: 'Feeling in love is difficult',
	choice2: 'to tell specially',
	choice3: 'if you have mixed feelings',
	choice4: 'to the person.',
	answer: 1
},
{
	question: '',
	choice1: 'The lady news anchor looke',
	choice2: 'so refreshing in her floral blouse and pleated skirt',
	choice3: 'in television, she delivered the news',
	choice4: 'lively and spontaneity.',
	answer: 4
},
{
	question: '',
	choice1: 'In the middle of confusion,',
	choice2: 'Joseph the man who seemed',
	choice3: 'to have lose hope, suddenly heard a voice',
	choice4: 'telling him to remain steadfast and keep the faith.',
	answer: 3
},
{
	question: '',
	choice1: 'Aling Luz, single handedly raised her two children.',
	choice2: 'Did two works at the same time while still on top of guiding her children',
	choice3: 'with their studies who eventually both graduated with honors.',
	choice4: 'She is truly a role models and deserves an Ulirang Ina Award.',
	answer: 4
},
{
	question: '',
	choice1: 'Inclusive education gives importance to all people',
	choice2: 'regardless of cultural affinity and physical limitations.',
	choice3: 'It gives opportunities to people who wishes to learn and',
	choice4: 'become useful towards achieving the improvement of their lives.',
	answer: 3
},
{
	question: '',
	choice1: 'Drinking fluids is essential to staying healthy because they give nutrients to our cells',
	choice2: 'and remove wastes from our body. To remain hydrated, one must be able to drink',
	choice3: 'at least eight (8) glasses of water and juice daily but not coffee and carbonated drinks',
	choice4: 'while tea with antioxidants can also hydrate the body.',
	answer: 1
},
{
	question: '',
	choice1: 'The Japanese have high regard on the beauty of the nature.',
	choice2: 'This reverence has led to the creation of one of the worlds most spectacular park systems',
	choice3: 'covering 5.4 percent of their total land area.',
	choice4: 'The park also boast of having the most beautiful nature preserves.',
	answer: 1
},
{
	question: '',
	choice1: 'Swimming is a good form of restoring wellness',
	choice2: 'and making you fit',
	choice3: 'therefore you are stretching your lungs muscles',
	choice4: 'and oxygenating your internal system.',
	answer: 3
},
{
	question: '',
	choice1: 'A mother and her new bord baby is encouraged',
	choice2: 'to exchange smiles as often as they could',
	choice3: 'because it is important for bonding and attachment',
	choice4: 'as well as for the intellectual and social development of the child.',
	answer: 1
},
{
	question: '',
	choice1: 'The language diversity in the Philippines is amazing!',
	choice2: 'With 7,100 islands, history of colonization form the Malays to Americans,',
	choice3: 'bringing different cultures and traditions, one could imagine the richness of the languages or dialect spoken around.',
	choice4: 'Thus, don’t be surprised at all when you hear someone saying a strange word.',
	answer: 4
},
{
	question: '',
	choice1: 'An education is said to be functional',
	choice2: 'when it is transforming the lives of the learners',
	choice3: 'making meaningful contributions to the society',
	choice4: 'and accepting the existence of a Supreme being in their lives.',
	answer: 2
},
{
	question: '',
	choice1: 'Mathematics are fun to learn.',
	choice2: 'You should indulge yourself first into it by falling in love with numners.',
	choice3: 'You will found out soon, you will have confidence and',
	choice4: 'Mathematics will just be easy for you.',
	answer: 1
},
{
	question: '',
	choice1: 'The secretary was calm in explaining the advantages of',
	choice2: 'the K-12 Curriculum.',
	choice3: 'Various protests from the parents',
	choice4: 'begun in the streets.',
	answer: 4
},
{
	question: '',
	choice1: 'The researchers from DepEd travelling',
	choice2: 'too many towns and cities all over the country',
	choice3: 'to monitor the implementation of their programs',
	choice4: '',
	answer: 1
},
{
	question: '',
	choice1: 'Multiple Intelligence as introduced by Howard Gardner,',
	choice2: 'looks into the eight types of intelligences found in a man',
	choice3: 'which could be helping the teachers in',
	choice4: 'identifying the pupils capabilities in class.',
	answer: 3
},
{
	question: '',
	choice1: 'Gender inequality exist when',
	choice2: 'anyone from the group of LGBT',
	choice3: 'are prevented from any privileges',
	choice4: 'which normal sexes enjoy.',
	answer: 3
},
{
	question: '',
	choice1: 'Thailand is another famous Asian tourist destination',
	choice2: 'which everyone enjoy going to',
	choice3: 'because of its street foods and',
	choice4: 'Majestic Grand Palace which is the prime Minister Holds office.',
	answer: 4
},
{
	question: '',
	choice1: 'When I visited Spain',
	choice2: 'with my parents,',
	choice3: 'I really wanted to see four cities;',
	choice4: 'Madrid, Barcelona, Valencia, and Sevilla.',
	answer: 3
},
{
	question: '',
	choice1: 'The recent discovery of',
	choice2: 'the short films and the personal diary',
	choice3: 'of the renowned inventor allow historians',
	choice4: 'to appreciate his genius even more.',
	answer: 3
},
{
	question: '',
	choice1: 'Looking down',
	choice2: 'grom the summit,',
	choice3: 'Stacy’s friends’ faces were blurry',
	choice4: 'as they smiled up at her.',
	answer: 1
},
{
	question: '',
	choice1: 'While I appreciate your efforts',
	choice2: 'to ensure that the event runs smoothly,',
	choice3: 'it is interfering with my ability to give',
	choice4: 'the artists the flexibility they require. ',
	answer: 3
},
{
	question: '',
	choice1: 'The buzzing noises',
	choice2: 'emitting from the alarm clock',
	choice3: 'makes me cringe every',
	choice4: 'time that I hear them.',
	answer: 3
},
{
	question: '',
	choice1: 'Harold had always found',
	choice2: 'the specialized jargon',
	choice3: 'of artisanal coffee shops',
	choice4: 'being confusing and intimidating.',
	answer: 4
},
{
	question: '',
	choice1: 'The new budget',
	choice2: 'was not determined entirely',
	choice3: 'by the Board of Directors, but',
	choice4: 'they certainly had a lot of influence.',
	answer: 4
},
{
	question: '',
	choice1: 'Susan’s term paper was definitely the most thorough',
	choice2: 'researched work she had done all year,',
	choice3: 'but she was still worried',
	choice4: 'that the teacher wouldn’t like it.',
	answer: 1
},
{
	question: '',
	choice1: 'The lights were dimmed slow,',
	choice2: 'and the crowd gasped',
	choice3: 'when the blue glow of the',
	choice4: 'painted letters became apparent.',
	answer: 1
},
{
	question: '',
	choice1: 'The sharp beak',
	choice2: 'and beady eyes of a common farm chicken',
	choice3: 'can be terrifying to those',
	choice4: 'who have never seen this animal previous.',
	answer: 4
},
{
	question: '',
	choice1: 'The comprehensive chemistry exam',
	choice2: 'consists in four parts',
	choice3: 'in which students must correctly',
	choice4: 'identify the element or compound.',
	answer: 2
},
{
	question: '',
	choice1: 'While his parents were at work,',
	choice2: 'John skipped school and decided to take the train for the city,',
	choice3: 'where he met his older brother Jimmy',
	choice4: 'and some of Jimmy’s friends.',
	answer: 2
},
{
	question: '',
	choice1: 'Everyone',
	choice2: 'will tell you',
	choice3: 'that our basketball team',
	choice4: 'is the best among our country.',
	answer: 4
},
{
	question: '',
	choice1: 'Selena was very angry on',
	choice2: 'her sister for arriving more than',
	choice3: 'thirty minutes late to',
	choice4: 'their cousin’s surprise party.',
	answer: 1
},
{
	question: '',
	choice1: 'Her explanation for her absence,',
	choice2: 'that she had been at the laundromat and',
	choice3: 'lost rack of time, was confirmed with the piles',
	choice4: 'of neatly folded laundry on the dresser.',
	answer: 3
},
{
	question: '',
	choice1: 'My two dogs have recently',
	choice2: 'become rather mutually antagonistic,',
	choice3: 'and I am struggling to keep',
	choice4: 'them separate to each other.',
	answer: 4
},
{
	question: '',
	choice1: 'Bilingual education has actually been shown to produce higher achievements in both languages',
	choice2: 'as well as enhance problem solving and critical thinking skills',
	choice3: 'because some public school systems have successfully implemented bilingual education.',
	choice4: 'There are still enormous difficulties in terms of resources and support from the Department of Education.',
	answer: 3
},
{
	question: '',
	choice1: 'The number of items',
	choice2: 'at furniture stores',
	choice3: 'are overwhelming',
	choice4: 'to some customers.',
	answer: 3
},
{
	question: '',
	choice1: 'Despite the forecast,',
	choice2: 'I didn’t think that much rain',
	choice3: 'would fall overnight however,',
	choice4: 'I was wrong.',
	answer: 3
},
{
	question: '',
	choice1: 'Aliza was very ambitious.',
	choice2: 'She played varsity field volleyball,',
	choice3: 'a lot of girls looked up to her,',
	choice4: 'took all AP classes, and could recite Shakespeare by heart.',
	answer: 3
},
{
	question: '',
	choice1: 'Contrary to popular belief',
	choice2: 'if one were to compare the hunting powers',
	choice3: 'of female lions with that of male lions,',
	choice4: 'the females would be the best hunters.',
	answer: 4
},
{
	question: '',
	choice1: 'Everyone on the team agreed',
	choice2: 'that the best option was to forfeit the game;',
	choice3: 'without their best player;',
	choice4: 'the team didn’t have a chance of winning.',
	answer: 3
},
{
	question: '',
	choice1: 'James’s grocery list',
	choice2: 'included the following items;',
	choice3: 'broccoli, frozen yogurt,',
	choice4: 'bread, pork chops, and eggs.',
	answer: 2
},
{
	question: '',
	choice1: 'I was going to go for a run today.',
	choice2: 'However,',
	choice3: 'the stormy weather caused me',
	choice4: 'to postpone my workout.',
	answer: 1
},
{
	question: '',
	choice1: 'In speaking of Mr. William Ellery Channing,',
	choice2: 'who has just published a very neat little volume of poems,',
	choice3: 'we feel the necessity of employing the indefinite',
	choice4: 'rather than the definitive articl',
	answer: 4
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
