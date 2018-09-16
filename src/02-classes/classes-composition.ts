// Beware of the 'this' when playing with 'function pointers'!!

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this
// 
// When a function is called as a method of an object, 
// its 'this' is set to the object the method is called on.
// 
// The same notion holds true for methods defined somewhere on 
// the object's prototype chain. If the method is on an object's 
// prototype chain, this refers to the object the method was called on, 
// as if the method was on the object.

class Service1 {
	private name: string = "Service1";
	
	doSomething(): void {
		// I expect 'this.name' to always have the value 'Service1' right?
		console.log("I should be [Service1], but I am [" + this.name + "] and this is my 'this':");
		console.log(this);
	}
}

class ServiceAggregator {
	public doSomething: () => void; // and expose to the outside world the functions from our component class
	
	private name: string = "Aggregator";
	private service1: Service1; // let's do some composition
	
	constructor(s1: Service1) {
		this.service1 = s1;
		
		this.doSomething = this.service1.doSomething; // WARNING! you are 'messing up' with the 'this'! 
		                                              // it will reference the ServiceAggregator class
													  // I expected it to be Service1

		// delegate the call properly!										  	
		// this.doSomething = () => { this.service1.doSomething(); };								  
	}	
}

// When a function is called as a method of an object, 
// its 'this' is set to the object the method is called on.
let u = new ServiceAggregator(new Service1());
u.doSomething();
