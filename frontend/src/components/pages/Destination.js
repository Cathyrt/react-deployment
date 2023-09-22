import React, {useState, useEffect} from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import Footer from '../Footer';

export default function Destination() {

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
      <div className='destination'>
      </div>
      <div className='destination-container'>
        <div className='info-wrapper'>
          <h2>Explore the Majesty of Table Mountain in Cape Town</h2>
          <p>Experience the awe-inspiring beauty of Cape Town's most iconic natural wonder, Table Mountain. Join us for a thrilling adventure that includes hiking, exploring the unique flora and fauna, and savoring panoramic views of the city and the surrounding coastline from the summit.</p>

          <h3>Experience</h3>
          <h4>Highlights</h4>
          <ul>
            <li> Morning Ascent: Your day begins with an early morning pickup in Cape Town. You'll embark on an exhilarating journey to conquer Table Mountain, a flat-topped mountain that is a symbol of the city.</li>
            <li>Hiking Exploration: Lace up your hiking boots and set off on a guided hike to the summit of Table Mountain. Along the way, your knowledgeable guide will share insights into the mountain's geological history, indigenous plants, and local wildlife.</li>
            <li>Summit Panorama: Reach the summit and be rewarded with breathtaking panoramic views of Cape Town, the Atlantic Ocean, and the surrounding coastline. The 360-degree vistas provide the perfect backdrop for unforgettable photos and moments of wonder.</li>
            <li>Cable Car Descent: To conclude your adventure, take the Table Mountain Aerial Cableway for a scenic descent back to the city. The cable car offers additional opportunities to capture stunning views from different angles.</li>
          </ul>
          <h4>Full description</h4>
          <p>This Table Mountain adventure in Cape Town provides an incredible opportunity to immerse yourself in nature, explore a world-famous landmark, and witness the natural beauty and cultural significance of this iconic mountain.</p>
          <p>Whether you're a nature enthusiast, a hiking aficionado, or a traveler seeking a unique Cape Town experience, this journey promises to be an unforgettable exploration of Table Mountain's majesty. </p>
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
              <p className='price'>250 ZAR per person</p>
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