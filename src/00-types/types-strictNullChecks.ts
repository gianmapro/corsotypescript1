{
    // null/undefined and Type Checking

    // try to compile them with with: "strictNullChecks"

    /*
    In strict null checking mode, the null and undefined values are not in the domain of every type and 
    are only assignable to themselves and any (the one exception being that undefined is also assignable to void). 
    
    So, whereas T and T | undefined are considered synonymous in regular type checking mode 
    (because undefined is considered a subtype of any T), they are different types in strict type checking mode, 
    and only T | undefined permits undefined values. The same is true for the relationship of T to T | null.
    */

    let x: number;
    let y: number | undefined;
    let z: number | null | undefined;
    x = 1;  // Ok
    y = 1;  // Ok
    z = 1;  // Ok
    x = undefined;  // Error
    y = undefined;  // Ok
    z = undefined;  // Ok
    x = null;  // Error
    y = null;  // Error
    z = null;  // Ok
    x = y;  // Error
    x = z;  // Error
    y = x;  // Ok
    y = z;  // Error
    z = x;  // Ok
    z = y;  // Ok
}
