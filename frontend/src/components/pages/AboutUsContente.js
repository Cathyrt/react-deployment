import React from 'react';
import './AboutUsContent.css';

function AboutUsContent() {
  return (
    <div className="about-us-container">
      <h1 className="about-us-heading">About Us</h1>
      <p className="about-us-text">
      Welcome to Explore Africa, a passion project brought to life by a team of three talented frontend students.
      Our goal is to showcase the breathtaking beauty, rich cultural heritage, and diverse landscapes of the African continent through the lens of web development.
      </p>
      <h2 className='aboutus-h'>Our Mission</h2>
      <p className='about-us-text'>
      Our mission at ExploreAfrica is to inspire and enable explorers of all backgrounds to connect with the natural wonders, cultural treasures, and untold stories of the African continent. Through our platform, we aim to foster a sense of curiosity, appreciation, and respect for the diverse landscapes, wildlife, and communities that make Africa truly extraordinary.
      </p>
      <button  className='about-us-button' onClick={() => window.location.href = '/Aboutus'}>Continue Reading</button>
    </div>
  );
}

export default AboutUsContent;