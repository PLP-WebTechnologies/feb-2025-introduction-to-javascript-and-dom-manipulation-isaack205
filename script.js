// Change text content dynamically
function changeText() {
    const textElement = document.getElementById('dynamic-text');
    textElement.textContent = 'The text has been changed dynamically!';
}

// Modify CSS styles via JavaScript
function changeStyle() {
    const styleElement = document.getElementById('styled-element');
    styleElement.style.color = 'blue';
    styleElement.style.fontSize = '20px';
    styleElement.style.fontWeight = 'bold';
}

// Add or remove an element when a button is clicked
function toggleElement() {
    const container = document.getElementById('element-container');
    const existingElement = document.getElementById('dynamic-element');

    if (existingElement) {
        container.removeChild(existingElement);
    } else {
        const newElement = document.createElement('div');
        newElement.id = 'dynamic-element';
        newElement.textContent = 'This is a dynamically added element!';
        container.appendChild(newElement);
    }
}