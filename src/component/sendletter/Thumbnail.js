import React from 'react';

function Thumbnail({ id, src, description }) {
  return (
    <div className="thumbnail" key={id}>
      <img src={src} alt={`thumbnail-${id}`} />
      <p>{description}</p>
    </div>
  );
}

export default Thumbnail;