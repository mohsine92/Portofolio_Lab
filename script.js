
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
  var session = "AM ";
  var location =" PARIS";
  
  if(h == 0){
      h = 12;
  }
  
  if(h > 12){
      h = h - 12;
      session = "PM ";
  }
  
  h = (h < 10) ? "0" + h : h;
  m = (m < 10) ? "0" + m : m;
  s = (s < 10) ? "0" + s : s;
  
  var time =  "◼︎ " + h +  ":" + m + ":" + s + " " + session + "";
  
  document.getElementById("MyClockDisplay").innerText = time;
  document.getElementById("MyClockDisplay").textContent = time;
  
  setTimeout(showTime, 1000);
  
}

showTime();










// lenis scroll
const lenis = new Lenis();

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);


  
  


}

requestAnimationFrame(raf);








//img 


let imagee = document.querySelectorAll('  .image');
function showImage(e) {
  for(var i = 0; i < imagee.length; i++){
    x = e.pageX;
    y = e.pageY;
imagee[i].style.transform = `translate(${x}px, ${y}px)`;

  }
}
document.addEventListener('mousemove', showImage);







const words = document.querySelectorAll("h2 span, .image__wrapper, .image__wrapper-1");

gsap.fromTo(
  words,
  {
    opacity: 0,
    y: 10, // Légèrement décalé vers le bas
    filter: "blur(40px)", // État initial : flou
  },
  {
    opacity: 1,
    ease: "power1.out",

    y: 0, // Le mot remonte à sa position initiale
    filter: "blur(0px)", // Retire le flou
    scrollTrigger: {
      trigger: ".img-home",
      start: "top -20%", // Début de l'animation quand le h1 est au centre de la vue
      end: "bottom top",
      scrub: 3, // Augmentez la valeur pour un effet de défilement plus fluide
    },
    stagger: 0.4, // Augmentez le décalage entre chaque mot
    duration: 3, // Augmentez la durée pour ralentir l'animation
  }
);










gsap.to("#hello p, #hello2, canvas", {

width: "95%",
left: "2%",
  borderRadius: "100px",
      scrollTrigger: {
        trigger: "body",
        start: "top top",
        end: "100vh top",

        ease: "power4.out",
        scrub: 1,

      },
    });



    gsap.to(".img-home", {
      rotate:"90deg",
      y:"65%",
          scrollTrigger: {
            trigger: ".presentation2",
            start: "top -70%",
            end: "100vh top",
            scrub: 2,
            ease: "power4.out",

          },
        });
    
    
       
        



gsap.to(".presentation2", {

  y: 60,
      ease: "none",
      scrollTrigger: {
        trigger: "canvas",
        start: "top top",
        end: "bottom top",
        scrub: 1,
        ease: "power1.out",

      },
    });

  








  gsap.to("h2 span", {
    y: 90,
        ease: "none",
        scrollTrigger: {
          trigger: ".presentation2",
          start: "top top",
          end: "100vh top",
          scrub: 5,

        },
      });
    
    
  

  
  
  gsap.to(".stack", {

    duration: 1.5,
    ease: "power3.out",
    scrollTrigger: {
      trigger: "#project",
      start: " top",
      end: " 5% bottom",
      scrub: 5,
    },
  });






// Initialisation de la scène
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.getElementById('three-container').appendChild(renderer.domElement);
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;


// Charger la texture de base
const loader = new THREE.TextureLoader();
const baseTexture = loader.load('https://plus.unsplash.com/premium_photo-1672088819323-0dd6b822b027?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D');
baseTexture.wrapS = THREE.RepeatWrapping;
baseTexture.wrapT = THREE.RepeatWrapping;
baseTexture.repeat.set(10, 10, 10, 10, 10);

// Créer le matériau pour l'effet de verre net
const material = new THREE.MeshPhysicalMaterial({
  map: baseTexture,
  roughness: 0, // Réduit la rugosité pour un aspect plus lisse
  metalness: 0.3, // Un peu de métal pour améliorer le rendu
  clearcoat: 100.1, // Augmente la brillance
  clearcoatRoughness: 20.1,
  reflectivity: 100, // Maximise la réflexion
  transmission: 110.8, // Permet une plus grande transparence
  ior: 135,
  side: THREE.DoubleSide,
  transparent: true,
  opacity: 10,
});

