import Avatar from "./Avatar.tsx";
import {useDispatch, useSelector} from "react-redux";
import type {IcqInterface} from "../utils/constants.ts";
import {decrementFollowers, decrementFollowing, incrementFollowers, incrementFollowing} from "../actions/icqActions.ts";

const Stats = () => {
    const {stats} = useSelector((state:IcqInterface) => state);
    const dispatch = useDispatch();

    return (
        <div className={'user-stats'}>
            <div>
                <Avatar/>
                {/*<p>Name : {user.name}</p>*/}
            </div>
            <div className={'stats'}>


                <div
                    onClick={() => dispatch(incrementFollowers())}
                    onContextMenu={(e) => {
                        e.preventDefault();
                        dispatch(decrementFollowers());
                    }}
                >
                    Followers : {stats.followers}
                </div>

                <div
                    onClick={() => dispatch(incrementFollowing())}
                    onContextMenu={(e) => {
                        e.preventDefault();
                        dispatch(decrementFollowing());
                    }}
                >
                    Following : {stats.following}
                </div>


            {/*    <div*/}
            {/*        onClick={()=>setStats((prevState)=>({...prevState, followers: prevState.followers + 1}))}*/}

            {/*        onContextMenu={(e)=>{*/}
            {/*        e.preventDefault();*/}
            {/*            setStats((prevState)=>({...prevState, followers: prevState.followers - 1}))}} > Followers : {stats.followers}</div>*/}


            {/*    <div*/}
            {/*        onClick={()=>setStats((prevState)=>({...prevState, following: prevState.following + 1}))}*/}
            {/*        onContextMenu={(e)=>{*/}
            {/*            e.preventDefault();*/}
            {/*            setStats((prevState)=>({...prevState, following: prevState.following - 1}))*/}
            {/*        }}>Following : {stats.following}</div>*/}
            </div>
        </div>
    );
};

export default Stats;