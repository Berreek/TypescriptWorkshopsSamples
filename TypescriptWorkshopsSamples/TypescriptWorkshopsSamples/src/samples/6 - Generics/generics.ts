class GenericClass<T> {
    value: T;

    constructor(value: T) {
         this.value = value;
    }
}

function genericsExamples() {
    let withInt = new GenericClass(3);
    let withString = new GenericClass("hello world");
    let withBool = new GenericClass(true);;
}