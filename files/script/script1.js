

//for mouse over and sound on
let aa = document.querySelector(".mmm3");
let pp = document.querySelector(".video");

pp.addEventListener("mouseover", function(){
    pp.muted = false;
});
pp.addEventListener("mouseout",function(){
    pp.muted = true ;
});


let yo = document.querySelector(".hello");

yo.addEventListener("mouseover", function(){
    yo.muted = false;
});
yo.addEventListener("mouseout",function(){
    yo.muted = true ;
}); 

//for play audio

let mmm5 = document.querySelector(".mmm5");
let audio0 = document.querySelector(".audio0");
mmm5.addEventListener("mouseover", function(){
    audio0.play();
});
mmm5.addEventListener("mouseout",function(){
    audio0.pause();
});

let mmm1 = document.querySelector(".mmm1");
let audio1 = document.querySelector(".audio1");
mmm1.addEventListener("mouseover", function(){
    audio1.play();
});
mmm1.addEventListener("mouseout",function(){
    audio1.pause();
});

let mmm2 = document.querySelector(".mmm2");
let audio2 = document.querySelector(".audio2");
mmm2.addEventListener("mouseover", function(){
    audio2.play();
});
mmm2.addEventListener("mouseout",function(){
    audio2.pause();
});

let switch1 = document.querySelector(".switch1");
let switch2 = document.querySelector(".switch2");
let test1 = document.querySelector(".test1");
let test2 = document.querySelector(".test2");

function uu(){
    switch1.style.backgroundColor = "black";
    switch1.style.color = "white";
    switch1.style.border = "1rem solid #7A9E9F";
    switch2.style.backgroundColor = "#7A9E9F";
    switch2.style.color = "black";
    switch2.style.border = "1rem solid black";
    test1.style.zIndex = "1";
    test2.style.zIndex = "0";
}
function oo(){
    switch1.style.backgroundColor = "#7A9E9F";
    switch1.style.color = "black";
    switch1.style.border = "1rem solid black";
    switch2.style.backgroundColor = "black";
    switch2.style.color = "white";
    switch2.style.border = "1rem solid #7A9E9F";
    test1.style.zIndex = "0";
    test2.style.zIndex = "1";
}
