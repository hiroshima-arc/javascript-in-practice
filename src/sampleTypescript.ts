export default class Greeting {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  say(): void {
    console.log(`Hello ${this.name}`);
  }
}
