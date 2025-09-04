
import {useDispatch, useSelector} from "react-redux";
import type {IcqInterface} from "../utils/constants.ts";
import {changeAvatar} from "../actions/icqActions.ts";

interface AvatarProps {
    size?: string;
}
const Avatar = ({size} : AvatarProps) => {
        // const {name, avatar} = useSelector<IcqInterface>(state=>state.user) as UserInterface ;
    const user = useSelector((state: IcqInterface) => state.user);

    const dispatch = useDispatch();
    return (

        <img className={`user-avatar ${size?? ''}`} src={user.avatar + ""} alt={user.name}
             onClick={() => {
                 const url = prompt('Enter your url');
                 dispatch(changeAvatar(url + "" ));
             }}/>

    );
};

export default Avatar;