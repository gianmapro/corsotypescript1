// Experimental

// rename this file .ts and switch compilation to --target: ES6
// 
// or try with some polyfills
// npm install es6_promise
// tsd install es6-promise
//
// double check the version of node on which to run this sample
// it will not work if some ES6 features are not supported

import * as http from "http";
// import { Promise } from "es6-promise"
import * as server from "./server";
import { filter } from "./utilities";

server.StartHttpServer();

interface IRecord {
	id: number;
	name: string;
	surname: string;
}

async function getRecords(): Promise<IRecord[]> {

	let options = {
		host: "127.0.0.1",
		method: "GET",
		path: "/",
		port: 8010
	};

	let p = new Promise<IRecord[]>((resolve) => {

		http.get(options, (res) => {
			let body = "";
			res.on("data", (chunk: any) => {
				body += chunk;
			});
			res.on("end", function () {
				let result = <IRecord[]>JSON.parse(body);
				// console.log(result);
				resolve(result);
			});
		}).on("error", (error: any) => {
			console.log(error);
		});
	});

	return p;
}

function logData() {
	console.log("promise");
	getRecords().then(
		people => {
			console.log("The People array:");
			console.log(people);
		}
	);
}

// await can be used only inside an async function
async function logDataAsync() {
	console.log("async");
	// we can await for the async call to complete
	let people = await getRecords();
	// It's like writing procedural code!
	console.log("The People array:");
	console.log(people);

	/*
	let result = people.filter(item => item.name === "alessandro");
	console.log("The filtered values:");
	console.log(result);
	*/
}

logData();
logDataAsync();
