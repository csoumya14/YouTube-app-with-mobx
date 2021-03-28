//import React from 'react'
import youtubeAPI from './YoutubeApi';

export const getDataFromApi = (channelId, maxResults) => {
  return new Promise((resolve, reject) => {
    youtubeAPI
      .get('/search', {
        params: {
          channelId: channelId,
          order: 'date',
          maxResults: maxResults,
        },
      })
      .then(response => {
        if (response !== null) resolve(response.data.items); // if job finished successfully
      })
      .catch(error => {
        console.log('Error', error); // if an error occured, error is the error object
        reject(error);
      });
  });
};
//r Promise object represents the eventual completion or failure of an asynchronous operation and its resulting value

//function passed to new promise is called executor, resolve and reject are callbacks provided by javascript

// The promise object returned by new Promise has these internal properties
// state- initially pending then changes to either fulfilled when resolve is called or rejected when //reject is called.
// result - initially undefined then changes to value when reslove(value) called or error when reject(error) is called.
