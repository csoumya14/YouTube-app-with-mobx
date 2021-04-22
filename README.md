# Youtube-app-with-mobx

## Overview

This project was created as a solution for a challenge. It pulls data from api(https://www.googleapis.com/youtube/v3/). One need to generate and use an Youtube API key for the project to work

## Features

- One can select zero, one or more shows from a list of three comedy shows (youtube channels).
- There is a search button.
- If search is clicked shows from the selected shows are displayed. If no shows have been selected the application search youtube for available clips in all the shows.
- For N shows the search is performed as N asynchronous requests.

- Clips are displayed as a single interleaved list.

- In the clip list a description and date in which clip is published (in the order year,month,day) is displayed.

- The clip list is time sorted with newest shows at the top.

- The list of clips never contain more than 10 items is total.

- Each entry in the clip list contain a hide button.

- When hide button is clicked, the clip is removed.

- If one click anywhere on the clip description/date, the clip appear to the right of the clip list and the clip is immediately removed from the list.

- History of watched/hidden clips do not persist across reloads.

- Importance is given for functionality than looks as per instruction.

## Tech Used/ Dependencies

- This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

- Dependencies used includes: <br>

1.[Axios](https://www.npmjs.com/package/axios) <br>
2.[mobx](https://www.npmjs.com/package/mobx) <br>
3.[mobx-react](https://www.npmjs.com/package/mobx-react)

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