// Fonction pour créer une géométrie avec des coins arrondis
function createRoundedBox(width, height, depth, radius, smoothness) {
  const shape = new THREE.Shape();
  shape.absarc(0, 0, radius, -Math.PI / 2, -Math.PI, true);
  shape.absarc(0, height - radius * 2, radius, Math.PI, Math.PI / 2, true);
  shape.absarc(width - radius * 2, height - radius * 2, radius, Math.PI / 2, 0, true);
  shape.absarc(width - radius * 2, 0, radius, 0, -Math.PI / 2, true);

  const geometry = new THREE.ExtrudeGeometry(shape, {
    depth: depth - radius * 1,
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
const geometry = createRoundedBox(2.3, 2.3, 2.3, 0.5, 150);
const cube = new THREE.Mesh(geometry, material);
cube.castShadow = true;
cube.receiveShadow = true;
scene.add(cube);


// Ajouter une lumière ambiante douce
const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
scene.add(ambientLight);

// Ajouter plusieurs lumières directionnelles pour des reflets et ombres
const directionalLight1 = new THREE.DirectionalLight(0xffffff, 1);
directionalLight1.position.set(5, 5, 5);
directionalLight1.castShadow = true;
scene.add(directionalLight1);

const directionalLight2 = new THREE.DirectionalLight(0xffffff, 0.7);
directionalLight2.position.set(-5, -5, 5);
scene.add(directionalLight2);

const directionalLight3 = new THREE.DirectionalLight(0xffffff, 0.5);
directionalLight3.position.set(5, -5, -5);
scene.add(directionalLight3);

// Ajouter une lumière ponctuelle pour des reflets plus intenses
const pointLight = new THREE.PointLight(0xffffff, 1.2, 50);
pointLight.position.set(0, 5, 5);
scene.add(pointLight);

// Position de la caméra
camera.position.set(0, 0, 9);

// Variables pour une rotation lissée
let targetRotationY = 10;
let targetRotationX = 10;
let currentRotationY = 10;
let currentRotationX = 10;

// Fonction pour animer le rendu
function animate() {
  currentRotationY += (targetRotationY - currentRotationY) * 0.05;
  currentRotationX += (targetRotationX - currentRotationX) * 0.05;

  cube.rotation.y = currentRotationY;
  cube.rotation.x = currentRotationX;

  renderer.render(scene, camera);
  requestAnimationFrame(animate);
}
animate();

// Fonction de gestion du scroll pour définir les cibles de rotation
window.addEventListener('scroll', () => {
  const scrollPosition = window.scrollY;
  const rotationSpeed = 0.004;
  targetRotationY = scrollPosition * rotationSpeed;
  targetRotationX = scrollPosition * rotationSpeed / 1;
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
  targetRotationY = mouseX * Math.PI; // Utilise un angle pour la rotation
  targetRotationX = mouseY * Math.PI; // Utilise un angle pour la rotation
});
         





const canvas = document.getElementsByTagName("canvas")[0];
const image = document.getElementsByTagName("img")[0];
canvas.width = canvas.clientWidth;
canvas.height = canvas.clientHeight;

const params = {
  SIM_RESOLUTION: 128,
    DYE_RESOLUTION: 2400,
  DENSITY_DISSIPATION: .999,
  VELOCITY_DISSIPATION: .9,
  PRESSURE_ITERATIONS: 1,
  SPLAT_RADIUS: 2 / window.innerHeight,

  color: {
    r: Math.random() - 0.7 + 0.3, // Mélange aléatoire avec une base de rose

    g: Math.random() * 0.8 + 0.2, // Vert accentué
    b: Math.random() * 0.5  + 0.19      // Faible présence de bleu pour éviter le cyan

  }
  
  
};
 

const pointer = {
    x: .5 * window.innerWidth,
    y: .5 * window.innerHeight,
    dx: 0,
    dy: 0,
    moved: false,
    firstMove: false // for codepen preview
};
window.setTimeout(() => {
  pointer.firstMove = true;
}, 3000);

let prevTimestamp = Date.now();

const gl = canvas.getContext("webgl");
gl.getExtension("OES_texture_float");


let outputColor, velocity, divergence, pressure;

const vertexShader = createShader(
    document.getElementById("vertShader").innerHTML,
    gl.VERTEX_SHADER);

const splatProgram = createProgram("fragShaderPoint");
const divergenceProgram = createProgram("fragShaderDivergence");
const pressureProgram = createProgram("fragShaderPressure");
const gradientSubtractProgram = createProgram("fragShaderGradientSubtract");
const advectionProgram = createProgram("fragShaderAdvection");
const displayProgram = createProgram("fragShaderDisplay");


initFBOs();
render();
image.style.opacity = "10";


window.addEventListener("resize", () => {
    params.SPLAT_RADIUS = 5 / window.innerHeight;
    canvas.width = canvas.clientWidth;
    canvas.height = canvas.clientHeight;
});

canvas.addEventListener("click", (e) => {
    pointer.dx = 10;
    pointer.dy = 10;
    pointer.x = e.pageX;
    pointer.y = e.pageY;
    pointer.firstMove = true;
});

canvas.addEventListener("mousemove", (e) => {
    pointer.moved = true;
    pointer.dx = 5 * (e.pageX - pointer.x);
    pointer.dy = 5 * (e.pageY - pointer.y);
    pointer.x = e.pageX;
    pointer.y = e.pageY;
    pointer.firstMove = true;
});

canvas.addEventListener("touchmove", (e) => {
    e.preventDefault();
    pointer.moved = true;
    pointer.dx = 8 * (e.targetTouches[0].pageX - pointer.x);
    pointer.dy = 8 * (e.targetTouches[0].pageY - pointer.y);
    pointer.x = e.targetTouches[0].pageX;
    pointer.y = e.targetTouches[0].pageY;
    pointer.firstMove = true;
});

function createProgram(elId) {
    const shader = createShader(
        document.getElementById(elId).innerHTML,
        gl.FRAGMENT_SHADER);
    const program = createShaderProgram(vertexShader, shader);
    const uniforms = getUniforms(program);
    return {
        program, uniforms
    }
}

function createShaderProgram(vertexShader, fragmentShader) {
    const program = gl.createProgram();
    gl.attachShader(program, vertexShader);
    gl.attachShader(program, fragmentShader);
    gl.linkProgram(program);

    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
        console.error("Unable to initialize the shader program: " + gl.getProgramInfoLog(program));
        return null;
    }

    return program;
}

function getUniforms(program) {
    let uniforms = [];
    let uniformCount = gl.getProgramParameter(program, gl.ACTIVE_UNIFORMS);
    for (let i = 0; i < uniformCount; i++) {
        let uniformName = gl.getActiveUniform(program, i).name;
        uniforms[uniformName] = gl.getUniformLocation(program, uniformName);
    }
    return uniforms;
}


function createShader(sourceCode, type) {
    const shader = gl.createShader(type);
    gl.shaderSource(shader, sourceCode);
    gl.compileShader(shader);

    if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
        console.error("An error occurred compiling the shaders: " + gl.getShaderInfoLog(shader));
        gl.deleteShader(shader);
        return null;
    }

    return shader;
}

function blit(target) {
    gl.bindBuffer(gl.ARRAY_BUFFER, gl.createBuffer());
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([
        -1, -1,
        -1, 1,
        1, 1,
        1, -1
    ]), gl.STATIC_DRAW);
    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, gl.createBuffer());
    gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint16Array([0, 1, 2, 0, 2, 3]), gl.STATIC_DRAW);
    gl.vertexAttribPointer(0, 2, gl.FLOAT, false, 0, 0);
    gl.enableVertexAttribArray(0);

    if (target == null) {
        gl.viewport(0, 0, gl.drawingBufferWidth, gl.drawingBufferHeight);
        gl.bindFramebuffer(gl.FRAMEBUFFER, null);
    } else {
        gl.viewport(0, 0, target.width, target.height);
        gl.bindFramebuffer(gl.FRAMEBUFFER, target.fbo);
    }
    gl.drawElements(gl.TRIANGLES, 6, gl.UNSIGNED_SHORT, 0);
}

