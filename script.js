const form = document.getElementById('login-form');
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');
const errorMessage = document.getElementById('error-message');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const username = usernameInput.value.trim();
  const password = passwordInput.value.trim();

  if (username === '' || password === '') {
    errorMessage.textContent = 'Please fill in both fields.';
    return;
  }

  // TO DO: Implement actual login functionality here
  // For demonstration purposes, we'll just log the input values to the console
  console.log(`Username: ${username}, Password: ${password}`);

  // Reset the form fields
  usernameInput.value = '';
  passwordInput.value = '';
});