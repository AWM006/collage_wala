

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



