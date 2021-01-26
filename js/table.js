const textLink= document.querySelector("#textLink");
const imageLink= document.querySelector("#imageLink");
const videoLink= document.querySelector("#videoLink");
const tableLink= document.querySelector("#tableLink");
const emailLink= document.querySelector("#emailLink")

tableLink.style.textDecoration = "underline";

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

videoLink.addEventListener("mouseover", function() {
    videoLink.style.textDecoration = "underline";
});

videoLink.addEventListener("mouseout", function() {
    videoLink.style.textDecoration = "none";
});

emailLink.addEventListener("mouseover", function() {
    emailLink.style.textDecoration = "underline";
});

emailLink.addEventListener("mouseout", function() {
    emailLink.style.textDecoration = "none";
});