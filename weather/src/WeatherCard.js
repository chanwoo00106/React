import React from 'react'

const WeatherCard = () => {
    return (
        <div>
            <div className="card">
                <div className="location">
                    <h1 className="city">GangJin</h1>
                    <h3 className="country">Ko</h3>
                </div>
                <img className="icon" src="" alt="Icon" />
                <h1 className="temp">20 &deg;C</h1>
                <h3 className="conditio" n>Clouds</h3>
            </div>
        </div>
    )
}

export default WeatherCard;
