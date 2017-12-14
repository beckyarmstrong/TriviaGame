// Create objects with trivia questions and answers...select the answers by the index
var triviaQuestions = [{
	question: "Which famous family group included the brothers Marlon and Tito?",
	answerList: ["A. Hanson", "B. The Jets", "C. Jackson Five"],
	answer: 2
},{
	question: "What famous citizen said of nuclear bombs--If I had known, I would have become a watchmaker?",
	answerList: ["A. Albert Einstein", "B. Alan Turing", "C. JJ Thomsom"],
	answer: 0
},{
	question: "What was the name of the philosopher who stated--Children today are tyrants. They contradict their parents, gobble their food, and tyrannize their teachers",
	answerList: ["A. Socrates", "B. Plato", "C. Aristotle"],
	answer: 0
},{
	question: "Which  American president was the only one elected after running unopposed?",
	answerList: ["A. Franklin D. Roosevelt", "B. George Washington", "C. Abraham Lincoln"],
	answer: 1
},{
	question: "Which American state was the first to enter the union , on the 7th of Dec 1787?",
	answerList: ["A. Virginia", "B. Pennsylvania", "C. Delaware"],
	answer: 2
},{
	question: "The Chief of the Iroquois Indians had the same name as what car?",
	answerList: ["A. Pontiac", "B. Chevy", "C. Dodge"],
	answer: 0
},{
	question: "What character has been played by the most actors?",
	answerList: ["A. James Bond", "B. Sherlock Holmes", "C. Romeo"],
	answer: 1
},{
	question: "What was Stephen King's first published novel?",
	answerList: ["A. The Shinning", "B. Misery", "C. Carrie"],
	answer: 2
}];

// create universal variables
var currentQuestion; var correctAnswer; var incorrectAnswer; var unanswered; var seconds; var time; var answered; var userSelect;
var messages = {
	correct: "Yes, that's right!",
	incorrect: "No, that's not it.",
	endTime: "Out of time!",
	finished: "Alright! Let's see how well you did."
}

// start time when category selected

$('.startTime').on('click', function(){
	$(this).hide();
	newGame();
});

// 

function newGame(){
	$('#finalMessage').empty();
	$('#correctAnswers').empty();
	$('#incorrectAnswers').empty();
	$('#unanswered').empty();
	currentQuestion = 0;
	correctAnswer = 0;
	incorrectAnswer = 0;
	unanswered = 0;
	newQuestion();
}

function newQuestion(){
	$('#message').empty();
	$('#correctedAnswer').empty();
	$('#gif').empty();
	answered = true;

	$('#currentQuestion').html('Question #'+(currentQuestion+1)+'/'+triviaQuestions.length);
	$('.question').html('<h2>' + triviaQuestions[currentQuestion].question + '</h2>');
	for(var i = 0; i < 4; i++){
		var choices = $('<div>');
		choices.text(triviaQuestions[currentQuestion].answerList[i]);
		choices.attr({'data-index': i });
		choices.addClass('thisChoice');
		$('.answerList').append(choices);
	}
	countdown();
	$('.thisChoice').on('click',function(){
		userSelect = $(this).data('index');
		clearInterval(time);
		answerPage();
	});
}

function countdown(){
	seconds = 20;
	$('#timeLeft').html('<h3>Time Remaining: ' + seconds + '</h3>');
	answered = true;
	time = setInterval(showCountdown, 1000);
}

function showCountdown(){
	seconds--;
	$('#timeLeft').html('<h3>Time Remaining: ' + seconds + '</h3>');
	if(seconds < 1){
		clearInterval(time);
		answered = false;
		answerPage();
	}
}

function answerPage(){
	
	$('.thisChoice').empty(); 
	$('.question').empty();

	var rightAnswerText = triviaQuestions[currentQuestion].answerList[triviaQuestions[currentQuestion].answer];
	var rightAnswerIndex = triviaQuestions[currentQuestion].answer;
	//checks to see correct, incorrect, or unanswered
	if((userSelect == rightAnswerIndex) && (answered == true)){
		correctAnswer++;
		$('#message').html(messages.correct);
	} else if((userSelect != rightAnswerIndex) && (answered == true)){
		incorrectAnswer++;
		$('#message').html(messages.incorrect);
		$('#correctedAnswer').html('The correct answer was: ' + rightAnswerText);
	} else{
		unanswered++;
		$('#message').html(messages.endTime);
		$('#correctedAnswer').html('The correct answer was: ' + rightAnswerText);
		answered = true;
	}
	
	
}



	

