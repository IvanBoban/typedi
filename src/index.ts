import "reflect-metadata";
import Container from "typedi";
import Person from "./services/person.service";

const personInstance = Container.get(Person);

personInstance.log();
