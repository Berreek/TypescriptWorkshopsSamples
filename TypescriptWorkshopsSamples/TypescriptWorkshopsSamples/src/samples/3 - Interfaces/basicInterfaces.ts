// basic stuff, extending etc readonly
interface IBasicInterface {
    message: string;
}

class BasicClass implements IBasicInterface {
    message: string;

    constructor(message: string) { this.message = message; }
}


interface IExtendedInterface extends IBasicInterface {
    otherMessage : string;
}

class BasicExtendedClass implements IExtendedInterface {
    otherMessage: string;
    message: string;

    constructor(otherMessage: string, message: string) {
        this.otherMessage = otherMessage;
        this.message = message;
    }
}

interface IReadOnlyInterface {
    readonly message: string;
}

class ReadOnlyClass implements IReadOnlyInterface {
    message: string;

    constructor(message: string) { this.message = message; }
}

function interfaces() {
    let readonly: IReadOnlyInterface = new ReadOnlyClass("hello world");
}