import './App.css';
import { Route, Routes } from 'react-router-dom';
import Navbar from './Navbar/Navbar';
import Footer from './Footer/Footer';
import Home from './Components/Home';
import Destination from './Components/Destination';
import Adventure from './Components/Adventure';
import BookingHotel from './Components/BookingHotel';
import Events from './Components/Events';
import About from './Components/About';
import Promotion from './Components/Promotion';
import Tranportation from './Components/Tranportation';
import Leasing from './Components/Leasing';
import Mainhotel from './Components/Mainhotel';
import Hotels from './Components/Hotels';
import Coporate from './Components/Coporate';
import { FloatingWhatsApp } from 'react-floating-whatsapp';
import Prvacy_policy from './Components/Prvacy_policy';


import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/destination" element={<Destination></Destination>}></Route>
        <Route path="/adventure" element={<Adventure></Adventure>}></Route>
        <Route path="/hotel-booking" element={<BookingHotel></BookingHotel>}></Route>
        <Route path="/events" element={<Events></Events>}></Route>
        <Route path="/leasing-hotels-and-resorts" element={<Leasing></Leasing>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/promotion" element={<Promotion></Promotion>}></Route>
        <Route path="/tranportation" element={<Tranportation></Tranportation>}></Route>
        <Route path="/hotels" element={<Mainhotel></Mainhotel>}></Route>
        <Route path="/privacy" element={<Prvacy_policy></Prvacy_policy>}></Route>
        <Route path=":url" element={<Hotels></Hotels>}></Route>
        <Route path="/corporate-tours-and-events" element={<Coporate></Coporate>}></Route>
      </Routes>
      <Footer/>

      <div className="whatsapp">
            <FloatingWhatsApp phoneNumber ="7208397497" accountName= "JNRS Help Line" statusMessage="Typically replies within 1 min" avatar="../newlogo.png"/>
            </div>
    </>

  );
} 

export default App;
