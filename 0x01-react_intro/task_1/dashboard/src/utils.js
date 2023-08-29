import React from 'react';

export function getFullYear() {
  const d = new Date();
  let year = d.getFullYear();
  return <span>{year}</span>;
}

export function getFooterCopy(isIndex) {
  return (
    <span>
      {isIndex ? 'Holberton School' : 'Holberton School main dashboard'}
    </span>
  );
}

// export default { getFullYear, getFooterCopy };
