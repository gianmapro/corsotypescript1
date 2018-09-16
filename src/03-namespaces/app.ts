// namespaces:
// - can be used with <script> tag
// - or bundling everything on a single file

/// <reference path="classes.ts" />

let l: Logger.ILogger = new Logger.ConsoleLogger("custom logger");

l.log("test message");
