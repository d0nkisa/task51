import "../scss/app.scss";

window.addEventListener("DOMContentLoaded", () => {
    // This block will be executed once the page is loaded and ready
    setTimeout(() => {
        var elementToHide = document.querySelectorAll('div.card:not(.active)');
        elementToHide[0].style.display = 'none';
        console.log(elementToHide);
    }, 3000);
});