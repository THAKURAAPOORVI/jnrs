import React from 'react';
import './Css/Hotels.css';
import { useLocation } from 'react-router-dom';

const Hotels = () => {
  // get data form MainHotels page
  const getData = useLocation();

  let imageData = `https://api.jnrs.in${getData.state.Hotal_images1}`;
  let imageData1 = `https://api.jnrs.in${getData.state.bedroom_images1}`;
  let imageData2 = `https://api.jnrs.in${getData.state.bedroom_images2}`;

  return ( 
    <>
      {/* Banner */}
      <section className='hotel-background'>
        <div className='container'>
          <div className='row'>
            <div className='col-12'>
              <div className='banner-content'>
                <h1 className='bann-heading'>{getData.state.Hotal_Name}</h1>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Inner Content */}
      <div className='hotel-content my-5'>
        <div className='container'>
          <div className='row'>
            <div className='col-12'>
                <div className='row hh-inner'>
                  <div className='col-lg-6 col-md-6 col-sm-12 col-xs-12 p-0'>
                    <div className='img-box'>
                      <img className='img-fluid w-100 main-image' src={imageData} alt={getData.state.Hotal_Name}></img>
                    </div>
                  </div>
                  <div className='col-lg-6 col-md-6 col-sm-12 col-xs-12'>
                    <div className='img-box-content'>
                      <p className='hotel-type m-0'>{getData.state.Hotel_Type}</p>
                      <p className='hotel-name'>{getData.state.Hotal_Name}</p>
                      <p className='hotel-price m-0'><b>Price</b></p>
                      <div className='price-box d-flex'>
                        <p className='me-3'><b>Deluxe :</b> ₹{getData.state.hotal_new_price}</p>
                        <p><b>Premium :</b> ₹{getData.state.hotal_new_price_premium}</p>
                      </div>
                      <p className='hotel-location'>Location : {getData.state.Hotal_Location}</p>
                    </div>
                    <div className='inner-img-box d-flex'>
                      <div className='img-box-1 m-2'>
                      <img className='img-fluid w-100' src={imageData1} alt={getData.state.Hotal_Name}></img>
                      </div>
                      <div className='img-box-2 m-2'>
                      <img className='img-fluid w-100' src={imageData2} alt={getData.state.Hotal_Name}></img>
                      </div>
                    </div>
                  </div>
                </div>
              <div className='h-inner'>
                <p className='text-white mt-3'>{getData.state.hotal_discreption}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Hotels
