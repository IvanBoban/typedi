import "reflect-metadata";
import Container from "typedi";
import Person from "./services/initial/person.service";

const personInstance = Container.get(Person);

personInstance.log();
