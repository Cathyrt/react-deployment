import React, {useState, useEffect} from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import Footer from '../Footer';
import './Destination1.css';

export default function Destination1() {
  const [numberOfPeople, setNumberOfPeople] = useState(1);
  const [selectedDate, setSelectedDate] = useState(null);
  const [showNotification, setShowNotification] = useState(false);

  const handleBookNow = () => {
    if (selectedDate) {
      // Successful booking logic
      setShowNotification(true);

      setTimeout(() => {
        setShowNotification(false);
      }, 3000);
    } else {
      
      setShowNotification(false);
      
    }
  };
  useEffect(() => {
    if (showNotification) {
      window.scrollTo(0, 0);
    }
  }, [showNotification]);
  const handleNumberOfPeopleChange = (event) => {
    setNumberOfPeople(parseInt(event.target.value, 10));
  };
 
  return (
    <>
      <div className='destination1'>
      </div>
      <div className='destination-container'>
        <div className='info-wrapper'>
          <h2>Explore the beauty of Sossusvlei Namibia</h2>
          <p>Experience the awe-inspiring beauty of Sossuvlei's most iconic natural wonders, the red dunes and the skeleton coast. Join us for a thrilling adventure that includes quad-biking in the dunes, exploring the unique flora and fauna, and savoring panoramic views of the skeleton coasts from the summits of the Big Dad and Mama red dunes.</p>

          <h3>Experience</h3>
          <h4>Highlights</h4>
          <ul>
            <li> Hot Air Ballooning: With Namib Sky Ballooning Safaris you have the unique possibility to fly over the oldest desert of the world in a hot air balloon during the cool hours  of the early morning. It is a fantastic experience and exhilarating feeling to watch the sunrise in the Namib Desert from a hot air balloon.</li>
            <li>Sossusvlei: Experience Namibia from the skies!Desert Air offers several popular scenic flights from Sossuvlei Adventure Center, located at Sossuvlei and Deadvlei, the Sesriem Canyon, the diamond camps and shipwrecks of the Skeleton Coast and beautiful scenery of the Namib sand sea.</li>
            <li>Waterkloof Trail: For visitors who love being active during their holidays the Waterkloof Trail in Sossuvlei Namibia is recommendable. The 17 kilometre long trail winds along small creeks of the Naukluft Mountains in the Namib Naukluft Park, and leads through beautiful,varying landscapes.</li>
            <li>Sossusvlei and Deadvlei: Come and experience the largest sand dunes of the world: In the middle of the Namib Desert, in the Namib Naukluft Park two of Namibia's scenic highlights can be found: the Sossusvlei and Dead Vlei .</li>
          </ul>
          <h4>Full description</h4>
          <p>This Sossusvlei adventure in the Namib Naukluft Desert provides an incredible opportunity to immerse yourself in nature, explore a world-famous landmark, and witness the natural beauty and cultural significance of this iconic desert salt pan.</p>
         <p>Whether you're a nature enthusiast, a quad-biking lover, or a traveler seeking a unique Namib Naukluft Desert  experience, this journey promises to be an unforgettable exploration of Sossusvle's majesty.</p>
        </div>
        
      
        <div className='booking-container'>
          <div className='booking-wrapper'>
            <section className='booking-info'>
            <h5>Select Date:</h5>
            <DatePicker 
            selected={selectedDate}
            onChange={(date) => setSelectedDate(date)}
            dateFormat="yyyy-MM-dd"
            />

              <h5>From</h5>
              <p className='price'>300 N$ per person</p>
            </section>
            <div className='booking-dropdown'>
              <label htmlFor='numberOfPeople'>Number of People:</label>
              <select
                id='numberOfPeople'
                name='numberOfPeople'
                value={numberOfPeople}
                onChange={handleNumberOfPeopleChange}
              >
                {Array.from({ length: 11 }, (_, i) => (
                  <option key={i} value={i}>
                    {i}
                  </option>
                ))}
              </select>
              </div>
            <button type='button' className='btn-book' onClick={handleBookNow}>
              Book now
              </button>
              <div className={`notification ${showNotification ? 'show' : ''}`}>
        Booking successful!
        </div>
          </div>
        </div>
      
      </div>
      <Footer />
    </>
  );
}

