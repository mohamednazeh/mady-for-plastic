function changeLanguage() {
    const lang = document.getElementById("languageSelect").value;
    document.body.className = lang === "ar" ? "ar" : "";

    // Update all elements with data-en and data-ar attributes
    document.querySelectorAll("[data-en]").forEach(element => {
        const enText = element.getAttribute("data-en");
        const arText = element.getAttribute("data-ar");
        element.textContent = lang === "ar" ? arText : enText;

        // Handle anchor tags (e.g., navbar links)
        if (element.tagName === "A") {
            element.innerHTML = lang === "ar" ? arText : enText;
        }

        // Handle title tag
        if (element.tagName === "TITLE") {
            document.title = lang === "ar" ? arText : enText;
        }
    });

    // Update modal content dynamically
    const modalTitle = document.getElementById("modalTitle");
    const modalDescription = document.getElementById("modalDescription");
    const closeButton = document.querySelector(".close");
    if (modalTitle.textContent) {
        modalTitle.textContent = lang === "ar" ? modalTitle.getAttribute("data-ar") || modalTitle.textContent : modalTitle.getAttribute("data-en") || modalTitle.textContent;
        modalDescription.textContent = lang === "ar" ? modalDescription.getAttribute("data-ar") || modalDescription.textContent : modalDescription.getAttribute("data-en") || modalDescription.textContent;
        closeButton.textContent = lang === "ar" ? closeButton.getAttribute("data-ar") || "×" : closeButton.getAttribute("data-en") || "×";
    }
}

// Set initial language (default to English)
window.onload = function() {
    changeLanguage();
};

// Modal Functions
let modal = document.getElementById("productModal");
let modalImage = document.getElementById("modalImage");
let modalTitle = document.getElementById("modalTitle");
let modalDescription = document.getElementById("modalDescription");

// Sticky header on scroll
window.onscroll = function() {
    const header = document.querySelector("header");
    if (window.scrollY > 50) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }
};

function openModal(title, imageSrc, description) {
    modal.style.display = "block";
    modalImage.src = imageSrc;
    modalTitle.textContent = title;
    modalDescription.textContent = description;
}

function closeModal() {
    modal.style.display = "none";
}

// Close modal when clicking outside
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}