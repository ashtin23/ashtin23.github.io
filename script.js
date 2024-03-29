let slides = document.querySelectorAll('#slides .slide')
let currentSlide = 0
let score = 0
let slideCount = 5
let submitButton = document.querySelector('.submit')
var wrongAnswers = document.querySelectorAll('.wrong')
let allHeader = document.querySelectorAll('allHeader')
let slideHeader = document.querySelector('.slide-1-header')
let slideFirstBody = document.querySelector('.body-main-1')
let slideSecondBody = document.querySelector('.body-main-2')
let slideThirdBody = document.querySelector('.body-main-3')
let slideFourthBody = document.querySelector('.body-main-4')
let slideAllBodies = document.querySelectorAll('.body-main')




// all q/a will be stored in an array of arrays
// will need a for loop to cycle through them all, setting all of the questions to the applicable header
// and one anser to each body element
let questions = [
	{
		question: 'Who is the lead singer of Nirvana?',
		answers: ["Chester Bennington", "Anthony Kiedis", "Kurt Cobain", "Chad Kroeger"],
		correctAnswer: "Kurt Cobain",
		//working on adding images to buttons
		// answerImage: ["url('https://i.imgur.com/1zRehhz.jpg')", 'https://i.imgur.com/J2JbGWd.jpg', 'https://i.imgur.com/dPYALES.jpg', 'https://i.imgur.com/2RXMVVw.jpg']
	}, 
	{
		question: "What is the stage name of the American rapper with the birth name Marshall Bruce Mathers III?",
		answers: ["T.I.", "Eminem", "Dr. Dre", "Big Boi"],
		correctAnswer:"Eminem"
	},
	{
		question: "What was the name of Jay-Z's first album?",
		answers: ["The Blueprint", "The Black Album", "In My Lifetime, Vol. 1", "Reasonable Doubt"],
		correctAnswer:"Reasonable Doubt"
	},
	{
		question: "Which hip-hop artist played a role in the film 'Four Brothers'?",
		answers: ["Drake", "Andre 3000", "Kanye West", "Ludacris"],
		correctAnswer:"Andre 3000"
	},
	{
		question: "Which artist holds the record for most Grammy nominations?",
		answers: ["Quincy Jones", "Jay-Z", "Bruce Springsteen", "Michael Jackson"],
		correctAnswer:"Quincy Jones"
	}


]



submitButton.addEventListener('click', function(evt) {
	evt.preventDefault()
	slides[currentSlide].className = 'slide'
	currentSlide = (currentSlide+1)%slides.length
	slides[currentSlide].className = 'slide showing'



	slideHeader.innerHTML = questions[0].question
	slideFirstBody.backgroundImage = questions[0].answers[0]
	slideSecondBody.innerHTML = questions[0].answers[1]
	slideThirdBody.innerHTML = questions[0].answers[2]
	slideFourthBody.innerHTML = questions[0].answers[3]

})

for(let i = 0; i < slideAllBodies.length; i++) {
	var theIndex = questions[i].answers.indexOf(i)
slideAllBodies[i].addEventListener('click', function(evt) {
	evt.preventDefault()
	let chosenAnswer = evt.target.innerText
	for (j=0; j < questions.length; j++) {
	if (chosenAnswer ===  questions[j].correctAnswer) {
		console.log('good job')
		score +=1
	}else if (chosenAnswer !== questions[j].correctAnswer){
		console.log('keep trying')
		}

		//working on adding images to buttons
// 		for (let x=0; x < slideAllBodies.length; x++) {
// 		for (let j = 0; j<answerImage.length; j++) {
// 		slideAllBodies[x].style.backgroundImage === quesions[i].answerImage[j].innerHTML
// 	}
// }


}
	if (currentSlide < slideCount) {
	slideHeader.innerHTML = questions[currentSlide].question
	slideFirstBody.innerHTML = questions[currentSlide].answers[0]
	slideSecondBody.innerHTML = questions[currentSlide].answers[1]
	slideThirdBody.innerHTML = questions[currentSlide].answers[2]
	slideFourthBody.innerHTML = questions[currentSlide].answers[3]
	currentSlide+=1
	}
	else if(currentSlide = slideCount) {
		alert("Your answered " + score + "/5 correctly!")
	}






	
})
}

