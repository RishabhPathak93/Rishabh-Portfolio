const form = document.getElementById('contact-form');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  fetch('/', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: encodeFormData({ 'form-name': 'contact-form', name, email, message })
  })
    .then(() => {
      // Reset the form fields
      form.reset();

      // Show a success message to the user
      alert('Thank you for contacting us! We will get back to you soon.');
    })
    .catch((error) => {
      // Show an error message to the user
      console.error(error);
      alert('An error occurred. Please try again later.');
    });
});

function encodeFormData(data) {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&');
}
