window.addEventListener("load",()=>{

setTimeout(()=>{
document.getElementById("loader").style.display="none";
},1000);

});

startPortfolioTyping();

function startPortfolioTyping(){

const typingTarget = document.getElementById("typing");

if(!typingTarget) return;

const typingTexts = [
"B.Tech CSE Student",
"Web Developer",
"Frontend Developer",
"Java Programmer",
"Python Learner",
"Future Software Engineer",
"Open for Internship Opportunities",
"Code | Learn | Build | Repeat"
];

let typingTextIndex = 0;
let typingCharIndex = 1;
let typingDeleting = false;

function runTyping(){

const currentText = typingTexts[typingTextIndex];

typingTarget.textContent = currentText.substring(0, typingCharIndex);

if(typingDeleting){

typingCharIndex--;

if(typingCharIndex < 0){

typingDeleting = false;
typingTextIndex = (typingTextIndex + 1) % typingTexts.length;
typingCharIndex = 0;

}

}else{

typingCharIndex++;

if(typingCharIndex > currentText.length){

typingDeleting = true;
setTimeout(runTyping,1200);
return;

}

}

setTimeout(runTyping,typingDeleting ? 45 : 85);

}

runTyping();

}



function reveal(){

let reveals = document.querySelectorAll(".section");

for(let i=0;i<reveals.length;i++){

let windowHeight = window.innerHeight;

let revealTop = reveals[i].getBoundingClientRect().top;

let revealPoint = 100;

if(revealTop < windowHeight - revealPoint){

reveals[i].classList.add("active");

}

}

}

window.addEventListener("scroll",reveal);

document.querySelectorAll(".section").forEach(sec=>{
sec.classList.add("reveal");
});

const topBtn =
document.getElementById("topBtn");

window.addEventListener("scroll",()=>{

if(window.scrollY > 300){

topBtn.style.display="block";

}else{

topBtn.style.display="none";

}

});

topBtn.addEventListener("click",()=>{

window.scrollTo({
top:0,
behavior:"smooth"
});

});





const themeBtn=document.getElementById("themeToggle");

if(localStorage.getItem("theme")==="light"){

document.body.classList.add("light-mode");

themeBtn.innerHTML="☀️";

}

themeBtn.onclick=()=>{

document.body.classList.toggle("light-mode");

if(document.body.classList.contains("light-mode")){

themeBtn.innerHTML="☀️";

localStorage.setItem("theme","light");

}else{

themeBtn.innerHTML="🌙";

localStorage.setItem("theme","dark");

}

};




const hour=new Date().getHours();

let greet="Hello";

if(hour<12){

greet="Good Morning";

}else if(hour<18){

greet="Good Afternoon";

}else{

greet="Good Evening";

}

document.getElementById("greeting").innerText=greet;





function updateClock(){

document.getElementById("clock").innerText=

new Date().toLocaleTimeString();

}

setInterval(updateClock,1000);

updateClock();




const counters =
document.querySelectorAll(".counter");

counters.forEach(counter=>{

const updateCounter=()=>{

const target=
+counter.dataset.target;

const count=
+counter.innerText;

const increment=
target/100;

if(count<target){

counter.innerText=
Math.ceil(count+increment);

setTimeout(updateCounter,20);

}else{

counter.innerText=target;

}

};

updateCounter();

});

document.getElementById("year").innerText =
new Date().getFullYear();



const form=
document.getElementById("contactForm");

if(form){

form.addEventListener("submit",(e)=>{

e.preventDefault();

alert("Message Sent Successfully");

});

}







window.addEventListener("scroll",()=>{

const winScroll=
document.documentElement.scrollTop;

const height=
document.documentElement.scrollHeight-
document.documentElement.clientHeight;

const scrolled=
(winScroll/height)*100;

document.getElementById("progress-bar")
.style.width=scrolled+"%";

});


window.addEventListener("scroll",()=>{

let scrollTop=document.documentElement.scrollTop;

let height=document.documentElement.scrollHeight-document.documentElement.clientHeight;

let percent=(scrollTop/height)*100;

document.getElementById("progress-bar").style.width=percent+"%";

});


const menu=document.querySelector(".menu-btn");

const nav=document.querySelector(".nav-links");

menu.onclick=()=>{

nav.classList.toggle("active");

};



window.onscroll=()=>{

if(window.scrollY>300){



const topBtn=document.getElementById("topBtn");

if(topBtn){

window.addEventListener("scroll",()=>{

topBtn.style.display=

window.scrollY>300

?

"block"

:

"none";

});

topBtn.onclick=()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

};

}


}else{

topBtn.style.display="none";

}

};

topBtn.onclick=()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

};




const filterBtns=document.querySelectorAll(".filter-btn");

const cards=document.querySelectorAll(".project-card");

filterBtns.forEach(btn=>{

btn.addEventListener("click",()=>{

const active=document.querySelector(".filter-btn.active");

if(active){

active.classList.remove("active");

}


btn.classList.add("active");

const filter=btn.dataset.filter;

cards.forEach(card=>{

if(filter==="all"){

card.style.display="block";

}else{

card.style.display=

card.dataset.category===filter

?

"block"

:

"none";

}

});

});

});




document.querySelectorAll(".live-btn").forEach(btn=>{

btn.addEventListener("click",(e)=>{

e.preventDefault();

alert("Live Demo Coming Soon 🚀");

});

});



const projectCount = document.getElementById("projectCount");

if(projectCount){

projectCount.innerText=

document.querySelectorAll(".project-card").length;

}




const modal=document.getElementById("imgModal");

const modalImg=document.getElementById("modalImg");

document.querySelectorAll(".project-card img").forEach(img=>{

img.onclick=()=>{

if(!modal || !modalImg) return;

modal.style.display="flex";

modalImg.src=img.src;

};

});

