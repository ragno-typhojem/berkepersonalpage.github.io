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

// Function to handle form submission


// Function to toggle dark mode
function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");
}

// Event listeners
document.addEventListener("DOMContentLoaded", () => {
    displayBlogPosts();

    document.getElementById("theme-toggle").addEventListener("click", toggleDarkMode);
});
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

// Add click event listeners to all project images
document.addEventListener("DOMContentLoaded", function() {
    let projectImages = document.querySelectorAll('.project-grid img');
    projectImages.forEach(function(img) {
        img.addEventListener('click', function() {
            openModal(this.src, this.alt);
        });
    });
});


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

window.addEventListener('scroll', checkVisibility);
window.addEventListener('resize', checkVisibility);
checkVisibility(); // Initial check