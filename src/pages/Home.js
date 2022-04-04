import React, { useState, createContext } from 'react';
import { Home } from "./PagesStyle";
import { SectionMain, LeftBar, RightBar, Gender, Weather, Viewer, InfoBox } from "./InsideHomeStyle"
import WeatherPage from './Weather';
import GenderPage from '../components/Gender/Gender';
import OutfitPage from '../components/Outfit/Outfit';
import { ViewerPage } from '../components/Viewer/Viewer'
import { WeatherTitle, SearchPlace } from './weatherStyle';

export const GenderContext = createContext();


const HomePage = () => {


    const apiKey = `139f555fe64c4dc9abc80112222603`

    const [place, setPlace] = useState(``)
    const [placeInfo, setPlaceInfo] = useState([])
    const [gender, setGender] = useState('male')



    const handleFetch = (e) => {

        if (e.key === `Enter`) {

            fetch(
                `http://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${place}&days=1&aqi=no&alerts=no`
            )
                .then(response => response.json())
                .then(data => setPlaceInfo({
                    name: data.location.name,
                    country: data.location.country,
                    condition: data.current.condition.text,
                    tempC: data.current.temp_c,
                    tempF: data.current.temp_f,
                    pressure: data.current.pressure_mb,
                    humidity: data.current.humidity,
                    wind: data.current.wind_kph,
                }))
                .catch(error => console.log(error))

            console.log(
                placeInfo.name,
                placeInfo.country,
                placeInfo.condition,
                placeInfo.tempC,
                placeInfo.tempF,
                placeInfo.pressure,
                placeInfo.humidity,
                placeInfo.wind,
            )
        }
    }



    return (
        <>
         <GenderContext.Provider value={gender}>
            <Home>
                <SectionMain>
                    <LeftBar>
                        <Gender>
                            <GenderPage set={setGender} />
                        </Gender>
                        <Weather>
                            <WeatherTitle>Weather</WeatherTitle>
                            <SearchPlace>
                                <input type="text" value={place} placeholder="City name" onChange={(e) => setPlace(e.target.value)} onKeyDown={handleFetch} />
                            </SearchPlace>
                            <WeatherPage
                                name={placeInfo.name}
                                country={placeInfo.country}
                                condition={placeInfo.condition}
                                tempC={placeInfo.tempC}
                                tempF={placeInfo.tempF}
                                pressure={placeInfo.pressure}
                                humidity={placeInfo.humidity}
                                wind={placeInfo.wind}
                            />
                        </Weather>
                    </LeftBar>
                    <RightBar>
                        <Viewer>
                           <ViewerPage /> 
                        </Viewer>
                        <InfoBox>
                            <OutfitPage name={placeInfo.name}
                                country={placeInfo.country}
                                condition={placeInfo.condition}
                                tempC={placeInfo.tempC}
                                tempF={placeInfo.tempF}
                                pressure={placeInfo.pressure}
                                humidity={placeInfo.humidity}
                                wind={placeInfo.wind} />
                        </InfoBox>
                    </RightBar>
                </SectionMain>
            </Home>
            </GenderContext.Provider>
        </>
    );
};

export default HomePage;