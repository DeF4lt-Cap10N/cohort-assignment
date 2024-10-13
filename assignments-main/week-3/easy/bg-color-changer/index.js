
const red = document.querySelector(".red");
const yellow = document.querySelector(".yellow");
const green = document.querySelector(".green");
const blue = document.querySelector(".blue");
const black = document.querySelector(".black");
const white = document.querySelector(".white");
const purple = document.querySelector(".purple");

red.addEventListener('click', function getRed(){
    const container = document.querySelector(".container-main");
    container.style.backgroundColor = 'red';
});

yellow.addEventListener("click", function getYellow(){
    const container = document.querySelector(".container-main");
    container.style.backgroundColor = "yellow"; 
})

green.addEventListener("click", function getgreen(){
    const container = document.querySelector(".container-main");
    container.style.backgroundColor = "green"; 
})

blue.addEventListener("click", function getblue(){
    const container = document.querySelector(".container-main");
    container.style.backgroundColor = "blue"; 
})

black.addEventListener("click", function getblack(){
    const container = document.querySelector(".container-main");
    container.style.backgroundColor = "black"; 
})

white.addEventListener("click", function getwhite(){
    const container = document.querySelector(".container-main");
    container.style.backgroundColor = "white"; 
})

purple.addEventListener("click", function getpurple(){
    const container = document.querySelector(".container-main");
    container.style.backgroundColor = "purple"; 
})