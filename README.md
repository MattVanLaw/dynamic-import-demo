# Dynamic Import Demo

## Description

This app demonstrates an implementation of frontend code, where components are dynamically required. This is meant to support a system where contentIDs are fetched and mapped to Components in the application via filepaths.

## `Problem`

`require()` isn't meant to dynamically import modules. `import()` is meant to dynamically import modules. The main problem I'm running into is that `import()` returns a Promise, and I haven't figured out how to iterate over resolving promises correctly.
