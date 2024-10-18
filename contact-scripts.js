document.querySelector('.contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;

    // Handle form submission, like sending to a server, etc.
    alert(`Thank you for contacting us, ${name}. We will get back to you soon!`);
});
