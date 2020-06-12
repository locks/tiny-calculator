import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class TinyCalculator extends Component {
    @tracked display = 0;
    firstOperand = 0;
    operation = null;
    inputNewNumber = false;

    @action
    addDigit(digit) {
        if (this.inputNewNumber) {
            this.display = 0;
        }

        this.inputNewNumber = false;
        this.display = this.display * 10 + digit;
    }

    @action
    calculateResult(event) {
        event.preventDefault();

        this.display = this.operation(this.firstOperand, this.display);
        this.inputNewNumber = true;
    }

    @action
    resetResult() {
        this.display = 0;
        this.firstOperand = 0;
        this.operation = null;
    }

    @action
    operationAddition() {
        this.operation = (a,b) => a + b;

        this.firstOperand = this.display;
        this.inputNewNumber = true;
    }

    @action
    operationSubtraction() {
        this.operation = (a,b) => a - b;

        this.firstOperand = this.display;
        this.inputNewNumber = true;
    }

    @action
    operationMultiplication() {
        this.operation = (a,b) => a * b;

        this.firstOperand = this.display;
        this.inputNewNumber = true;
    }

    @action
    operationDivision() {
        this.operation = (a,b) => a / b;

        this.firstOperand = this.display;
        this.inputNewNumber = true;
    }
}