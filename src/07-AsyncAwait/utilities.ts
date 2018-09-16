import * as http from "http";

export interface IPerson {
    id: number;
    name: string;
    surname: string;
    // [x:string]: any; // typescript 1.6 tsc --suppressExcessPropertyErrors (look in tasks.json)
}

export function getRecords(callback: (array: IPerson[]) => void): void {
    let options = {
        host: "127.0.0.1",
        method: "GET",
        path: "/",
        port: 8010
    };
    http.get(options, function (res) {
        let body = "";
        res.on("data", function (chunk: any) {
            body += chunk;
        });
        res.on("end", function () {
            let result = JSON.parse(body);
            // console.log(result);
            callback(result);
        });
    }).on("error", function (error: any) {
        console.log(error);
    });
};

export function filter(collection: IPerson[], predicate: (item: IPerson) => boolean): IPerson[] {
    let result = new Array();

    for (let j = 0; j < collection.length; j++) {
        if (predicate(collection[j]) === true) {
            result.push(collection[j]);
        }
    }

    return result;
};
