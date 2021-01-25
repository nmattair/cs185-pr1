const textLink= document.querySelector("#textLink");
const imageLink= document.querySelector("#imageLink");
const videoLink= document.querySelector("#videoLink");
const tableLink= document.querySelector("#tableLink");

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