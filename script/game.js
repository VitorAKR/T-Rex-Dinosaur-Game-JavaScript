let dino = document.getElementById("dino");
let cacti = document.getElementById("cacti");

function jump(){
    //add class jump
    if(dino.classList != "animationJump"){
        dino.classList.add("animationJump");
    }
    //remove after the animation
    setTimeout(function(){
        dino.classList.remove("animationJump"); 
    }, 500);
}


//check if you lost or not
let checkD = setInterval(() => {
    //get top position
    let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue("top"));
    let cactiLeft = parseInt(window.getComputedStyle(cacti).getPropertyValue("left"));

    //basically if the cacti are in the range of 40px to -35px 
    //and the dino is on the ground with 100px, they collided
   if(cactiLeft < 40 && cactiLeft > -35 && dinoTop == 100){    
        cacti.style.animation = "none";
        cacti.style.display = "none";
        alert("Game Over!");
        //restart the page after clicking OK
        window.location.reload();
    } 
    //console.log("Dino = ",dinoTop);
    //console.log("Cactus = ",cactiLeft);


}, 10);