function initFBOs() {
    const simRes = getResolution(params.SIM_RESOLUTION);
    const dyeRes = getResolution(params.DYE_RESOLUTION);

    outputColor = createDoubleFBO(dyeRes.width, dyeRes.height);
    velocity = createDoubleFBO(simRes.width, simRes.height);
    divergence = createFBO(simRes.width, simRes.height, gl.RGB);
    pressure = createDoubleFBO(simRes.width, simRes.height, gl.RGB);
}

function getResolution(resolution) {
    let aspectRatio = gl.drawingBufferWidth / gl.drawingBufferHeight;
    if (aspectRatio < 1)
        aspectRatio = 1. / aspectRatio;

    let min = Math.round(resolution);
    let max = Math.round(resolution * aspectRatio);

    if (gl.drawingBufferWidth > gl.drawingBufferHeight)
        return {width: max, height: min};
    else
        return {width: min, height: max};
}

function createFBO(w, h, type = gl.RGBA) {
    gl.activeTexture(gl.TEXTURE0);

    const texture = gl.createTexture();
    gl.bindTexture(gl.TEXTURE_2D, texture);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
    gl.texImage2D(gl.TEXTURE_2D, 0, type, w, h, 0, type, gl.FLOAT, null);

    const fbo = gl.createFramebuffer();
    gl.bindFramebuffer(gl.FRAMEBUFFER, fbo);
    gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, texture, 0);
    gl.viewport(0, 0, w, h);
    gl.clear(gl.COLOR_BUFFER_BIT);

    return {
        fbo,
        width: w,
        height: h,
        attach(id) {
            gl.activeTexture(gl.TEXTURE0 + id);
            gl.bindTexture(gl.TEXTURE_2D, texture);
            return id;
        }
    };
}

