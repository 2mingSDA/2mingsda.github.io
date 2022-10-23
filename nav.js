let toggleNavStatus = false;

let toggleNav = function(){

    let getTopNavLinks = document.querySelectorAll(".topNav li");
    let arrayLength = getTopNavLinks.length;
    var x = document.getElementById("togglez");

    if (toggleNavStatus === false) {

        for (let i = 0; i < arrayLength; i++){
            getTopNavLinks[i].style.visibility = "visible";
            getTopNavLinks[i].style.height = "60px";
        }
        
        toggleNavStatus = true;
        x.className = "closeToggle";
    }

    else if (toggleNavStatus === true) {

        for (let i = 0; i < arrayLength; i++){
            getTopNavLinks[i].style.visibility = "hidden";
            getTopNavLinks[i].style.height = "0px";
        }
        
        toggleNavStatus = false;
        x.className = "toggle";
    }
}
