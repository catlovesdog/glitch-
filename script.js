var root = document.activeElement;
document.addEventListener("mousemove", function( event ){
    root.style.setProperty('--start', event.x / window.innerWidth * 360);
    root.style.setProperty('--end', event.y / window.innerHeight * 360);
})