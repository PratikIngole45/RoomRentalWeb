let isLoggedIn = false;

// Handle login
function handleLogin() {
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;

    // Simulated login validation (for demo purposes)
    if (email && password) {
        isLoggedIn = true;
        document.getElementById('login').style.display = 'none';
        document.getElementById('home-page').style.display = 'block';
        document.getElementById('profile-button').style.display = 'block';
    }
}

// Toggle profile options
function toggleProfileOptions() {
    const profileOptions = document.getElementById('profile-options');
    profileOptions.style.display = profileOptions.style.display === 'none' ? 'block' : 'none';
}

// Show profile info
function showProfileInfo() {
    const profileInfo = document.createElement('div');
    profileInfo.className = 'profile-info';
    profileInfo.innerHTML = `
        <h2>User Profile Info</h2>
        <p>Email: user@example.com</p>
        <p>Full Name: John Doe</p>
    `;
    document.body.appendChild(profileInfo);
}

// Logout function
function logout() {
    isLoggedIn = false;
    document.getElementById('home-page').style.display = 'none';
    document.getElementById('login').style.display = 'block';
    document.getElementById('profile-button').style.display = 'none';
}

// Renter options
function selectRenter() {
    document.getElementById('renter-options').style.display = 'block';
    document.getElementById('owner-options').style.display = 'none';
}

// Owner options
function selectOwner() {
    document.getElementById('owner-options').style.display = 'block';
    document.getElementById('renter-options').style.display = 'none';
}

// Contact owner function
function contactOwner() {
    const ownerInfo = document.createElement('div');
    ownerInfo.className = 'owner-details';
    ownerInfo.innerHTML = `
        <h3>Owner Information</h3>
        <p>Owner Name: Jane Smith</p>
        <button onclick="messageOwner()">Message Owner</button>
    `;
    document.body.appendChild(ownerInfo);
}

// Message owner functionality
function messageOwner() {
    const message = prompt("Type your message to the owner:");
    if (message) {
        alert(`Message sent to the owner: ${message}`);
    }
}

// Go back to listings
function backToListings() {
    // Logic to go back to the listings
    alert("Going back to listings...");
}

// Submit feedback
function submitFeedback() {
    const feedback = document.getElementById('feedback').value;
    if (feedback) {
        alert(`Feedback submitted: ${feedback}`);
        document.getElementById('feedback').value = '';
    }
}

// Show About section
function showAbout() {
    document.getElementById('about-section').style.display = 'block';
}

// Show Contact section
function showContact() {
    document.getElementById('contact-section').style.display = 'block';
}
// Update the existing function in your main script
function redirectToOwnerInfo(name, email, contact, roomTitle, description) {
    const ownerInfo = {
        name: name,
        email: email,
        contact: contact,
        roomTitle: roomTitle,
        description: description,
    };
    localStorage.setItem('ownerInfo', JSON.stringify(ownerInfo));
    window.location.href = 'home.html'; // Redirect to home page
}
