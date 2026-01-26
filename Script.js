const scrollContainer = document.getElementById("doctorScroll");

let scrollAmount = 0;

function autoScroll() {
    scrollAmount += 0.2; // smaller = slower
    scrollContainer.style.transform = `translateX(-${scrollAmount}px)`;

    if (scrollAmount >= scrollContainer.scrollWidth / 2) {
        scrollAmount = 0;
    }

    requestAnimationFrame(autoScroll);
}

autoScroll();
