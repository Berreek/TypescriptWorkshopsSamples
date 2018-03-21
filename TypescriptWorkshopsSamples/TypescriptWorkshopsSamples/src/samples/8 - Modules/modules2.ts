import { MySuperClass } from "./modules1";
import {IMySuperInterface} from "./moduleWithInterface";

export class OtherSuperClass implements IMySuperInterface {
    superClass: MySuperClass;

    constructor(superClass: MySuperClass) { this.superClass = superClass; }
}