import React from 'react';
import './DescriptionAndDateList.css';
import VideoDetails from '../VideoDetails/VideoDetails';
import { observer } from 'mobx-react';

const DescriptionAndDateList = ({ store }) => {
  return (
    <ul className="ul-list">
      {store.convertArray.map(clip => (
        <VideoDetails
          key={Math.random().toString(36).substr(2, 9)}
          clip={clip}
          handleDeleteClip={store.handleDeleteClip}
        />
      ))}
    </ul>
  );
};

export default observer(DescriptionAndDateList);
