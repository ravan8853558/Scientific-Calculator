let display = document.getElementById("display");

function appendCharacter(character) {
    display.value += character;
}

function clearDisplay() {
    display.value = "";
}

function calculateResult() {
    try {
        let result = display.value
            .replace(/sin/g, 'Math.sin')
            .replace(/cos/g, 'Math.cos')
            .replace(/tan/g, 'Math.tan')
            .replace(/\^/g, '**')
            .replace(/log/g, 'Math.log10')
            .replace(/√/g, 'Math.sqrt');
        
        display.value = eval(result);
    } catch (error) {
        display.value = "Error";
    }
}
