import { Avatar } from '@material-ui/core';
import { ChatBubbleOutline, NearMe, ThumbUp, AccountCircle, ExpandMoreOutlined } from '@material-ui/icons';
import React from 'react';
import './Post.css';

function Post({ profilePic, image, username, timestamp, message }) {
  return (
    <div className="post">
      <div className="post__top">
        <Avatar src={profilePic} className="post__avatar" />
        <div className="post__topInfo">
          <h3>{username}</h3>
          <p>{timestamp}</p>
        </div>
      </div>
      <div className="post__bottom">
        <p>{message}</p>
      </div>
      <div className="post__image">
        <img src={image} />
      </div>
      <div className="post__options">
        <div className="post__option">
          <ThumbUp />
          <p>Like</p>
        </div>
        <div className="post__option">
          <ChatBubbleOutline />
          <p>Comments</p>
        </div>
        <div className="post__option">
          <NearMe />
          <p>Share</p>
        </div>
        <div className="post__option">
          <AccountCircle />
          <ExpandMoreOutlined />
        </div>
      </div>
    </div>
  )
}

export default Post
