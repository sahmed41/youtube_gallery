const YTPlayerOverlay = document.querySelector(".youtube-player-overlay");
const YTLinks = document.querySelectorAll('.youtube-link');
const YTPopup = document.querySelector('.youtube-player-popup iframe');

YTLinks.forEach((link) => {
    link.addEventListener("click", () => {
        YTPlayerOverlay.classList.add("active");
        let videoLink = link.dataset.link;
        YTPopup.src = videoLink;
    });

    YTPlayerOverlay.addEventListener("click", () => {
        let videoLink = link.dataset.link;
        YTPopup.src = videoLink;
        YTPlayerOverlay.classList.remove("active"); 
    })
});

// YTPlayerOverlay.addEventListener("click", () => {
// })