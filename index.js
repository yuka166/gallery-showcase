window.addEventListener("mousemove", (e) => {
    const gallery = document.getElementById('gallery');

    const mouseX = e.clientX,
        mouseY = e.clientY;

    const xDecimal = mouseX / window.innerWidth,
        yDecimal = mouseY / window.innerHeight;

    const xMax = gallery.offsetWidth - window.innerWidth,
        yMax = gallery.offsetHeight - window.innerHeight;

    const panX = xDecimal * xMax * -1,
        panY = yDecimal * yMax * -1;

    gallery.animate(
        {
            transform: `translate(${panX}px, ${panY}px)`
        },
        {
            duration: 800,
            easing: 'ease-in-out',
            fill: 'forwards'
        }
    )
})

window.addEventListener("touchmove", (e) => {
    const gallery = document.getElementById('gallery');

    const mouseX = e.touches[0].clientX,
        mouseY = e.touches[0].clientY;

    const xDecimal = mouseX / window.innerWidth,
        yDecimal = mouseY / window.innerHeight;

    const xMax = gallery.offsetWidth - window.innerWidth,
        yMax = gallery.offsetHeight - window.innerHeight;

    const panX = xDecimal * xMax * -1,
        panY = yDecimal * yMax * -1;

    console.log(panX + ',' + panY)

    gallery.animate(
        {
            transform: `translate(${panX}px, ${panY}px)`
        },
        {
            duration: 800,
            easing: 'ease-in-out',
            fill: 'forwards'
        }
    )
})

function DefaultPosition() {
    const gallery = document.getElementById('gallery');
    const xMax = (gallery.offsetWidth - window.innerWidth) / 2 * -1,
        yMax = (gallery.offsetHeight - window.innerHeight) / 2 * -1;
    gallery.style.transform = `translate(${xMax}px, ${yMax}px)`;
}

DefaultPosition();