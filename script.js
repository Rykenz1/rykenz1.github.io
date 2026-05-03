const slider = document.querySelector('.slider');
let isDragging = false;
let startX;
let currentRotateY = 0;
let autoSpinAngle = 0;
const spinSpeed = 0.2; // Adjust this to make the auto-spin faster or slower

function updateRotation() {
    if (!isDragging) {
        autoSpinAngle += spinSpeed;
    }
    
    // Combine the auto-spin and the manual drag offset
    slider.style.transform = `perspective(2000px) rotateX(-16deg) rotateY(${autoSpinAngle + currentRotateY}deg)`;
    
    requestAnimationFrame(updateRotation);
}

// Start the animation loop
updateRotation();

window.addEventListener('mousedown', (e) => {
    isDragging = true;
    startX = e.pageX;
});

window.addEventListener('mousemove', (e) => {
    if (!isDragging) return;
    
    const x = e.pageX;
    const distance = x - startX;
    
    // Update the manual offset based on drag distance
    currentRotateY += distance * 0.1; 
    startX = x; // Reset startX to current position for continuous dragging
});

window.addEventListener('mouseup', () => {
    isDragging = false;
});