document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Simple client-side authentication (replace with server-side logic in production)
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        
        // Check if it's a sign-up form
        const isSignUp = document.getElementById('username') !== null;
        
        if (isSignUp) {
            const username = document.getElementById('username').value;
            // Perform sign-up logic here
            console.log('Sign up:', username, email, password);
            // In a real application, you would send this data to a server
        } else {
            // Perform sign-in logic here
            console.log('Sign in:', email, password);
            // In a real application, you would verify credentials with a server
        }
        
        // Redirect to choseide.html after successful authentication
        window.location.href = 'choseide.html';
    });
});