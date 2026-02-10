// script.js

// Function to handle form submission
function handleFormSubmission(event) {
    event.preventDefault(); // Prevent the default form submission

    const form = event.target;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    // Process the form data (for demonstration: logging it to console)
    console.log('Form Data:', data);

    // Add any interactive features you want (like updating the UI)
    alert('Form submitted successfully!');
}

// Event listener for the form
window.onload = function() {
    const form = document.getElementById('travelForm');
    if (form) {
        form.addEventListener('submit', handleFormSubmission);
    }
};