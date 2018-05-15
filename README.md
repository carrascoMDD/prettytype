# prettytype

[https://www.npmjs.com/package/prettytype](https://www.npmjs.com/package/prettytype)

[https://github.com/carrascoMDD/prettytype](https://github.com/carrascoMDD/prettytype)

_&quot;Multi-platform Javascript ES5 coding patterns and base super-prototypes, for write-once, run and test everywhere (angularjs, requirejs, nodejs). Reused i.e. in the SpringNut.org example._ [_http://www.springnut.org/springnut_](http://www.springnut.org/springnut) , government projects like the administration and instrumentation UI, and the end-2-end testing of the Official REgistry of Causes of Death of the Valencia regional government. Reused also in the offline extension of iGEO ERP environmental health app. _&quot;_

## Motivation

### To postpone indefinitely the decision of platform for JS logic

Being able to write pieces of logic in Javascript, once, and for all platforms and module definition standards, such that the decision of where to deploy an specific assembly of functionality - whether in the server or the browser, and under which module definition standard, can be postponed forever, or changed upon a whim, or dynamically.

### To help decide on ES6 and Typescript adoption

By supplying a concrete implementation in ES5 to evaluate complexity, cost and risk of implementations in ES5 with i.e. the few simple patterns in prettytype, as compared with implementations in ES6 not fully supported in all platforms, or strongly mediated by libraries or transpilers.

### To debunk arguments pro-browserify and pro-transpiler

By showing how multi-platform can be achieved with a much lighter-weigh approach.

### To reuse module and prototype patterns and supertypes

To serve as base coding patterns for multi-platform JavaScript developments, and optionally as reusable super-prototypes contributing basic facilities out of the box.

### To showroom multi-platform module and prototype definitions

Full, testable implementations on how to implement multi-platform modules, prototypes and inheritance with plain JavaScript (ES5).

## Goals

### Native un-mediated scaffolding

To secure a native JavaScript approach for package, module, constants, globals, configuration and overrides, singleton, prototype, constructors, super-constructors and specialisation, not mediated through any library or source code transpiling.

### Multi-platform JavaScript logic

To enable write-once, run everywhere, interface with whoever, for logic in JavaScript, to be loaded and re-used through the major module definition standards on the major javascript platforms.

### Multi-platform JavaScript tests

To enable write-once, run everywhere for tests of logic above in JavaScript, to be loaded through the major module definition standards, and runnable through the test automation engines leading in each platform

### Human-accessible, debuggable code

That a programmer may breakpoint in meaningful, no-magic places, and just step through the initialisations in self-documented, intention-revealing code.

## Features

### Native most widely supported ES5

ECMAScript 5 JS 1.8.5 March 2011

### Multi-platform Module definition and Dependency Injection

The same source code with module definitions and dependency injections can be loaded and executed through the major module definition technologies for the server and the browser, directly and without relying on any library or any source code transformation.

#### Module definition standards

- nodejs
- angularjs (1.x)
- RequireJS (AMD)

#### Platforms

- Server: nodejs all versions from 0.10.x and later
- Browser: Chrome, Firefox,Opera, Safari, edge, headless, Phantom

##### not browserify

browserify may also be considered its own module definition standard and platform, because in all its efforts to facilitate portability across platforms and module definition standards, introduces a rich, full-featured toolset and pipeline, not without its own quirks and learning curve. [http://browserify.org/](http://browserify.org/)

prettytype gets rid of all such machinery, by directly supporting the most popular platforms and module definition standards by just using a few syntactical patterns, as described in the section &quot;Implementations&quot; below, and available in source and test code in GitHub [https://github.com/carrascoMDD/prettytype](https://github.com/carrascoMDD/prettytype)

> It is left as an exercise for the curious or motivated, to process prettytype or its re-utilisations through browserify machinery. Potential issues may be, among others: how to ensure that browserify interprets prettytype input code as pertaining to one of its 3 different platform &quot;faces&quot; ? Note that all module definition standards are used in the same code, and static code analysis may reveal to browserify machinery that various/all the supported module definition standards are in use in the code, thus potentially becoming difficult for browserify machinery to perform proper code transformation and assembly.
