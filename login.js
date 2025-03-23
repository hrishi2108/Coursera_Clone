// Toggle between Login and Sign Up forms
document.getElementById('showSignup').addEventListener('click', function (e) {
    e.preventDefault();
    document.getElementById('loginForm').classList.add('hidden');
    document.getElementById('signupForm').classList.remove('hidden');
  });
  
  document.getElementById('showLogin').addEventListener('click', function (e) {
    e.preventDefault();
    document.getElementById('signupForm').classList.add('hidden');
    document.getElementById('loginForm').classList.remove('hidden');
  });
  
  // Handle Login Form Submission
  document.getElementById('loginForm').addEventListener('submit', function (e) {
    e.preventDefault();
  
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
  
    // Basic validation
    if (username === "" || password === "") {
      alert("Please fill in all fields.");
      return;
    }
  
    // Retrieve user data from localStorage
    const userData = JSON.parse(localStorage.getItem('userData')) || {};
  
    // Check if username and password match
    if (userData.username === username && userData.password === password) {
      alert("Login successful!");
      window.location.href = "home.html"; 
    } else {
      alert("Invalid username or password.");
    }
  
    // Clear input fields
    document.getElementById('username').value = "";
    document.getElementById('password').value = "";
  });
  
  // Handle Sign Up Form Submission
  document.getElementById('signupForm').addEventListener('submit', function (e) {
    e.preventDefault();
  
    const username = document.getElementById('signupUsername').value;
    const email = document.getElementById('signupEmail').value;
    const password = document.getElementById('signupPassword').value;
  
    // Basic validation
    if (username === "" || email === "" || password === "") {
      alert("Please fill in all fields.");
      return;
    }
  
    // Save user data to localStorage
    const userData = {
      username: username,
      email: email,
      password: password,
    };
    localStorage.setItem('userData', JSON.stringify(userData));
  
    alert("Sign up successful! You can now log in.");
  
    // Clear input fields
    document.getElementById('signupUsername').value = "";
    document.getElementById('signupEmail').value = "";
    document.getElementById('signupPassword').value = "";
  
    // Switch to login form
    document.getElementById('signupForm').classList.add('hidden');
    document.getElementById('loginForm').classList.remove('hidden');
  });