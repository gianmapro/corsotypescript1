// typeof

let x1: any; // string|number = 0;

if (typeof x1 === "string") {
	// x1 is a string here! (no need to cast)
} else {
	// and here? (try using a Union type)
}

// instanceof (narrowing types using the constructor function)

class Dog { woof() { console.log("woof!"); } }

class Cat { meow() { console.log("meow!"); } }

function petBuilder(): Cat | Dog {
	return new Cat();
}

let pet: Dog | Cat = petBuilder();

if (pet instanceof Dog) {
	// pet is a Dog
	pet.woof(); // OK
} else {
	// pet is a Cat
	pet.meow(); 
}

// User-defined type guard functions

// the return type must be in the form: 'x is T'
function isCat(a: any): a is Cat {
	return a.name === "kitty";
}
if (isCat(pet)) {
	pet.meow();
}
