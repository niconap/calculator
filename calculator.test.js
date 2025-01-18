const Calculator = require('./calculator.js')

test('Correctly records operations', () => {
    const calc_instance = new Calculator();
    calc_instance.enter('1');
    calc_instance.enter('+');
    calc_instance.enter('2');
    console.log(calc_instance.get_equation());
    expect(calc_instance.get_equation()).toStrictEqual(['1', '+', '2']);
    calc_instance.enter('a');
    expect(calc_instance.get_equation()).toStrictEqual(['1', '+', '2']);
    calc_instance.enter('2');
    expect(calc_instance.get_equation()).toStrictEqual(['1', '+', '22']);
})