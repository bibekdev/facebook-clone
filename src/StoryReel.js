import React from 'react';
import Story from './Story';
import './StoryReel.css'

function StoryReel() {
  return (
    <div className="storyReel">
      <Story
        image="/img/bibek_story.jpeg"
        profileSrc="/img/bibek.jpeg"
        title="Bibek Chaudhary"
      />
      <Story
        image="/img/subi_story.jpg"
        profileSrc="/img/subi_profile.jpg"
        title="Subina Shrestha"
      />
      <Story
        image="/img/no_story.jpeg"
        profileSrc="/img/no_profile.jpeg"
        title="Nobal Adhikari"
      />
      <Story
        image="/img/niran_story.jpg"
        profileSrc="/img/niran_profile.jpg"
        title="Niranjan Chaudhary"
      />
      <Story
        image="/img/cris_story.jpg"
        profileSrc="/img/cris_profile.jpg"
        title="Krispink Chaudhary"
      />
    </div>
  )
}

export default StoryReel
