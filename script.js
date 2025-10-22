// Typing Effect
const texts = ["Frontend Developer","Creative Coder","Passionate Learner"];
let count=0,index=0,currentText="",letter="";
(function type(){
    if(count===texts.length) count=0;
    currentText=texts[count];
    letter=currentText.slice(0,++index);
    document.querySelector(".typing").textContent=letter;
    if(letter.length===currentText.length){
        count++; index=0; setTimeout(type,1000);
    } else { setTimeout(type,200);}
})();


const toggle=document.querySelector(".theme-toggle");
toggle.addEventListener("click",()=>{
    document.body.classList.toggle("dark");
    toggle.textContent=document.body.classList.contains("dark")?"☀️":"🌙";
});


window.addEventListener("scroll",()=>{
    const skills=document.querySelectorAll(".fill");
    const triggerBottom=window.innerHeight/5*4;
    skills.forEach(skill=>{
        const skillTop=skill.getBoundingClientRect().top;
        if(skillTop<triggerBottom){
            skill.style.width=skill.dataset.width;
        }
    });
});


document.querySelectorAll("nav ul li a").forEach(link=>{
    link.addEventListener("click",(e)=>{
        e.preventDefault();
        document.querySelector(link.getAttribute("href")).scrollIntoView({behavior:"smooth"});
    });
});


const form=document.getElementById("contactForm");
form.addEventListener("submit",e=>{
    e.preventDefault();
    alert("Message Sent! I will contact you soon.");
    form.reset();
});


const projectCards=document.querySelectorAll(".project-card");
const modals=document.querySelectorAll(".modal");
