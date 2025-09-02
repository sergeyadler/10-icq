import Avatar from "./Avatar.tsx";
import {useContext, useState} from "react";
import {IcqContext} from "../utils/context.ts";

const Stats = () => {
    const {user,stats} = useContext(IcqContext);
    const [followerCount, setFollowerCount] = useState<number>(stats.followers ?? 0);
    const [followingCount, setFollowingCount] = useState<number>(stats.following ?? 0);
    return (
        <div className={'user-stats'}>
            <div>
                <Avatar/>
                <p>Name : {user.name}</p>
            </div>
            <div className={'stats'}>
                <div
                    onClick={()=>setFollowerCount(prev => prev +1)}
                    onContextMenu={(e)=>{
                    e.preventDefault();
                    setFollowerCount(prev =>  Math.max(0, prev - 1)}} > Followers : {followerCount}</div>


                <div
                    onClick={()=>setFollowingCount(prev => prev +1)}
                    onContextMenu={(e)=>{
                        e.preventDefault();
                        setFollowingCount(prev =>  Math.max(0, prev - 1))
                    }}>Following : {followingCount}</div>
            </div>
        </div>
    );
};

export default Stats;