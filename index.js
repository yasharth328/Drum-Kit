//w,a,s,d,j,k,l keys


var drumBtns = document.querySelectorAll(".drum").length;
for(var i=0;i<drumBtns;i++){
document.querySelectorAll(".drum")[i].addEventListener("click",btnClicked);
}
function btnClicked(){
   // this.style.color = "#0002";
    var btnInnerhtml = this.innerHTML;

    makeSound(btnInnerhtml);

    highLight(btnInnerhtml);
    //alert("btn clicked!");
}

document.addEventListener("keypress",function(event){
    makeSound(event.key);
    highLight(event.key);
    }   
)



function makeSound(key)
{
    switch (key) {
        case "w":
            var tom1 = new Audio("sounds\\tom-1.mp3");
            tom1.play();
            break;
        case "a":
            var tom2 = new Audio("sounds\\tom-2.mp3");
            tom2.play();
            break;
        case "s":
            var tom3 = new Audio("sounds\\tom-3.mp3");
            tom3.play();
            break;
        case "d":
            var tom4 = new Audio("sounds\\tom-4.mp3");
            tom4.play();
            break;
        case "j":
            var kick = new Audio("sounds\\kick-bass.mp3");
            kick.play();
            
        break;

        case "k":
            var snare = new Audio("sounds\\snare.mp3");
            snare.play();
            break;

        case "l":
            var crash = new Audio("sounds\\crash.mp3");
            crash.play();        
        break;
        default:console.log("Hello Everyone!");
           
            break;
    }
}


function highLight(currKey){

        var btnLight = document.querySelector("."+currKey);
        btnLight.classList.add("pressed");
        setTimeout(function(){
            btnLight.classList.remove("pressed");
        },100)






}


// var sound1 = new Audio("sounds\\tom-1.mp3");
// sound1.play();