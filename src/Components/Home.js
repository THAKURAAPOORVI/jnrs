import React, { useState } from "react";
import './Css/home.css';
const Home = () => {
    // variables
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [subject, setSubject] = useState();
    const [phone, setPhone] = useState();
    const [message, setMessage] = useState();

    // combine variables
    const data = {name, email, subject, message };

    // send data throungh api
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('https://api.jnrs.in/email-send/', {
                method: 'POST',
                body: JSON.stringify(data),
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            const result = await response.json();
            if(result){
                window.location.reload();
                }
            // console.log(result);
        } catch (error) {
            console.log(error)
            console.log('Api not hit properly')
        }

    }
    return (
        <>
            <div style={{ color: 'white', backgroundColor: 'black', }}>
                <div className="row g-0" style={{ padding: '26px' }}>
                    <div class="col-md-7">
                        <div class="card-body">
                            <h5 class="card-title" style={{ fontSize: '30px' }}><b>JNRS Infrastructure Pvt Ltd</b></h5>
                            <p class="card-text textstype">
                                JNRS Infrastructure Pvt Ltd is a leading provider of personalized tourism experiences and event management services for individuals and corporations. We specialize in creating tailor-made tour packages, providing digital marketing services for hotels and resorts, and offering hotels and resorts leasing and operations management services. With years of experience in the industry, we have built a reputation for providing exceptional hospitality services that exceed our clients' expectations over 50 locations across the country and also over international destinations. JNRS has direct touch with over 10000 Hotels & Resorts with 5 lakh rooms inventory availability and 100 + luxurious banquets over 100 Destination locations across the country. JNRS takes pride in its professional leadership TEAM having proven track record for mitigating Hospitality industry risk while providing above average investment RETURNS.
                            </p>

                        </div>
                    </div>
                    <div class="col-md-5">
                        <img style={{ width: '70%' }}
                            // style={{ borderRadius: '45%', width: '76%', padding: '8px', border: "dashed 5px white" }} 
                            src="../picture/homeM.png" class="img-fluid rounded-start" alt="..." />
                    </div>
                </div>
                <img src="../picture/Group104.png" style={{ marginTop: "22px", width: '100%' }} class="img2" alt="..." />

                <div className="homehandle" >
                    <h3>Mission Statement :-</h3>

                    <div class="text-center">
                        <img style={{ marginTop: '38px', marginBottom: '63px' }} src="../picture/Group 53 (2).png" class="rounded" alt="..." />
                    </div>

                    <h2 style={{ color: "#F8704A", marginBottom: '34px' }}>JNRS Principles</h2>

                    <div class="text-center">
                        <img style={{ marginBottom: '84px' }} src="../picture/Group 54 (1).png" class="rounded" alt="..." />
                    </div>

                    <h1 style={{ color: "#F8704A", textAlign: "center" }}>JNRS Value</h1>
                    <h5 style={{ textAlign: 'center', marginTop: '30px' }}>JNRS is driven by a set of values that are the foundationfor providing genuine hospitality to our guests.Each of our employees pledge to uphold these Values every day </h5>

                    <div class="text-center">
                        <img src="../picture/Group 48 (1).png" class="rounded" alt="..." />
                    </div>
                    <div className="imgtextonly">
                        <h4>
                            To have every person associated with JNRS benefit from its relationship & have respect for its connection
                        </h4>
                        <img style={{ marginTop: '25px', marginBottom: '39px' }} src="../picture/Group 57 (1).png" class="imgg4" alt="..." />
                    </div>
                    <img style={{}} src="../picture/Group 80.png" class="imgg5" alt="..." />
                    <h2 style={{ marginTop: '52px', textAlign: 'center', marginBottom: '66px' }}>Why JNRS ?</h2>
                    <img src="../picture/Group 30 (1).png" class="imgg8" alt="..." />
                </div>
            </div>

            <section className="home-contact py-5">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-7 col-md-6 col-xs-12 col-sm-12 contact-info" style={{display:'flex',alignItems:'center'}}>
                            <div className="box-content text-white">
                                <h3 className="text-white">Experience flawless events and unforgettable moments with JNRS Infrastructure - your premier hotel event and management partner.</h3>
                                <p style={{ fontSize: '17px', marginTop: '20px', lineHeight: '30px' }}>JNRS was founded with a passion for hospitality and a desire to provide the best tourism experiences for travelers worldwide. We offer a diverse range of tourism services, including individual and corporate tour packages, event management services, digital marketing services for hotels and resorts, and leasing and operations management services for hotels and resorts.</p>

                                <div className="contact-btn d-flex">
                                    <div className="btnone-1 me-3">
                                        <button><a href="/hotels">View Hotels</a></button>
                                    </div>
                                    <div className="btnone-2">
                                        <button><a href="tel:7208397497">Call Now</a></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-5 col-md-6 col-xs-12 col-sm-12 mt-3">
                            <div className="contact-info">
                                <div className="contact-heading">
                                    <h4>Submit Your Query</h4>
                                    <p className="m-0">Have a Query? Send it to us.</p>
                                </div>
                                <form id="contact" onSubmit={handleSubmit}>
                                    {/* <h4>Contact us today, and get reply with in 24 hours!</h4> */}
                                    <fieldset>
                                        <input className="input" placeholder="Name" onChange={(e) => setName(e.target.value)} type="text" tabindex="1" required autofocus />
                                    </fieldset>
                                    <fieldset>
                                        <input className="input" onChange={(e) => setEmail(e.target.value)} placeholder="Email" type="email" tabindex="2" required />
                                    </fieldset>
                                    <fieldset>
                                        <input className="input" onChange={(e) => setPhone(e.target.value)} placeholder="Phone no." type="tel" tabindex="3" required />
                                    </fieldset>
                                    <fieldset>
                                        <input className="input" onChange={(e) => setSubject(e.target.value)} placeholder="Subject" type="text" tabindex="2" required />
                                    </fieldset>
                                    <fieldset>
                                        <textarea className="input" onChange={(e) => setMessage(e.target.value)} placeholder="Message." type="message" tabindex="3" required />
                                    </fieldset>
                                    <fieldset>
                                        <button name="submit" type="submit" id="contact-submit">Submit</button>
                                    </fieldset>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
export default Home;