const imgEl = document.querySelector(".dice_image");
const triggerEl = document.querySelector(".dice_trigger")
const audioEl = document.getElementById("mySoundClip");

// console.log(audioEl);

function getRandomNumber() {
    return 1 + Math.floor(Math.random()*6); 
}

function playAudio(){
    audioEl.play();
}

function pauseAudio (){
    audioEl.pause();
}

function showDice () {
    triggerEl.addEventListener("click", function (){
        let myRandomNumber = getRandomNumber(); 
        imgEl.src = `dice${myRandomNumber}.png`;
        playAudio();
        
    })
}

showDice (); 