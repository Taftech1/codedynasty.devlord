// let opener = document.getElementById('mobile-menu')
// let container = document.querySelector('.nav-links')

// let closer = document.getElementById("close-nav")

// opener.addEvenlistener('click', display)
// function display (){
//     container.style.display = "block"
//     container.style.animation = "SlideIn 1s ease-in-out"
//     }



    // //////////////////


    let opener = document.getElementById("mobile-menu");
    let container = document.querySelector(".nav-links");
    //////
    let closer = document.getElementById("close");

    opener.addEventListener("click", display);
    function display() {
    container.style.display = "block";
    container.style.animation = " SlideIn  1s ease-in-out";
    opener.style.display = "none";
        closer.style.display = "block";
    
}
    



  closer.addEventListener("click", disable);     function disable() {
      container.style.display = "none";
      closer.style.display = "none";
      opener.style.display = "block";
   }