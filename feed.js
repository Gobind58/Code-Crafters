// Add Event Listener for DOM Content Loaded
document.addEventListener("DOMContentLoaded", function() {
    // Feedback Form Submission
    const feedbackForm = document.getElementById('feedback-form');
    feedbackForm.addEventListener('submit', function(event) {
      event.preventDefault();
      const userName = document.getElementById('user-name').value;
      const userFeedback = document.getElementById('user-feedback').value;
  
      // Display Thank You Message
      alert(`Thank you for your feedback, ${userName}!`);
  
      // Optionally, clear the form
      feedbackForm.reset();
    });
  });
  