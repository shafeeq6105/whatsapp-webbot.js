// Get the elements
const counter = document.getElementById('counter');
const incrementBtn = document.getElementById('increment');
const decrementBtn = document.getElementById('decrement');
const resetBtn = document.getElementById('reset');

// Initialize the counter
let count = 0;

// Increment the counter
incrementBtn.addEventListener('click', () => {
    count++;
    counter.textContent = count;
});

// Decrement the counter
decrementBtn.addEventListener('click', () => {
    count--;
    counter.textContent = count;
});

// Reset the counter
resetBtn.addEventListener('click', () => {
    count = 0;
    counter.textContent = count;
});
