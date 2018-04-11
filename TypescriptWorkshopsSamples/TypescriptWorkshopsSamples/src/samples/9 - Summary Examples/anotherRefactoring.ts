import {SomeClassToRefactor} from "./refactoring";

export class AnotherClassToRefactor {
    public property: SomeClassToRefactor;
    public anotherProperty: string;

    constructor(property: SomeClassToRefactor) {
        this.property = property;
        this.anotherProperty = property.testingProperty;
    }
}