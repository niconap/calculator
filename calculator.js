class Calculator {
    constructor(container_id) {
        this.container_id = container_id;
        this.equation = [];
    }

    enter(input) {
        // Add an input, such as a number or operator, to the equation.
        const operators = ['+', '-', '*', '/'];
        if (isNaN(input) && !operators.includes(input)) {
            return;
        }

        if (!isNaN(this.equation[this.equation.length - 1]) && !isNaN(input)) {
            this.equation[this.equation.length - 1] += input;
            return;
        }

        this.equation.push(input);
    }

    get_equation() {
        return this.equation;
    }
}

module.exports = Calculator;