// the open menu
let open = document.querySelector(".hamburger");
open.style.display = "none";
let openBtn = () => {
  if (open.style.display === "none") {
      setTimeout(() => (open.style.display = "block"), 100)
      open.style.animationName = "open"
      open.style.animationDuration = "2s"
    //   ======
      ulCon.style.display = "block"
      ulLinks.style.display = "block"
  } else {
      open.style.display = "none"
      
  }
};
let closeBtn = () => {
  if (open.style.display === "block") {
      setTimeout(() => (open.style.display = "none"), 1500)
      open.style.animationName = "close"
      open.style.animationDuration = "2s"
    //   ========
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
      setTimeout(() => (menu1.style.display = "block"), 100)
      menu1.style.animationName = "listOpen"
      menu1.style.animationDuration = "2s"
    //   =========
    menu2.style.display = "none";
    menu3.style.display = "none";
    menu4.style.display = "none";
    menu5.style.display = "none";
      menu6.style.display = "none";
      setTimeout(() => (ulCon.style.display = "none"), 800)
      setTimeout(() => (ulLinks.style.display = "none"), 800)
    
    
  } else {
    menu1.style.display = "none";
    // ulCon.style.display = "block"
    // ulLinks.style.display = "block"
  }
};
// ========================================================================
let list2 = () => {
  if (menu2.style.display === "none") {
      setTimeout(() => (menu2.style.display = "block"), 100)
      menu2.style.animationName = "listOpen"
      menu2.style.animationDuration = "2s"
    //   =======
    menu1.style.display = "none";
    menu3.style.display = "none";
    menu4.style.display = "none";
    menu5.style.display = "none";
    menu6.style.display = "none";
    setTimeout(() => (ulCon.style.display = "none"), 800)
    setTimeout(() => (ulLinks.style.display = "none"), 800)
  } else {
    menu2.style.display = "none";
    // ulCon.style.display = "block"
    // ulLinks.style.display = "block"
  }
};
// ========================================================================
let list3 = () => {
  if (menu3.style.display === "none") {
      setTimeout(() => (menu3.style.display = "block"), 100)
      menu3.style.animationName = "listOpen"
      menu3.style.animationDuration = "2s"
    //   =======
    menu1.style.display = "none";
    menu2.style.display = "none";
    menu4.style.display = "none";
    menu5.style.display = "none";
    menu6.style.display = "none";
    setTimeout(() => (ulCon.style.display = "none"), 800)
    setTimeout(() => (ulLinks.style.display = "none"), 800)
  } else {
    menu3.style.display = "none";
    // ulCon.style.display = "block"
    // ulLinks.style.display = "block"
  }
};
// ========================================================================
let list4 = () => {
  if (menu4.style.display === "none") {
      setTimeout(() => (menu4.style.display = "block"), 100)
      menu4.style.animationName = "listOpen"
      menu4.style.animationDuration = "2s"
    //   ========
    menu1.style.display = "none";
    menu2.style.display = "none";
    menu3.style.display = "none";
    menu5.style.display = "none";
    menu6.style.display = "none";
    setTimeout(() => (ulCon.style.display = "none"), 800)
    setTimeout(() => (ulLinks.style.display = "none"), 800)
  } else {
    menu4.style.display = "none";
    // ulCon.style.display = "block"
    // ulLinks.style.display = "block"
  }
};
// ========================================================================
let list5 = () => {
  if (menu5.style.display === "none") {
      setTimeout(() => (menu5.style.display = "block"), 100)
      menu5.style.animationName = "listOpen"
      menu5.style.animationDuration = "2s"
    //   ===========
    menu1.style.display = "none";
    menu2.style.display = "none";
    menu3.style.display = "none";
    menu4.style.display = "none";
    menu6.style.display = "none";
    setTimeout(() => (ulCon.style.display = "none"), 800)
    setTimeout(() => (ulLinks.style.display = "none"), 800)
  } else {
    menu5.style.display = "none";
    // ulCon.style.display = "block"
    // ulLinks.style.display = "block"
  }
};
// ========================================================================
let list6 = () => {
  if (menu6.style.display === "none") {
      setTimeout(() => (menu6.style.display = "block"), 100)
      menu6.style.animationName = "listOpen"
      menu6.style.animationDuration = "2s"
    //   ============
    menu1.style.display = "none";
    menu2.style.display = "none";
    menu3.style.display = "none";
    menu4.style.display = "none";
    menu5.style.display = "none";
    setTimeout(() => (ulCon.style.display = "none"), 800)
    setTimeout(() => (ulLinks.style.display = "none"), 800)
  } else {
    menu6.style.display = "none";
    // ulCon.style.display = "block"
    // ulLinks.style.display = "block"
  }
};
//  ========================== BackBtn ========
let back1= () => {
    if (menu1.style.display === "block") {
        setTimeout(() => (menu1.style.display = "none"), 1200)
        menu1.style.animationName = "back"
        menu1.style.animationDuration = "2s"
        // =========
        setTimeout(() => (ulCon.style.display = "block"), 800)
    setTimeout(() => (ulLinks.style.display = "block"), 800)
    } else {
        menu1.style.display = "block"
        
    }
}
let back2 = () => {
    if (menu2.style.display === "block") {
        setTimeout(() => (menu2.style.display = "none"), 1200)
        menu2.style.animationName = "back"
        menu2.style.animationDuration = "2s"
        // ========
        setTimeout(() => (ulCon.style.display = "block"), 800)
    setTimeout(() => (ulLinks.style.display = "block"), 800)
    } else {
        menu2.style.display = "block"
        
    }
}
let back3 = () => {
    if (menu3.style.display === "block") {
        setTimeout(() => (menu3.style.display = "none"), 1200)
        menu3.style.animationName = "back"
        menu3.style.animationDuration = "2s"
        setTimeout(() => (ulCon.style.display = "block"), 800)
    setTimeout(() => (ulLinks.style.display = "block"), 800)
    } else {
        menu3.style.display = "block"
        
    }
}
let back4 = () => {
    if (menu4.style.display === "block") {
        setTimeout(() => (menu4.style.display = "none"), 1200)
        menu4.style.animationName = "back"
        menu4.style.animationDuration = "2s"
        setTimeout(() => (ulCon.style.display = "block"), 800)
    setTimeout(() => (ulLinks.style.display = "block"), 800)
    } else {
        menu4.style.display = "block"
        
    }
}
let back5 = () => {
    if (menu5.style.display === "block") {
        setTimeout(() => (menu5.style.display = "none"), 1200)
        menu5.style.animationName = "back"
        menu5.style.animationDuration = "2s"
        setTimeout(() => (ulCon.style.display = "block"), 800)
    setTimeout(() => (ulLinks.style.display = "block"), 800)
    } else {
        menu5.style.display = "block"
        
    }
}
let back6 = () => {
    if (menu6.style.display === "block") {
        setTimeout(() => (menu6.style.display = "none"), 1200)
        menu6.style.animationName = "back"
        menu6.style.animationDuration = "2s"
        setTimeout(() => (ulCon.style.display = "block"), 800)
    setTimeout(() => (ulLinks.style.display = "block"), 800)
    } else {
        menu6.style.display = "block"
        
    }
}