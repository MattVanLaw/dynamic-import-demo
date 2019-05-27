# Dynamic Import Demo

## Description

This app demonstrates an implementation of frontend code, where components are dynamically required. This is meant to support a system where contentIDs are fetched and mapped to Components in the application via filepaths.

There are two ways to import pages in this application: `require()` or `import()`.

The import() code is based off of [this medium post](https://itnext.io/https-medium-com-popov4ik4-what-about-promises-in-loops-e94c97ad39c0).

[bluebird](https://github.com/petkaantonov/bluebird) is also a crazy-popular library that extends Promises with convenience methods like map, which may be important as we improve and expand on our dynamic code.
