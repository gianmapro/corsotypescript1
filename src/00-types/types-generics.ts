// better code reuse with generic types!

// a collection of generic objects
let arrayOfNumbers = new Array<number>();
let arrayOfString = new Array<string>();

// here's the result!
function filter<T>(collection: T[], predicate: (item: T) => boolean): T[] {
	let result = new Array<T>();

	for (let j = 0; j < collection.length; j++) {
		if (predicate(collection[j]) === true) {
			result.push(collection[j]);
		}
	}

	return result;
};


// generic function type definition
let myFilter: <T>(collection: T[], preficate: (item: T) => boolean) => T;

myFilter = filter;
