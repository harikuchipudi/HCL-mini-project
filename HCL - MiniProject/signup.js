document.addEventListener("DOMContentLoaded", function(){
    const signupButton = document.getElementById('signupButton');
    
    signupButton.addEventListener('submit', async function(){
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        try {
            const response = await fetch('/insertData', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json', // Use JSON for structured data
                },
                body: JSON.stringify({ username, password }), // Use an object and JSON.stringify
            });
            console.log(body);

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const data = await response.json(); // Parse response JSON

            // Handle the successful response data here
            console.log(data);
        } catch (error) {
            // Handle any errors that occurred during the fetch
            console.error('Fetch error:', error);
        }
    });
});
        