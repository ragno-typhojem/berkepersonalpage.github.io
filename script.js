// Sample blog posts
const blogPosts = [
    { title: "Bloglara Hoşgeldin", content: "Buraya şu anlık bir şeyler yazmadım :).." }
];

// Function to display blog posts
function displayBlogPosts() {
    const blogPostsContainer = document.getElementById("blog-posts");
    blogPosts.forEach(post => {
        const postElement = document.createElement("article");
        postElement.classList.add("blog-post");
        postElement.innerHTML = `
            <h3>${post.title}</h3>
            <p>${post.content}</p>
        `;
        blogPostsContainer.appendChild(postElement);
    });
}

// Function to toggle dark mode
function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");
}

// Throttle function
function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    }
}

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex-1].style.display = "block";
}

// Modal
function openModal(imgSrc, imgAlt) {
    let modal = document.getElementById("myModal");
    let modalImg = document.getElementById("modalImg");
    let captionText = document.getElementById("caption");
    modal.style.display = "block";
    modalImg.src = imgSrc;
    captionText.innerHTML = imgAlt;
}

// Get the <span> element that closes the modal
let span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    document.getElementById("myModal").style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    let modal = document.getElementById("myModal");
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

function checkVisibility() {
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        const isVisible = (rect.top <= window.innerHeight * 0.75 && rect.bottom >= 0);
        if (isVisible) {
            section.classList.add('visible');
        }
    });
}

// Touch variables for swipe functionality
let touchStartX = 0;
let touchEndX = 0;

function checkSwipe() {
    if (touchStartX - touchEndX > 50) {
        plusSlides(1);
    }
    if (touchEndX - touchStartX > 50) {
        plusSlides(-1);
    }
}

document.addEventListener('DOMContentLoaded', function() {
    displayBlogPosts();
    document.getElementById("theme-toggle").addEventListener("click", toggleDarkMode);

    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mainNav = document.getElementById('main-nav');
    const slideshow = document.querySelector('.slideshow-container');

    mobileMenuBtn.addEventListener('click', function() {
        mainNav.classList.toggle('active');
        this.classList.toggle('active');
    });

    // Close menu when menu items are clicked
    const menuItems = mainNav.querySelectorAll('a');
    menuItems.forEach(item => {
        item.addEventListener('click', () => {
            if (window.innerWidth <= 768) {
                mainNav.classList.remove('active');
                mobileMenuBtn.classList.remove('active');
            }
        });
    });

    // Close menu when clicking outside
    document.addEventListener('click', function(event) {
        const isClickInsideMenu = mainNav.contains(event.target);
        const isClickOnMenuButton = mobileMenuBtn.contains(event.target);
        if (!isClickInsideMenu && !isClickOnMenuButton && mainNav.classList.contains('active')) {
            mainNav.classList.remove('active');
            mobileMenuBtn.classList.remove('active');
        }
    });

    // Touch event listeners for swipe functionality
    slideshow.addEventListener('touchstart', e => {
        touchStartX = e.changedTouches[0].screenX;
    });

    slideshow.addEventListener('touchend', e => {
        touchEndX = e.changedTouches[0].screenX;
        checkSwipe();
    });

    // Add click event listeners to all project images
    let projectImages = document.querySelectorAll('.project-grid img');
    projectImages.forEach(function(img) {
        img.addEventListener('click', function() {
            openModal(this.src, this.alt);
        });
    });

    // Check visibility on load
    checkVisibility();
});

// Throttled scroll and resize event listeners
window.addEventListener('scroll', throttle(checkVisibility, 200));
window.addEventListener('resize', throttle(() => {
    checkVisibility();
    if (window.innerWidth > 768) {
        document.getElementById('main-nav').classList.remove('active');
        document.getElementById('mobile-menu-btn').classList.remove('active');
    }
}, 200));
