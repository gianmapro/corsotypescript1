// an interface defines the SHAPE of an entity

// Interfaces can describe:​
// - Objects​
// - Functions​
// - Arrays / Dictionaries​
// - Hybrid Types ('things' that are both objects and functions)​

// Interfaces support:​
// - Inheritance​


interface IApple {
	id: string;
	producer: string;
	color: string;
	// brand?: string; // optional property (it's not the same as string | undefined)
					  // this is important when 'type checking' interfaces and classes
}

interface IOrange {
	id: string;
	producer: string;
	color: string;
	// brand: string; // also check with optional | undefined;
	// brand: string | undefined; // also check with this
}

let apple = <IApple>{};
let orange = <IOrange>{};

// WARNING let's mess up with the fruits! (Structural Typing - Duck Typing)
apple = orange;
orange = apple;

// interface can describe functions: function types (delegates in C#)

interface LoggingFunction {
	(message: string): void;
}

let log: LoggingFunction = function (message: string) {
	console.log(message);
};
log("log this!");

// interface can describe indexable types: array types / dictionaries

interface StringDictionary {
	[index: string]: string; // index can be number or string
}
// WARNING: all additional properties must match the return type of the indexer 
//          because you are basically describind an object: { "prop1": value, "prop2": value }
// WARNING: an indexer can only be a number or a string
let dict: StringDictionary = {};
dict["a"] = "b";

// Hybrid types: 
// JavaScript is dynamic and flexible and interfaces have to describe all those objects
// that act both as function and objects.

interface Timer {
	(interval: number): string;
	interval: number;
	reset(): void;
}

// inheritance

interface ISuperHero extends IHuman {
	specialPower: string;
}
