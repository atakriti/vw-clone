// the open menu
let open = document.querySelector(".hamburger");
open.style.display = "none";
let openBtn = () => {
  if (open.style.display === "none") {
      open.style.display = "block";
      ulCon.style.display = "block"
      ulLinks.style.display = "block"
  } else {
    open.style.display = "none";
  }
};
let closeBtn = () => {
  if (open.style.display === "block") {
      open.style.display = "none";
      menu1.style.display = "none";
menu2.style.display = "none";
menu3.style.display = "none";
menu4.style.display = "none";
menu5.style.display = "none";
menu6.style.display = "none";
  } else {
    open.style.display = "block";
  }
};
// ==========================

let menu1 = document.querySelector(".menu1");
let menu2 = document.querySelector(".menu2");
let menu3 = document.querySelector(".menu3");
let menu4 = document.querySelector(".menu4");
let menu5 = document.querySelector(".menu5");
let menu6 = document.querySelector(".menu6");
let ulCon = document.querySelector(".container");
let ulLinks = document.querySelector(".ul-links");
// =========================== now making the menus none
menu1.style.display = "none";
menu2.style.display = "none";
menu3.style.display = "none";
menu4.style.display = "none";
menu5.style.display = "none";
menu6.style.display = "none";
ulCon.style.display = "block";
ulLinks.style.display = "block";
// ================================= now the conditions ========
let list1 = () => {
  if (menu1.style.display === "none") {
    menu1.style.display = "block";
    menu2.style.display = "none";
    menu3.style.display = "none";
    menu4.style.display = "none";
    menu5.style.display = "none";
    menu6.style.display = "none";
        ulCon.style.display = "none"
    ulLinks.style.display = "none"
  } else {
    menu1.style.display = "none";
    // ulCon.style.display = "block"
    // ulLinks.style.display = "block"
  }
};
let list2 = () => {
  if (menu2.style.display === "none") {
    menu2.style.display = "block";
    menu1.style.display = "none";
    menu3.style.display = "none";
    menu4.style.display = "none";
    menu5.style.display = "none";
    menu6.style.display = "none";
        ulCon.style.display = "none"
    ulLinks.style.display = "none"
  } else {
    menu2.style.display = "none";
    // ulCon.style.display = "block"
    // ulLinks.style.display = "block"
  }
};
let list3 = () => {
  if (menu3.style.display === "none") {
    menu3.style.display = "block";
    menu1.style.display = "none";
    menu2.style.display = "none";
    menu4.style.display = "none";
    menu5.style.display = "none";
    menu6.style.display = "none";
        ulCon.style.display = "none"
    ulLinks.style.display = "none"
  } else {
    menu3.style.display = "none";
    // ulCon.style.display = "block"
    // ulLinks.style.display = "block"
  }
};
let list4 = () => {
  if (menu4.style.display === "none") {
    menu4.style.display = "block";
    menu1.style.display = "none";
    menu2.style.display = "none";
    menu3.style.display = "none";
    menu5.style.display = "none";
    menu6.style.display = "none";
        ulCon.style.display = "none"
    ulLinks.style.display = "none"
  } else {
    menu4.style.display = "none";
    // ulCon.style.display = "block"
    // ulLinks.style.display = "block"
  }
};
let list5 = () => {
  if (menu5.style.display === "none") {
    menu5.style.display = "block";
    menu1.style.display = "none";
    menu2.style.display = "none";
    menu3.style.display = "none";
    menu4.style.display = "none";
    menu6.style.display = "none";
        ulCon.style.display = "none"
    ulLinks.style.display = "none"
  } else {
    menu5.style.display = "none";
    // ulCon.style.display = "block"
    // ulLinks.style.display = "block"
  }
};
let list6 = () => {
  if (menu6.style.display === "none") {
    menu6.style.display = "block";
    menu1.style.display = "none";
    menu2.style.display = "none";
    menu3.style.display = "none";
    menu4.style.display = "none";
    menu5.style.display = "none";
        ulCon.style.display = "none"
    ulLinks.style.display = "none"
  } else {
    menu6.style.display = "none";
    // ulCon.style.display = "block"
    // ulLinks.style.display = "block"
  }
};
//  ========================== BackBtn ========
let back1= () => {
    if (menu1.style.display === "block") {
        menu1.style.display = "none"
         ulCon.style.display = "block"
    ulLinks.style.display = "block"
    } else {
        menu1.style.display = "block"
        
    }
}
let back2 = () => {
    if (menu2.style.display === "block") {
        menu2.style.display = "none"
        ulCon.style.display = "block"
        ulLinks.style.display = "block"
    } else {
        menu2.style.display = "block"
        
    }
}
let back3 = () => {
    if (menu3.style.display === "block") {
        menu3.style.display = "none"
        ulCon.style.display = "block"
        ulLinks.style.display = "block"
    } else {
        menu3.style.display = "block"
        
    }
}
let back4 = () => {
    if (menu4.style.display === "block") {
        menu4.style.display = "none"
        ulCon.style.display = "block"
        ulLinks.style.display = "block"
    } else {
        menu4.style.display = "block"
        
    }
}
let back5 = () => {
    if (menu5.style.display === "block") {
        menu5.style.display = "none"
        ulCon.style.display = "block"
        ulLinks.style.display = "block"
    } else {
        menu5.style.display = "block"
        
    }
}
let back6 = () => {
    if (menu6.style.display === "block") {
        menu6.style.display = "none"
        ulCon.style.display = "block"
        ulLinks.style.display = "block"
    } else {
        menu6.style.display = "block"
        
    }
}