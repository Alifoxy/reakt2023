
const Character = ({character}) => {
    const {image, name, status, species, gender} = character;
    return(
        <div>
            <img src={image} alt={name}/>
            <div>name: {name}</div>
            <div>status: {status}</div>
            <div>species: {species}</div>
            <div>gender: {gender}</div>
        </div>
    );
};
export {Character};
