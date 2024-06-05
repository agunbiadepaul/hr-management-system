document.addEventListener("DOMContentLoaded", () => {
    // Example function to fetch and display stats
    fetchStats();

    // Event listeners for form submissions
    document.getElementById('loginForm').addEventListener('submit', handleLogin);
    document.getElementById('signupForm').addEventListener('submit', handleSignup);
});

async function fetchStats() {
    try {
        const response = await fetch('/api/stats');
        const data = await response.json();

        document.querySelector('.stat-item p.total-employees').innerText = data.totalEmployees;
        document.querySelector('.stat-item p.employees-on-leave').innerText = data.employeesOnLeave;
        document.querySelector('.stat-item p.pending-leave-requests').innerText = data.pendingLeaveRequests;

    } catch (error) {
        console.error('Error fetching stats:', error);
    }
}

async function handleLogin(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const credentials = Object.fromEntries(formData);

    try {
        const response = await fetch('/api/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(credentials),
        });

        if (response.ok) {
            const data = await response.json();
            localStorage.setItem('token', data.token);
            window.location.href = data.redirectUrl;
        } else {
            alert('Login failed. Please check your credentials.');
        }

    } catch (error) {
        console.error('Error during login:', error);
    }
}

async function handleSignup(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const userDetails = Object.fromEntries(formData);

    try {
        const response = await fetch('/api/signup', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(userDetails),
        });

        if (response.ok) {
            alert('Signup successful. Please login.');
            window.location.href = '/login';
        } else {
            alert('Signup failed. Please try again.');
        }

    } catch (error) {
        console.error('Error during signup:', error);
    }
}
