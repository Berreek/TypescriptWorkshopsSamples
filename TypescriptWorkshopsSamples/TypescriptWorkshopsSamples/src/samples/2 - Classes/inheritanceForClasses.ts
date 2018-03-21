class SomeBaseClass {
    message: string;

    constructor(message: string) {
         this.message = message;
    }
}

class SomeOtherClass extends SomeBaseClass {
    otherMessage: string;

    constructor(message: string, otherMessage: string) {
        super(message);
        this.otherMessage = otherMessage;
    }
}

function inheritance() {
    let test = new SomeOtherClass("Hello world", "Other hello world");
}