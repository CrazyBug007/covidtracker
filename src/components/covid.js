import React, { useEffect, useState } from 'react';


const Covid = () => {
    const[data, setData] = useState([]);

    const getCovidData = async() => {
        try {
            const res = await fetch('https://api.covid19india.org/data.json');
            const actualData = await res.json();
            setData(actualData.statewise[0]);
            console.log('data',data);
        } catch(err) {
            console.log('error',err);
        }
    }

    useEffect(() =>{
        getCovidData();
    },[]);

    return(
        <>
            <section>
                <h1>Covid-19 Coronavirus Tracker</h1>
                <ul>
                    <li className="">
                        <div className="">
                            <div className="">
                                <p className=""><span>Our</span> Country</p>
                                <p className=""> India</p>
                            </div>
                        </div>
                    </li>
                    <li className="">
                        <div className="">
                            <div className="">
                                <p className=""><span>Total</span> Recovered</p>
                                <p className=""> {data.recovered}</p>
                            </div>
                        </div>
                    </li>
                    <li className="">
                        <div className="">
                            <div className="">
                                <p className=""><span>Total</span> Confirmed</p>
                                <p className=""> {data.confirmed}</p>
                            </div>
                        </div>
                    </li>
                    <li className="">
                        <div className="">
                            <div className="">
                                <p className=""><span>Total</span> Deaths</p>
                                <p className=""> {data.deaths}</p>
                            </div>
                        </div>
                    </li>
                    <li className="">
                        <div className="">
                            <div className="">
                                <p className=""><span>Total</span> Active</p>
                                <p className=""> {data.active}</p>
                            </div>
                        </div>
                    </li>
                    <li className="">
                        <div className="">
                            <div className="">
                                <p className=""><span>Last</span> Updated</p>
                                <p className=""> {data.lastupdatedtime}</p>
                            </div>
                        </div>
                    </li>
                </ul>
            </section>
        </>
    )
}

export default Covid;