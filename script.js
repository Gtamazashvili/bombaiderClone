document.addEventListener('DOMContentLoaded', function() {
    let k = 0;
    let menuButton = document.querySelector("#menuButton");
    menuButton.addEventListener("click", function() {
        let htmlContent = document.querySelector(".htmlContent");
        let menuBar = document.querySelector(".menuBar");
        if (k === 0) {
            htmlContent.style.display = 'none';
            menuBar.style.display = "block";
            
            k = 1;
        } else {
            menuBar.style.display = 'none';
            htmlContent.style.display = "block";
            k = 0;
        }
    });
});
