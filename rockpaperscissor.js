
var imgs = ["./images/rock.png", "./images/scissor.png", "./images/paper.png"];
const randIndex1 = Math.floor(Math.random() * imgs.length);
const randIndex2 = Math.floor(Math.random() * imgs.length);

document.getElementsByTagName("img")[0].setAttribute("src" ,imgs[randIndex1]);
document.getElementsByTagName("img")[1].setAttribute("src" ,imgs[randIndex2]);

if((randIndex1 == 0 && randIndex2 == 1) || (randIndex1 == 1 && randIndex2 == 2) || (randIndex1 == 2 && randIndex2 == 0)){
    document.querySelector("h1").innerHTML = "Player 1 wins!";
}else if((randIndex1 == 0 && randIndex2 == 2) || (randIndex1 == 1 && randIndex2 == 0) || (randIndex1 == 2 && randIndex2 == 1)) {
    document.querySelector("h1").innerHTML = "Player 2 wins!";
}else {
    document.querySelector("h1").innerHTML = "DRAW!";
}


document.addEventListener("click" , function(){
    var buttonPressed = document.querySelector("." + "btn-refresh");
    buttonPressed.classList.add("gray");

    setTimeout(function(){
        buttonPressed.classList.remove("gray");
    }, 500)

    window.location.reload("rockpaperscissor.html");
})


