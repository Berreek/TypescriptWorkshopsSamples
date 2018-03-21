interface IExampleInterface {
    message: string;
}

class ExampleClass1 implements IExampleInterface {
    message: string;

    constructor(message: string) { this.message = message; }
}

class ExampleClass2 {
    message: string;

    constructor(message: string) { this.message = message; }
}

class ExampleGenericClass<T extends IExampleInterface> {
    private readonly value: T;

    constructor(value: T) {
         this.value = value;
    }

    public getMessage(): string {
        return this.value.message;
    }
}

function constraintsGenericExample() {
    let fromClass = new ExampleGenericClass(new ExampleClass1("hello world"));
    let fromAnonnymousObject = new ExampleGenericClass({ message: "interface hello world" });
    let fromNotCorrectClass = new ExampleGenericClass(new ExampleClass2("hello world"));
}