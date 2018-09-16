// ES6 - arrow function

// support for arrow function syntax
let f: () => boolean;

f = () => {
	return true;
};

// 'arguments' is not supported

let f2 = () => {
	// return arguments.length > 0; // Error!
};

// workaround: is use named rest parameters
let f3 = (...args: any[]) => {
	return args.length > 0;
};

// workaround: use function expression
let f4 = function() {
	return arguments.length > 0;
};
