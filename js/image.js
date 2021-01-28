const textLink= document.querySelector("#textLink");
const imageLink= document.querySelector("#imageLink");
const videoLink= document.querySelector("#videoLink");
const tableLink= document.querySelector("#tableLink");
const emailLink= document.querySelector("#emailLink")

imageLink.style.textDecoration = "underline";

textLink.addEventListener("mouseover", function() {
    textLink.style.textDecoration = "underline";
});

textLink.addEventListener("mouseout", function() {
    textLink.style.textDecoration = "none";
});

videoLink.addEventListener("mouseover", function() {
    videoLink.style.textDecoration = "underline";
});

videoLink.addEventListener("mouseout", function() {
    videoLink.style.textDecoration = "none";
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

var img1 = document.getElementById("img1");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
img1.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}

var img2 = document.getElementById("img2");
img2.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}

var img3 = document.getElementById("img3");
img3.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}

var img4 = document.getElementById("img4");

img4.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}

var img5 = document.getElementById("img5");

img5.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}

var img6 = document.getElementById("img6");

img6.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}

var span = document.getElementsByClassName("close")[0];

span.onclick = function() {
  modal.style.display = "none";
}