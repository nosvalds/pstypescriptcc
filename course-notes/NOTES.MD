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

# Type Annotations and Type Inference

## Why

"When" typed is the point

- Compile Time - statically or strongly typed languages

### C#

```c#
var x = 5;
x = "Niki O"
// Does not work
```

### JavaScript Typing

- Type can be changed/coerced at will. There are types

```js
var x = 5;
console.log(typeof x);
// number
x = "Chris B. Behrens";
console.log(typeof x);
// string
```

Is the ability to change the type at will a good or bad thing?

- Generally type coercion happens more often due to an ERROR in code rather than by design with loose typing

### Why Conclusion

Data annotations for Python, Dynamic typing can be great, For senior developers

Small crimes (coercion) can lead to larger crimes. Broken windows.

Static typing enforces a rigor from the start. This is good.

## TypeScript "Types"

### Intro

3 Primitives

- String
- Number
- Boolean

All values truthy except false, 0, -0, 0n, "", null, undefined, NaN and document all (JS)

any type - don't recommend this is used. going back to JS.

All Types

- Primary Types
- Pseduo types
- String, number, boolean

```ts
const name: string = "Niki"
const knowsPython: boolean = true;
const salary: number = 1000000;

// return type for function is optional and will otherwise return the inferred type of the return statement or any
calculateSalary(): number {
    return Math.pow(1000, 2);
}

calculateSalary(salary: number): number {
    return salary * 1.5;
}
```

### Demo

Compiled TS does not have any type checking in the JS!!! Not how it works.

Type checking is done at compile time

Function Return Types being optional is right, even though we favor strict typing.

- Exceptions - different type

Look at the lifetime of the variable carefully and work with a single type

## Unit Testing and Types

https://stackoverflow.com/questions/415434/can-automated-unit-testing-replace-static-type-checking

here is one immutable fact about software quality.

If it can't compile, it can't ship

In this rule, statically typed languages will win over dynamically typed languages.

Ok, yes this rule is not immutable. Web Apps can ship without compiling (I've deployed many test web apps that didn't compile). But what is fundamentally true is

The sooner you catch an error, the cheaper it is to fix

A statically typed language will prevent real errors from happening at one of the earliest possible moments in the software development cycle. A dynamic language will not. Unit Testing, if you are thorough to a super human level can take the place of a statically typed language.

However why bother? There are a lot of incredibly smart people out there writing an entire error checking system for you in the form of a Compiler. If you're concerned about getting errors sooner use a statically typed language.

Please do not take this post as a bashing of dynamic languages. I use dynamic languages daily and love them. They are incredibly expressive and flexible and allow for incredibly fanscinating program.s However in the case of early error reporting they do lose to statically typed languages.

### Example

You're the test developer, you're writing the same test over and over again. You implement automated type checking, you've invented TypeScript.

Static Type checking prevents one type of bug. It's only one sliver of many types of bugs.

Why are you selling me on types?

Don't miss an opportunity (don't just mark as ANY). Avoid using "any" because you're under pressure.

Get the ethos into your blood!

## Demo - Avoided Unit Test

Remove any test/methods that are checking for isNumber validation

Certain class of code an unit test uneccessary.

Still had to validated the range of the number.

Next step for range checking, etc. - "Creating and Using Decorators in JavaScript"\

## Few more tricks with types

### Inference by Assignment

- TypeScript can infer the type because of how it's assigned like so:

```ts
let age = 16;
console.log(typeof age);
```

```ts
let age = "sixteen";
console.log(typeof age);
```

### Custom Types

```ts
type bandMember = "bassist" | "vocalist" | "drummer";

// or

enum bandMember = {
    Bass = "bassist",
    Sing = "vocalist",
    /// etc.
}
```
