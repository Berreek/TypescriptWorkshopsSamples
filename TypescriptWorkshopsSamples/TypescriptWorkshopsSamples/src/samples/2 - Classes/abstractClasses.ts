abstract class SomeAbstractClass {

    public testMethod(): void {
        console.log("test");
    }

    abstract methodToImplement(): void;
}

class ImplementingAbstract extends SomeAbstractClass {
    public methodToImplement(): void {
         console.log("hello world");
    }
}

function abstracts() {
    let abstracts = new ImplementingAbstract();
    abstracts.methodToImplement();;
}