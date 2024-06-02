
//js code for the fullscreen on the certificates
document.addEventListener("DOMContentLoaded", function() {
    const images = document.querySelectorAll(".cert-pics img");
    const fullscreenViewer = document.getElementById("fullscreen-viewer");
    const fullscreenImg = document.getElementById("fullscreen-img");
    const closeBtn = document.getElementById("close-btn");

    images.forEach(image => {
        image.addEventListener("click", function() {
            fullscreenImg.src = this.src;
            fullscreenViewer.style.display = "flex";
        });
    });

    closeBtn.addEventListener("click", function() {
        fullscreenViewer.style.display = "none";
    });

    fullscreenViewer.addEventListener("click", function(event) {
        if (event.target !== fullscreenImg && event.target !== closeBtn) {
            fullscreenViewer.style.display = "none";
        }
    });
});

