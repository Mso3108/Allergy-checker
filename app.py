import csv
from flask import Flask, request, jsonify

app = Flask(__name__)

# Load CSV data into memory
allergies = []
with open('Allergies.csv', 'r') as file:
    reader = csv.DictReader(file)
    for row in reader:
        allergies.append(row)

@app.route('/')
def index():
    return app.send_static_file('index.html')

@app.route('/check')
def check_allergy():
    food = request.args.get('food')
    for allergy in allergies:
        if food.lower() in allergy['Mild Reaction'].lower() or food.lower() in allergy['Sensitive Reaction'].lower():
            return jsonify({'message': 'Yes, you may be allergic to ' + food})
    return jsonify({'message': 'No allergies found for ' + food})

if __name__ == '__main__':
    app.run(debug=True)
