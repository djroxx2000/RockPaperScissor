let userScore= 0;
let compScore= 0;
const userScore_span = document.getElementById("user-score");
const compScore_span = document.getElementById("comp-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r"); 
const paper_div = document.getElementById("p");
const scissor_div = document.getElementById("s");
const smallUserWord = "user".fontsize(4).sub();
const smallCompWord = "comp".fontsize(4).sub();

function getComputerChoice() {
    const choices = ['r', 'p', 's'];
    const randomNumber = Math.floor(Math.random()*3);
    return choices[randomNumber]; 
}

function convert(letter) {
    if(letter==="r") return "Rock";
    if(letter==="p") return "Paper";
    else return "Scissors";
}

function win(userChoice, computerChoice) {
    userScore++;
    userScore_span.innerHTML = userScore;
    result_p.innerHTML = `${convert(userChoice)}${smallUserWord} beats ${convert(computerChoice)}${smallCompWord} . You win! ; ) `;
    document.getElementById(userChoice).classList.add('green-glow');
    setTimeout(function() {document.getElementById(userChoice).classList.remove('green-glow')}, 300);
}

function lost(userChoice, computerChoice) {
    compScore++;
    compScore_span.innerHTML = compScore;
    result_p.innerHTML = `${convert(userChoice)}${smallUserWord} loses to ${convert(computerChoice)}${smallCompWord} . You lost. : ( `;
    document.getElementById(userChoice).classList.add('red-glow');
    setTimeout(function() {document.getElementById(userChoice).classList.remove('red-glow')}, 300);
}

function draw(userChoice) {
    result_p.innerHTML = `You both picked ${convert(userChoice)} . It's a Draw : ] `;
    document.getElementById(userChoice).classList.add('grey-glow');
    setTimeout(function() {document.getElementById(userChoice).classList.remove('grey-glow')}, 300);
}

function game(userChoice){
    const computerChoice = getComputerChoice();
    switch(userChoice + computerChoice) {
        case "rs":
        case "sp":
        case "pr":
            win(userChoice, computerChoice);
            break;
        case "rp":
        case "sr":
        case "ps":
            lost(userChoice, computerChoice);
            break;
        case "rr":
        case "ss":
        case "pp":
            draw(userChoice); 
            break;         
    }  
}

function main(){
    rock_div.addEventListener('click', function() {
        game("r");
    })
    paper_div.addEventListener('click', function() {
        game("p");
    })
    scissor_div.addEventListener('click', function() {
        game("s");
    })
}

main();