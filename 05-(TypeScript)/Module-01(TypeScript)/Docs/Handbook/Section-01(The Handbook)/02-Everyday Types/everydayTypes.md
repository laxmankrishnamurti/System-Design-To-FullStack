# Everyday Types

In this chapter we'll learn about the fundamental types which we'll use on a daily basis or you can say these types are very common which we use in our TypeScript code. And we'll also learn about the palces where we can use these types effectively. This will be the fundamental building blocks that will help us to make complex type structure. So, this is very important to understand how these types work on which places.

With that lets get started.

## The primitives: string, number, and boolean

These are the most common primitive types that we use in our JavaScript code. In TypeScript for each of the type has a corresponding type.

- number for number
- string for string
- boolean for boolean

```ts
const age: number = 22;
const username: string = "Laxman Krishnamurti";
const isAuthorized: boolean = true;
```

**Note: String, Number, Boolean, all are legal keyword but all of these are different from the type that we have used in above code. The following types (Number, String, Boolean) are used to convert a value from one type to another**

```js
let age = 22;
age = String(age);
console.log("typeof age is", typeof age);
```

Now, age type has changed from number to string. Hence, using these keyword converts a value from one type to another. So, don't get confused always use lowercase for TypeScript.

## Array

To specify the type of an array like [1, 2, 3], we can use the syntax number[]; this syntax works for any type (e.g. string[] is an array of strings, and so on).

```ts
const marks: number[] = [85, 75, 91, 92, 89, 95];
console.log("marks", marks);
```

This syntax is also the same thing.

```ts
const marks: Array<number> = [85, 75, 91, 92, 89, 95];
console.log("marks", marks);
```

In TypeScript the syntax is generally used for _generics_ which we'll cover later on.

## any

TypeScript also has a special type _any_. This can be a worst thing in our program that we don't want to do this because it breaks(violate) the TypeScript boundry or we can say the TypeScript principles on which TypeScript stands.

Because it allows to do anything else that's syntactically legal. Lets understand it.

```ts
const userProfile: any = {
  name: "Laxman Krishnamurti",
  age: 22,
};

userProfile();
userProfile.country;
userProfile.getIpAddress();
```

Now, at this point TypeScript inference capability is get turned off because of the _any_ type and TypeScript will not thow any warning message to use because we have explicitly defined that the object is going to be _any_ type. TypeScript says- Ok!. Now, i'm not going to touch any code which is related to the _userProfile_ object but it should be syntactically valid otherwise i will thow an syntax error.

We must avoid such kind of thing to do in our codebase because it creates problems and become a threat for our application. So, use the _type_ very carefully.

**Use the compiler flag noImplicitAny to flag any implicit any as an error.**
**We don't need to explicitly define a type for a single line of variable. TypeScript will automatically inffered the type based on the value that we have assigned to the variable**

```ts
const username = "Laxman Krishnamurti"; // username: string (inffered type annotation)
```

## Functions

Funcationas are the primary means of passing data around in JavaScript. TypeScript allows use to specify the types of both the input and output values of functions.

1. **Type annotation after each parameter**

```ts
const sayHello = (name: string, date: Date) => {
  console.log(`Hello ${name}, today is ${date.toLocalDateString()}`);
};
```

- This will define what types of parameters the function accepts.
- When a parameter has a type annotation, arguments to that function will be checked means we can not pass a value which type is different from the type the function is expecting. Otherwise, TypeScript will throw a warning message.

```bash
sayHello(22, new Date())
# Argument of 'number' is not assignable to parameter of type 'string'
```

**_Even if we don't have type annotations on our parameter, TypeScript will still check that we passed the right number of arguments._**

```ts
function sayHello(name, date) {
  console.log(`Hello ${name}, today is ${date}`);
}
sayHello("Laxman Krishnamurti");
```

```bash
Warning message

Expected 2 arguments, but got 1.ts(2554)
everydayTypes.ts(7, 25): An argument for 'date' was not provided.
function sayHello(name: any, date: any): void
```

2. **Type annotations for return values**

We can also add return type annotations. Return type annotations appear after the parameter list:

```ts
function getIpAddress(requestDetails): string {
  return "192.168.16.254";
}
getIpAddress(requestObject);
```

- Actually what is happening here is we are forcing the function explicitly to return a string.

- We usually don't need a return type annotation because TypeScript will infer the function's return type based on its statements.

- Some codebases will explicitly specify a return type for documentation purposes, to prevent accidental changes, or just for personal preference.

- But we can use the explicit return type based on our use-cases, like this

```ts
function getIpAddress() {
  return "192.168.16.254";
}

const userIpAddress: number = getIpAddress();
```

