const textLink= document.querySelector("#textLink");
const imageLink= document.querySelector("#imageLink");
const videoLink= document.querySelector("#videoLink");
const tableLink= document.querySelector("#tableLink");
const emailLink= document.querySelector("#emailLink")

textLink.addEventListener("mouseover", function() {
    textLink.style.textDecoration = "underline";
});
if(document.title != "Text"){
    textLink.addEventListener("mouseout", function() {
        textLink.style.textDecoration = "none";
    });
}

imageLink.addEventListener("mouseover", function() {
    imageLink.style.textDecoration = "underline";
});
if(document.title != "Image"){
    imageLink.addEventListener("mouseout", function() {
        imageLink.style.textDecoration = "none";
    });
}

videoLink.addEventListener("mouseover", function() {
    videoLink.style.textDecoration = "underline";
});
if(document.title != "Video"){
    videoLink.addEventListener("mouseout", function() {
        videoLink.style.textDecoration = "none";
    });
}

tableLink.addEventListener("mouseover", function() {
    tableLink.style.textDecoration = "underline";
});
if(document.title != "Table"){
    tableLink.addEventListener("mouseout", function() {
        tableLink.style.textDecoration = "none";
    });
}

emailLink.addEventListener("mouseover", function() {
    emailLink.style.textDecoration = "underline";
});
if(document.title != "Email"){
    emailLink.addEventListener("mouseout", function() {
        emailLink.style.textDecoration = "none";
    });
}

if(document.title == "Text") {
    textLink.style.textDecoration = "underline";
}

if(document.title == "Image") {
    imageLink.style.textDecoration = "underline";
}

if(document.title == "Video") {
    videoLink.style.textDecoration = "underline";
}

if(document.title == "Table") {
    tableLink.style.textDecoration = "underline";
}

if(document.title == "Email") {
    emailLink.style.textDecoration = "underline";
}

function validate() {
    var email = document.getElementById("address").value;
    if(email.includes("@") && (email.endsWith(".com") || email.endsWith(".edu"))){
        document.querySelector("#response").innerHTML = "Email successfully recorded";
    }
    else{
        document.querySelector("#response").innerHTML = "Invalid email address";
    }
}

mybutton = document.getElementById("myBtn");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}