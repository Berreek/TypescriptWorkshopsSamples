export class NullableClass {
    message?: string;

    constructor(message?: string) {
         this.message = message;
    }
}

class ClassWithNullableProperty {
    nullableObject?: NullableClass;

    constructor(nullableObject?: NullableClass) {
         this.nullableObject = nullableObject;
    }
}

function nullableExample() {
    let nullableClass = new ClassWithNullableProperty(undefined);

    if (nullableClass.nullableObject) {
        if (nullableClass.nullableObject.message) {
            console.log(nullableClass.nullableObject.message);
        }
    }
}