// generics can also be used with classes

class Person<T> {

    fullname: string;
    address: string;

    private _id: T;
    get Id(): T { return this._id; }
    // different get/set accessors are not supported for a property
    // private set Id(value: T) { this._id = value; }

    constructor(id: T) {
        this._id = id;
    }
}
