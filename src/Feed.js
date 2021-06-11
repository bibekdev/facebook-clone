import React from 'react';
import StoryReel from './StoryReel';
import MessageSender from './MessageSender';
import Post from './Post';
import './Feed.css';

function Feed() {
  return (
    <div className="feed">
      <StoryReel />
      <MessageSender />
      <Post
        profilePic="/img/subi_profile.jpg"
        username="Subina Shrestha"
        timestamp="8:30AM Friday"
        message="Killer Queen"
        image="/img/subi_story.jpg"
      />
      <Post
        profilePic="/img/no_profile.jpeg"
        username="Nobal Adhikari"
        timestamp="5:30AM Friday"
        message="Rs.5 Cosplay. Am I mad or what? Please someone take me to mental hospital"
        image="/img/no_story.jpeg"
      />
      <Post
        profilePic="/img/no_profile.jpeg"
        username="Nobal Adhikari"
        timestamp="5:30AM Friday"
        message="Is there any difference between me and Hippopotamus??"
        image="/img/hipo.jpeg"
      />
      <Post
        profilePic="/img/cris_profile.jpg"
        username="Krispink Chaudhary"
        timestamp="5:30AM Friday"
        message="The Show must go on"
        image="/img/cris_story.jpg"
      />
      <Post
        profilePic="/img/niran_profile.jpg"
        username="Niranjan Chaudhary"
        timestamp="5:30AM Friday"
        message="Hammer to fall"
        image="/img/niran_story.jpg"
      />
      <Post
        profilePic="/img/bibek.jpeg"
        username="Bibek Chaudhary"
        timestamp="5:30AM Friday"
        message="Coding is way to live...."
        image="/img/code.png"
      />

    </div>
  )
}

export default Feed;
