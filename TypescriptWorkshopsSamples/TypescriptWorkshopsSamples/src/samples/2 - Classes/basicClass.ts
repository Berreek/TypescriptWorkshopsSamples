export class BasicClass {
    message: string;

    constructor(message: string) {
         this.message = message;
    }
}

function basics() {
    let basicClass = new BasicClass("heelo world");
}