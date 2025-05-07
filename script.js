const title = document.getElementById("title");
title.textContent = "I love javascript and DOM manipulation";
title.style.color = "yellow";

// // Add or remove an element when a button is clicked
function toggleElement() {
    const container = document.getElementById('container');
    const element = document.getElementById('dynamic-element');

    if (element) {
        // If the element exists, remove it
        container.removeChild(element);
    } else {
        // If the element doesn't exist, create and add it
        const newElement = document.createElement('p');
        newElement.id = 'dynamic-element';
        newElement.textContent = 'This is a dynamically added element!';
        container.appendChild(newElement);
    }
}