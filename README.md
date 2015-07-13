## Lightning talk on asynchronicity in JavaScript

In this repository are three files that contain different strategies for dealing with async operations:

1. Vanilla callbacks
2. Promises
3. ES7 async/await

The purpose is demonsrate the improvements that are being made in dealing with maintainabaility and read baility in JavaScript's core language, especially when it comes to one of things that people struggle with most: asynchronicity.

### Running

All of the code is pseudo-ES6 and pseduo-browser code, which is fine for our purposes. However in order to run it you'll need to use the [Babel](http://babeljs.io/) transpiler. For the final `async/awaitz` example you'll have to use it in the following form:

    babel --stage 1 3-async-await.js

This flag enables experimental features that are at the second stage (stage 0 is first) of the spec approval process.

## Y U NO GENERATORS?

There's a conspicous lack of generators in this repo, and there's a good reason for that. The hoops you have to jump through in order to make generatoes work with async code are significant, and the resulting code is not easily grok'able. These problems are 'solved' with async/await.