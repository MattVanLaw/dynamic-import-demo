import React from 'react';

import pagePaths from './page-paths';

// old-school require
// export default pagePaths.map(path => {
//   const { default: Component } = require(`${ path }`);

//   return <Component />;
// });

// new-school import()
async function asyncGetPages() {
    let finalArray = pagePaths.map(async path => {
        const {
          default: Component,
        } = await import(`${ path }`);
        
        return <Component />;
    });
    const pages = await Promise.all(finalArray);

    return pages;
};

export default asyncGetPages();