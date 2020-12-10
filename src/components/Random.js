import React from 'react';
import useGif from '../useGif';

const Random = () => {
   const {gif,fetchGif} = useGif();

  const handleClick = () =>{
     fetchGif();
  }

return(
        <div className="container">
          <h1>Random GIF</h1>
          <img src={gif} alt="Random Gif" />
          <button onClick={handleClick}>New Gif</button>
        </div>
    );
}

export default Random;