{
    // compile this with "strictNullChecks" to see the potential error

    function doSomething(arg1: number): number {
        return arg1 + 10;
    }

    class MyClass {
        value?: number; // WARNING! <- this is Optional, it can be undefined
        // value: number | undefined; // WARNING! <- this can be undefined
    }

    class MyClass2 {
        value: number | undefined;
    }

    let instance = new MyClass();
    let instance2 = new MyClass2();
    // normal type checking: no potential error will be spotted!
    let result = doSomething(instance.value);
    console.log(result);

    result = doSomething(instance2.value);
    console.log(result);

    // try assignements to check object compatibilities
    instance = instance2;
    // prop?: T != prop: T | undefined
    // instance2 = instance;
}
