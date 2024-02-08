function checkAllergy() {
    var foodInput = document.getElementById("foodInput").value.toLowerCase();
    var resultElement = document.getElementById("result");
    
    // AJAX request to load the CSV file
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "Allergies.csv", true);
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            var csvData = xhr.responseText;
            var lines = csvData.split("\n");
            var found = false;

            for (var i = 0; i < lines.length; i++) {
                var cells = lines[i].split(",");
                var mildReaction = cells[0].trim().toLowerCase();
                var sensitiveReaction = cells[1].trim().toLowerCase();

                if (mildReaction === foodInput || sensitiveReaction === foodInput) {
                    found = true;
                    break;
                }
            }

            if (found) {
                resultElement.textContent = "Yes, this food may cause an allergic reaction.";
            } else {
                resultElement.textContent = "No, this food is not listed as an allergen.";
            }
        }
    };
    xhr.send(null);
}
