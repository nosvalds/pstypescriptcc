import { untypedCalculator } from "./untyped"

// Pointing at the untyped.js file or it is pointing at the untyped.d.ts file. Depending on whether it's at runtime or design time.
// Design time uses the untyped.d.ts file to provide type information.
// Runtime uses the untyped.js file to execute the code.

let calc = new untypedCalculator();

console.log(calc.add(12, 12));
console.log(calc.subtract(21, 3));