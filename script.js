// Challange 1: Your Age in Days

function ageInDays() {
var birthYear = prompt("What year were you born?"); 
var ageInDayss = (2020 - birthYear) * 365;
var h1 = document.createElement('h1');
var textAnswer = document.createTextNode('You are' + ageInDayss + 'days old');
h1.setAttribute('id', 'ageInDays');
h1.appendChild(textAnswer);
document.getElementById('flex-box-result').appendChild(h1);

}
function reset() {
    document.getElementById('ageInDays').remove();
}
// Chalange 2
function generateCat() {
    var image = document.createElement('img');
    var div = document.getElementById('flex-cat-gen');
    image.src = "https://www.kasandbox.org/programming-images/misc/cat-walk.gif";
    div.appendChild(image);
}

// Challenge 3: rock, paper, scissors
function rpsGame(yourChoice) {
    console.log(yourChoice);
    var humanChoice, botChoice;
    humanChoice = yourChoice.id;

    botChoice = numberToTheChoice(randomToRpsInt());
    console.log('Computer choice:', botChoice);

    result = decideWinner(humanChoice, botChoice); //[0, 1] human lost | bot won
    message = finalMessage(result); // {'message':'You won' , 'color': 'green'}
    console.log(message);
    //rpsFrontEnd(yourChoice.id, botChoice, message);

}
function randomToRpsInt() {
    return Math.floor(Math.random() * 3);
}
function numberToTheChoice(number) {
    return ['rock', 'paper', 'scissors'] [number];
}

function decideWinner(yourChoice, computerChoice){
    var rpsDatabase = {
        'rock': {'paper': 1, 'rock':0.5, 'scissors':0},
        'paper': {'scissors': 1, 'paper': 0.5, 'rock': 0},
        'scissors': {'rock': 1, 'scissors': 0.5, 'paper':0}
    }

    var yourScore = rpsDatabase[yourChoice][computerChoice];
    var computerScore = rpsDatabase[computerChoice][yourChoice];

    return [yourScore, computerScore];

}
function finalMessage([yourScore, computerScore]) {
    if (yourScore === 0) {
        return {'message':'You lost!', 'color':'red'};
    
    } else if (yourScore === 0.5){
        return {'message': 'You tied', 'color':'yellow'};
    } else {
        return {'message':'You won!', 'color':'green'};

    }
}

function rpsFrontEnd(humanImageChoice, botImageChoice, finalMessage){
    var ImageDatabase = {
        'rock': document.getElementById('rock').src,
        'paper': document.getElementById('paper').src,
        'scissors': document.getElementById('scissors').src
    }

    // Let's remove image

    document.getElementById('rock').remove();
    document.getElementById('paper').remove();
    document.getElementById('scissors').remove();
}

    








