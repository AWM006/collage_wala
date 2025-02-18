function poppup(){
    let pp = window.open("","Msgwindow","width=200,height=200");
    pp.document.write("<h2>before doing this type of shit please read those lines carefully</h2><ul><li><h1>there is only for opinion</h1></li><li><h1>we take your name email and phone no</h1></li><li><h1>incase it get leaked everyone else also get involved</h1></li><li><h1>its verification page enter detail and you get main page with an id pass in your whatsapp</h1></li></ul>")
}

function submit(){
    document.querySelector(".ok").style.visibility = "visible" ;
    document.querySelector(".ok").style.transform = "scale(2)";
    document.querySelector(".ok").style.zIndex = "0";
    console.log("worked");
}
function cancel(){
    document.querySelector(".ok").style.visibility = "hidden"
    document.querySelector(".ok").style.transform = "scale(0)"
}

let inputs = document.getElementsByClassName(".input");
let submit1 = document.getElementsByClassName(".submit1");
let main = document.querySelector(".mainform");

if(inputs.value.length > 0){
    submit1.disabled = false; 
}
else{
    submit1.disabled = true;
}
submit1:addEventListener("click",function(){
    setTimeout(function(){
        main.submit();
    },1000);
});

