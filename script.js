// navbar
window.onscroll = function () { myFunction() };

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function myFunction() {
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky")
    } else {
        navbar.classList.remove("sticky");
    }
}

window.addEventListener('scroll', function () {
    var navbar = document.getElementById('navbar');
    if (window.scrollY > 0) {
        navbar.classList.add('sticky');
    } else {
        navbar.classList.remove('sticky');
    }
});

// sidebar
function openNav() {
    document.getElementById("myNav").style.width = "100%";
}

function closeNav() {
    document.getElementById("myNav").style.width = "0%";
}

// dark view mobile fix to be white website background
const body = document.querySelector('body');

// Set the initial view based on the screen width
if (window.innerWidth >= 768) {
    body.classList.add('desktop-view');
} else {
    body.classList.remove('desktop-view');
}

// Add an event listener to update the view when the screen is resized
window.addEventListener('resize', () => {
    if (window.innerWidth >= 768) {
        body.classList.add('desktop-view');
    } else {
        body.classList.remove('desktop-view');
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const scrollLinks = document.querySelectorAll('.scroll-link');

    scrollLinks.forEach(link => {
        link.addEventListener('click', event => {
            event.preventDefault();
            window.scrollBy({
                top: -100,
                behavior: 'mooth'
            });
        });
    });
});

//scroll top button
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
//animation navbar text
anime.timeline({ loop: false })
    .add({
        targets: '.ml5 .line',
        opacity: [0.5, 1],
        scaleX: [0, 1],
        easing: "easeInOutExpo",
        duration: 1000
    }).add({
        targets: '.ml5 .line',
        duration: 1000,
        easing: "easeOutExpo",
        translateY: (el, i) => (-1.125 + 1.125 * 2 * i) + "em"
    }).add({
        targets: '.ml5 .ampersand',
        opacity: [0, 1],
        scaleY: [0.5, 1],
        easing: "easeOutExpo",
        duration: 1600,
        offset: '-=600'
    }).add({
        targets: '.ml5 .letters-left',
        opacity: [0, 1],
        translateX: ["0.5em", 0],
        easing: "easeOutExpo",
        duration: 600,
        offset: '-=300'
    }).add({
        targets: '.ml5 .letters-right',
        opacity: [0, 1],
        translateX: ["-0.5em", 0],
        easing: "easeOutExpo",
        duration: 600,
        offset: '-=600'
    })

//animation sidebar text
anime.timeline({ loop: false })
    .add({
        targets: '.ml6 .line2',
        opacity: [0.5, 1],
        scaleX: [0, 1],
        easing: "easeInOutExpo",
        duration: 1000
    }).add({
        targets: '.ml6 .line2',
        duration: 1000,
        easing: "easeOutExpo",
        translateY: (el, i) => (-1.9 + 1.9 * 2 * i) + "em"
    }).add({
        targets: '.ml6 .ampersand2',
        opacity: [0, 1],
        scaleY: [0.5, 1],
        easing: "easeOutExpo",
        duration: 1600,
        offset: '-=600'
    }).add({
        targets: '.ml6 .letters-left2',
        opacity: [0, 1],
        translateX: ["0.5em", 0],
        easing: "easeOutExpo",
        duration: 600,
        offset: '-=300'
    }).add({
        targets: '.ml6 .letters-right2',
        opacity: [0, 1],
        translateX: ["-0.5em", 0],
        easing: "easeOutExpo",
        duration: 600,
        offset: '-=600'
    })


// Get all internal links
const internalLinks = document.querySelectorAll('a[href^="#"]');

// Add event listener to each internal link
internalLinks.forEach(link => {
    link.addEventListener('click', event => {
        event.preventDefault();
        const targetId = link.getAttribute('href').replace('#', '');
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            // Add animation scroll effect
            scrollToElement(targetElement);
        }
    });
});

// Function to animate scroll to an element
function scrollToElement(element) {
    const offset = element.offsetTop;
    const duration = 1000; // adjust the duration as needed
    const easing = 'easeInOutCubic'; // adjust the easing as needed

    window.scrollTo({
        top: offset,
        behavior: 'smooth'
    });
}

// ion icon animation
const timeline = anime.timeline({
    loop: true
});

timeline
    .add({
        targets: 'ion-icon',
        rotate: '360deg',
        duration: 2000
    })
    .add({
        targets: 'ion-icon',
        scale: 1.2,
        duration: 1000
    })
    .add({
        targets: 'ion-icon',
        scale: 1,
        duration: 1000,
        easing: 'easeInOutSine'
    })
    .add({
        targets: 'ion-icon',
        rotate: '0deg',
        duration: 3000
    });

document.querySelectorAll('ion-icon').forEach(icon => {
    icon.addEventListener('mouseover', () => {
        timeline.play();
    });
});

//scroll listener
// window.addEventListener("scroll", setScrollVar);
// window.addEventListener("resize", setScrollVar);

// function setScrollVar() {
//     const htmlElement = document.documentElement;
//     const precentOfScreenHeightScrolled =
//         htmlElement.scrollTop / htmlElement.clientHeight;
//     console.log(precentOfScreenHeightScrolled * 100, 100);
//     htmlElement.style.setProperty("--scroll", precentOfScreenHeightScrolled * 100, 100);
// }

