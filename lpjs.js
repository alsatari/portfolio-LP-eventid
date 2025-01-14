//IMAGE SLIDER

const sliders = document.querySelectorAll(".sliders img");
let slidersIndex = 0;
let intervalId = null;

//initialie slide after the DOM content is loaded is the preferred method
document.addEventListener("DOMContentLoaded", initializeSlider);

function initializeSlider() {

    if (sliders.length > 0) {
        sliders[slidersIndex].classList.add("displaySliders");
        intervalId = setInterval(nextSliders, 5000)
    }
}
function showSliders(index) {

    sliders.forEach(slide => {
        slide.classList.remove("displaySlide");
    });

}
function prevSlide() {

}
function nextSlide() {
    slidersIndex++;
    showSliders(slidersIndex);
}