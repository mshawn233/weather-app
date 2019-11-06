import React, { Component } from 'react';
import { autobind } from 'core-decorators';

import { API, API_KEY} from '../config';
import LocationForm from './LocationForm';
// import WeatherDisplay from './WeatherDisplay';

interface Props {}

interface State {
    formSubmitted: boolean,
    weatherData?: {
        coord: {
            lon: string,
            lat: string
        },
        weather: [
            {
                main: string,
                description: string
            }
        ],
        main: {
            temp: number
        },
        wind: {
            speed: number
        }
    }
}

@autobind
export default class Weather extends Component<Props, State> {
    constructor(props: any) {
        super(props);
        this.state = {
            formSubmitted: false,
            weatherData: {
                coord: {
                    lon: '',
                    lat: ''
                },
                weather: [
                    {
                        main: '',
                        description: ''
                    }
                ],
                main: {
                    temp: 0
                },
                wind: {
                    speed: 0
                }
            }
        };
    }

    getCurrentWeather = (zipCode: number, event: any) => {
        fetch(`${API}?zip=${zipCode},us&appId=${API_KEY}`)
            .then(response => response.json())
            .then(data => {
                const weatherData = {
                    coord: data.coord,
                    weather: [
                        {
                            main: data.weather[0].main,
                            description: data.weather[0].description
                        }
                    ],
                    main: {
                        temp: data.main.temp
                    },
                    wind: {
                        speed: data.wind.speed
                    }
                };
                this.setState({ formSubmitted: false, ...weatherData });
                console.log(data);
            })
            .catch(error => console.error(error));
    }

    render() {

        return <>
            {   
                !this.state.formSubmitted &&
                <LocationForm currentWeather={this.getCurrentWeather} />
            }
            {
                /* this.state.formSubmitted &&
                 <WeatherDisplay weatherData={this.state.weatherData} /> */
            }
        </>

    }
    
}