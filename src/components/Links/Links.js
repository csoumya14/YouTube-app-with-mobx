import React from 'react';
import './Links.css';

const Links = ({ clipDetail, clip, handleDeleteClip }) => {
  return (
    <a
      href={`https://www.youtube.com/embed/${clip.id.videoId}`}
      target="iframe_a"
      onClick={() => handleDeleteClip(clip)}
    >
      {clipDetail}
    </a>
  );
};

export default Links;
