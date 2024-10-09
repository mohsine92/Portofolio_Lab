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
    var location ="PARIS"
    
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
    
    var time = location + " → " + h + ":" + m + ":" + s + " " + session;
    
    document.getElementById("MyClockDisplay").innerText = time;
    document.getElementById("MyClockDisplay").textContent = time;
    
    setTimeout(showTime, 1000);
    
}

showTime();





let imagee = document.querySelectorAll('  .image');
function showImage(e) {
  for(var i = 0; i < imagee.length; i++){
    x = e.pageX;
    y = e.pageY;
imagee[i].style.transform = `translate(${x}px, ${y}px)`;

  }
}
document.addEventListener('mousemove', showImage);





// Tweenmax effect for body


TweenMax.staggerFrom(
  "body, #profile ",
  1,
  {
    opacity: 0,
    duration: 10,
    ease: Expo.easeInOut,
  },
  0.04
);




      
      // use a script tag or an external JS file
      document.addEventListener("DOMContentLoaded", (event) => {
       gsap.registerPlugin(ScrollTrigger)

     


     

      gsap.to(" #about-me h2", {
        scrollTrigger: {
          trigger: "body",
          start: "top top",
          end: "bottom center",
          scrub: true,
          scrub: 1,

        },
        rotation: 1060,



      });
      

      gsap.to(".logo", {
        y: "-50%",
        scale: 0.8,
        ease: "none",
        scrollTrigger: {
          trigger: "#profile",
          start: "top top",
          end: "100vh top",
          scrub: 1.1,
        },
      });





      gsap.to("canvas", {
        y: "5%",
        scale:0.8,
        ease: "none",
        scrollTrigger: {
          trigger: "body",
          start: "top top ",
          end: "100vh top",
          scrub: 1.3,
        },
      });
    

      gsap.to(".text-wrapperr", {
        y: "-50%",
        scale: 1,
        ease: "none",
        scrollTrigger: {
          trigger: "body",
          start: "top top",
          end: "100vh top",
          scrub: 1,
        },
      });
    
    
    
      gsap.to(" #profile", {
        scrollTrigger: "#profile",
        y: -10,
        duration: 0.6,
      });

     
      gsap.to(" .slides", {
        scrollTrigger: ".slides",
        y: 60,
        duration: 2,
      });

      gsap.to(" .icon", {
        scrollTrigger: ".icon",
        rotation: 360,
        duration: 2,
      });



      gsap.to(" #contact", {
        scrollTrigger: "#contact",
        y: -80,
        duration: 1,
      });






      gsap.to(" #about-me", {
        scrollTrigger: "#about-me",
        duration: 1,
        opacity: 1,
        y: -300,
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

      gsap.to(" .details-container2 ", {
        scrollTrigger: {
          trigger: "#profile ",
          start: "bottom top " ,
          end: "bottom bottom",
          scrub: true,

        },
      scale: 1.1,
      delay:3,
      opacity:1,
        
      });


      gsap.to(" #about-me h2 ", {
        scrollTrigger: "body ",
        rotation: 360,
      });
      
      gsap.to(" #about-me h1", {
        scrollTrigger: "#about-me h1",
        duration: 3,
        y: 40,
        opacity: 1,
      });



      
      // Animation au défilement
      gsap.to(".about-me-details", {
        scrollTrigger: {
          trigger: "#about-me h1",
          start: " top top",
          end: "bottom   ",
          scrub: true,

        },
        x: 0,

        color: "black",
        scrub : 0,
        duration: 3,
        ease: "power4.inOut"
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

      gsap.set("#experience", {
        scale:0,
        height: "0%",
        width: "0%",
        x: -100,

      });
      
      // Animation au défilement
      gsap.to("#experience", {
        scrollTrigger: {
          trigger: ".image-point",
          start: "bottom bottom",
          end: "bottom  ",
          scrub: true,

        },
        x: 0,

        scale: 1.1,
        scrub : 1,
        height: "100%",
        width: "100%",
        duration: 5,
        ease: "power4.inOut"
      });




            
          
    });





            // Script pour la barre de progression du scroll
            window.addEventListener('scroll', function() {
              const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
              const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
              const scrollPercentage = (scrollTop / scrollHeight) * 100;
    
              document.getElementById('progress-bar').style.width = scrollPercentage + '%';
          });
    
          // Script pour le scroll infini
          document.addEventListener('DOMContentLoaded', function() {
              const scrollContainer = document.body;
              const content = document.querySelector('.scroll-content');
    
              // Clone the content for infinite scrolling
              const clone = content.cloneNode(true);
              scrollContainer.appendChild(clone);
    
              window.addEventListener('scroll', () => {
                  if (window.scrollY >= content.scrollHeight) {
                      window.scrollTo({
                          top:100,
                        
                          behavior: 'none' // Scroll instantly to create a seamless loop
                      });
                  }
              });
          });




          const button = document.querySelector('#image-source');
      const image = document.querySelector('#image-source');
      
      button.addEventListener('mousemove', (e) => {
          const { left, top, width, height } = button.getBoundingClientRect();
          const x = (e.clientX - left) / width - 0.5;
          const y = (e.clientY - top) / height - 0.5;
      
          const moveX = x * 200; // Ajuste la valeur pour augmenter ou diminuer le mouvement horizontal
          const moveY = y * 200; // Ajuste la valeur pour augmenter ou diminuer le mouvement vertical
      
          image.style.transform = `translate(${moveX}px, ${moveY}px)`;
      });
      
      button.addEventListener('mouseleave', () => {
          image.style.transform = 'translate(0, 0)'; // Réinitialise la position de l'image lorsqu'on quitte la zone
      });




      const buttoon = document.querySelector('#profile .btn');
      const iimage = document.querySelector('#profile .btn');
      
      buttoon.addEventListener('mousemove', (e) => {
          const { left, top, width, height } = buttoon.getBoundingClientRect();
          const x = (e.clientX - left) / width - 0.5;
          const y = (e.clientY - top) / height - 0.5;
      
          const moveX = x * 700; // Ajuste la valeur pour augmenter ou diminuer le mouvement horizontal
          const moveY = y * 700; // Ajuste la valeur pour augmenter ou diminuer le mouvement vertical
      
          iimage.style.transform = `translate(${moveX}px, ${moveY}px)`;
      });
      
      buttoon.addEventListener('mouseleave', () => {
          iimage.style.transform = 'translate(0, 0)'; // Réinitialise la position de l'image lorsqu'on quitte la zone
      });








        document.addEventListener("DOMContentLoaded", function () {
          // Créer un effet sticky avec ScrollTrigger pour la section complète
          ScrollTrigger.create({
            trigger: "#project-phone",
            start: "top top", // Commence quand le haut de la section atteint le haut de la page
            end: "bottom top", // Termine quand le bas de la section atteint le haut de la page
            pinSpacing: false // Supprime l'espacement entre le contenu épinglé et le suivant
          });
    
          // Animation pour chaque image
          gsap.utils.toArray('.project-image').forEach(function (image) {
            gsap.fromTo(image, 
              {
                opacity: 0,
                y: 20,                
              },
              {
                opacity: 1,
                y: 0,
                duration: 1,
                ease: "power3.out",
                scrollTrigger: {
                  trigger: image,
                  start: "top 80%", // Animation commence quand le haut de l'image atteint 80% de la fenêtre
                  end: "top 50%", // Animation se termine quand le haut de l'image atteint 50% de la fenêtre
                  scrub: true // Animation fluide liée au scroll
                }
              });
          });
        });





// Initialisation de la scène
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });

renderer.setSize(window.innerWidth, window.innerHeight);
document.getElementById('three-container').appendChild(renderer.domElement);

const loader = new THREE.TextureLoader();
const texture = loader.load('https://images.unsplash.com/photo-1695041678277-9395160fc70e?q=80&w=3000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D');
const material = new THREE.MeshStandardMaterial({
    map: texture,
    roughness: 50,
    metalness: 0.010,
    transparent: true,
    opacity: 1,
});

// Créer un cube avec MeshStandardMaterial pour plus de réalisme
const geometry = new THREE.BoxGeometry(2.3, 2.3, 2.3);
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

// Ajouter une lumière ambiante pour un éclairage doux
const ambientLight = new THREE.AmbientLight(0xffffff, 0.9);
scene.add(ambientLight);

// Ajouter une lumière directionnelle pour créer des ombres
const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
directionalLight.position.set(0, 0, 0);
directionalLight.castShadow = true;
scene.add(directionalLight);

// Configurer les ombres
renderer.shadowMap.enabled = true;
cube.castShadow = true;
cube.receiveShadow = true;

// Position de la caméra
camera.position.z = 10;

// Variables pour une rotation lissée
let targetRotationY = 0;
let targetRotationX = 0;
let currentRotationY = 0;
let currentRotationX = 0;

// Fonction pour animer le rendu
function animate() {
    // Interpolation pour lisser la rotation vers les valeurs cibles
    currentRotationY += (targetRotationY - currentRotationY) * 0.05;
    currentRotationX += (targetRotationX - currentRotationX) * 0.05;
    
    // Appliquer les rotations lissées
    cube.rotation.y = currentRotationY;
    cube.rotation.x = currentRotationX;
    
    renderer.render(scene, camera);
    requestAnimationFrame(animate);
}
animate();

// Fonction de gestion du scroll pour définir les cibles de rotation
window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY;

    // Rotation cible en fonction du scroll
    const rotationSpeed = 0.008;
    targetRotationY = scrollPosition * rotationSpeed;
    targetRotationX = scrollPosition * rotationSpeed / 8;
});

// Ajuster la taille du canvas au redimensionnement de la fenêtre
window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});


