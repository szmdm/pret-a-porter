import React from 'react';
import { WeatherContainer, WeatherContainerRows, EmptyIcon, } from './weatherStyle';
import { FaTemperatureHigh, } from 'react-icons/fa';
import { GiPressureCooker, GiWindsock } from 'react-icons/gi';
import { WiHumidity } from 'react-icons/wi'


const WeatherPage = ({ name, country, condition, tempC, pressure, humidity, wind }) => {


    // useEffect(() => {
    //     handleFetch();
    // }, []);

    
    // if(!place) {
	// 	return <p>loading ...</p>
	// }

    // console.log(placeInfo);



    return (

        <>
            <WeatherContainer>
                <WeatherContainerRows>
                    <EmptyIcon><p1>Info: </p1></EmptyIcon>
                    <p1>{condition}</p1>
                </WeatherContainerRows>
                <WeatherContainerRows>
                    <EmptyIcon><p1>City: </p1></EmptyIcon>
                    <p1>{name}</p1>
                </WeatherContainerRows>
                <WeatherContainerRows>
                    <EmptyIcon><p1>Country: </p1></EmptyIcon>
                    <p1>{country}</p1>
                </WeatherContainerRows>
                <WeatherContainerRows>
                    <div><FaTemperatureHigh size={25} /><p1>Temp [C]: </p1></div>
                    <p1>{tempC}</p1>
                </WeatherContainerRows>
                <WeatherContainerRows>
                    <div><GiPressureCooker size={25} /><p1>Pressure [hpa]: </p1></div>
                    <p1>{pressure}</p1>
                </WeatherContainerRows>
                <WeatherContainerRows>
                    <div><GiWindsock size={25} /><p1>Wind [kmh]: </p1></div>
                    <p1>{wind}</p1>
                </WeatherContainerRows>
                <WeatherContainerRows>
                    <div><WiHumidity size={25} /><p1>Humidity [%]: </p1></div>
                    <p1>{humidity}</p1>
                </WeatherContainerRows>
            </WeatherContainer>
        </>

    );
};

export default WeatherPage;