window.addEventListener("scroll", () => {
    const section = document.getElementById('headSec');

    const rect = section.getBoundingClientRect();
    const windowHeight = window.innerHeight;

    // how much of section is visible
    let visible = Math.min(rect.bottom, windowHeight) - Math.max(rect.top, 0);

    let ratio = visible / rect.height;

    // clamp between 0 and 1
    ratio = Math.max(0, Math.min(1, ratio));

    section.style.opacity = ratio;
});