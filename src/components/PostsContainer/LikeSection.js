import React, { useState } from 'react';

const LikeSection = props => {
  // console.log(props.likes);
  const [likes, setLikes] = useState(props.likes);

  const handleLikes = () => {
    setLikes(likes + 1);
    // console.log(likes);
  }
  return (
    <div>
    <div
      className="like-section"
      key="likes-icons-container"
    >
      <div className="like-section-wrapper">
        <i className="far fa-heart" onClick={handleLikes} />
      </div>
      <div className="like-section-wrapper">
        <i className="far fa-comment" />
      </div>
    </div>
    <p className="like-number">
      
     {likes} likes</p>
</div>
  )
};

export default LikeSection;
