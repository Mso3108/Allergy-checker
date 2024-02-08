function checkAllergy() {
    var food = document.getElementById('foodInput').value;
    fetch('Allergies.csv')
    .then(response => response.text())
    .then(text => {
        console.log(text); // Log the CSV data
        var rows = text.split('\n').map(row => row.split(','));
        var allergic = false;
        for (var i = 0; i < rows.length; i++) {
            if (rows[i][0].toLowerCase().includes(food.toLowerCase()) || rows[i][1].toLowerCase().includes(food.toLowerCase())) {
                allergic = true;
                break;
            }
        }
        if (allergic) {
            document.getElementById('result').innerText = 'Yes, you may be allergic to ' + food;
        } else {
            document.getElementById('result').innerText = 'No allergies found for ' + food;
        }
    });
}