if(modal){

modal.onclick=()=>{

modal.style.display="none";

};

}





const certificateModal=document.getElementById("certificateModal");

const certificateImg=document.getElementById("certificateImg");

document.querySelectorAll(".certificate-card img").forEach(img=>{

img.onclick=()=>{

if(!certificateModal || !certificateImg) return;

certificateModal.style.display="flex";

certificateImg.src=img.src;

};

});

if(certificateModal){

certificateModal.onclick=()=>{

certificateModal.style.display="none";

};

}





const testimonials=document.querySelectorAll(".testimonial");

let index=0;

setInterval(()=>{

if(testimonials.length>0){



}

index++;

if(index>=testimonials.length){

index=0;

}

if(testimonials.length>0){



}testimonials[index].classList.add("active");

},3000);





const copyBtn=document.getElementById("copyEmail");

if(copyBtn){

copyBtn.onclick=()=>{

navigator.clipboard.writeText(

"nitesh933438@gmail.com"

);

showToast("Email Copied Successfully");

};

}




function showToast(message){

const toast=document.getElementById("toast");

if(!toast) return;

toast.innerText=message;

toast.style.display="block";

setTimeout(()=>{

toast.style.display="none";

},3000);

}



if(typeof particlesJS!=="undefined"){


particlesJS("particles-js",{

particles:{
number:{value:80},

color:{value:"#38bdf8"},

shape:{type:"circle"},

opacity:{value:0.5},

size:{value:3},

move:{enable:true,speed:2}

}

});
}




const cursor=document.querySelector(".cursor");

document.addEventListener("mousemove",e=>{

cursor.style.left=e.clientX+"px";

cursor.style.top=e.clientY+"px";

});







let visits=localStorage.getItem("visitCount");

visits=visits?parseInt(visits)+1:1;

localStorage.setItem("visitCount",visits);







const visitor=document.getElementById("visitor");

if(visitor){

visitor.innerText=visits;

}






window.addEventListener("load",()=>{

showToast("Welcome To My Portfolio 🚀");

});




document.querySelectorAll(".skillCount").forEach(item=>{

let target=+item.dataset.target;

let count=0;

let timer=setInterval(()=>{

count++;

item.innerHTML=count+"%";

if(count>=target){

clearInterval(timer);

}

},20);

});





document.getElementById("year").innerText=

new Date().getFullYear();





const sendBtn=document.getElementById("sendBtn");

if(sendBtn){

sendBtn.onclick=()=>{

// code

};

}






if("serviceWorker" in navigator && /^https?:$/.test(window.location.protocol)){

navigator.serviceWorker.register("service-worker.js").catch(()=>{});

}




let total=localStorage.getItem("totalVisitors");

total=total?parseInt(total)+1:1;

localStorage.setItem("totalVisitors",total);

console.log(total);




const language=document.getElementById("language");

if(language){

language.onchange=(e)=>{



}

}





const shareBtn=document.getElementById("shareBtn");

if(shareBtn){

shareBtn.onclick=()=>{

navigator.share({
title: "Portfolio",
url: window.location.href
});

}

}






if(window.matchMedia("(prefers-color-scheme: dark)").matches){

document.body.classList.add("dark");

}




window.addEventListener("load",()=>{
showToast("Welcome To My Portfolio 🚀");
});



const device=

window.innerWidth<768

?

"Mobile"

:

"Desktop";

console.log(device);



const lastUpdate = document.getElementById("lastUpdate");

if(lastUpdate){

lastUpdate.innerHTML=

document.lastModified;

}



window.addEventListener("load",()=>{

});





// Greeting

const greeting =
document.getElementById("greeting");

if(greeting){

const hour =
new Date().getHours();

let text="Hello";

if(hour<12){
text="Good Morning";
}
else if(hour<18){
text="Good Afternoon";
}
else{
text="Good Evening";
}

greeting.innerText=text;

}

// Clock

function updateClock(){

const now=new Date();

document.getElementById("clock").innerText=
now.toLocaleTimeString();

}

setInterval(updateClock,1000);

updateClock();

document.getElementById("year")
.innerText=
new Date().getFullYear();





window.addEventListener("scroll",()=>{

let scrollTop =
document.documentElement.scrollTop;

let scrollHeight =
document.documentElement.scrollHeight -
document.documentElement.clientHeight;

let progress =
(scrollTop/scrollHeight)*100;

document.getElementById(
"progress-bar"
).style.width =
progress + "%";

});



const menuBtn =
document.querySelector(".menu-btn");

const navLinks =
document.querySelector(".nav-links");

if(menuBtn){

menuBtn.addEventListener("click",()=>{

navLinks.classList.toggle(
"active"
);

});

}






const certBtns =
document.querySelectorAll(".view-certificate");

const certModal =
document.getElementById("certificateModal");

const certImg =
document.getElementById("certificateImg");

const closeCertificate =
document.getElementById("closeCertificate");

certBtns.forEach(btn=>{

btn.addEventListener("click",()=>{

if(!certModal || !certImg) return;

certModal.style.display="flex";

certImg.src=
btn.getAttribute("data-img");

});

});

if(closeCertificate && certModal){

closeCertificate.addEventListener("click",()=>{

certModal.style.display="none";

});

}

window.addEventListener("click",(e)=>{

if(e.target===certModal){

certModal.style.display="none";

}

});





const resumeBtn =
document.getElementById("resumeBtn");

const resumeModal =
document.getElementById("resumeModal");

const closeResume =
document.getElementById("closeResume");

if(resumeBtn){

resumeBtn.onclick=()=>{

if(!resumeModal) return;

resumeModal.style.display="flex";

};

}

if(closeResume){

closeResume.onclick=()=>{

resumeModal.style.display="none";

};

}





