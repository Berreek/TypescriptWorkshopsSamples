class ClassWithFewMethods {
    private message: string;

    public simpleMethod(message: string) {
        this.message = message;
    }

    public methodWithDefaultValues(message: string, otherMessage = "Foo") {
        this.message = message;
    }

    public methodWithParams(message: string, ...messageParams: string[]) {
        this.message = message;
    }
}

function methodsExample() {
    let classWithMethods = new ClassWithFewMethods();

    classWithMethods.simpleMethod("hello world");
    classWithMethods.methodWithDefaultValues("hello world");
    classWithMethods.methodWithDefaultValues("hello world", "other hello world");
    classWithMethods.methodWithParams("hello world", "hello", "world", "once", "again");
}