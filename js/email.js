const textLink= document.querySelector("#textLink");
const imageLink= document.querySelector("#imageLink");
const videoLink= document.querySelector("#videoLink");
const tableLink= document.querySelector("#tableLink");
const emailLink= document.querySelector("#emailLink")

emailLink.style.textDecoration = "underline";

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

tableLink.addEventListener("mouseover", function() {
    tableLink.style.textDecoration = "underline";
});

tableLink.addEventListener("mouseout", function() {
    tableLink.style.textDecoration = "none";
});

function validate() {
    var email = document.getElementById("address").value;
    if(email.includes("@") && (email.endsWith(".com") || email.endsWith(".edu"))){
        document.querySelector("#response").innerHTML = "Email successfully recorded";
    }
    else{
        document.querySelector("#response").innerHTML = "Invalid email address";
    }
}