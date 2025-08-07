const screen = document.querySelector('.screen');
const countBtn = document.getElementById('count-btn');
const resetBtn = document.getElementById('reset-btn');
const modeToggle = document.getElementById('mode-toggle-checkbox');
const body = document.body;

let count = 0;

function updateScreen() {
    screen.textContent = count;
}

countBtn.addEventListener('click', () => {
    count++;
    updateScreen();
});

resetBtn.addEventListener('click', () => {
    count = 0;
    updateScreen();
});

modeToggle.addEventListener('change', () => {
    body.classList.toggle('dark-mode');
});

updateScreen();
