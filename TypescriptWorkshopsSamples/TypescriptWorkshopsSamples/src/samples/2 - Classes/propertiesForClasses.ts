class PropertiesClass {
    private _message: string;

    get message(): string {
        return this._message;
    }

    set message(value: string) {
        this._message = value;
    }
}

function properties() {
    let properties = new PropertiesClass();
    properties.message = "Hello world";

    console.log(properties.message);
}