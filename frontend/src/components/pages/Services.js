import React from 'react';
import CardItem from '../CardItem';
import Footer from '../Footer';

import '../../App.css';
import '../Cards.css';
import './Services.css';

export default function Services() {
  return (
    <>
      <h1 className='services'>SERVICES</h1>
      <section className='heading'>
        <h2>Activities we think you would enjoy</h2>
        <div className='services-container'>
          <div className='services-wrapper'> 
          <ul className='services-items'>
            <CardItem 
              src="Eygpt.jpg"
              text="Explore the ancient pyramids of Giza"
              label="History"
              path="/services/activity"
            ></CardItem>
            <CardItem 
              src="Zanzibar.jpg"
              text="Zanzibar is a tropical paradise with beautiful beaches, historic Stone Town, and a rich cultural heritage."
              label="Luxury"
              path="/services/activity"
            ></CardItem>
            <CardItem 
              src="Capetown.jpg"
              text="Table Mountain in Cape Town offers stunning views of the city and the surrounding coastline."
              label="Adventure"
              path="/services/activity"
            ></CardItem>
            <CardItem 
              src="Namibia.jpg"
              text="Nestled within the otherworldly landscapes of Namibia's Namib-Naukluft National Park, Sossusvlei is a place of breathtaking natural beauty and stark desert contrasts"
              label="Mystery"
              path="/Destination1"
            ></CardItem>
            <CardItem 
              src="animals.jpg"
              text="Another prime destination for safari enthusiasts, the Maasai Mara is home to diverse wildlife and is famous for its annual wildebeest migration."
              label="Adrenaline"
              path="/services/activity"
            ></CardItem>
          </ul>
          </div>
        </div>
      </section>

      <section className='heading'>
        <h2>Discover the Wonders of Africa</h2>
        <div className='services-container'>
          <div className='services-wrapper'> 
          <ul className='services-items'>
            <CardItem 
              src="Zim.jpg"
              text="Victoria Fall, Zimbabwe"
              label="Africa"
              path="/services/activity"
            ></CardItem>
            <CardItem 
              src="Capetown.jpg"
              text="Cape Town, South Africa"
              label="Africa"
              path="/services/activity"
            ></CardItem>
            <CardItem 
              src="Eygpt.jpg"
              text="Pyramidsof Giza,Eygpt"
              label="Africa"
              path="/services/activity"
            ></CardItem>
            <CardItem 
              src="Zanzibar.jpg"
              text="Zanzibar, Tanzania"
              label="Africa"
              path="/services/activity"
            ></CardItem>
            <CardItem 
              src="animals.jpg"
              text="Maasai Mara, Kenya"
              label="Africa"
              path="/services/activity"
            ></CardItem>
          </ul>
          </div>
        </div>
      </section>
      <Footer />
    </>
  
  
  );
}