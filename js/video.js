const textLink= document.querySelector("#textLink");
const imageLink= document.querySelector("#imageLink");
const videoLink= document.querySelector("#videoLink");
const tableLink= document.querySelector("#tableLink");
const emailLink= document.querySelector("#emailLink")

videoLink.style.textDecoration = "underline";

textLink.addEventListener("mouseover", function() {
    textLink.style.textDecoration = "underline";
});

textLink.addEventListener("mouseout", function() {
    textLink.style.textDecoration = "none";
});

imageLink.addEventListener("mouseover", function() {
    imageLink.style.textDecoration = "underline";
});

imageLink.addEventListener("mouseout", function() {
    imageLink.style.textDecoration = "none";
});

tableLink.addEventListener("mouseover", function() {
    tableLink.style.textDecoration = "underline";
});

tableLink.addEventListener("mouseout", function() {
    tableLink.style.textDecoration = "none";
});

emailLink.addEventListener("mouseover", function() {
    emailLink.style.textDecoration = "underline";
});

emailLink.addEventListener("mouseout", function() {
    emailLink.style.textDecoration = "none";
});

var modal = document.getElementById("myModal");

var vid1 = document.getElementById("vid1");
var modalVid = document.getElementById("vid01");
vid1.onclick = function(){
  event.preventDefault();  
  modal.style.display = "block";
  modalVid.src = this.children[0].src;
}

var vid2 = document.getElementById("vid2");
vid2.onclick = function(){
    event.preventDefault();  
    modal.style.display = "block";
    modalVid.src = this.children[0].src;
}

var vid3 = document.getElementById("vid3");
vid3.onclick = function(){
    event.preventDefault();  
    modal.style.display = "block";
    modalVid.src = this.children[0].src;
}


var span = document.getElementsByClassName("close")[0];

span.onclick = function() {
  modal.style.display = "none";
}