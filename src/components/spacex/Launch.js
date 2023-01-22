
export const Launch = ({launch}) => {
    const {id, mission_name, launch_year} = launch;
    if (launch_year !== 2020)
    return (
        <div>
            <div>id: {id}</div>
            <div>mission_name: {mission_name}</div>
            <div>launch_year: {launch_year}</div>
        </div>
    );
};

