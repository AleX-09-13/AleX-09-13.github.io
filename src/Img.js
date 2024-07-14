import React from 'react';

import myImg from './assets/cat.jpg';

const Img = () => {
  const myImage = myImg;
  return (
    <div >
      <img src={myImage} alt='Img' width='200' height='200' />
    </div>
  );
};
export default Img;
