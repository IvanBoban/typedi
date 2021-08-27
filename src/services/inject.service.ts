import { Service } from "typedi";

@Service()
export default class PrintService {
  printMessage(name: string) {
    console.log("I'm " + name);
  }
}
