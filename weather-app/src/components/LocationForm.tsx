import React, { useState } from 'react';


function LocationForm(props: any) {
    
    const [zipcode, setZipcode] = useState('')

    const handleChange = (event: any) => {
        setZipcode(event.target.value);
        // console.log(zipcode);
        // console.log('Here');
    };

    return <>
        <form onSubmit={props.currentWeather(zipcode)}>
            <label>
                Please enter a zipcode:
                <input type='text' value={zipcode} onChange={handleChange} />
            </label>
            <input type='submit' value='Submit' />
        </form>
    </>
}

export default LocationForm;