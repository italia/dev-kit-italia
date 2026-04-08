import React from 'react';

const Video = () => {
  return (
    <>
      <h1>Video</h1>
      <div className="mb-5">
        <it-video src="https://vjs.zencdn.net/v/oceans.webm"></it-video>
      </div>
      <div>
        <it-video src="https://youtu.be/_0j7ZQ67KtY"></it-video>
      </div>
    </>
  );
};

export default Video;
