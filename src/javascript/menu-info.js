// the open menu
let open = document.querySelector(".hamburger")
open.style.display = "none"
let openBtn = () => {
    if (open.style.display === "none") {
        open.style.display = "block"
    } else {
        open.style.display = "none"
    }
}
let closeBtn = () => {
    if (open.style.display === "block") {
        open.style.display = "none"
    } else {
        open.style.display = "block"
    }
}
// ==========================

let menu1 = document.querySelector(".menu1")
let menu2 = document.querySelector(".menu2")
let menu3 = document.querySelector(".menu3")
let menu4 = document.querySelector(".menu4")
let menu5 = document.querySelector(".menu5")
let menu6 = document.querySelector(".menu6")
// =========================== now making the menus none
menu1.style.display = "none"
menu2.style.display = "none"
menu3.style.display = "none"
menu4.style.display = "none"
menu5.style.display = "none"
menu6.style.display = "none"
// ================================= now the conditions ========
