document.addEventListener('DOMContentLoaded', function() {
    // Vibration effect for flowers between intro and "My Projects"
    const flowerDivider = document.querySelector('.flower-divider');
    setInterval(() => {
        flowerDivider.style.transform = 'scale(1.2)';
        setTimeout(() => {
            flowerDivider.style.transform = 'scale(1)';
        }, 200);
    }, 1000);
});





