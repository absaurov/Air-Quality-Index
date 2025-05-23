// script.js
document.addEventListener('DOMContentLoaded', function() {
  // Terms and Conditions Modal
  const termsLink = document.getElementById('termsLink');
  const termsModal = document.getElementById('termsModal');
  const closeTerms = document.getElementById('closeTerms');
  
  termsLink.addEventListener('click', function(e) {
    e.preventDefault();
    termsModal.classList.remove('hidden');
  });
  
  closeTerms.addEventListener('click', function() {
    termsModal.classList.add('hidden');
  });

  // Success Message
  const successMessage = document.getElementById('successMessage');
  const closeSuccess = document.getElementById('closeSuccess');
  
  closeSuccess.addEventListener('click', function() {
    successMessage.classList.add('hidden');
  });

  // Registration Form Validation
  const registrationForm = document.getElementById('registrationForm');
  registrationForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Reset previous errors
    clearErrors();
    
    // Validate each field
    const isValid = validateRegistrationForm();
    
    if (isValid) {
      // Show success message
      successMessage.classList.remove('hidden');
      // Reset form
      registrationForm.reset();
    }
  });

  // Login Form Validation
  const loginForm = document.getElementById('loginForm');
  loginForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Reset previous errors
    clearLoginErrors();
    
    // Validate each field
    const isValid = validateLoginForm();
    
    if (isValid) {
      // Here you would typically send the login data to a server
      alert('Login successful! (This would connect to a server in a real application)');
      // Reset form
      loginForm.reset();
    }
  });

  // Registration Form Validation Functions
  function validateRegistrationForm() {
    let isValid = true;
    
    // Full Name validation
    const fname = document.getElementById('fname').value.trim();
    if (!fname) {
      showError('fnameError', 'Full name is required');
      isValid = false;
    } else if (fname.length < 3) {
      showError('fnameError', 'Name must be at least 3 characters');
      isValid = false;
    } else if (!/^[a-zA-Z\s]+$/.test(fname)) {
      showError('fnameError', 'Name can only contain letters and spaces');
      isValid = false;
    }
    
    // Email validation
    const email = document.getElementById('mail').value.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) {
      showError('mailError', 'Email is required');
      isValid = false;
    } else if (!emailRegex.test(email)) {
      showError('mailError', 'Please enter a valid email address');
      isValid = false;
    }
    
    // Password validation
    const password = document.getElementById('pass').value;
    if (!password) {
      showError('passError', 'Password is required');
      isValid = false;
    } else if (password.length < 8) {
      showError('passError', 'Password must be at least 8 characters');
      isValid = false;
    } else if (!/[A-Z]/.test(password)) {
      showError('passError', 'Password must contain at least one uppercase letter');
      isValid = false;
    } else if (!/[0-9]/.test(password)) {
      showError('passError', 'Password must contain at least one number');
      isValid = false;
    } else if (!/[^A-Za-z0-9]/.test(password)) {
      showError('passError', 'Password must contain at least one special character');
      isValid = false;
    }
    
    // Confirm Password validation
    const repass = document.getElementById('repass').value;
    if (!repass) {
      showError('repassError', 'Please confirm your password');
      isValid = false;
    } else if (password !== repass) {
      showError('repassError', 'Passwords do not match');
      isValid = false;
    }
    
    // Date of Birth validation
    const dob = document.getElementById('dob').value;
    if (!dob) {
      showError('dobError', 'Date of birth is required');
      isValid = false;
    } else {
      const dobDate = new Date(dob);
      const today = new Date();
      let age = today.getFullYear() - dobDate.getFullYear();
      const monthDiff = today.getMonth() - dobDate.getMonth();
      
      if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < dobDate.getDate())) {
        age--;
      }
      
      if (age < 18) {
        showError('dobError', 'You must be at least 18 years old');
        isValid = false;
      } else if (age > 120) {
        showError('dobError', 'Please enter a valid date of birth');
        isValid = false;
      }
    }
    
    // Gender validation
    const gender = document.querySelector('input[name="gender"]:checked');
    if (!gender) {
      showError('genderError', 'Please select a gender');
      isValid = false;
    }
    
    // Country validation
    const country = document.getElementById('country').value;
    if (!country) {
      showError('countryError', 'Please select your country');
      isValid = false;
    }
    
    // Terms and Conditions validation
    const termsCheckbox = document.getElementById('termsCheckbox');
    if (!termsCheckbox.checked) {
      showError('termsError', 'You must agree to the terms and conditions');
      isValid = false;
    }
    
    // Comments validation (optional)
    const comments = document.getElementById('comments').value.trim();
    if (comments.length > 500) {
      showError('commentsError', 'Comments cannot exceed 500 characters');
      isValid = false;
    }
    
    return isValid;
  }

  // Login Form Validation Functions
  function validateLoginForm() {
    let isValid = true;
    
    // Email validation
    const email = document.getElementById('loginEmail').value.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) {
      showLoginError('loginEmail', 'Email is required');
      isValid = false;
    } else if (!emailRegex.test(email)) {
      showLoginError('loginEmail', 'Please enter a valid email address');
      isValid = false;
    }
    
    // Password validation
    const password = document.getElementById('loginPassword').value;
    if (!password) {
      showLoginError('loginPassword', 'Password is required');
      isValid = false;
    } else if (password.length < 6) {
      showLoginError('loginPassword', 'Password must be at least 6 characters');
      isValid = false;
    }
    
    return isValid;
  }

  // Helper functions
  function showError(elementId, message) {
    const errorElement = document.getElementById(elementId);
    errorElement.textContent = message;
    errorElement.style.color = 'red';
    errorElement.style.fontSize = '0.875rem';
    errorElement.style.marginTop = '0.25rem';
  }

  function showLoginError(fieldId, message) {
    // Create or find error element
    const field = document.getElementById(fieldId);
    let errorElement = field.nextElementSibling;
    
    if (!errorElement || !errorElement.classList.contains('error')) {
      errorElement = document.createElement('div');
      errorElement.className = 'error text-red-500 text-sm mt-1';
      field.parentNode.insertBefore(errorElement, field.nextSibling);
    }
    
    errorElement.textContent = message;
  }

  function clearErrors() {
    const errorElements = document.querySelectorAll('.error');
    errorElements.forEach(element => {
      element.textContent = '';
    });
  }

  function clearLoginErrors() {
    const loginEmailError = document.getElementById('loginEmail').nextElementSibling;
    const loginPasswordError = document.getElementById('loginPassword').nextElementSibling;
    
    if (loginEmailError && loginEmailError.classList.contains('error')) {
      loginEmailError.textContent = '';
    }
    if (loginPasswordError && loginPasswordError.classList.contains('error')) {
      loginPasswordError.textContent = '';
    }
  }
});