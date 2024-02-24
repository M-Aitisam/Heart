let con= document.querySelector(".container");
let lov = document.querySelector("i");

con.addEventListener("dblclick",function(){
    lov.style.transform='translate(-50%,-50%) scale(1)';
    lov.style.color ="black";
    lov.style.opacity = 0.8;

    setTimeout(function(){
           lov.style.opacity = 0;
    },1000);
    setTimeout(function(){
        lov.style.transform='translate(-50%,-50%) scale(0.8)';
       
    },2000);
});
