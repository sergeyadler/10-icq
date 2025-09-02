import {useContext} from "react";
import {IcqContext} from "../utils/context.ts";

interface AvatarProps {
    size?: string;
}
const Avatar = ({size} : AvatarProps) => {
        const {user, changeAvatar} = useContext(IcqContext);
    return (

        <img className={`user-avatar ${size?? ''}`} src={user.avatar} alt={user.name}
             onClick={() => {
                 const url = prompt('Enter your url');
                 changeAvatar(url!);
             }}/>

    );
};

export default Avatar;