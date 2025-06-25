document.addEventListener('DOMContentLoaded', () => {
  const signupForm = document.getElementById('signup-form');

  signupForm.addEventListener('submit', function (e) {
    e.preventDefault();

    const name = document.getElementById('signup-name').value.trim();
    const email = document.getElementById('signup-email').value.trim();
    const phone = document.getElementById('signup-phone').value.trim();
    const dob = document.getElementById('signup-dob').value;
    const password = document.getElementById('signup-password').value;
    const confirmPassword = document.getElementById('confirm-password').value;
    const userType = document.getElementById('user-type').value;

    // Name: alphabets only
    const nameRegex = /^[A-Za-z]+$/;
    if (!nameRegex.test(name)) {
      alert('Name must contain only alphabetic characters with no spaces.');
      return;
    }

    // Phone number: Kenyan format
    const phoneRegex = /^(?:\+254|0)?7\d{8}$/;
    if (!phoneRegex.test(phone)) {
      alert('Please enter a valid Kenyan phone number (e.g., 0712345678 or +254712345678).');
      return;
    }

    // DOB check
    const dobDate = new Date(dob);
    const today = new Date();
    const age = today.getFullYear() - dobDate.getFullYear();
    const m = today.getMonth() - dobDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < dobDate.getDate())) {
      age--;
    }

    if (age < 18) {
      alert('You must be at least 18 years old to register.');
      return;
    }

    // Password strength
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?#&])[A-Za-z\d@$!%*?#&]{8,}$/;
    if (!passwordRegex.test(password)) {
      alert('Password must contain at least 8 characters, including uppercase, lowercase, number, and special character.');
      return;
    }

    // Password match
    if (password !== confirmPassword) {
      alert('Passwords do not match.');
      return;
    }

    // All validations passed
    alert(`You, ${name}, have successfully registered as a ${userType}.`);
    signupForm.reset();
  });
});
