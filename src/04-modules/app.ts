// modules
// - to use a module you need to import its exported types.
// - used with Node.js
// - used with Require.js
// - other module loaders like SystemJs, webpack, etc...
// - can be loaded dynamically

// import the single entities
import { ILogger, ConsoleLogger } from "./LoggerModule";
{
    let l: ILogger = new ConsoleLogger("custom logger");
    l.log("test message");
}

// import everything
// import logger = require("./LoggerModule");
import * as logger from "./LoggerModule";
{
    let l: logger.ILogger = new logger.ConsoleLogger("custom logger");
    l.log("test message");
}
