import React from 'react';
import WeatherCard from './WeatherCard';
import { Col, Row } from 'react-bootstrap';

// Display the weather data for each day
const WeatherList = ({ weathers }) => {
  return (
    <Row >
      {weathers && weathers.map(({ weather, main, dt }) => (
        <Col key={dt} xs lg md sm>
          <WeatherCard
            description={weather[0].description}
            icon={weather[0].icon}
            dt={dt * 1000}
            temp_max={main.temp_max}
            temp_min={main.temp_min}
          />
        </Col>
      ))}
    </Row>
  )
}

export default WeatherList;