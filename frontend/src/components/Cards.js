import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Discover the Wonders of Africa</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='Eygpt.jpg'
              text='Explore the ancient pyramids of Giza'
              label='History'
              path='/services'
            />
            <CardItem
              src='Zanzibar.jpg'
              text='Zanzibar is a tropical paradise with beautiful beaches, historic Stone Town, and a rich cultural heritage.'
              label='Luxury'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='Capetown.jpg'
              text='Table Mountain in Cape Town offers stunning views of the city and the surrounding coastline.'
              label='Adventure'
              path='/services'
            />
            <CardItem
              src='Rwanda.jpg'
              text='For a once-in-a-lifetime experience, consider trekking to see mountain gorillas in the forests of Rwanda.'
              label='Mystery'
              path='/products'
            />
            <CardItem
              src='animals.jpg'
              text='Another prime destination for safari enthusiasts, the Maasai Mara is home to diverse wildlife and is famous for its annual wildebeest migration.'
              label='Adrenaline'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;