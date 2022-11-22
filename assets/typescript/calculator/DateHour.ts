export default class DateHour {
  constructor(
    private dateElement: HTMLDivElement | null = document.querySelector('#datetime > div:nth-child(2)'),
    private hourElement: HTMLElement | null = document.querySelector('#datetime time')
  ) {

    this.renderize();
    setInterval(() => this.renderize(), 1000);

  }

  renderize() {
    const actualDate = new Date();
    const day = actualDate.getDate();
    const month = actualDate.toLocaleDateString("pr-br", {
      month: "long"
    });
    const year = actualDate.getFullYear();
    const hour = actualDate.getHours();
    const minutes = actualDate.getMinutes().toString().padStart(2, '0');

    const twoDots = actualDate.getSeconds() % 2 === 0 ? ":" : " ";
    
    this.date = `${year} ${month} ${day}`;
    this.hour = `${hour}${twoDots}${minutes}`;
  }

  set date(content: string) {
    if (this.dateElement) {
      this.dateElement.innerHTML = content;
    }
  }

  set hour(content: string) {
    if (this.hourElement) {
      this.hourElement.innerHTML = content;
    }
  }
}