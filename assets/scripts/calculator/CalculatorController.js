import DateHour from "./DateHour.js";
import Operation from "./Operation.js";
import Screen from "./Screen.js";
export default class CalculatorController {
    screen;
    operation;
    constructor(screen = new Screen(), operation = new Operation({
        onCalculated: (result) => this.screen.content = result
    })) {
        this.screen = screen;
        this.operation = operation;
        new DateHour();
        this.buttonEvents();
    }
    buttonEvents() {
        document.querySelectorAll('#teclado button').forEach(Element => {
            Element.addEventListener('click', (evnt) => {
                const target = evnt.target;
                switch (target.id) {
                    case "zero":
                    case "one":
                    case "two":
                    case "three":
                    case "four":
                    case "five":
                    case "six":
                    case "seven":
                    case "eight":
                    case "nine":
                        this.addNumber(Number(target.dataset.valor));
                        break;
                    case "adition":
                    case "subtraction":
                    case "division":
                    case "multiplication":
                        this.addOperator(target.dataset.valor);
                        this.addOperator(target.dataset.valor);
                        break;
                    case "dot":
                        break;
                    case "clean":
                        break;
                    case "undo":
                        break;
                    case "percent":
                        break;
                    case "equal":
                        this.calculate();
                        break;
                }
            });
        });
    }
    calculate() {
        this.operation.calculate();
    }
    addOperation(value) {
        this.operation.add(value);
    }
    addNumber(number) {
        if (isNaN(Number(this.operation.lastPosition))) {
            this.addOperation(number.toString());
        }
        else {
            number = Number(this.operation.lastPosition.toString() + number.toString());
            this.operation.lastPosition = number.toString();
        }
        this.screen.content = number.toString();
    }
    addOperator(operator) {
        if (isNaN(Number(this.operation.lastPosition))) {
            this.operation.lastPosition = operator;
        }
        else {
            if (this.operation.length === 0) {
                this.addOperation("0");
            }
            this.addOperation(operator);
        }
        return this.addOperation(operator);
    }
}