function createDoubleFBO(w, h, type) {
    let fbo1 = createFBO(w, h, type);
    let fbo2 = createFBO(w, h, type);

    return {
        width: w,
        height: h,
        texelSizeX: 1. / w,
        texelSizeY: 1. / h,
        read: () => {
            return fbo1;
        },
        write: () => {
            return fbo2;
        },
        swap() {
            let temp = fbo1;
            fbo1 = fbo2;
            fbo2 = temp;
        }
    }
}

function render() {
    const dt = (Date.now() - prevTimestamp) / 1000;
    prevTimestamp = Date.now();

    if (!pointer.firstMove) {
        pointer.moved = true;
        const newX = (.65 + .2 * Math.cos(.006 * prevTimestamp) * Math.sin(.008 * prevTimestamp)) * window.innerWidth;
        const newY = (.5 + .12 * Math.sin(.01 * prevTimestamp)) * window.innerHeight;
        pointer.dx = 10 * (newX - pointer.x);
        pointer.dy = 10 * (newY - pointer.y);
        pointer.x = newX;
        pointer.y = newY;
    }

    if (pointer.moved) {
        pointer.moved = false;

        gl.useProgram(splatProgram.program);
        gl.uniform1i(splatProgram.uniforms.u_input_txr, velocity.read().attach(0));
        gl.uniform1f(splatProgram.uniforms.u_ratio, canvas.width / canvas.height);
        gl.uniform2f(splatProgram.uniforms.u_point, pointer.x / canvas.width, 1 - pointer.y / canvas.height);
        gl.uniform3f(splatProgram.uniforms.u_point_value, pointer.dx, -pointer.dy, 1);
        gl.uniform1f(splatProgram.uniforms.u_point_size, params.SPLAT_RADIUS);

        blit(velocity.write());
        velocity.swap();

        gl.uniform1i(splatProgram.uniforms.u_input_txr, outputColor.read().attach(0));
        gl.uniform3f(splatProgram.uniforms.u_point_value, 1. - params.color.r, 1. - params.color.g, 1. - params.color.b);
        blit(outputColor.write());
        outputColor.swap();
    }

    gl.useProgram(divergenceProgram.program);
    gl.uniform2f(divergenceProgram.uniforms.u_vertex_texel, velocity.texelSizeX, velocity.texelSizeY);
    gl.uniform1i(divergenceProgram.uniforms.u_velocity_txr, velocity.read().attach(0));
    blit(divergence);

    gl.useProgram(pressureProgram.program);
    gl.uniform2f(pressureProgram.uniforms.u_vertex_texel, velocity.texelSizeX, velocity.texelSizeY);
    gl.uniform1i(pressureProgram.uniforms.u_divergence_txr, divergence.attach(0));
    for (let i = 0; i < params.PRESSURE_ITERATIONS; i++) {
        gl.uniform1i(pressureProgram.uniforms.u_pressure_txr, pressure.read().attach(1));
        blit(pressure.write());
        pressure.swap();
    }

    gl.useProgram(gradientSubtractProgram.program);
    gl.uniform2f(gradientSubtractProgram.uniforms.u_vertex_texel, velocity.texelSizeX, velocity.texelSizeY);
    gl.uniform1i(gradientSubtractProgram.uniforms.u_pressure_txr, pressure.read().attach(0));
    gl.uniform1i(gradientSubtractProgram.uniforms.u_velocity_txr, velocity.read().attach(1));
    blit(velocity.write());
    velocity.swap();

    gl.useProgram(advectionProgram.program);
    gl.uniform2f(advectionProgram.uniforms.u_vertex_texel, velocity.texelSizeX, velocity.texelSizeY);
    gl.uniform2f(advectionProgram.uniforms.u_output_textel, velocity.texelSizeX, velocity.texelSizeY);

    gl.uniform1i(advectionProgram.uniforms.u_velocity_txr, velocity.read().attach(0));
    gl.uniform1i(advectionProgram.uniforms.u_input_txr, velocity.read().attach(0));
    gl.uniform1f(advectionProgram.uniforms.u_dt, dt);
    gl.uniform1f(advectionProgram.uniforms.u_dissipation, params.VELOCITY_DISSIPATION);
    blit(velocity.write());
    velocity.swap();

    gl.uniform2f(advectionProgram.uniforms.u_output_textel, outputColor.texelSizeX, outputColor.texelSizeY);
    gl.uniform1i(advectionProgram.uniforms.u_velocity_txr, velocity.read().attach(0));
    gl.uniform1i(advectionProgram.uniforms.u_input_txr, outputColor.read().attach(1));
    gl.uniform1f(advectionProgram.uniforms.u_dissipation, params.DENSITY_DISSIPATION);
    blit(outputColor.write());
    outputColor.swap();

    gl.useProgram(displayProgram.program);
    gl.uniform1i(displayProgram.uniforms.u_output_texture, outputColor.read().attach(0));
    blit();

    requestAnimationFrame(render);
}






