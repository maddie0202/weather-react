import React from 'react';
import "./Weather.css"

export default function Weather(){
    return(
        <div className='Weather'>
            
            <form>
                <input type='search' placeholder='Enter a City' className='form-control' />
                <input type='submit' value='search' className='btn btn-primary' /> 
            </form>
            
            <h1>Paris</h1>
            <div className='row details' >
                <div className='col-12'>Saturday 19:00</div>
                <div className='col-12'>Clear with periodic clouds</div>
            </div>
            <div className='row'>
                <div className='col-6'>
                    <img src='https://ssl.gstatic.com/onebox/weather/64/sunny_s_cloudy.png' alt='Cloudy' />
                    <span className='temperature'>5</span><span className='unit'>°C</span>
                </div>
                <div className='col-6'>
                    <div className='row details'>
                        <div className='col-12'>Precipitation: 0%</div>
                        <div className='col-12'>Humidity: 85%</div>
                        <div className='col-12'>Wind: 8 km/h</div>
                    </div>
                </div>
                
            </div>
        </div> 
    )
}
