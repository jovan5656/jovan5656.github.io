//front page transition opacity
function imageTransitionDisappear() {
    imageId.classList.add("transition");
}

function imageTransitionAppear() {
    imageId.classList.remove("transition");
}

imageTransitionDisappear = setInterval(imageTransitionDisappear, 3000)

imageTransitionAppear = setInterval(imageTransitionAppear, 9000)


//target all elements to save to constants
const page1btn=document.querySelector("#page1btn");
const page2btn=document.querySelector("#page2btn");
const page3btn=document.querySelector("#page3btn");
var allpages=document.querySelectorAll(".page");
//select all subtopic pages
function hideall(){ //function to hide all pages
    for(let onepage of allpages){ //go through all subtopic pages
        onepage.style.display="none"; //hide it
    }
}
function show(pgno){ //function to show selected page no
    hideall();
    //select the page based on the parameter passed in
    let onepage=document.querySelector("#page"+pgno);
    onepage.style.display="block"; //show the page
}
/*Listen for clicks on the buttons, assign anonymous
eventhandler functions to call show function*/
page1btn.addEventListener("click", function () {
    show(1);
    window.location.href = '#page1'
});
page2btn.addEventListener("click", function () {
    show(2);
    window.location.href = '#page2'
});
page3btn.addEventListener("click", function () {
    show(3);
    window.location.href = '#page3'
});
hideall();

/*JS for hamMenu */
const hamBtn=document.querySelector("#hamIcon");
const menuItemsList=document.querySelector("nav ul");
hamBtn.addEventListener("click",toggleMenus);
function toggleMenus(){ /*open and close menu*/
//if menuItemsList dont have the class "menuShow", add it, else remove it
menuItemsList.classList.toggle("menuShow");
//if menu is showing (has the class “menuShow”)
if(menuItemsList.classList.contains("menuShow")){
hamBtn.innerHTML="Close Menu"; //change button text to chose menu
}else{ //if menu NOT showing
hamBtn.innerHTML="Open Menu"; //change button text open menu
}
}

//History quiz
const btnSubmit=document.querySelector("#btnSubmit");
const scorebox=document.querySelector("#scorebox");
var q1,q2,q3,q4,score;
function CheckAns(){
    //read the value of the selected radio button for q1
    q1=document.querySelector("input[name='q1']:checked").value;
    console.log(q1); //check q1 value retrieved
    //read the value of the selected radio button for q2
    q2=document.querySelector("input[name='q2']:checked").value;
    console.log(q2); //check q2 value retrieved
    q3=document.querySelector("input[name='q3']:checked").value;
    console.log(q3); //check q3 value retrieved
    q4=document.querySelector("input[name='q4']:checked").value;
    console.log(q4); //check q4 value retrieved
    score=0; //reset score to 0, check ans and give score if correct
    if(q1=="TheBronzeera")score++;
    if(q2=="TheMassera")score++;
    if(q3=="TheGoldenera")score++;
    if(q4=="TheBronzeera")score++;
    scorebox.innerHTML="Score:"+score;
    if(score == 0){
        scorebox.innerHTML="Score: Fail 0 Marks!!";
    }
    if(score == 4){
        scorebox.innerHTML="Score: Full Marks!!";
    }
}
btnSubmit.addEventListener("click",CheckAns);





//Protein Eater Game

const chickenId = document.getElementById("chickenId");
function GetRandom(min,max){

return Math.round(Math.random() * (max - min)) + min;
}
function MoveChicken() {
chickenId.style.left = GetRandom(-40, 40) + "%";
chickenId.style.top = GetRandom(0, 65) + "vh";
}
var moveChickenItvId = setInterval(MoveChicken, 1000);

const timerDisplay = document.getElementById("timerDisplay");
const scoreBox=document.getElementById("scoreBox");
const popAudio = new Audio("audio/bite.mp3");
const imageChicken = document.getElementById("chickenId");
const startButton = document.getElementById("startbtn");

let timer=10;
imageChicken.style.display = "none";
function startCountdownTimer() {

    timer = 10;

    timerDisplay.innerHTML = timer;
    countdownTimer = setInterval(function() {
        timer--; // Timer decreases

        timerDisplay.innerHTML = timer;

        if (timer < 0) {
            clearInterval(countdownTimer); // Stop the timer
            timerDisplay.innerHTML = "0"
            gameOver();
        }
    }, 1000);
    
}

startbtn.addEventListener("click", function () {
    startGame();
});

function startGame(){
    startCountdownTimer();
    imageChicken.style.display = "";
    startButton.style.display = "none";
}

function gameOver(){
    scoreBox.innerHTML = "Game Over! You ate " + score + " grams of Protein" ;
    imageChicken.style.display = "none";
    startButton.style.display = "";
}

var score=0; //to track how many clicks
function chickenCatch() {
    //increases score after clicking
    score+= 27;
    //update html scorebox
    scoreBox.innerHTML = "Protein eaten: " + score + " grams";
    // Reset the audio to the beginning before playing
    popAudio.currentTime = 0;
    popAudio.play();
}
chickenId.addEventListener("click",chickenCatch);

//fullscreen
const btnFS=document.querySelector("#btnFS");
const btnWS=document.querySelector("#btnWS");
btnFS.addEventListener("click",enterFullscreen);
btnWS.addEventListener("click",exitFullscreen);

function enterFullscreen() { //must be called by user generated event
if (document.documentElement.requestFullscreen) {
document.documentElement.requestFullscreen();
} else if (document.documentElement.mozRequestFullScreen) { // Firefox
document.documentElement.mozRequestFullScreen();
} else if (document.documentElement.webkitRequestFullscreen) { // Chrome, Safari, and Opera
document.documentElement.webkitRequestFullscreen();
} else if (document.documentElement.msRequestFullscreen) { // IE/Edge
document.documentElement.msRequestFullscreen();
}
}
function exitFullscreen() {
if (document.exitFullscreen) {
document.exitFullscreen();
} else if (document.mozCancelFullScreen) { // Firefox
document.mozCancelFullScreen();
} else if (document.webkitExitFullscreen) { // Chrome, Safari, and Opera
document.webkitExitFullscreen();
} else if (document.msExitFullscreen) { // IE/Edge
document.msExitFullscreen();
}
}