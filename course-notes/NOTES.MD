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

Typescript compiled is basically the same level of abstraction

## Version Control

Keeping binaries in Version control stucks

We version control only the purely non-deterministic elements of the system

Deterministic - value of multiplication 3 \* 2 = 6 - don't need to store 6

We only store TypeScript, not the compiled JavaScript.

One Exception - Partial Migration

Don't version control source maps!

Source Maps and Deployment - Generally, no

- Is it okay if the user has my source code?
- If not obfuscating JS now. Probably OK
- It's a slight security risk
- Low priority
- So maybe we should prevent this for Production/Client Production
- Allowing world to know more
- Also we probably don't want to just be copying everything to Production...
