const bulb = document.getElementById('bulb');
const button = document.getElementById('toggleButton');

let isBulbOn = false;

button.addEventListener('click', () => {
    if (isBulbOn) {
        bulb.src = 'bulboff.png';
        button.textContent = 'Turn On';
        isBulbOn = false;
    } else {
        bulb.src = 'bulbon.png';
        button.textContent = 'Turn off';
        isBulbOn = true;
    }
});