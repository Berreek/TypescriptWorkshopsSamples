interface IInterfaceForTests {
    message : string;
}

class TestClass {
    private readonly message: string;

    constructor(object: IInterfaceForTests) {
        this.message = object.message;
    }
}

function practice() {
    let testClass = new TestClass({ message: "Hello world" });
}