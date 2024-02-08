<?php
header('Content-Type: application/json');

$food = $_POST['food'] ?? '';

if (empty($food)) {
    echo json_encode(['error' => 'Please enter a food.']);
    exit;
}

$data = array_map('str_getcsv', file('Allergies.csv'));
$allergies = array_combine($data[0], $data[1]);

if (array_key_exists($food, $allergies)) {
    $reaction = $allergies[$food];
    echo json_encode(['message' => "Yes, this food may cause a $reaction reaction."]);
} else {
    echo json_encode(['message' => "This item ($food) is okay, but please check for allergies displayed in bold in the ingredients."]);
}
