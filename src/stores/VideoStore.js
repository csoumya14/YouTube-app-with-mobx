import { getDataFromApi } from '../services/FetchData';
import { makeAutoObservable } from 'mobx';
import { findMaxResult } from './Constants';

export default class VideoDetailStores {
  videoDetails = [];
  convertArray = [];
  hiddenVideoDetails = [
    {
      channel_id: 'UCVTyTA7-g9nopHeHbeuvpRA',
      hiddenVideoId: [],
    },
    {
      channel_id: 'UCwWhs_6x42TyRM4Wstoq8HA',
      hiddenVideoId: [],
    },
    {
      channel_id: 'UCMtFAi84ehTSYSE9XoHefig',
      hiddenVideoId: [],
    },
  ];

  constructor(rootStore) {
    this.rootStore = rootStore;
    makeAutoObservable(this);
  }

  modifyArray = videosDetails => {
    this.convertArray = videosDetails
      .sort((a, b) => {
        var dateA = new Date(a.snippet.publishedAt);
        var dateB = new Date(b.snippet.publishedAt);
        return dateB - dateA;
      })
      .slice(0, 10);
    return this.convertArray;
  };

  hideClip(item) {
    const filteredItem = this.convertArray.findIndex(video => video.id.videoId === item.id.videoId);
    if (filteredItem > -1) {
      this.convertArray.splice(filteredItem, 1);
    }
  }

  addHiddenClipIdToHiddenVideoDetails = item => {
    const toBeHidden = this.hiddenVideoDetails.find(
      videoItem => videoItem.channel_id === item.snippet.channelId,
    );
    const hiddenVideo = {
      ...toBeHidden,
      hiddenVideoId: [...toBeHidden.hiddenVideoId, item.id.videoId || item.id.playlistId],
    };
    this.hiddenVideoDetails = this.hiddenVideoDetails.map(v =>
      v.channel_id !== item.snippet.channelId ? v : hiddenVideo,
    );
  };

  handleDeleteClip = videoItem => {
    this.hideClip(videoItem);
    this.addHiddenClipIdToHiddenVideoDetails(videoItem);
  };

  handleSubmit = event => {
    event.preventDefault();
    this.getVideoDetailsAsync(findMaxResult(this.rootStore.selectStore.chosenOption));
  };

  async getVideoDetailsAsync(maxResult) {
    let ids = [];
    const hiddenvideoIdsForChosenShow = this.hiddenVideoDetails.filter(obj => {
      return this.rootStore.selectStore.chosenOption.includes(obj.channel_id);
    });

    const arrayOfHiddenVideoIds = [
      ...new Set(
        [].concat(...this.hiddenVideoDetails.map(videoDetail => videoDetail.hiddenVideoId)),
      ),
    ];

    this.rootStore.selectStore.chosenOption.length === 0
      ? (ids = this.hiddenVideoDetails)
      : (ids = hiddenvideoIdsForChosenShow);

    ids.forEach(id => {
      getDataFromApi(id.channel_id, maxResult + id.hiddenVideoId.length)
        .then(videos => {
          this.videoDetails.push(videos);
          this.videoDetails = this.videoDetails.flat();
          const convertArrayWithoutHiddenIds = this.videoDetails.filter(
            item => !arrayOfHiddenVideoIds.includes(item.id.videoId || item.id.playlistId),
          );
          this.modifyArray(convertArrayWithoutHiddenIds);
        })
        .catch(error => {
          console.log(error);
        });
    });
  }
}