const tl = gsap.timeline({
  defaults: {
    ease: "none",
    // ease: 'power3.out',
    repeat: -1,
    yoyo: true,
    duration: 4
  }
});

tl.to("#feturbulence", {
  attr: { baseFrequency: "0.01" }
});




// Cursor 

const cursor = document.querySelector('#cursor');

window.addEventListener('mousemove', (e) => {
  cursor.style.left = `${e.clientX - 10}px`;
  cursor.style.top =  `${e.clientY - 10}px`;
});





const speed = 8;
 const r = gsap.timeline({ repeat: -1 });

const animationTimeline = gsap.timeline({ repeat: -1 });
const o = gsap.timeline({ repeat: -1 });
const h = gsap.timeline({ repeat: -1 });

const $ticket = document.querySelector(".ticket");
$ticket.addEventListener('mouseenter', () => {
    r.pause();
    o.pause();
    h.pause();
})
$ticket.addEventListener('mouseleave', () => {
    r.play();
    o.play();
    h.play();
})

r.to("#app", {
    "--r": "180deg",
    "--p": "0%",
    duration: speed,
    ease: "sine.in"
});
r.to("#app", {
    "--r": "360deg",
    "--p": "100%",
    duration: speed,
    ease: "sine.out"
});
o.to("#app", {
    "--o": 1,
    duration: speed/2,
    ease: "power1.in"
});
o.to("#app", {
    "--o": 0,
    duration: speed/2,
    ease: "power1.out"
});

h.to("#app", {
    "--h": "100%",
    duration: speed/2,
    ease: "sine.in"
});
h.to("#app", {
    "--h": "50%",
    duration: speed/2,
    ease: "sine.out"
});
h.to("#app", {
    "--h": "0%",
    duration: speed/2,
    ease: "sine.in"
});
h.to("#app", {
    "--h": "50%",
    duration: speed/2,
    ease: "sine.out"
});













document.addEventListener("DOMContentLoaded", function () {
  // Créer un effet sticky avec ScrollTrigger pour la section complète
  ScrollTrigger.create({
    trigger: "#project-phone",
    start: "bottom ", // Commence quand le haut de la section atteint le haut de la page
    end: "bottom top", // Termine quand le bas de la section atteint le haut de la page
    pinSpacing: false // Supprime l'espacement entre le contenu épinglé et le suivant
  });

  // Animation pour chaque image
  gsap.utils.toArray('.project-image').forEach(function (image) {
    gsap.fromTo(image, 
      {
        opacity: 0,
        y: 10,
        scale: 0,
        rotation: 5,
      },
      {
        scale:1,
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









const spans = document.querySelectorAll('p span');

const numLetters = spans.length;

spans.forEach(function(span, i) {
    const mappedIndex = i - (numLetters / 2)
    span.style.animationDelay = (mappedIndex * 0.25) + 's';
});