document.getElementById('create-gradient').addEventListener('click', function() {
    const color1 = document.getElementById('color1').value;
    const color2 = document.getElementById('color2').value;
    const gradientDisplay = document.getElementById('gradient-display');
    
    gradientDisplay.style.background = `linear-gradient(to right, ${color1}, ${color2})`;
});
// Select all anchor tags
const links = document.querySelectorAll('a');

// Loop through each link and add target="_blank"
links.forEach(link => {
  link.setAttribute('target', '_blank');
});