// setScrollVar()




//animation list
//Observer 1: #rise-list1
const riseList1 = document.querySelector('#rise-list1');
if (riseList1) {
    const riseElements1 = document.querySelectorAll('#rise1, #rise2, #rise3, #rise4, #rise5, #rise6, #rise7, #rise8');
    const observer1 = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                riseElements1.forEach((element) => {
                    element.classList.add('animate');
                });
            }
        });
    }, { threshold: 1.0 });
    observer1.observe(riseList1);
}

//Observer 2: #rise-list2
const riseList2 = document.querySelector('#rise-list2');
if (riseList2) {
    const riseElements2 = document.querySelectorAll('#rise9, #rise10, #rise11, #rise12, #rise13, #rise14, #rise15, #rise16, #rise17, #rise18, #rise19, #rise20, #rise21, #rise22, #rise23, #rise24, #rise25');
    const observer2 = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
            riseElements2.forEach((element) => {
                element.classList.add('animate');
            });
        }
    }, { threshold: 0.5 });
    observer2.observe(riseList2);
}

//Observer 3: #staggered-list
const staggeredList = document.querySelector('#staggered-list');
if (staggeredList) {
    const observer3 = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
            entries[0].target.classList.add('animate');
        }
    }, { threshold: 0.5 });
    observer3.observe(staggeredList);
}

//Observer 4: #scaleFade 
const elementsToObserve = ['#scaleFade1', '#scaleFade2', '#scaleFade3', '#scaleFade4'];
elementsToObserve.forEach((selector) => {
    const element = document.querySelector(selector);
    if (element) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate');
                }
            });
        }, { threshold: 1.0 });
        observer.observe(element);
    }
});

//Observer 5: .title
const titleElements = ['.title'];
titleElements.forEach((selector) => {
    const elements = document.querySelectorAll(selector);
    elements.forEach((element) => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate');
                }
            });
        }, { threshold: 1.0 });
        observer.observe(element);
    });
});

//Observer 6: .column-middle img
const imageMiddleElements = ['.column-middle img'];

imageMiddleElements.forEach((selector) => {
    const elements = document.querySelectorAll(selector);
    elements.forEach((element) => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate');
                }
            });
        }, { threshold: 0.4 });
        observer.observe(element);
    });
});


// Slideshow functionality
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");

    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}

// Fullscreen functionality
function disableScroll() {
    // Get the current page scroll position
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    let scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;

    // if any scroll is attempted, set this to the previous value
    window.onscroll = function () {
        window.scrollTo(scrollLeft, scrollTop);
    };

    document.body.classList.add('no-scroll');
}

function enableScroll() {
    window.onscroll = function () { };
    document.body.classList.remove('no-scroll');
}

function openFullscreen(img) {
    let fullscreenContainer = document.getElementById("fullscreen-container");
    let fullscreenImage = document.getElementById("fullscreen-image");

    fullscreenImage.src = img.src;
    fullscreenContainer.style.display = "flex";

    // Disable scrolling
    disableScroll();

    // Prevent the click on the image from immediately closing the fullscreen view
    fullscreenImage.onclick = function (event) {
        event.stopPropagation();
    };
}

function closeFullscreen() {
    let fullscreenContainer = document.getElementById("fullscreen-container");
    fullscreenContainer.style.display = "none";

    // Enable scrolling
    enableScroll();
}

// Close fullscreen if Esc key is pressed
document.addEventListener('keydown', function (event) {
    if (event.key === "Escape") {
        closeFullscreen();
    }
});

//servici oferte fullscreen
function disableScroll() {
    document.body.classList.add('no-scroll');
}

function enableScroll() {
    document.body.classList.remove('no-scroll');
}

function openFullscreen(img) {
    let fullscreenContainer = document.getElementById("fullscreen-container");
    let fullscreenImage = document.getElementById("fullscreen-image");

    fullscreenImage.src = img.src;
    fullscreenContainer.style.display = "flex";

    disableScroll();

    fullscreenImage.onclick = function (event) {
        event.stopPropagation();
    };
}

function closeFullscreen() {
    let fullscreenContainer = document.getElementById("fullscreen-container");
    fullscreenContainer.style.display = "none";

    enableScroll();
}

document.addEventListener('keydown', function (event) {
    if (event.key === "Escape") {
        closeFullscreen();
    }
});

//image gallery
function openFullscreen(img) {
    let fullscreenContainer = document.getElementById("fullscreen-container");
    let fullscreenImage = document.getElementById("fullscreen-image");

    fullscreenImage.src = img.src;
    fullscreenContainer.style.display = "flex";

    disableScroll();

    fullscreenImage.onclick = function (event) {
        event.stopPropagation();
    };
}

function closeFullscreen() {
    let fullscreenContainer = document.getElementById("fullscreen-container");
    fullscreenContainer.style.display = "none";

    enableScroll();
}

document.addEventListener('keydown', function (event) {
    if (event.key === "Escape") {
        closeFullscreen();
    }
});

function disableScroll() {
    document.body.classList.add('no-scroll');
}

function enableScroll() {
    document.body.classList.remove('no-scroll');
}

// Make sure to add this event listener
document.getElementById("fullscreen-container").addEventListener('click', closeFullscreen);