document.addEventListener("DOMContentLoaded", function () {
    const elements = document.querySelectorAll("h1,h2,h3,h4,h5,h6,p,a,ul,li,span,button,input,textarea");
    const observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.15 });
    elements.forEach(function (element) {
        element.classList.remove("show");
        element.classList.add("reveal");
        observer.observe(element);
    });
});
/* image effect */
document.addEventListener("DOMContentLoaded", function () {
    const images = document.querySelectorAll(".card-img, .location-map, .ecosystem-image");
    const observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.2 });
    images.forEach(function (image) {
        observer.observe(image);
    });
});
/* fade-in effect for why-viko section */
document.addEventListener("DOMContentLoaded", function () {
    let slideIndex = 0;
    const slidesWrapper = document.querySelector(".slides-wrapper");
    const slides = document.querySelectorAll(".mySlides");
    const dots = document.querySelectorAll(".why-viko .dot");
    if (!slidesWrapper || slides.length === 0) {
        console.log("Slider elements not found");
        return;
    }
    function showSlides(index) {
        // Loop to first slide
        if (index >= slides.length) {
            slideIndex = 0;
        }
        // Loop to last slide
        if (index < 0) {
            slideIndex = slides.length - 1;
        }
        // Move slider
        slidesWrapper.style.transform =`translateX(-${slideIndex * 100}%)`;
        // Update dots
        dots.forEach(function (dot) {
            dot.classList.remove("active");
        });

        if (dots[slideIndex]) {
            dots[slideIndex].classList.add("active");
        }
    }
    // Previous / Next buttons
    window.plusSlides = function (n) {
        slideIndex += n;
        showSlides(slideIndex);
    };
    // Dot navigation
    window.currentSlide = function (n) {
        slideIndex = n - 1;
        showSlides(slideIndex);
    };
    // First slide
    showSlides(slideIndex);

});