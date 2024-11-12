// Animasi ketika halaman dimuat
window.addEventListener("load", () => {
    const teaserContainer = document.querySelector(".teaser-container");
    teaserContainer.style.opacity = 0;
    setTimeout(() => {
        teaserContainer.style.transition = "opacity 1s ease-in-out";
        teaserContainer.style.opacity = 1;
    }, 100);
});
