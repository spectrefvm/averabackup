// Function to copy the key text to the clipboard
function copyKey() {
    const keyText = document.getElementById('key-box').textContent;
    navigator.clipboard.writeText(keyText).then(function () {
        // Notify the user that the text was copied
        showNotification("Key copied to clipboard!");

        // Shrink the key box after copying
        const keyBox = document.getElementById('key-box');
        keyBox.style.transform = "scale(0.9)";

        // Reset the size of the key box after a short delay
        setTimeout(() => {
            keyBox.style.transform = "scale(1)";
        }, 300);
    }).catch(function (err) {
        console.error('Error copying text: ', err);
    });
}

// Show a notification
function showNotification(message) {
    const notification = document.getElementById("notification");
    notification.textContent = message;
    notification.style.display = "block";

    // Hide notification after 3 seconds
    setTimeout(() => {
        notification.style.display = "none";
    }, 3000);
}

// Toggle between dark and light mode
function toggleDarkMode() {
    const body = document.body;
    const modeIcon = document.getElementById("mode-icon");

    body.classList.toggle('dark-mode');

    // Toggle between sun and moon icons
    if (body.classList.contains('dark-mode')) {
        modeIcon.classList.remove("fa-moon");
        modeIcon.classList.add("fa-sun"); // Sun icon for light mode
    } else {
        modeIcon.classList.remove("fa-sun");
        modeIcon.classList.add("fa-moon"); // Moon icon for dark mode
    }
}

// Carousel navigation
let currentItem = 1;
const totalItems = 3;

function nextItem() {
    currentItem = (currentItem % totalItems) + 1;
    updateCarousel();
}

function prevItem() {
    currentItem = (currentItem - 2 + totalItems) % totalItems + 1;
    updateCarousel();
}

function updateCarousel() {
    for (let i = 1; i <= totalItems; i++) {
        const item = document.getElementById('item' + i);
        if (i === currentItem) {
            item.classList.add('active');
        } else {
            item.classList.remove('active');
        }
    }
}
