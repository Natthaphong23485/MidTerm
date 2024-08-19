document.addEventListener('DOMContentLoaded', function () {
    const loginButton = document.getElementById('loginButton');
    const logoutButton = document.getElementById('logoutButton');

    // Create mockup user data
    const mockupUsers = [
        { email: 'testuser1@example.com', password: 'password1' },
        { email: 'testuser2@example.com', password: 'password2' }
    ];

    // Store mockup users if not already stored
    if (!localStorage.getItem('users')) {
        localStorage.setItem('users', JSON.stringify(mockupUsers));
    }

    // Check if user is already logged in
    function isLoggedIn() {
        return localStorage.getItem('isLoggedIn') === 'true';
    }

    // Show appropriate buttons based on login status
    function updateUI() {
        if (isLoggedIn()) {
            showLogoutButton();
        } else {
            showAuthButtons();
        }
    }

    // Show Login and Register buttons
    function showAuthButtons() {
        if (loginButton) loginButton.classList.remove('d-none');
        if (logoutButton) logoutButton.classList.add('d-none');
    }

    // Show Logout button
    function showLogoutButton() {
        if (loginButton) loginButton.classList.add('d-none');
        if (logoutButton) logoutButton.classList.remove('d-none');
    }

    // Redirect to login page
    if (loginButton) {
        loginButton.addEventListener('click', function () {
            window.location.href = 'login.html';
        });
    }

    // Handle logout
    if (logoutButton) {
        logoutButton.addEventListener('click', function () {
            localStorage.removeItem('isLoggedIn');
            showAuthButtons();
            alert('You have been logged out.');
            window.location.href = 'index.html';
        });
    }

    // Handle login form submission
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', function (e) {
            e.preventDefault();

            const email = document.getElementById('loginEmail').value;
            const password = document.getElementById('loginPassword').value;

            // Retrieve mockup user data and check credentials
            const users = JSON.parse(localStorage.getItem('users')) || [];
            const user = users.find(user => user.email === email && user.password === password);

            if (user) {
                alert('Login successful!');
                localStorage.setItem('isLoggedIn', 'true');
                window.location.href = 'index.html';
            } else {
                alert('Invalid email or password.');
            }
        });
    }

    // Handle register form submission
    const registerForm = document.getElementById('registerForm');
    if (registerForm) {
        registerForm.addEventListener('submit', function (e) {
            e.preventDefault();

            const email = document.getElementById('registerEmail').value;
            const password = document.getElementById('registerPassword').value;
            const confirmPassword = document.getElementById('confirmPassword').value;

            // Check if passwords match
            if (password !== confirmPassword) {
                alert('Passwords do not match.');
                return;
            }

            // Save user data in localStorage
            let users = JSON.parse(localStorage.getItem('users')) || [];
            const userExists = users.some(user => user.email === email);

            if (!userExists) {
                users.push({ email, password });
                localStorage.setItem('users', JSON.stringify(users));
                alert('Registration successful! You can now log in.');
                window.location.href = 'login.html';
            } else {
                alert('User already exists. Please use a different email.');
            }
        });
    }

    // Check if the user is logged in before accessing login or register pages
    function checkLoggedInStatus() {
        if (isLoggedIn()) {
            alert('You are already logged in. Redirecting to the home page.');
            window.location.href = 'index.html';
        }
    }

    // Call checkLoggedInStatus on login.html and register.html
    if (window.location.pathname.endsWith('login.html') || window.location.pathname.endsWith('register.html')) {
        checkLoggedInStatus();
    }

    // Update UI on load
    updateUI();
});
