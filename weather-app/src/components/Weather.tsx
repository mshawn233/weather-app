import React, { Component } from 'react';
import { autobind } from 'core-decorators';

import { API, API_KEY} from '../config';
import { WeatherData } from '../types';
import WeatherDisplay from './WeatherDisplay';

const loader = require('../assets/loader.svg');

interface State {
    loading: boolean,
    weatherData?: WeatherData
}

@autobind
export default class Weather extends Component<any, State> {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            weatherData: undefined
        };
    }

    getCurrentWeather = (zipCode: number) => {
        fetch(`${API}?zip=${zipCode},us&appId=${API_KEY}`)
            .then(response => response.json())
            .then(data => {
                const {
                    coord,
                    weather,
                    main,
                    wind
                } = data;
                const weatherData = {
                    coord,
                    weather,
                    main,
                    wind
                };
                this.setState({ loading: false, weatherData });
            })
            .catch(error => console.error(error));
    }

    render() {

        return <>
            <WeatherDisplay weatherData={this.state.weatherData} />
        </>
    }
    
}