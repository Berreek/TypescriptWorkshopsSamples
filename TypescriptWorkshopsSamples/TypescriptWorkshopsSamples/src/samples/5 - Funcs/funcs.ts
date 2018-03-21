class ClassWithFunc {
    public someFunc: (x: number, y: number) => number;

    constructor(someFunc: (x: number, y: number) => number) {
         this.someFunc = someFunc;
    }
}

class ClassWithFuncWithoutStrongType {
    public someFuncWithoutTyping: (x, y) => any;

    constructor(someFuncWithoutTyping: (x: any, y: any) => any) {
         this.someFuncWithoutTyping = someFuncWithoutTyping;
    }
}

function funcExamples() {
    let withoutTyping = new ClassWithFuncWithoutStrongType((x, y) => { return x + y; });
    let withTyping = new ClassWithFunc((x, y) => { return x + y });
    withoutTyping.someFuncWithoutTyping("hello", "world");
    withTyping.someFunc(3, 4);
}