import React, { useEffect, useState } from 'react';
import {getLaunchesData} from "./api/GetInfo";
import {Launch} from "./Launch";

export const Launches = ({setFlightId}) => {
    const [launches, setLaunches] = useState([]);

    useEffect(() => {
        getLaunchesData().then(resp => setLaunches(resp));
    }, []);

    return (
        <div className="App">
            {launches.map(launch => <Launch key={launch.id} launch={launch} setFlightId={setFlightId}/>)}
        </div>
    );
}

