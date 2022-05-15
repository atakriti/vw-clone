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
// =================== up down arraw ==================
let text1 = document.querySelector(".text1")
let text2 = document.querySelector(".text2")
let text3 = document.querySelector(".text3")
let arrowUp1 = document.querySelector(".fa-angle-up")
let arrowUp2 = document.querySelector(".up2")
let arrowUp3 = document.querySelector(".up3")
let arrowDown1 = document.querySelector(".fa-angle-down")
let arrowDown2 = document.querySelector(".down2")
let arrowDown3 = document.querySelector(".down3")
arrowDown1.style.display = "block"
arrowUp1.style.display = "none"
text1.style.height = "4vw"
text2.style.height = "4vw"
text3.style.height = "4vw"
// ================== pic 1==========
let down1 = () => {
    if (text1.style.height === "4vw") {
        setTimeout(() => (text1.style.height = "7vw"), 500)
        text1.style.animationName = "down1"
        text1.style.animationDuration = "2s"
        arrowDown1.style.display = "none"
        arrowUp1.style.display = "block"
        arrowUp1.style.backgroundColor = "rgb(34, 20, 124)"
        arrowUp1.style.color = "white"

    } else {
        text1.style.height = "4vw"
        arrowDown1.style.display = "block"
        arrowUp1.style.display = "none"
    }
}
let up1 = () => {
    if (text1.style.height === "7vw") {
        setTimeout(() => (text1.style.height = "4vw"), 500)
        text1.style.animationName = "up1"
        text1.style.animationDuration = "2s"
        arrowDown1.style.display = "block"
        arrowUp1.style.display = "none"
        
    } else {
        text1.style.height = "7vw"
        arrowDown1.style.display = "none"
        arrowUp1.style.display = "block"
    }
}
// =============== pic 2=============
// =============================
let down2 = () => {
    if (text2.style.height === "4vw") {
        setTimeout(() => (text2.style.height = "10vw"), 500)
        text2.style.animationName = "down2"
        text2.style.animationDuration = "2s"
        arrowDown2.style.display = "none"
        arrowUp2.style.display = "block"
        arrowUp2.style.backgroundColor = "rgb(34, 20, 124)"
        arrowUp2.style.color = "white"

    } else {
        text2.style.height = "4vw"
        arrowDown2.style.display = "block"
        arrowUp2.style.display = "none"
    }
}
let up2 = () => {
    if (text2.style.height === "10vw") {
        setTimeout(() => (text2.style.height = "4vw"), 500)
        text2.style.animationName = "up2"
        text2.style.animationDuration = "2s"
        arrowDown2.style.display = "block"
        arrowUp2.style.display = "none"
    } else {
        text2.style.height = "10vw"
        arrowDown2.style.display = "none"
        arrowUp2.style.display = "block"
    }
}
// ================= pic3 ===========
let down3 = () => {
    if (text3.style.height === "4vw") {
        setTimeout(() => (text3.style.height = "12vw"), 500)
        text3.style.animationName = "down3"
        text3.style.animationDuration = "2s"
        arrowDown3.style.display = "none"
        arrowUp3.style.display = "block"
        arrowUp3.style.backgroundColor = "rgb(34, 20, 124)"
        arrowUp3.style.color = "white"

    } else {
        text3.style.height = "4vw"
        arrowDown3.style.display = "block"
        arrowUp3.style.display = "none"
    }
}
let up3 = () => {
    if (text3.style.height === "12vw") {
        setTimeout(() => (text3.style.height = "4vw"), 500)
        text3.style.animationName = "up3"
        text3.style.animationDuration = "2s"
        arrowDown3.style.display = "block"
        arrowUp3.style.display = "none"
    } else {
        text3.style.height = "12vw"
        arrowDown3.style.display = "none"
        arrowUp3.style.display = "block"
    }
}