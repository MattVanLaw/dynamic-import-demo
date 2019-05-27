import React from "react";

import cardPaths from './card-paths';

// export default cardPaths.map(path => {
//   const { default: Component } = require(`${path}`);

//   return <Component key={path} />;
// });

// new-school import()
async function asyncGetCards() {
    let finalArray = cardPaths.map(async path => {
        const {
          default: Component,
        } = await import(`${ path }`);
        
        return <Component key={path} />;
    });
    const pages = await Promise.all(finalArray);

    return pages;
};

export default asyncGetCards();