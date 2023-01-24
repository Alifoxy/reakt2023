
export const User = ({launch}) => {
    const {mission_name, launch_year} = launch;
    if (launch_year < 2020 || launch_year > 2020){
        return (
            <div className={'launch_block'}>
                <div>mission_name: {mission_name}</div>
                <div>launch_year: {launch_year}</div>
            </div>
        );
    }
};

