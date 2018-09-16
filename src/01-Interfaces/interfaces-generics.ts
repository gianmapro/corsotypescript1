// generics can also be used in: interfaces

interface IFilterGeneric {
	<T>(collection: T[], predicate: (item: T) => Boolean): T[];
}

interface IFilter<T> {
	(collection: T[], predicate: (item: T) => Boolean): T[];
}

interface IRepository<TKey, T> {
    
    getById(id: TKey): T;

    save(obj: T): void;
}

interface IMap<T> {
    [index: string]: T;
}
let map: IMap<string> = {};
map["1"] = "2";

// constraints on generic types
//
// build a function that works on a specific set of types 
// (ot types that expose specific properties)

interface IPerson {
	name: string;
}

function filter1<T extends IPerson>(collection: T[], predicate: (item: T) => Boolean): T[] {
    // T implements the IPerson interface
    throw new Error("missing implementation");	
}
