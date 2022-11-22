
interface OperationOptions {

  onCalculated: any;

}

export default class Operation {

  private onCalculated: any;

  constructor(

    options: OperationOptions,

    private operation: string[] = [],

  ) {

    this.onCalculated = options.onCalculated;

  }

  add(value: string): number {

    if (this.operation.length === 3) {

      this.calculate();

    }

    return this.operation.push(value);

  }

  getResult(): string {

    let result: string = "0";

    try {
      result = (eval(this.operation.join("")).toString());

    } catch (error) {

      result = "ERROR";
      console.log('erro aqui 2', result);

    }

    return result;
  }

  calculate(): void {

    let result = this.getResult();

    if (result.length > 12) {

      result = result.substr(0, 12);

    }

    this.operation = [result];

    this.onCalculated(result);

  }

  get lastPosition(): string {

    return this.operation.length ? this.operation[this.operation.length - 1] : "0";
  }

  set lastPosition(value: string) {

    const lastIndex = this.operation.length ? this.operation.length - 1 : 0;

    this.operation[lastIndex] = value;
  }

  get length(): number {

    return this.operation.length;

  }
}