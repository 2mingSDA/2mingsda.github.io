let toggleNavStatus = false;

let toggleNav = function(){

    let getTopNav = document.querySelector(".topNav");
    let getTopNavLinks = document.querySelectorAll(".topNav li");
    let arrayLength = getTopNavLinks.length;
    var x = document.getElementById("togglez");

    if (toggleNavStatus === false) {

        for (let i = 0; i < arrayLength; i++){
            getTopNavLinks[i].style.visibility = "visible";
        }
        getTopNav.style.height = "60px";
        
        toggleNavStatus = true;
        x.className = "closeToggle";
    }

    else if (toggleNavStatus === true) {

        for (let i = 0; i < arrayLength; i++){
            getTopNavLinks[i].style.visibility = "hidden";
        }
        getTopNav.style.height = "0px";
        
        toggleNavStatus = false;
        x.className = "toggle";
    }
}




/*let toggleNavStatus = false;

let toggleNav = function() {
    let getToggleNav = document.querySelector(".toggleNav");
    let getToggle = document.querySelector(".toggle");
    let getToggleHover = document.querySelector(".toggle:hover");
    let getCloseToggleNav = document.querySelector(".closeToggleNav");
    let getCloseToggle = document.querySelector(".closeToggle");
    let getCloseToggleHover = document.querySelector(".closeToggle:hover");

    let getTopNav = document.querySelector(".topNav");
    let getTopNavUl = document.querySelector(".topNav ul");
    let getTopNavLinks = document.querySelectorAll(".topNav li");

    if (toggleNavStatus === false) {
    getToggleNav.style.height = "0px";
    getToggle.style.height = "0px";
    getCloseToggleNav.style.height = "60px";
    getCloseToggle.style.height = "60px";

    getTopNav.style.height = "60px";

    let arrayLength = getTopNavLinks.length;

    for (let i = 0; i < arrayLength; i++){
        getTopNavLinks[i].style.visibility = "visible";
    }

    toggleNavStatus = true;
    }
    
    else if (toggleNavStatus === true) {
    getToggleNav.style.height = "60px";
    getToggle.style.height = "60px";
    getCloseToggleNav.style.height = "0px";
    getCloseToggle.style.height = "0px";

    getTopNav.style.height = "0px";

    let arrayLength = getTopNavLinks.length;

    for (let i = 0; i < arrayLength; i++){
        getTopNavLinks[i].style.visibility = "hidden";
    }

    toggleNavStatus = false;
    }
}
*/
