function checkAllergy() {
    var food = document.getElementById('foodInput').value;
    fetch(`/check?food=${food}`)
    .then(response => response.json())
    .then(data => {
        document.getElementById('result').innerText = data.message;
    });
}
