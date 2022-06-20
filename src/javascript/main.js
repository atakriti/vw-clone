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
text1.style.height = "10%"
text2.style.height = "10%"
text3.style.height = "12%"
// ================== pic 1==========
let down1 = () => {
    if (text1.style.height === "10%") {
        setTimeout(() => (text1.style.height = "29%"), 500)
        text1.style.animationName = "down1"
        text1.style.animationDuration = "2s"
        arrowDown1.style.display = "none"
        arrowUp1.style.display = "block"
        arrowUp1.style.backgroundColor = "rgb(34, 20, 124)"
        arrowUp1.style.color = "white"

    } else {
        text1.style.height = "10%"
        arrowDown1.style.display = "block"
        arrowUp1.style.display = "none"
    }
}
let up1 = () => {
    if (text1.style.height === "29%") {
        setTimeout(() => (text1.style.height = "10%"), 500)
        text1.style.animationName = "up1"
        text1.style.animationDuration = "2s"
        arrowDown1.style.display = "block"
        arrowUp1.style.display = "none"
        
    } else {
        text1.style.height = "29%"
        arrowDown1.style.display = "none"
        arrowUp1.style.display = "block"
    }
}
// =============== pic 2=============
// =============================
let down2 = () => {
    if (text2.style.height === "10%") {
        setTimeout(() => (text2.style.height = "37%"), 500)
        text2.style.animationName = "down2"
        text2.style.animationDuration = "2s"
        arrowDown2.style.display = "none"
        arrowUp2.style.display = "block"
        arrowUp2.style.backgroundColor = "rgb(34, 20, 124)"
        arrowUp2.style.color = "white"

    } else {
        text2.style.height = "10%"
        arrowDown2.style.display = "block"
        arrowUp2.style.display = "none"
    }
}
let up2 = () => {
    if (text2.style.height === "37%") {
        setTimeout(() => (text2.style.height = "10%"), 500)
        text2.style.animationName = "up2"
        text2.style.animationDuration = "2s"
        arrowDown2.style.display = "block"
        arrowUp2.style.display = "none"
    } else {
        text2.style.height = "37%"
        arrowDown2.style.display = "none"
        arrowUp2.style.display = "block"
    }
}
// ================= pic3 ===========
let down3 = () => {
    if (text3.style.height === "12%") {
        setTimeout(() => (text3.style.height = "45%"), 500)
        text3.style.animationName = "down3"
        text3.style.animationDuration = "2s"
        arrowDown3.style.display = "none"
        arrowUp3.style.display = "block"
        arrowUp3.style.backgroundColor = "rgb(34, 20, 124)"
        arrowUp3.style.color = "white"

    } else {
        text3.style.height = "12%"
        arrowDown3.style.display = "block"
        arrowUp3.style.display = "none"
    }
}
let up3 = () => {
    if (text3.style.height === "45%") {
        setTimeout(() => (text3.style.height = "12%"), 500)
        text3.style.animationName = "up3"
        text3.style.animationDuration = "2s"
        arrowDown3.style.display = "block"
        arrowUp3.style.display = "none"
    } else {
        text3.style.height = "45%"
        arrowDown3.style.display = "none"
        arrowUp3.style.display = "block"
    }
}

// ========================= NeuigKeiten ====================
let textNeuig1 = document.querySelector(".img-text1")
let textNeuig2 = document.querySelector(".img-text2")
let textNeuig3 = document.querySelector(".img-text3")
textNeuig1.style.display = "block"
textNeuig2.style.display = "block"
textNeuig3.style.display = "block"
let iX4 = () => {
    if (textNeuig1.style.display === "block") {
        textNeuig1.style.display = "none"
    } else {
        textNeuig1.style.display = "block"
    }
}
let iX5 = () => {
    if (textNeuig2.style.display === "block") {
        textNeuig2.style.display = "none"
    } else {
        textNeuig2.style.display = "block"
    }
}
let iX6 = () => {
    if (textNeuig3.style.display === "block") {
        textNeuig3.style.display = "none"
    } else {
        textNeuig3.style.display = "block"
    }
}
// ============================================
document.body.style.zoom = 1
document.body.addEventListener("keydown", (s) => {
        // s.preventDefault()
        if (s.ctrlKey &&  s.key == "+") {
            document.body.style.zoom++
        } else if (s.ctrlKey && s.key == "-") {
            document.body.style.zoom--
        }
    })