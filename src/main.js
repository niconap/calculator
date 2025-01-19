const Calculator = require('./calculator');

const calc_instance = new Calculator()
const buttons = document.querySelectorAll('#buttons button');
const display = document.getElementById('display');

const buttonActions = {
    'btn-0': () => calc_instance.enter(0),
    'btn-1': () => calc_instance.enter(1),
    'btn-2': () => calc_instance.enter(2),
    'btn-3': () => calc_instance.enter(3),
    'btn-4': () => calc_instance.enter(4),
    'btn-5': () => calc_instance.enter(5),
    'btn-6': () => calc_instance.enter(6),
    'btn-7': () => calc_instance.enter(7),
    'btn-8': () => calc_instance.enter(8),
    'btn-9': () => calc_instance.enter(9),
    'btn-decimal': () => calc_instance.enter('.'),
    'btn-add': () => calc_instance.enter('+'),
    'btn-subtract': () => calc_instance.enter('-'),
    'btn-multiply': () => calc_instance.enter('*'),
    'btn-divide': () => calc_instance.enter('/'),
    'btn-power': () => calc_instance.enter('^'),
    'btn-clear': () => calc_instance.clear(),
    'btn-equals': () => { return calc_instance.calculate() },
};

buttons.forEach((button) => {
    const action = buttonActions[button.id];
    if (action) {
        button.addEventListener('click', () => {
            let value = action();
            if (value) {
                display.innerHTML = value;
            } else {
                display.innerHTML = calc_instance.get_equation();
            }
        });
    }
});