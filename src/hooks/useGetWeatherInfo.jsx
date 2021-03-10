import {useState, useEffect, useReducer} from 'react';
import axios from "axios";
const useGetWeatherInfo = (URL) => {
  const [url, setUrl] = useState(URL);

  const initialState = {
    data: {},
    loading: true,
    error: ""
  };
  const reducer = (state, action) => {
    switch (action.type) {
      case "FETCH_SUCCESS":
        return {
          loading: false,
          data: action.payload,
          error: "",
        };
      case "FETCH_ERROR":
        return {
          loading: false,
          data: action.payload,
          error: "Please enter a valid city",
        };
      default:
        return state;
    }
  };
  
  const [state, dispatch] = useReducer(reducer, initialState);
  useEffect(() => {
    (async () => {
        try {
        if(!url) return;
        const response = await axios.get(url);
        await dispatch({ type: "FETCH_SUCCESS", payload: response.data });
      } catch (error) {
          console.log("Here!");
        await dispatch({ type: "FETCH_ERROR", payload: {}});
      }
    })();
  }, [url]);

  return {state, setUrl};
};

export default useGetWeatherInfo;
