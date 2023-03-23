import {CREATE_ROOM, FETCH_ROOMS_REQUEST, FETCH_ROOMS_REQUEST_SUCCESS, FETCH_ROOMS_REQUEST_FAILURE} from "./roomListTypes";
import axios from "axios";

export const createRoom = (roomName) =>
{
    return {
        type: CREATE_ROOM,
        payload: roomName
    }
}

export const fetchRoomsRequest = () =>
{
    return {
        type: FETCH_ROOMS_REQUEST
    }
}

export const fetchRoomsRequestSuccess = (rooms) =>
{
    return {
        type: FETCH_ROOMS_REQUEST_SUCCESS,
        payload: rooms
    }
}

export const fetchRoomsRequestFailure = (error) =>
{
    return {
        type: FETCH_ROOMS_REQUEST_FAILURE,
        payload: error
    }
}

export const fetchRooms = () =>
{
    return function(dispatch)
    {
        dispatch(fetchRoomsRequest());
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(response =>
            {
                console.log('rooms: ', response.data);
                const rooms = response.data.map(room => room.name);
                dispatch(fetchRoomsRequestSuccess(rooms));
            })
            .catch(err =>
            {
                console.log('error: ', err);
                dispatch(fetchRoomsRequestFailure(err.message));
            });
    }
}
