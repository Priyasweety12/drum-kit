
//Detecting button presse

var sum = document.querySelectorAll(".drum").length;
for (var i = 0; i < sum; i++) {
  document.querySelectorAll("button")[i].addEventListener("click", function() {
    var buttonInnerHtml = this.innerHTML;
    makeSound(buttonInnerHtml);
    buttonAnimation(buttonInnerHtml);
  });
}

//Detecting key press

document.addEventListener("keypress",function(e){
  makeSound(e.key);
  buttonAnimation(e.key);
});
function makeSound(key){
  switch (key) {
    case "w":
      var audio = new Audio("tom-1.mp3");
      audio.play();
      break;
    case "a":
      var audio = new Audio("tom-2.mp3");
      audio.play();
      break;
    case "s":
      var audio = new Audio("tom-3.mp3");
      audio.play();
      break;
    case "d":
      var audio = new Audio("tom-4.mp3");
      audio.play();
      break;
    case "j":
      var audio = new Audio("snare.mp3");
      audio.play();
      break;
    case "k":
      var audio = new Audio("crash.mp3");
      audio.play();
      break;
    case "l":
      var audio = new Audio("kick-bass.mp3");
      audio.play();
      break;
    default:
       alert("wrong button pressed");

  }
}

function buttonAnimation(currentKey){
    var a=document.querySelector("."+currentKey);
    a.classList.add("pressed");
    setTimeout(function(){
      a.classList.remove("pressed");
    },100);
}
