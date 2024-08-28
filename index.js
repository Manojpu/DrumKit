var num_of_Buttons = document.querySelectorAll(".drum").length;

for(var i=0; i<num_of_Buttons; i++){
    document.querySelectorAll('button')[i].addEventListener('click',function(){
        playSound(this.innerHTML);
        buttonAnimation(this.innerHTML);
        console.log(this.innerHTML);
    }); 
    
}

// Function to play the sound based on the button pressed
function playSound(key) {
    var audio;
    switch(key) {
        case "w":
            audio = new Audio("sounds/tom-1.mp3");
            break;
        case "a":
            audio = new Audio("sounds/tom-2.mp3");
            break;
        case "s":
            audio = new Audio("sounds/tom-3.mp3");
            break;
        case "d":
            audio = new Audio("sounds/tom-4.mp3");
            break;
        case "j":
            audio = new Audio("sounds/snare.mp3");
            break;
        case "k":
            audio = new Audio("sounds/kick-bass.mp3");
            break;
        case "l":
            audio = new Audio("sounds/crash.mp3");
            break;
        default:
            console.log("Invalid button");
    }

    if (audio) {
        audio.play();
    }
}

//Detectting the keyboardpress events
document.addEventListener("keydown", function(event){
    playSound(event.key);
    buttonAnimation(event.key);
   
});

function buttonAnimation(currentKey){
    var activeButton =document.querySelector("."+ currentKey);
    activeButton.classList.add("pressed");
    setTimeout(function(){activeButton.classList.remove("pressed")},150);
}