```bash
warning

Type 'string' is not assignable to type 'number'.ts(2322)
const userIpAddress: number
```

Because the variable is expecting that the function will return me a number not a string so that's why TypeScript is giving a warning message by saying the Hey! this should not be done because the function is returning a string value not a number

Lets fix this..

```ts
function getIpAddress(): string {
  return "192.168.16.254";
}

const userIpAddress: string = getIpAddress();
```

**If a function is returning a Promise we can annotate like this**

```ts
async function getTotalSubscribers(): Promise<number> {
  return 10000000000;
}
```

### Anonymous Functions

If TypeScript encounter an anonymous function it uses the context to determine the type of the value. This same thing happens with _type inference_. When a function appears in a place where TypeScript can determine how it's going to be called, it used the current context for values to associate types.

```ts
const mixArr = ["laxman", 22, true];
mixArr.forEach((value) => {
  console.log("value is", value);
  console.log(typeof value.toFixed(2));
});
```

```bash
warning

Property 'toFixed' does not exist on type 'string | number | boolean'.
  Property 'toFixed' does not exist on type 'string'
```

TypeScript might be thinking that all values is of type _string_. I don't know lets take another example to analyze.

```ts
const newMix = [22, 32, "laxman krishnamurti"];
newMix.forEach(function (value) {
  console.log("value is", value);
  console.log("typeof value is", typeof value);
  console.log("fixed value", value.toFixed(2));
});
```

```bash
warning

Property 'toFixed' does not exist on type 'string | number'.
  Property 'toFixed' does not exist on type 'string'.
```

- **Contextual typing will only work if we passed a specific type of array.**

```ts
const newMix = [22, 32];
newMix.forEach(function (value) {
  console.log("value is", value);
  console.log("typeof value is", typeof value);
  console.log("fixed value", value.toFixed(2));
});
```

Now, TypeScript can infer type for every single value.

- TypeScript used the types of the _forEach_ function, along with the inferred type of the array, to determine the type _s_ will have.

- This process is called _contextual typing_ because the context that the function occurred within informs what type it should have.

## Object Types

Apart from primitives, the most common sort of type we'll encounter is an _object type._ To define an object type, we simply list the properties and their types.

```ts
function printUserDetails(user: { name: string; email: string }) {
  console.log("Hello", user.name);
  console.log("Your registered email id is", user.email);
}

const newUser = {
  name: "Laxman Krishnamurti",
  email: "laxmankrishnamurti@gmail.com",
};

printUserDetails(newUser);
```

- We can either use _,_ or _;_ to separate properties, and the last separator is optional.

- If we don't specify a type, it will be assumed to be _any_

```ts
function printUserDetails(user: { name: any; email: any }) {
  console.log("Hello", user.name);
  console.log("Your registered email id is", user.email);
}
```

**Optional Properties**

We can also mark properties to be optional

```ts
function printUserDetails(user: { name: string; email?: string }) {
  console.log("Hello", user.name);
  console.log("Your registered email id is", user.email);
}

const newUser = {
  name: "Laxman Krishnamurti",
  email: "laxmankrishnamurti@gmail.com",
};

const user = {
  name: "Harshad Mehta",
};

printUserDetails(newUser);
printUserDetails(user);
```

```bash
Both are OK!
```

- The **?** is also used for optional chaining.

- In JavaScript, if we try to access a property that dosen't exist, we'll get the _undefined_ rather than a _runtime error_.

- So, when we read from an optional property, we'll have to check for _undefined_ before using it.

```ts
function logUser(obj: { name: string; email?: string }) {
  console.log("you registered email id is", obj.email);
}
```

```bash
(property) email?: string | undefined

If value will be undefined it can crash the application. Always check for undefined we are accessing an optional property
```

Let's fix this .....

```ts
function showDetails(obj: { name: string; email?: string }) {
  if (obj.email !== undefined) {
    console.log("your registered email id is", obj.email);
  }
}
```

```bash
(property) email?: string

Now, we are good to go!
```

```ts
function logUser(obj: { name: string; email?: string }) {
  console.log("LOGUSER CALLED");
  console.log("you registered email id is", obj.email.toUpperCase());
}
```

```bash
warning

'obj.email' is possibly 'undefined'.ts(18048)
(property) email?: string | undefined
```

```ts
// A safe alternative using modern JavaScript syntax
function logUser(obj: { name: string; email?: string }) {
  console.log("LOGUSER CALLED");
  console.log("you registered email id is", obj.email?.toUpperCase());
}
```

```bash
no warnings but value can be undefined
```