// Number Analyzer
// HTML Elements
let numEl = document.getElementById('numInput');

// Add Event Listener
numEl.addEventListener('change', analyzeNumber);


// Event Function
function analyzeNumber() {
    // Get Number from Input Element
    let numInput = Number(numEl.value);

    // Analyze Number and display results
    document.getElementById('sign').innerHTML = getSign(numInput);
    document.getElementById('even-odd').innerHTML = evenOrOdd(numInput);
    document.getElementById('multiple').innerHTML = multipleOf10(numInput);
}


// Analyze Functions
function getSign(numInput) {
    if (numInput > 0) {
        return "Pos";
    } else if (numInput < 0) {
        return "Neg";
    } else {
        return "Zero";
    }
}

function evenOrOdd(numInput) {
    if (numInput % 2) {
        return "Odd";
    } else {
        return "Even";
    }
}

function multipleOf10(numInput) {
    if (numInput % 10) {
        return "False";
    } else {
        return "True";
    }
}
