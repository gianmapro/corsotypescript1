// WARNING: what is 'this' ?
// Use an arrow function inside a class to have 'this' reference
// the instance of the class in a correct way.
class DelayedLogger {
	// classes body always behave as "use strict" was specified.
	name: string;

	constructor(name: string) {
		this.name = name;
	}
	
	// WARNING: what is 'this' ?
	log(message: string) {
		this.name = "test";

		setTimeout(() => {
			console.log(this.name + ": " + message); // <- this is good!
		}, 500);

		setTimeout(function() {
			
			// inside a function the value of 'this' depends on how the function it's called
			// non strict mode: it must be an object, if not set it's the global object
			// strict mode: it remain whatever it was when entering the execution context: undefined or a value
			
			console.log(this.name + ": " + message); // <- undefined!!
		}, 1000);		
	}
}

let instance = new DelayedLogger("test");
instance.log("test message");
