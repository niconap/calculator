const Calculator = require('./calculator.js')

test('Correctly records operations', () => {
    const calc_instance = new Calculator();
    calc_instance.enter('+');
    calc_instance.enter('-');
    calc_instance.enter('*');
    calc_instance.enter('/');
    expect(calc_instance.get_equation()).toStrictEqual('');
    calc_instance.enter(1);
    calc_instance.enter('+');
    calc_instance.enter('2');
    expect(calc_instance.get_equation()).toStrictEqual('1 + 2');
    calc_instance.enter('a');
    expect(calc_instance.get_equation()).toStrictEqual('1 + 2');
    calc_instance.enter(2);
    expect(calc_instance.get_equation()).toStrictEqual('1 + 22');
    calc_instance.enter('.');
    calc_instance.enter('5');
    calc_instance.enter('.');
    expect(calc_instance.get_equation()).toStrictEqual('1 + 22.5');
    calc_instance.enter('*');
    calc_instance.enter('.');
    expect(calc_instance.get_equation()).toStrictEqual('1 + 22.5 *');
})

test('Correctly calculates with precedences', () => {
    const calc_instance = new Calculator();
    calc_instance.enter('1');
    calc_instance.enter('+');
    calc_instance.enter('2');
    calc_instance.enter('.');
    expect(calc_instance.calculate()).toBe(3)
    expect(calc_instance.get_equation()).toStrictEqual('');
    calc_instance.enter('5');
    calc_instance.enter('+');
    calc_instance.enter('2');
    calc_instance.enter('*');
    calc_instance.enter('2');
    expect(calc_instance.calculate()).toBe(9);
    calc_instance.enter('5');
    calc_instance.enter('/');
    calc_instance.enter('2');
    calc_instance.enter('-');
    calc_instance.enter('2');
    expect(calc_instance.calculate()).toBe(0.5);
    calc_instance.enter('2');
    calc_instance.enter('*');
    expect(calc_instance.calculate()).toStrictEqual('Error');
})

test('Correctly calculates powers', () => {
    const calc_instance = new Calculator();
    calc_instance.enter('2');
    calc_instance.enter('^');
    calc_instance.enter(3);
    expect(calc_instance.calculate()).toBe(8)
    calc_instance.enter('4');
    calc_instance.enter('^');
    calc_instance.enter('0');
    calc_instance.enter('.');
    calc_instance.enter('5');
    expect(calc_instance.calculate()).toBe(2)
    calc_instance.enter('10');
    calc_instance.enter('^');
    calc_instance.enter('0');
    expect(calc_instance.calculate()).toBe(1)
    calc_instance.enter('1');
    calc_instance.enter('^');
    expect(calc_instance.calculate()).toStrictEqual('Error');
})

test('Correctly handles division by 0', () => {
    const calc_instance = new Calculator();
    calc_instance.enter('2');
    calc_instance.enter('/');
    calc_instance.enter(0);
    expect(calc_instance.calculate()).toStrictEqual('Error');
})