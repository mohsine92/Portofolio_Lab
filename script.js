
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
  
  var time =  " ✦ " + h + ":" + m + ":" + s + " " + session + "";
  
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
      scrub: 5, // Augmentez la valeur pour un effet de défilement plus fluide
    },
    stagger: 0.4, // Augmentez le décalage entre chaque mot
    duration: 3, // Augmentez la durée pour ralentir l'animation
  }
);










gsap.to("#hello p, #hello2, canvas", {

  y: -160,
      ease: "none",
      scrollTrigger: {
        trigger: "body",
        start: "top top",
        end: "100vh top",
        scrub: 3,
        ease: "power1.out",

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

  


  
gsap.to(".img-home", {
  rotation: 360,

      scrollTrigger: {
        trigger: ".presentation2",
        start: "top top",
        end: "bottom top",
        scrub: 3,
        ease: "power4.out",

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
  SPLAT_RADIUS: 4 / window.innerHeight,

  color: { r: 0.8, g: 0.7, b: 0.15 } // Mélange de rose, vert et jaune


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






const cursor = document.querySelector('#cursor');

window.addEventListener('mousemove', (e) => {
  cursor.style.left = `${e.clientX - 10}px`;
  cursor.style.top =  `${e.clientY - 10}px`;
});


function copyEditableText() {
  // Récupère le contenu du paragraphe
  const text = document.getElementById("editableText").textContent;

  // Copie le texte dans le presse-papiers
  navigator.clipboard.writeText(text).then(() => {
    alert("Email copié ! : " + text);
  }).catch(err => {
    console.error("Échec de la copie : ", err);
  });
}





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