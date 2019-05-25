import React from 'react';

import pagePaths from './page-paths';

export default pagePaths.map(path => {
  const { default: Component } = require(`${ path }`);

  return <Component />;
});
