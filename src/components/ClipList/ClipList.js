import React from 'react';
import { observer } from 'mobx-react';
import VideoClip from '../VideoClip/VideoClip';
import DescriptionAndDateList from '../DescriptionAndDateList/DescriptionAndDateList';

const ClipList = ({ store }) => {
  return (
    <div>
      <VideoClip />
      <DescriptionAndDateList store={store} />
    </div>
  );
};

export default observer(ClipList);
