enum SomeEnum {
    Foo,
    Bar,
    X,
    Y,
    Z
}

class SomeClassWithEnum {
    value: SomeEnum;

    constructor() {
        this.value = SomeEnum.Bar;
    }
}

function enumExample() {
    let objectWithEnum = new SomeClassWithEnum();

    if (objectWithEnum.value === SomeEnum.Foo) {
        console.log(objectWithEnum.value);
    }
}