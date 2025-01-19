class Calculator {
    constructor(container_id) {
        this.container_id = container_id;
        this.equation = [];
    }

    get_equation() {
        // Get the current equation as a string, this is mostly for testing
        // purposes.
        return this.equation.join(' ');
    }

    enter(input) {
        // Add an input, such as a number or operator, to the equation.
        const operators = ['+', '-', '*', '/', '^', '.'];
        if (isNaN(input) && !operators.includes(input)) {
            return;
        }

        if (input == '.') {
            if (!Number.isInteger(this.equation[this.equation.length - 1])) {
                return;
            }

            if (!isNaN(this.equation[this.equation.length - 1])) {
                let num = String(this.equation[this.equation.length - 1])
                this.equation[this.equation.length - 1] = num + input;
                return;
            }
        }

        if (!isNaN(this.equation[this.equation.length - 1]) && !isNaN(input)) {
            let num = String(this.equation[this.equation.length - 1])
            this.equation[this.equation.length - 1] = Number(num + input);
            return;
        }

        if (this.equation.length > 0 || !isNaN(input)) {
            if (!isNaN(input)) {
                input = Number(input);
            }
            this.equation.push(input);
        }
    }

    #handle_powers() {
        while (this.equation.indexOf('^') >= 0) {
            let pow_index = this.equation.indexOf('^');
            let sub_result = Math.pow(Number(this.equation[pow_index - 1]),
                Number(this.equation[pow_index + 1]));
            this.equation[pow_index - 1] = sub_result;
            this.equation.splice(pow_index, 2);
        }
    }

    #handle_mult_div() {
        while (this.equation.indexOf('*') >= 0
            || this.equation.indexOf('/') >= 0) {
            let mult_index = this.equation.indexOf('*');
            let div_index = this.equation.indexOf('/');
            if (div_index == -1 || mult_index < div_index && mult_index != -1) {
                let sub_result = Number(this.equation[mult_index - 1]) *
                    Number(this.equation[mult_index + 1]);
                this.equation[mult_index - 1] = sub_result;
                this.equation.splice(mult_index, 2);
            } else {
                let sub_result = Number(this.equation[div_index - 1]) /
                    Number(this.equation[div_index + 1]);
                this.equation[div_index - 1] = sub_result;
                this.equation.splice(div_index, 2);
            }
        }
    }

    #handle_plus_min() {
        while (this.equation.indexOf('+') >= 0
            || this.equation.indexOf('-') >= 0) {
            let plus_index = this.equation.indexOf('+');
            let min_index = this.equation.indexOf('-');
            if (min_index == -1 || plus_index < min_index && plus_index != -1) {
                let sub_result = Number(this.equation[plus_index - 1]) +
                    Number(this.equation[plus_index + 1]);
                this.equation[plus_index - 1] = sub_result;
                this.equation.splice(plus_index, 2);
            } else {
                let sub_result = Number(this.equation[min_index - 1]) -
                    Number(this.equation[min_index + 1]);
                this.equation[min_index - 1] = sub_result;
                this.equation.splice(min_index, 2);
            }
        }
    }

    calculate() {
        // Calculate the result of the equation, making sure that * and / get
        // precedence over + and -.
        if (isNaN(this.equation[this.equation.length - 1])) {
            return 'Error';
        }

        this.#handle_powers();
        this.#handle_mult_div();
        this.#handle_plus_min();

        let result = this.equation[0];
        this.equation = [];
        return result;
    }
}

module.exports = Calculator;