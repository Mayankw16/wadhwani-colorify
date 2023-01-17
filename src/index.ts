export class Log {
  static success(message: string) {
    console.log(`%c ${message},`, `color: green`);
  }
  static warning(message: string) {
    console.log(`%c ${message},`, `color: orange`);
  }
  static danger(message: string) {
    console.log(`%c ${message},`, `color: red`);
  }
  static info(message: string) {
    console.log(`%c ${message},`, `color: blue`);
  }
}
