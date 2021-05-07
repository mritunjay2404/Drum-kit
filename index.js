// document.querySelector("button").addEventListener("click",handleClick);
//
// function handleClick() {
//   alert("I got clicked");
// }

// Anonomus Calling

// document.querySelectorAll("button")[0].addEventListener("click",function () {
//   alert("I got clicked");
// });
// document.querySelectorAll("button")[1].addEventListener("click",function () {
//   alert("I got clicked");
// });
// document.querySelectorAll("button")[2].addEventListener("click",function () {
//   alert("I got clicked");
// });
// document.querySelectorAll("button")[3].addEventListener("click",function () {
//   alert("I got clicked");
// });
// document.querySelectorAll("button")[4].addEventListener("click",function () {
//   alert("I got clicked");
// });
// document.querySelectorAll("button")[5].addEventListener("click",function () {
//   alert("I got clicked");
// });
// document.querySelectorAll("button")[6].addEventListener("click",function () {
//   alert("I got clicked");
// });

// Or we can use loop for this like!!

// this is for detecting click..........................

var numberOfDrum=document.querySelectorAll(".drum").length;

for(var i=0;i<numberOfDrum;i++){
  document.querySelectorAll(".drum")[i].addEventListener("click",function(){

  makeSound(this.innerHTML); // make sound on clicked

  buttonAnimation(this.innerHTML); // make animate on click

  })
}

// For key keypress..............

document.addEventListener("keypress",function(event){
  makeSound(event.key);
  buttonAnimation(event.key);
})

function makeSound(key){
  switch (key) {
    case "w":
      var tom1=new Audio('sounds/tom-1.mp3');
      tom1.play();
      break;
    case "a":
      var tom2=new Audio('sounds/tom-2.mp3');
      tom2.play();
      break;
    case "s":
      var tom3=new Audio('sounds/tom-3.mp3');
      tom3.play();
      break;
    case "d":
      var tom4=new Audio('sounds/tom-4.mp3');
      tom4.play();
      break;
    case "j":
        var snare=new Audio('sounds/snare.mp3');
        snare.play();
        break;
    case "k":
        var crash=new Audio('sounds/crash.mp3');
        crash.play();
        break;
    case "l":
       var kickBass=new Audio('sounds/kick-bass.mp3');
       kickBass.play();
       break;
    default: console.log(this.innerHTML);

  }
}
function buttonAnimation(currentkey){

var activeButton= document.querySelector("."+ currentkey );

   activeButton.classList.add("pressed");

  setTimeout(function(){
    document.querySelector("."+ currentkey).classList.remove("pressed");
  },100)

}
