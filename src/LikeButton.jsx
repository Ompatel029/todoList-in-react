import React, { useState } from 'react';

export default function LikeButton() {
  const [liked, setLiked] = useState(false);

  const toggleLike = () => {
    setLiked(!liked);
  };

  return (
    <div >
      <button onClick={toggleLike} >
        {liked ? '❤️' : '🤍'}
      </button>
      <p>{liked ? 'You liked this.' : 'Click to like.'}</p>
    </div>
  );
}
