# Dynamic Import Demo

## Description

This app demonstrates an implementation of frontend code, where components are dynamically required. This is meant to support a system where contentIDs are fetched and mapped to Components in the application via filepaths.

## WIP Import():

`require()` isn't meant to dynamically import modules. `import()` is meant to dynamically import modules. The main problem I'm running into is that `import()` returns a Promise, and I haven't figured out how to iterate over resolving promises correctly.

Here's a [potential solution](https://itnext.io/https-medium-com-popov4ik4-what-about-promises-in-loops-e94c97ad39c0) I'm going to try out, where we map an array to pending promises then await resolving all promises in a single async function.

[bluebird](https://github.com/petkaantonov/bluebird) is also a crazy-popular library that extends Promises with convenience methods like map, which may be important as we improve and expand our dynamic importing code.
