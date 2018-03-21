class SomeClass {
    private message : string;
    protected otherMessage: string;
    public readonly andAnotherMessage: string;

    constructor(message: string, otherMessage: string, andAnotherMessage: string) {
        this.message = message;
        this.otherMessage = otherMessage;
        this.andAnotherMessage = andAnotherMessage;
    }
}

function modifiers() {
    let test = new SomeClass("hello world", "other hello world", "and another hello world");
}