
const Simpson = ({simpson}) => {
  const {name, surname, image, description} = simpson;
  return(
      <div>
          <div>name: {name}</div>
          <div>surname: {surname}</div>
          <img src={image} alt={name}/>
          <div>description: {description}</div>
      </div>
  );
};
export {Simpson};