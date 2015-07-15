## Lightning talk on asynchronicity in JavaScript

In this repository are three files that contain different strategies for dealing with async operations:

1. Vanilla callbacks
2. Promises
3. ES7 async/await

The purpose is demonsrate the improvements that are being made in dealing with maintainabaility and read baility in JavaScript's core language, especially when it comes to one of things that people struggle with most: asynchronicity.

### Running

In order to run it you'll need to use the [Babel](http://babeljs.io/) transpiler (and Node). You can run the examples in the following way:

```
babel-node --stage 0 1-callbacks.js
babel-node --stage 0 2-promises.js
babel-node --stage 0 3-async-await.js
```

## Y U NO GENERATORS?

There's a conspicous lack of generators in this repo, and there's a good reason for that. The hoops you have to jump through in order to make generatoes work with async code are significant, and the resulting code is not easily grok'able. These problems are 'solved' with async/await.