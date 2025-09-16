import React from 'react';

const Video = () => {
  return (
    <div style={{ width: '600px' }}>
      <h1>it-video</h1>
      <div className='mb-5'>
        <it-video src='https://vjs.zencdn.net/v/oceans.webm'></it-video>
      </div>
      <div>
        <it-video src='https://youtu.be/_0j7ZQ67KtY'></it-video>
      </div>
    </div>
  );
};

export default Video;
