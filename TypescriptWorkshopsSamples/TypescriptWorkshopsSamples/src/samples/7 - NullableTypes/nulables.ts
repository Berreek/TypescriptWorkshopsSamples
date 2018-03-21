class NullablesClass {
    message?: string;

    constructor(message?: string) {
         this.message = message;
    }
}

class ClassWithNullableProperty {
    nullableObject?: NullablesClass;

    constructor(nullableObject?: NullablesClass) {
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