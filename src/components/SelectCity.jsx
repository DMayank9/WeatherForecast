import React, { useState } from 'react';
import { Row, Col, FormControl, Button } from 'react-bootstrap';

// Provide a field to enter city for which weather forecast will be done
const SelectCity = ({ fetchWeatherData }) => {
  const [city, setCity] = useState('');
  return (
    <>
      <Row >
        <Col xs={3} md={3} lg={3} className="text-center">
          <FormControl placeholder="Enter the City name"
            onChange={(event) => setCity(event.target.value)}
            value={city}
          >
          </FormControl>
        </Col>
        <Col xs={3} md={3} lg={3}>
          <Button onClick={() => fetchWeatherData(city)}>Forecast Weather</Button>
        </Col>
      </Row>
    </>
  )
}

export default SelectCity;
