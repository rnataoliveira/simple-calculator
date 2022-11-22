import DateHour from "./DateHour.js";
import Operation from "./Operation.js";
import Screen from "./Screen.js";

export default class CalculatorController {

  constructor(
    private screen = new Screen(),
    private operation = new Operation({
      onCalculated: (result: string) => this.screen.content = result
    })
  ) {

    new DateHour();

    this.buttonEvents();

  }

  buttonEvents(): void {
    document.querySelectorAll('#teclado button').forEach(Element => {

      Element.addEventListener('click', (evnt: Event) => {

        const target = evnt.target as HTMLButtonElement;

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
            // using generics to make conversion to string
            this.addOperator(<string>target.dataset.valor);

            this.addOperator(target.dataset.valor as string);
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
      })
    })
  }

  calculate(): void {

    this.operation.calculate();

  }

  addOperation(value: string): void {

    this.operation.add(value);

  }

  addNumber(number: number): void {

    if(isNaN(Number(this.operation.lastPosition))) {

      this.addOperation(number.toString());

    } else {

      number = Number(this.operation.lastPosition.toString() + number.toString());

      this.operation.lastPosition = number.toString();

    }

    this.screen.content = number.toString();

  }

  addOperator(operator: string): void {

    if(isNaN(Number(this.operation.lastPosition))) {

      this.operation.lastPosition = operator;

    } else {

      if(this.operation.length === 0) {

        this.addOperation("0");

      }

      this.addOperation(operator);

    }

    return this.addOperation(operator);

  }
}