import { Service } from "typedi";
import PrintService from "./inject.service";
import Ivan from "./ivan.service";

@Service()
export default class Person {
  constructor(private PrintService: PrintService, private IvanService: Ivan) {}

  public log() {
    this.PrintService.printMessage(this.IvanService.name);
  }
}
