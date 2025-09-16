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

# Interfaces and Generics

## What are Interfaces for?

On the day you need to drive a screw, you will understand the screwdriver - need to use a tool to understand it.

An interface guarantees that certain methods or properties are in palce so that something else can call them in order to get its work done.

ILogger - a commonly used interface

Two methods, LogEvent, LogException

Ship with a text logger, XML, JSON, and maybe db. I can try to predict what users might need...
But there will always be needs you cannot predict
Better to let them roll their own
"Create observable evidence"
Logged, but...where?
You might transport the logs to a central server
Or just broadcast directly to the EventHub in the first place

## Demo - Third Party TS Interface

Typescript accepts (compiles) a subset of the Interface (less parameters), but not a superset (more arguments than expected)

Does not accept function overloading (more params)

TypeScript is Structurally Typed (only care about members not arguments) vs. Nominally Typed (for deeper dive)

### What is the difference between an interface and an abstract class?

- Classic interview question!

Answer: Implementation!!!

- Abstract classes actually have code (or can have code in them)

## Generics

Getting away from "Any"

```ts
function write(contents: string) {
  //do stuff
}

write(1234);
// NOpe

function writeNumber(contents: number) {
  // do stuff
}

function writeBool(contents: Boolean) {
  // do stuff
}

// and on and on
// OR
function write(contents: any); // we want to avoid this! Losing the information about this type.
```

Generics simple arguments

```ts
function write<Type>(arg: Type) {
  // write type-specific stuff
}

write<String>("Niki");
write<Number>(1);
write<Boolean>(true);
```

Use generics when you want the benefits of typing but you want to defer the decision about the typing to the other developer

## Generics Demo

ICommand

```ts
export interface ICommand {
  execute();
}

// StandUpCommand, SitDownCommand, WalkAcrosstheRoomCommand

class invoker {
  executeCommand(command: ICommand) {
    command.execute();
  }
}
```

Duck Typing and Generics

- Something else with an execute(something). Not strictly implementing the ICommand interface. Duck-typing
- Having the same methods, TypeScript can make it happen.

GenericInvoker.ts

```ts
export class Invoker {
  executeCommand<Type extends ICommand>(command: Type) {
    command.execute();
  }
}
```

# Choosing Configuration and Compilation Options

## Intro

Started ground up, how people generally learn alone.

Limits of this approach

- Ideal framework is entirely intuitive and lore-free system. That's just not realistic. Need to learn "on the job".
- Hopefully before was a firm foundation

Details from here on out

## Running the Compiler and Compilation Options

Here's what we know. "translate" code. No execution of TS without transpilation (maybe a package that does this).

A good understanding of the transpilation process.

- Read the file
- Enforce the rules
- And translate it into a syntax tree.
- A form independent of the language (could in theory translate to any lang).
- Static analysis and more rules to enforce

## Demo: A closer look at our transpilation

Look at the abstract syntax tree

https://ts-ast-viewer.com/

https://ts-ast-viewer.com/#code/KYDwDg9gTgLgBAYwDYEMDOa4AVhTRAOwG8AoOcuAfQJQFtgAuONGKASwIHMBuMiylJ0ZwCAV1oAjXLz7kEhFlFEIY0ABQ16TRR04AaOIOFjJuAJSkKVuDAAWbNADpNwOAF4RdYL2sU7DxyN3QyEfCgBfElk4IXgXNQtoqyhgGFEoAht7J2ovMPJI6LRUz3o1ADcUJFFhHS5E33J-HJdgyurvaMKrWJDgBMtGlLSMrICBUK6oq2L4IwqqmqYTKSgGxrYAMzUAQhw8QkcHADUqtgATAEEhBY6zdca-WygIAHcRYHeAUSgXqDUAEQAFVsKHg7RqcAA5AC4ABqOAQ1wIgFQuAOEQQOaIs7nPqOAFmJIRaaNZqOCauDxI-JwboUFhgtgIdFoU5IC7XVy3GpmJgAIQgECQwBQxGJ5GG6UySLgAD4PAAGOAAMhVOI6cAAPB4AIwAJkVtMi4SAA

## Configuring your project with tsconfig files

### go-tos

- target - What specific JS version will it emit too
- module - What code will be emitted to make this available as a module. commonJS is old. ESnext is recommendation. For node - NodeNext.
- allowJs - whether JS is allowed in your TS project
- removeComments - recommend keeping these (false)
- newline - what newline character is emitted when code is compiled CRLF or LF.
- forceconsistent casing in file name - Linux vs. Windows - Windows Person.ts == person.ts. Linux this does not work. Make goal to get to true.
- strict - try to always make it true, maybe set it to false while you get stuff straightened out. An umbrella option. Turn on as many of the options as you can at least.

## Demo: working with tsconfig files

## Using Type Declaration Files

Two definitions of code we need:

- Runtime code
- A type definition (at design and compile time)

Third-party libraries only guarantee runtime code

The Good News - many package are including type definitions. Any at runtime (functionally). Generating type definitions is trivial when you're working in TS.

The Better News - You can usually get type definitions somewhere else (https://github.com/definitelytyped).

- `npm install - save-dev @types/react`

Where that will get you - pretty far
A major library either supplied or supported
A narrow window for one with no support

## Demo: Inferring Types from Type Declaration Files

- How to generate type definition files
  - Manually `tsc --declaration employees.ts` - not generally how you do in real world
  - `"declaration": true`, in tsconfig
- To sit along your emitted JavaScript
- Untyped - a simple JavaScript module Beherns created
- How we can get type definitions available
- Use strong typing in TypeScript

## Review

Compilation API magic - the abstract syntax tree that the compiler generates

The details of the compiler options in tsconfig

The other options like file, include and exclude in tsconfig

All about type declarations

- How to consume them
- How to get them
- How to create them manually at a last resort

# Migrating a JavaScript Application to TypeScript

## Gang of Four Patterns

Patterns are tactics. Observe circumstances and derive the tatics from that.

### The Patterns

- Observer - subject that maintains a list of objects, when state changes the observers are all notified and can react accordingly
- PubSub - Subscribers listen to a channel and react to changes

### The Three Observers

- Node server IoT data feeding to chart

- Chart
- Table
- Console

The Base Observer

- receiveNotification
  It will receive a dataPatcket (at first)

Three observers:

- ChartObserver
- TableObserver
- ConsoleObserver

Adding a new one later on is very easy

We are refactoring

Moving from one working system to another

Refactored to Observer pattern for the client app and added in TypeScript. I may need to watch this over again to really grok it... Didn't dwell much on the TypeScript parts, seemed more OOP focused.
