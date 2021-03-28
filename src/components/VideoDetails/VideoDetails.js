import React from 'react';
import Button from '../Button/Button';
import Links from '../Links/Links';

const VideoDetails = ({ clip, handleDeleteClip }) => {
  return (
    <li className="list-items">
      <Links
        clipDetail={clip.snippet.description}
        clip={clip}
        handleDeleteClip={handleDeleteClip}
      />
      <Links
        clipDetail={new Date(clip.snippet.publishTime).toISOString().split('T')[0]}
        clip={clip}
        handleDeleteClip={handleDeleteClip}
      />
      <Button clip={clip} handleDeleteClip={handleDeleteClip} />
    </li>
  );
};

export default VideoDetails;
