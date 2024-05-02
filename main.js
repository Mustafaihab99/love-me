let cont = document.getElementById("cont");
let image1 = document.querySelector(".img1");
let image2 = document.querySelector(".img2");
let yes = document.querySelector(".yes");
let no = document.querySelector(".no");

function getRandomNumber(min , max){
    let rand = Math.floor(Math.random() * (max - min + 1)) + min;
    return rand;
}
yes.addEventListener("click",function(){
    image2.style.display="none";
    image1.style.display="block";
})
no.addEventListener("mouseover",function(e){
let conheig = cont.getBoundingClientRect().height;
let conwid = cont.getBoundingClientRect().width;
let nohig = no.getBoundingClientRect().height;
let nowid = no.getBoundingClientRect().width;
let notop = no.getBoundingClientRect().top;
let noleft = no.getBoundingClientRect().left;
let newtop = notop;
let newleft = noleft;
while(Math.abs(newtop - notop) < conheig / 3)
{
    newtop = getRandomNumber(0,conheig - nohig);
}
while(Math.abs(newleft - noleft) < conwid / 3){
    newleft = getRandomNumber(0 , conwid - nowid);
}
no.style.top = Math.floor(newtop) + "px";
no.style.left = Math.floor(newleft) + "px";
})
