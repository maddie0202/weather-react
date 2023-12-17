import React from 'react';
import Date from "./Date";
import Icon from "./Icon";
import Temperature from "./Temperature";

export default function WeatherInfo(props){
    return(
        <div className="WeatherInfo">
            <h1>{props.data.city}</h1>
                <div className='row details' >
                    <div className='col-12'><Date date={props.data.date} /></div>
                    <div className='col-12 text-capitalize'>{props.data.description}</div>
                </div>
                <div className='row'>
                    <div className='col-6'>
                        <Icon code={props.data.icon} size={52} />
                        <span className='temperature'><Temperature celsius={props.data.temperature} /></span><span className='unit'>°C</span>
                    </div>
                    <div className='col-6'>
                        <div className='row details'>
                            <div className='col-12'>Precipitation:  {props.data.precipitation}%</div>
                            <div className='col-12'>Humidity: {props.data.humidity}%</div>
                            <div className='col-12'>Wind: {props.data.wind} km/h</div>
                        </div>
                    </div>
                
                </div>
        </div>
    )
}