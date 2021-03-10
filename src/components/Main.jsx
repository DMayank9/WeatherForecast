import React from 'react';

import { Container } from "react-bootstrap";
import { API_KEY, API_URL } from "../assets/api/config";

import SelectCity from './SelectCity';
import WeatherList from "./WeatherList";
import useGetWeatherInfo from "../hooks/useGetWeatherInfo";
import SelectViewType from "./SelectViewType";

//Main Component Layout on top of which other components will be placed
function Main() {
  const viewRef = React.createRef();
  const {state, setUrl} = useGetWeatherInfo();
  const {data, error, loading} = state;

  // Todo - Add an option for the user to select the view type
  // If simple: we display the weather info for a given time for each day (5 cards) 
  // If detailed: we display the weather info data for every 3 hours for each day (40 cards)
  // const filterWeatherDataByViewType = (detailedData) => {
  //   if (viewRef.current.value == "simple") {
  //     return detailedData.filter(reading => {   
  //       return reading.dt_txt.includes("11:00:00");
  //     });
  //   } else if (viewRef.current.value == "detailed") {
  //     return detailedData;
  //   }
  // };

  // Populate the weather Details for each day when the data is available
  const displayWeatherData = () => {
    if (error !== "") return <h4>{error}</h4>;
    if (!data && loading) return <h2>Loading...</h2>;
    if (!data) return null;
    //const weatherData = filterWeatherDataByViewType(data.list);
    return <WeatherList weathers={data.list} />
  };

  return (
    <>
      <Container fluid>
      <SelectCity fetchWeatherData={(city) => setUrl(`${API_URL}/data/2.5/forecast?q=${city}&appid=${API_KEY}`)} />
      {/* <SelectViewType viewRef={viewRef}></SelectViewType> */}
        {displayWeatherData()}
      </Container>
    </>
  )
}

export default Main
