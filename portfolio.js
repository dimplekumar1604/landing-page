// Add any interactivity you need here
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevents the form from submitting the traditional way

    // Simple form validation
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name && email && message) {
        alert('Thank you for your message!');
        // Here you might want to handle form submission to a server
        this.reset(); // Clears the form
    } else {
        alert('Please fill in all fields.');
    }
});
