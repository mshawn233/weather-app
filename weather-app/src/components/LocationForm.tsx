import React, { Component } from 'react';


class LocationForm extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return <>
            <form onSubmit={}>
                <label>
                    Please give a zipcode below:
                </label>
                <input type='text' />
            </form>
        </>
    }

}

export default LocationForm;