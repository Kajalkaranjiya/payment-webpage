document.querySelector('form').addEventListener('submit', function(e) {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;

    if (!name || !email) {
        e.preventDefault(); // Prevent form submission
        alert('Please fill in all fields.');
    }
});