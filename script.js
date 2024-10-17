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
  "body ",
  1,
  {
    opacity: 2,
    duration: 10,
    ease: Expo.easeInOut,
  },
  0.06
);



     

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
        y: "10%",
        scale: 0.8,
        ease: "none",
        scrollTrigger: {
          trigger: "#profile",
          start: "top top",
          end: "100vh top",
          scrub: 1,
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
        ease:"sine",

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


      const words = document.querySelectorAll(".about-me-details span");

      gsap.fromTo(
        words,
        {
          opacity: 0,
          y: 20, // Légèrement décalé vers le bas
          filter: "blur(10px)", // État initial : flou
        },
        {
          opacity: 1,
          y: 0, // Le mot remonte à sa position initiale
          filter: "blur(0px)", // Retire le flou
          scrollTrigger: {
            trigger: "#about-me .title1",
            start: "top top",
            end: "bottom top",
            scrub: 1, // Augmentez la valeur pour un effet de défilement plus fluide
          },
          stagger: 0.2, // Augmentez le décalage entre chaque mot
          duration: 3, // Augmentez la durée pour ralentir l'animation
        }
      );
      
      const words2 = document.querySelectorAll("#about-me h1 span");

      gsap.fromTo(
        words2,
        {
          opacity: 0,
          y: 20, // Légèrement décalé vers le bas
          filter: "blur(10px)", // État initial : flou
        },
        {
          opacity: 1,
          y: 0, // Le mot remonte à sa position initiale
          filter: "blur(0px)", // Retire le flou
          scrollTrigger: {
            trigger: ".details-container2", // Déclencheur sur le h1
            start: "top top", // Début de l'animation quand le h1 est au centre de la vue
            end: "bottom top", // Fin de l'animation quand le h1 sort de la vue
            scrub: 1, // Augmentez la valeur pour un effet de défilement plus fluide
          },
          stagger: 0.2, // Décalage entre chaque mot
          duration: 6, // Durée de l'animation
        }
      );
      


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

      gsap.set("#experience .title1", {
        scale:0,
       

      });
      
      // Animation au défilement
      gsap.to("#experience .title1", {
        scrollTrigger: {
          trigger: ".image-point",
          start: "bottom center",
          end: "bottom  ",
          scrub: true,

        },
        scrub : 5,
        scale:1,
        

        duration: 1,
        ease: "power4.inOut"
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
      
          const moveX = x * 400; // Ajuste la valeur pour augmenter ou diminuer le mouvement horizontal
          const moveY = y * 400; // Ajuste la valeur pour augmenter ou diminuer le mouvement vertical
      
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
                y: 10,
                x: -200,
                rotation:10,
              },
              {
                opacity: 1,
                y: 0,
                x:0,                 
                rotation:0,
              

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
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;

// Charger la texture
const loader = new THREE.TextureLoader();

const baseTexture = loader.load('https://images.unsplash.com/photo-1595418917831-ef942bd9f9ec?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D');

baseTexture.wrapS = THREE.RepeatWrapping;
baseTexture.wrapT = THREE.RepeatWrapping;
baseTexture.repeat.set(1, 6);



// Créer le matériau en utilisant MeshPhysicalMaterial pour une meilleure simulation des propriétés physiques
const material = new THREE.MeshPhysicalMaterial({
  map: baseTexture,
  roughness: 0.5,
  metalness: 0.1,
  clearcoat: 0.2,
  clearcoatRoughness: 0.2,
  reflectivity: 0.5,
  transmission: 0.1,
  ior: 1.3,
  side: THREE.DoubleSide,
  transparent: true,
  opacity: 0.85,
  color: new THREE.Color(0xffffff)
});


// Fonction pour créer une géométrie avec des coins arrondis
function createRoundedBox(width, height, depth, radius, smoothness) {
    const shape = new THREE.Shape();
    const eps = 0.00001;
    shape.absarc(0, 0, radius, -Math.PI / 2, -Math.PI, true);
    shape.absarc(0, height - radius * 2, radius, Math.PI, Math.PI / 2, true);
    shape.absarc(width - radius * 2, height - radius * 2, radius, Math.PI / 2, 0, true);
    shape.absarc(width - radius * 2, 0, radius, 0, -Math.PI / 2, true);

    const geometry = new THREE.ExtrudeGeometry(shape, {
        depth: depth - radius * 2,
        bevelEnabled: true,
        bevelSegments: smoothness * 2,
        steps: 1,
        bevelSize: radius,
        bevelThickness: radius,
        curveSegments: smoothness,
    });

    geometry.center();
    return geometry;
}

// Créer un cube arrondi
const geometry = createRoundedBox(2.3, 2.3, 2.3, 0.3, 26);
const cube = new THREE.Mesh(geometry, material);
cube.castShadow = true;
cube.receiveShadow = true;
scene.add(cube);

// Ajouter une lumière ambiante douce
const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
scene.add(ambientLight);

// Ajouter une lumière directionnelle pour des ombres et des reflets
const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
directionalLight.position.set(5, 5, 5);
directionalLight.castShadow = true;
scene.add(directionalLight);

// Ajouter une lumière de bord pour un effet de contre-jour
const rimLight = new THREE.DirectionalLight(0xffffff, 0.5);
rimLight.position.set(-5, 5, -5);
scene.add(rimLight);

// Position de la caméra
camera.position.set(0, 0, 8);

// Variables pour une rotation lissée
let targetRotationY = 100;
let targetRotationX = 100;
let currentRotationY = 100;
let currentRotationX = 100;

// Variables pour l'animation de la lumière
let pulseSpeed = 1; // Vitesse de pulsation
let pulseScale = 0.5; // Amplitude de pulsation

// Fonction pour animer la lumière
function animateLights() {
    const time = Date.now() * 0.001; // Obtenir le temps écoulé en secondes

    // Pulsation de l'intensité de la lumière directionnelle
    directionalLight.intensity = 1 + Math.sin(time * pulseSpeed) * pulseScale;

    // Pulsation de la lumière de bord
    rimLight.intensity = 0.5 + Math.sin(time * pulseSpeed) * pulseScale * 0.5; // Diminuer l'effet
}

// Fonction pour animer le rendu
function animate() {
    currentRotationY += (targetRotationY - currentRotationY) * 0.05;
    currentRotationX += (targetRotationX - currentRotationX) * 0.05;

    cube.rotation.y = currentRotationY;
    cube.rotation.x = currentRotationX;

    // Animer les lumières
    animateLights();

    renderer.render(scene, camera);
    requestAnimationFrame(animate);
}
animate();

// Fonction de gestion du scroll pour définir les cibles de rotation
window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY;
    const rotationSpeed = 0.006;
    targetRotationY = scrollPosition * rotationSpeed;
    targetRotationX = scrollPosition * rotationSpeed / 2;
});

// Ajuster la taille du canvas au redimensionnement de la fenêtre
window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});

// Ajuster la rotation en fonction de la position de la souris
window.addEventListener('mousemove', (event) => {
    const mouseX = (event.clientX / window.innerWidth) * 6 - 1;
    const mouseY = (event.clientY / window.innerHeight) * 6 - 1;
    targetRotationY = mouseX * 2;
    targetRotationX = mouseY * 2;
});

