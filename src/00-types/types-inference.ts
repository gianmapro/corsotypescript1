{
/*
 * TypeScript 2.1
 * 
 * Literal types are inferred by default for const variables and readonly properties
 * 
 * https://github.com/Microsoft/TypeScript/wiki/Breaking-Changes#literal-types-are-inferred-by-default-for-const-variables-and-readonly-properties
 */

// see the tooltip
let varDebug = true; // has type 'boolean'
const CONSTDEBUG1 = true; // Now has type `true`, previously had type `boolean`

// uncomment this 
// if (CONSTDEBUG1 === false) { /// Error: operator '===' can not be applied to 'true' and 'false'
// }

// comment the assignment to see the error for variables too.
varDebug = !1; // if you assign a variable the type inference works
if (varDebug === false) {
    // do somethin
}

// Recommendation: For types intentionally needed to be wider, cast to the base type:
const CONSTDEBUG2 = <boolean>true; // type is `boolean`

if (CONSTDEBUG2 === false) { // No error!
}

/*
 * TypeScript 2.1
 * 
 * No type narrowing for captured variables in functions and class expressions
 * 
 * https://github.com/Microsoft/TypeScript/wiki/Breaking-Changes#no-type-narrowing-for-captured-variables-in-functions-and-class-expressions
 */

function push<T extends string>(...args: T[]): T {
    return args[0];
};

// look at the tooltip
let x = push("A", "B", "C"); // inferred as "A" | "B" | "C" in TS 2.1, was string in TS 2.0

// Recommendation: Specify the type argument explicitly at call site:
let x2 = push<string>("A", "B", "C"); // x is string

}

