import { Inject, Service } from "typedi";
import PrintService from "./inject.service";

@Service()
export default class Ivan {
  readonly name: string;
  readonly age: number;
  constructor() {
    (this.name = "Ivan"), (this.age = 26);
  }
}
