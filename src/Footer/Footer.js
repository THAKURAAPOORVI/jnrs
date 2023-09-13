import React from 'react'
import './Footer.css';
import { Link } from 'react-router-dom';
// import pdf from "./privacypolicy.pdf"
import pdf from "../Components/Prvacy_policy"
export default function Footer() {
    return (
        <>
           

            <footer className="footer py-5">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-2 col-md-2 col-sm-12 col-xs-12">
                            <div className='onlyimg'>
                                <img alt='footer-logo' style={{width:'50%'}} className='img-fluid' src="../picture/footerlogo.png"  />
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-12 col-xs-12">
                            <div className="footer-list">
                                <h1 className="footer-heading mb-3 text-white">Discover</h1>
                                <ul>
                                    <li>
                                        <Link to="/" className='text-white'><i className="bi bi-chevron-right"></i>Home</Link>
                                    </li>
                                    <li>
                                        <Link to="/Leasing" className='text-white'><i className="bi bi-chevron-right"></i>Services</Link>
                                    </li>
                                    <li>
                                        <Link to="/Destination" className='text-white'><i className="bi bi-chevron-right"></i>Destination</Link>
                                    </li>
                                    <li>
                                        <Link to="/Adventure" className='text-white'><i className="bi bi-chevron-right"></i>Adventure</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12 col-xs-12">
                            <div className="footer-list">
                                <h1 className="footer-heading mb-3 text-white">Company</h1>
                                <ul>
                                    <li>
                                        <Link to="/About" className='text-white '><i className="bi bi-chevron-right"></i>About</Link>
                                    </li>
                                    <li>
                                        <Link to="/Hotel" className='text-white '><i className="bi bi-chevron-right"></i>Hotel</Link>
                                    </li>
                                    <li>
                                    <Link to="/privacy" className='text-white '><i className="bi bi-chevron-right"></i>Privacy-Policy</Link>
                                        {/* <a href={pdf} target='_sblank' className='text-white '><i className="bi bi-chevron-right"></i>Privacy-Policy</a> */}
                                    </li>
                                </ul>
                                <h1 className="footer-heading mb-3 text-white">Social Links</h1>
                                <div className="link-box mb-3">
                                    <a href="https://www.facebook.com/profile.php?id=100089674841805&is_tour_dismissed=true" target="blank">
                                        <i className="bi bi-facebook"></i></a>
                                    <a href="https://www.instagram.com/jnrsinfrastructurepvtltd/" target="blank">
                                        <i className="bi bi-instagram"></i></a>
                                    <a href="https://twitter.com/jnrs_pvt_ltd" target="blank">
                                        <i className="bi bi-twitter"></i></a>
                                    <a href="https://www.linkedin.com/in/jnrs-management-182208269/" target="blank">
                                        <i className="bi bi-linkedin"></i></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-12 col-sm-12 col-xs-12">
                            <div className="footer-list">
                                <h1 className="footer-heading mb-3 text-white">Get In Touch</h1>
                                <div className="foot-address">
                                    <ul>
                                        <li className='text-white small'>
                                            A/429,Main Frame,Royal Palms,Aarey Colony,<br></br>
                                            
                                          Goregaon (East), Mumbai-400065
                                            {/* Mira Road Railway Station
                                            Mira Road East Mumbai 401107 */}
                                        </li>
                                    </ul>
                                </div>
                                <ul className="footer-contact">
                                    <li><a className='text-white' href="mailto:info@jnrs.in">info@jnrs.in</a>
                                    </li>
                                    <li>
                                        <a href="tel:7208397497" className='text-white'>+91 72083-97497</a><br></br>
                                        <a className="text-white" href="tel: 93212-35958">+91 93212-35958</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>

    )
}
