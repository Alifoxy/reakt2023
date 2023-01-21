
export const UserPost = ({post}) => {
  const {id, userId, title} = post;

  return(
      <div>
          <div>id: {id}</div>
          <div>userId: {userId}</div>
          <div>postTitle: {title}</div>
      </div>
  );
}