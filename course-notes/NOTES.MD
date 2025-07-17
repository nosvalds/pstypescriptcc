# Why TypeScript

## History

JavaScript History - developed in an adhoc way. Good but also bad. TypeScript is an effort to place design ethos atop JavaScript.

Is TypeScript just C# on top of JS? No

TypeScript is still JS

## Typing

Type Coercion

- Sometimes is useful to coerce to a new type
- Strict typing is a commitment

Type coercion is often a code smell

Why else recommend const over var?

Type coercion happens more often due to an error in coding than by design with loose typing

Does TypeScript enforce strong typing - NO (only at design time if you want it)

TypeScript type enforcement happens at compilation time only, and only for TypeScript code.

Compilation vs. Transpilation

Typescript compiled is basically the same level of abstraction vs. other languages where compiled code it not (as) human readable.

## Version Control

Keeping binaries in Version control stucks

We version control only the purely non-deterministic elements of the system - could be a lesson for EVLO. (mapping files, etc)

Deterministic - value of multiplication 3 \* 2 = 6 - don't need to store 6

We only store TypeScript, not the compiled JavaScript.

Generally migration is renaming to .ts - might not be this simple.

## Debugging

Source maps allow for Debugging in the browser with the TypeScript code. Maps from compiled JS to TS.

Don't version control source maps!

Source Maps and Production Deployment - Generally, no

- Is it okay if the user has my source code?
- If not obfuscating JS now. Probably OK
- It's a slight security risk
- Low priority
- So maybe we should prevent this for Production/Client Production
- Allowing world to know more
- Also we probably don't want to just be copying everything to Production...
