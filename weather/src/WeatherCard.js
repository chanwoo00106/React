import React from 'react'

const WeatherCard = ({ data }) => {
    return (
        <div>
            <div className="card">
                <div className="location">
                    <h1 className="city">{data.name}</h1>
                    <h3 className="country">{data.country}</h3>
                </div>
                <img className="icon" src={`http://openweathermap.org/img/w/${data.weather[0].icon}.png`} alt="Icon" />
                <h1 className="temp">{Math.floor(data.main.temp - 273)} &deg;C</h1>
                <h3 className="conditio">{data.weather[0].description}</h3>
            </div>
        </div>
    )
}

export default WeatherCard;
