

const width = window.innerWidth, height = window.innerHeight;

// init

const camera = new three.PerspectiveCamera(70, width / height, 0.01, 10);
camera.position.z = 1;

const scene = new three.Scene();

const geometry = new three.BoxGeometry(0.2, 0.2, 0.2);
const material = new three.MeshNormalMaterial();

const mesh = new three.Mesh(geometry, material);
scene.add(mesh);

const renderer = new three.WebGLRenderer({ antialias: true });
renderer.setSize(width, height);
renderer.setAnimationLoop(animate);
document.body.appendChild(renderer.domElement);

// animation

function animate(time) {

  mesh.rotation.x = time / 2000;
  mesh.rotation.y = time / 1000;

  renderer.render(scene, camera);

}