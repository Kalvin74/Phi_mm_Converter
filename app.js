function convert() {
    const inputValue = parseFloat(document.getElementById('input_box').value);
    const inputUnit = document.getElementById('inputCategory').value;
    const resultUnit = document.getElementById('resultCategory').value;
    let resultValue;

    if (!isNaN(inputValue)) {
        // Convert from input unit to millimeter first
        let mmValue = convertToMm(inputValue, inputUnit);
        
        // Convert from millimeter to the target result unit
        resultValue = convertFromMm(mmValue, resultUnit);
        
        // Round to two decimal places and format the result
        document.getElementById('result_box').value = formatResult(resultValue);
    } else {
        document.getElementById('result_box').value = '';
    }
}

function convertToMm(value, unit) {
    if (unit === "phi") {
        return Math.pow(2, -value); // Convert phi to mm
    } else if (unit === "millimeter") {
        return value; // mm stays the same
    } else if (unit === "micrometer") {
        return value / 1000; // Convert micrometer to mm
    }
}

function convertFromMm(value, unit) {
    if (unit === "phi") {
        return -Math.log2(value); // Convert mm to phi
    } else if (unit === "millimeter") {
        return value; // mm stays the same
    } else if (unit === "micrometer") {
        return value * 1000; // Convert mm to micrometer
    }
}

function formatResult(value) {
    // Round to two decimal places
    const roundedValue = Math.round(value * 100) / 100;
    // Return value without decimal if it's a whole number
    return Number.isInteger(roundedValue) ? roundedValue : roundedValue.toFixed(2);
}

function clearFields() {
    document.getElementById('input_box').value = '';
    document.getElementById('result_box').value = '';
}
