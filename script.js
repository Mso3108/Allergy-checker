document.getElementById('allergyForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const foodInput = document.getElementById('foodInput').value;

    fetch('check_allergy.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ food: foodInput })
    })
    .then(response => response.json())
    .then(data => {
        const resultDiv = document.getElementById('result');
        if (data.error) {
            resultDiv.innerHTML = `<p>${data.error}</p>`;
        } else {
            resultDiv.innerHTML = `<p>${data.message}</p>`;
        }
    })
    .catch(error => console.error('Error:', error));
});
