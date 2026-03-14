function showSection(sectionId){

let sections=document.querySelectorAll(".section");

sections.forEach(function(section){
section.classList.remove("active");
});

document.getElementById(sectionId).classList.add("active");

}

let profile=document.getElementById("profilePic");
let popup=document.getElementById("imagePopup");
let popupImg=document.getElementById("popupImg");
let closeBtn=document.querySelector(".close");

profile.onclick=function(){

popup.style.display="block";
popupImg.src=this.src;

}

closeBtn.onclick=function(){

popup.style.display="none";

}