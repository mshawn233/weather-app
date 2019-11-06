import React, { Component } from 'react';

class WeatherDisplay extends Component<any> {

    constructor(props: any) {
        super(props);
    }

    render() {
        
        return <>
            <div>{this.props.weatherData}</div>
        </>
    }
}

export default WeatherDisplay;