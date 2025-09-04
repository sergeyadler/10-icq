export const CHANGE_AVATAR = 'CHANGE_AVATAR';


export const INCREMENT_FOLLOWERS = 'INCREMENT_FOLLOWERS';
export const DECREMENT_FOLLOWERS = 'DECREMENT_FOLLOWERS';
export const INCREMENT_FOLLOWING = 'INCREMENT_FOLLOWING';
export const DECREMENT_FOLLOWING = 'DECREMENT_FOLLOWING';


export const changeAvatar =(url:string)=>({
  type:CHANGE_AVATAR,
  payload:url
})


export const incrementFollowers = () => ({ type: INCREMENT_FOLLOWERS });
export const decrementFollowers = () => ({ type: DECREMENT_FOLLOWERS });

export const incrementFollowing = () => ({ type: INCREMENT_FOLLOWING });
export const decrementFollowing = () => ({ type: DECREMENT_FOLLOWING });