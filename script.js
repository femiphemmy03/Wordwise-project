// Preloader
window.addEventListener('load', () => {
    const preloader = document.getElementById('preloader');
    setTimeout(() => {
        preloader.classList.add('fade-out');
        setTimeout(() => {
            preloader.style.display = 'none';
        }, 500);
    }, 1000); // Show preloader for 1 second
});

// Open modal
function openModal() {
    document.getElementById('modal-notify').style.display = 'flex';
}

// Close modal
function closeModal() {
    document.getElementById('modal-notify').style.display = 'none';
}

// Handle form submission
document.getElementById('notify-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission
    const name = event.target.name.value;
    const email = event.target.email.value;
    alert(`Thank you for subscribing, ${name}! We will notify you at ${email}.`);
    closeModal();
    event.target.reset(); // Clear form
});

// Close modal when clicking outside
window.addEventListener('click', (event) => {
    const modal = document.getElementById('modal-notify');
    if (event.target === modal) {
        closeModal();
    }
});