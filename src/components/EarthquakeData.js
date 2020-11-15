import React from 'react';

function EarthquakeData(props) {
    const earthquakeList = props.earthquakeData.map((data) => (
        <li key={data.id} className="earthquakes">{data.properties.title}</li>
    ))

    return (
    <ul>
        {earthquakeList}
    </ul>
    )
}

export default EarthquakeData;