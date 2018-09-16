/// <reference path="classes.ts" />
{

let l: ILogger = new ConsoleLogger("custom logger");
l.log("test message");

// inheritance and methods overriding
/*
// remove the 'abstract' modifier on the base class to run this code
var loggerBase = new LoggerBase("base");
var loggerDerived = new ConsoleLogger2("derived");

// look at the console to prove that overriding methods works as expected
loggerDerived.log("derived");
loggerBase.log("base");
*/

}
