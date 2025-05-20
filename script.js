const cursor = document.querySelector('.custom-cursor');
let mouseX = 700, mouseY = -50;
let currentX = 0, currentY = 0;
const delay = 0.135;

document.addEventListener('mousemove', (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
});

function animate() {
  currentX += (mouseX - currentX) * delay;
  currentY += (mouseY - currentY) * delay;
  cursor.style.left = `${currentX}px`;
  cursor.style.top = `${currentY}px`;
  requestAnimationFrame(animate);
}
animate();

// Cursor grow on hover
const targets = document.querySelectorAll('.hover-target');
targets.forEach(target => {
  target.addEventListener('mouseenter', () => cursor.classList.add('cursor-grow'));
  target.addEventListener('mouseleave', () => cursor.classList.remove('cursor-grow'));
});

// Open/close functions
function openProfile() {
  document.getElementById('profileWindow').style.display = 'block';
}
function closeProfile() {
  document.getElementById('profileWindow').style.display = 'none';
}
function openProjects() {
  document.getElementById('projectsWindow').style.display = 'block';
}
function closeProjects() {
  document.getElementById('projectsWindow').style.display = 'none';
}
function openContact() {
  document.getElementById('contactWindow').style.display = 'block';
}
function closeContact() {
  document.getElementById('contactWindow').style.display = 'none';
}

// Make draggable windows
function makeDraggable(windowId, handleId) {
  const win = document.getElementById(windowId);
  const handle = document.getElementById(handleId);
  let isDragging = false, offsetX, offsetY;

  handle.addEventListener('mousedown', (e) => {
    isDragging = true;
    offsetX = e.clientX - win.offsetLeft;
    offsetY = e.clientY - win.offsetTop;
  });

  document.addEventListener('mouseup', () => {
    isDragging = false;
  });

  document.addEventListener('mousemove', (e) => {
    if (isDragging) {
      win.style.left = `${e.clientX - offsetX}px`;
      win.style.top = `${e.clientY - offsetY}px`;
    }
  });
}

makeDraggable('profileWindow', 'dragHandle');
makeDraggable('projectsWindow', 'dragProjects');
makeDraggable('contactWindow', 'dragContact');
