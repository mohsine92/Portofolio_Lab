//Hamburger menu 

function toggleMenu() {

    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");

}



//O'Clock

document.addEventListener("DOMContentLoaded", function () {
    // Initialisez AOS
    AOS.init({
      once: true, // Animation ne se reproduit qu'une fois
    });
  });
  

  function showTime(){
    var date = new Date();
    var h = date.getHours(); // 0 - 23
    var m = date.getMinutes(); // 0 - 59
    var s = date.getSeconds(); // 0 - 59
    var session = "AM";
    
    if(h == 0){
        h = 12;
    }
    
    if(h > 12){
        h = h - 12;
        session = "PM";
    }
    
    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;
    
    var time = h + ":" + m + ":" + s + " " + session;
    
    document.getElementById("MyClockDisplay").innerText = time;
    document.getElementById("MyClockDisplay").textContent = time;
    
    setTimeout(showTime, 1000);
    
}

showTime();





let image = document.querySelectorAll('.image');
function showImage(e) {
  for(var i = 0; i < image.length; i++){
    x = e.pageX;
    y = e.pageY;
image[i].style.transform = `translate(${x}px, ${y}px)`;

  }
}
document.addEventListener('mousemove', showImage);






      
      // use a script tag or an external JS file
      document.addEventListener("DOMContentLoaded", (event) => {
       gsap.registerPlugin(ScrollTrigger)

     
      gsap.to(" .slides", {
        scrollTrigger: ".slides",
        y: 60,
        rotation: 360,
        duration: 2,
      });

      gsap.to(" .icon", {
        scrollTrigger: ".icon",
        rotation: 360,
        duration: 2,
      });


      gsap.to(" #contact", {
        scrollTrigger: "#contact",
        y: 10,
        duration: 1,
      });


      gsap.to(" #about-me", {
        scrollTrigger: "#about-me",
        duration: 1,
        opacity: 1,
      });

   
      gsap.to(" #about-me h1", {
        scrollTrigger: "#about-me h1",
        y: 5,
        duration: 2,
        opacity: 1,
      });



      gsap.to(" #contact", {
        scrollTrigger: "#contact",
        duration: 2,
        opacity: 1,
      });


      gsap.from(" .contact-info-upper-container", {
        x: -360,
      });

      gsap.to(" .contact-info-upper-container", {
        scrollTrigger: ".contact-info-upper-container",
        duration: 1,
        x: 0,
      });

      gsap.from(" .details-container2", {
        x: -360,
      });

      gsap.to(" .details-container2", {
        scrollTrigger: ".details-container2",
        duration: 1,
        x: 0,
      });





      gsap.to(" .image-point", {
        scrollTrigger: ".image-point",
        duration: 2,
        opacity: 1,
      });


      gsap.to(" #hobies-phone", {
        scrollTrigger: "#hobies-phone",
        duration: 2,
        opacity: 1,
      });


            });
