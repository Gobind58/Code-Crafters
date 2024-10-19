// Example for form validation or handling submission logic
document.querySelector('.booking-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const mentor = document.getElementById('mentor').value;
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const date = document.getElementById('date').value;
    const time = document.getElementById('time').value;
    const message = document.getElementById('message').value;

    // You can handle form data here, send it to a server, etc.
    alert(`Booking requested for ${mentor} by ${name} on ${date} at ${time}.`);
});
