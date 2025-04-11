

//for mouse over and sound on
let pp = document.querySelector(".video");
let yo = document.querySelector(".hello");
let audio0 = document.querySelector(".audio0");
let mmm1 = document.querySelector(".mmm1");
let mmm2 = document.querySelector(".mmm2");
let mmm3 = document.querySelector(".mmm3");
let mmm4 = document.querySelector(".mmm4");
let mmm5 = document.querySelector(".mmm5");
let audio1 = document.querySelector(".audio1");
let audio2 = document.querySelector(".audio2");

pp.addEventListener("mouseover", function(){
    pp.muted = false;
    mmm2.style.height = "100%";
});
pp.addEventListener("mouseout",function(){
    pp.muted = true ;
    mmm2.style.height = "80%";
});

yo.addEventListener("mouseover", function(){
    yo.muted = false;
    mmm4.style.height = "100%";
});
yo.addEventListener("mouseout",function(){
    yo.muted = true ;
    mmm4.style.height = "80%";
}); 

//for play audio

mmm5.addEventListener("mouseover", function(){
    audio2.play();
    mmm5.style.height = "100%";
});
mmm5.addEventListener("mouseout",function(){
    audio2.pause();
    mmm5.style.height = "80%";
});

mmm1.addEventListener("mouseover", function(){
    audio1.play();
    mmm1.style.height = "100%";
});
mmm1.addEventListener("mouseout",function(){
    audio1.pause();
    mmm1.style.height = "80%";
});

mmm3.addEventListener("mouseover", function(){
    audio0.play();
    mmm3.style.height = "100%";
});
mmm3.addEventListener("mouseout",function(){
    audio0.pause();
    mmm3.style.height = "80%";
});

let switch1 = document.querySelector(".switch1");
let switch2 = document.querySelector(".switch2");
let test1 = document.querySelector(".test1");
let test2 = document.querySelector(".test2");

function uu(){
    switch1.style.backgroundColor = "black";
    switch1.style.color = "#7A9E9F";
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
    switch2.style.color = "#7A9E9F";
    switch2.style.border = "1rem solid #7A9E9F";
    test1.style.zIndex = "0";
    test2.style.zIndex = "1";
}
