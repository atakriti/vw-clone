let fText1 = document.querySelector(".floatedText1")
let fText2 = document.querySelector(".floatedText2")
fText1.style.display = "block";
fText2.style.display = "block";
// highlight =================
let iX1 = () => {
    if (fText1.style.display === "block") {
        fText1.style.display = "none"
    } else {
        fText1.style.display = "block"
    }
}
let iX2 = () => {
    if (fText2.style.display === "block") {
        fText2.style.display = "none"
    } else {
        fText2.style.display = "block"
    }
}
// angebote ===================
let imgText = document.querySelector(".img-text")
imgText.style.display = "block"
let iX3 = () => {
    if (imgText.style.display === "block") {
        imgText.style.display = "none"
    } else {
        imgText.style.display = "block"
    }
}