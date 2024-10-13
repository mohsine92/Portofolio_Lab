// Initialiser la scène, la caméra et le renderer
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
const container = document.getElementById('image-source');

renderer.setSize(container.clientWidth, container.clientHeight);
container.appendChild(renderer.domElement);

// Charger la texture de l'image
const loader = new THREE.TextureLoader();
const texture = loader.load('idea/Luxe Surface Design Studio_ liquid metal art.jpeg');

// Créer un plan pour l'affichage de l'image
const geometry = new THREE.PlaneGeometry(10, 6);

// Shader material pour créer un effet de vagues
const material = new THREE.ShaderMaterial({
    uniforms: {
        uTime: { value: 0.0 },
        uTexture: { value: texture }
    },
    vertexShader: `
        uniform float uTime;
        varying vec2 vUv;

        void main() {
            vUv = uv;
            vec3 pos = position;
            float wave = sin(pos.x * 2.0 + uTime) * 0.2;
            pos.z += wave;
            gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
        }
    `,
    fragmentShader: `
        uniform sampler2D uTexture;
        varying vec2 vUv;

        void main() {
            gl_FragColor = texture2D(uTexture, vUv);
        }
    `
});

const plane = new THREE.Mesh(geometry, material);
scene.add(plane);

// Position de la caméra
camera.position.set(0, 0, 10);

// Animation
function animate() {
    material.uniforms.uTime.value += 0.02; // Ajuste la vitesse des vagues ici
    renderer.render(scene, camera);
    requestAnimationFrame(animate);
}

animate();

// Ajuster la taille du canvas lors du redimensionnement de la fenêtre
window.addEventListener('resize', () => {
    camera.aspect = container.clientWidth / container.clientHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(container.clientWidth, container.clientHeight);
});
