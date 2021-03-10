import React from 'react';
import { Card } from 'react-bootstrap';
const moment = require('moment');

// This component will hold weather data
const WeatherCard = ({ icon, description, dt, temp_max, temp_min }) => {
  let date = new Date();
  date.setTime(dt);

  return (
    <Card style={{ width: '18rem' }} >
      <Card.Header>{moment(date).format('Do MMMM, h:mm a')}, {moment(date).format('dddd')}</Card.Header>
      <Card.Img src={`http://openweathermap.org/img/wn/${icon}@2x.png`}  />
      <Card.Body>
        <Card.Title> {description} </Card.Title>
        <Card.Text>
        </Card.Text>
        <Card.Text>Min Temp: {Math.round(temp_min)} °F</Card.Text>
        <Card.Text>Max Temp: {Math.round(temp_max)} °F</Card.Text>
      </Card.Body>
    </Card>
  )
}
export default WeatherCard;
