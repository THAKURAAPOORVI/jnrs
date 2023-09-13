import React, { useState, useEffect } from 'react';
import './Css/Mainhotel.css'
import { useNavigate} from 'react-router-dom';


function Mainhotel() {
    const BaseUrl = "https://api.jnrs.in";
    // const accessToken = "1992327196df2f0a187132e774c3aeae32fd21c4";

    // State for Get Data
    const [data, setData] = useState([]);
    const [oldData, setOldData] = useState([]);
    // const [textSearch ,setTextSearch] = useState([]);
    // console.log(textSearch)

    console.log(data)
    // Method
    const fetchData = () => {
        try {
            fetch(`${BaseUrl}/hotel/`)
                .then((response) => response.json())
                .then((json) => {
                    setData(json.All_Hotels)
                    setOldData(json.All_Hotels)
                })
        } catch (error) {
            console.log(error)
        }
    }
 
    // Search
    const setTextSearchbutton = (event) => {
        const query = event.target.value;
        var updatedList = [...data];
        updatedList = updatedList.filter((item) => {
          return item.Hotal_Name.toLowerCase().indexOf(query.toLowerCase()) !== -1;
        });   
        if(query) {
            setData(updatedList);
        }else{
            setData(oldData);
        }
            
      };

    useEffect(() => {
        fetchData();
    }, []);

    // Navigate the page
    const navigate = useNavigate()
 

    // change page url
    // Send Data to another component
    const sendData = (url, e) => {
            navigate('/Hotels-in/'+ url, {state: e})
    }
    // sendData.push(urlChange)
    return (
        <>
            <section className='hotel-banner'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-12 text-center'>
                            <h6 className='text-white hotel-ban-heading'>Amazing Hotels of JNRS</h6>
                            <p></p>
                        </div>
                    </div>

                    <div className='row'>
                        <div className='col-lg-2 col-md-1 col-xs-12 col-sm-12'></div>
                        <div className='col-lg-8 col-md-10 col-xs-12 col-sm-12'>
                            <div className='search-box text-center'>
                                <input type='text' placeholder='Search Hotel' 
                                onChange={setTextSearchbutton}></input>
                                {/* <button onClick={Search}>Find</button> */}
                            </div>
                        </div>
                        <div className='col-lg-2 col-md-1 col-xs-12 col-sm-12'></div>
                    </div>
                </div>
            </section>

            {/* Start Hotels Card Section */}
            <section className='hotel-card my-5'>
                <div className='container'>
                    <div className='row'>
                        {data.map((item) => {
                            let { Hotel_Type, Hotal_Name, hotal_new_price, Hotal_images1, Hotal_id, hotal_new_price_premium } = item;
                            let imageData = `https://api.jnrs.in${Hotal_images1}`;
                            // remove space for Hotal name  
                            let hotelPath = `${Hotal_Name}`;
                            const stringWithoutSpaces = hotelPath.replace(/\s/g, "-"); // removes all spaces
                            return (<>
                                <div className='col-lg-4 col-md-4 col-sm-12 col-xs-12 p-0'>
                                    <div className='card-box m-2'>
                                        <span onClick={() => sendData(stringWithoutSpaces,item)}>
                                            <div className='image-box'>
                                                <img className='img-fluid w-100' src={imageData} alt={Hotal_Name}></img>
                                            </div>
                                        </span>
                                        {/* <Link to={stringWithoutSpaces}> */}
                                        <div className='box-content pt-3'>
                                            <div className='inner-content d-flex w-100'>
                                                <div className='in-content'>
                                                    <p className='hotel-t m-0'>{Hotel_Type}</p>
                                                    <h5 className='hotel-name'>{Hotal_Name}</h5>
                                                </div>
                                                <div className='price'>
                                                    ₹{hotal_new_price} {hotal_new_price_premium}
                                                </div>
                                            </div>
                                        </div>
                                        {/* </Link> */}
                                    </div>
                                </div>
                            </>)
                        })
                        }
                    </div>
                </div>
            </section>
        </>
    )
}

export default Mainhotel;

