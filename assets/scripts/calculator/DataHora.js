export default class DataHora {
    dateElement;
    hourElement;
    constructor(dateElement = document.querySelector('#datetime > div:nth-child(2)'), hourElement = document.querySelector('#datetime time')) {
        this.dateElement = dateElement;
        this.hourElement = hourElement;
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
    set date(content) {
        if (this.dateElement) {
            this.dateElement.innerHTML = content;
        }
    }
    set hour(content) {
        if (this.hourElement) {
            this.hourElement.innerHTML = content;
        }
    }
}
