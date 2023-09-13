import React from "react";
import './Css/Promotio.css'

const Promotion = () => {
    return (
        <>
            <div style={{ backgroundColor: "black" }} >
                <h2 className="topText m-0 py-4">Promotion of Hotel/Resorts Marketing via various Domestic Exhibition Platforms</h2>
                <div className="whiteimg">
                    {/* <div className="imgeMain" > */}
                    <div className="handleimg">
                        <img alt="promotion-images" src="../picture/SATTE 2.png" className="imgw" />
                        <img alt="promotion-images" src="../picture/iitm 1.png" className="imgw" />
                        <img alt="promotion-images" src="../picture/TTF_Logo_uTaOCB1 1.png" className="imgw" />
                        <img alt="promotion-images" src="../picture/OTM_Logo 1.png" className="imgw" />
                        <img alt="promotion-images" src="../picture/logo 1.png" className="imgw" />

                    </div>
                    {/* </div>  */}
                </div>

                <div>
                    <h3 style={{ color: "white", textAlign: "center", marginTop: '30px' }}>DOMESTIC VENUE</h3>
                </div>

                <div className="twoboxmain">
                    <div className="box">
                        <h3 className="boxText1">PLATINUM VENUE</h3>
                        <h3 className="boxText">Delhi</h3>
                        <h3 className="boxText">MUMBAI</h3>
                        <h3 className="boxText">kOLKATA</h3>
                        <h3 className="boxText">BANGLORE</h3>
                        <h3 className="boxText">CHENNAI</h3>
                    </div>

                    <div className="box2">
                        <h3 className="boxText1">PREMIUM VENUE</h3>
                        <h3 className="boxText">PUNE</h3>
                        <h3 className="boxText">SURAT</h3>
                        <h3 className="boxText">AHMEDABAD</h3>
                        <h3 className="boxText">KOCHI</h3>
                        <h3 className="boxText">HYDERABAD</h3>
                    </div>
                </div>

                <div className="textonly">
                    <div className="handlep">
                        <h3 className="textp">
                            Promotion of Hotel/Resorts Marketing via various International Exhibition Platforms
                        </h3>
                    </div>
                </div>

                <div className="imgeMain">
                    <div className="handleimg2">
                        <img alt="promotion-images" src="../picture/SATTE 3.png" className="imgw2" style={{ marginLeft: '25px' }} />

                        <img alt="promotion-images" src="../picture/iitm 2.png" className="imgw2" />
                        <img alt="promotion-images" src="../picture/TTF_Logo_uTaOCB1 2.png" className="imgw2" />
                        <img alt="promotion-images" src="../picture/OTM_Logo 2.png" className="imgw2" />
                        <img alt="promotion-images" src="../picture/logo 2.png" className="imgw2" />

                    </div>
                </div>
                <div className="interMain">
                    <h2 className="inter">INTERNATIONAL VENUE</h2>
                </div>


                <div className="twoboxmain">
                    <div className="box">
                        <h3 className="boxText1">PLATINUM VENUE</h3>
                        <h3 className="boxText">LONDON (UK)</h3>
                        <h3 className="boxText">PARIS (FRANCE)</h3>
                        <h3 className="boxText">MONTREAL (CANADA)</h3>
                        <h3 className="boxText">LOS ANGELES (USA)</h3>
                        <h3 className="boxText">SAO PAULO (BRAZIL)</h3>
                    </div>

                    <div className="box2">
                        <h3 className="boxText1">PREMIUM VENUE</h3>
                        <h3 className="boxText">MADRID (SPAIN)</h3>
                        <h3 className="boxText">DUBAI (UAE)</h3>
                        <h3 className="boxText">CAPE TOWN (SOUTH-A)</h3>
                        <h3 className="boxText">ISTANBUL (TURKEY)</h3>
                    </div>
                </div>
            </div>

            <section className="coporate-content mt-5">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="content-box">
                <h1 className="heading-1">Discover the Best Hotel Promotion and Resorts</h1>
                <p className="coporate-para">Looking for the perfect getaway? Look no further than our amazing selection of hotels and resorts. Whether you're looking for a luxurious beachfront resort or a cozy mountain cabin, we've got you covered.</p>

                <h2 className="heading-2">Special Offers and Promotions</h2>
                <p className="coporate-para">At our hotels and resorts, we believe in making your stay as enjoyable as possible. That's why we offer a range of special promotions and discounts, from weekend getaway deals to all-inclusive packages. Check out our latest offers and start planning your dream vacation today.</p>
                
                <h2 className="heading-2">Luxurious Amenities</h2>
                <p className="coporate-para">At our hotels and resorts, we pride ourselves on providing top-notch amenities and services to our guests. From spa treatments and gourmet dining to outdoor activities and entertainment, we offer everything you need for an unforgettable vacation experience.</p>
                <p className="coporate-para">So why wait? Book your stay at one of our amazing hotels or resorts today and start making memories that will last a lifetime. And don't forget to check back often for the latest hotel promotion and resort deals.</p>
                

              </div>
            </div>
          </div>
        </div>
      </section>
        </>
    );
}
export default Promotion; 