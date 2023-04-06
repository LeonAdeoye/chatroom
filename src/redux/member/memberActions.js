import axios from "axios";
import {
    FETCH_ROOM_MEMBERS,
    FETCH_ROOM_MEMBERS_FAILURE,
    FETCH_ROOM_MEMBERS_SUCCESS
} from "./memberTypes";

const fetchMemberRequest = (selectedRoomIndex) =>
{
    return {
        type: FETCH_ROOM_MEMBERS,
        payload: selectedRoomIndex
    }
}

const fetchMemberRequestSuccess = (members) =>
{
    return {
        type: FETCH_ROOM_MEMBERS_SUCCESS,
        payload: members
    }
}

const fetchMemberRequestFailure = (error) =>
{
    return {
        type: FETCH_ROOM_MEMBERS_FAILURE,
        payload: error
    }
}

export const fetchMembers = (selectedRoomIndex) =>
{
    return function(dispatch)
    {
        dispatch(fetchMemberRequest(selectedRoomIndex));
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(response =>
            {
                dispatch(fetchMemberRequestSuccess(response.data));
            })
            .catch(err =>
            {
                dispatch(fetchMemberRequestFailure(err.message));
            });
    }
}
