import Avatar from "./Avatar.tsx";
import {useContext, useState} from "react";
import {IcqContext} from "../utils/context.ts";

const Stats = () => {
    const {user} = useContext(IcqContext);
    const [followerCount, setFollowerCount]  = useState<number>(0);
    const [followingCount, setFollowingCount]  = useState<number>(0);
    return (
        <div className={'user-stats'}>
            <div>
                <Avatar/>
                <p>Name : {user.name}</p>
            </div>
            <div className={'stats'}>
                <div onClick={()=>setFollowerCount(followerCount+1)} onContextMenu={()=>setFollowerCount(followerCount-1)}>Followers : {followerCount}</div>
                <div onClick={()=>setFollowingCount(followingCount+1)} onContextMenu={()=>setFollowingCount(followingCount-1)}>Following : {followingCount}</div>
            </div>
        </div>
    );
};

export default Stats;