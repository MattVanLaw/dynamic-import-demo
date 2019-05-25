import React from "react";

import cardPaths from './card-paths';

export default cardPaths.map(path => {
  const { default: Component } = require(`${path}`);

  return <Component key={path} />;
});
