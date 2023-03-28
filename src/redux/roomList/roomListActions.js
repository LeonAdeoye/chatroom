import {
    CREATE_ROOM, CLOSE_ROOM, SELECT_ROOM,
    FETCH_ROOMS_REQUEST, FETCH_ROOMS_REQUEST_SUCCESS,
    FETCH_ROOMS_REQUEST_FAILURE, ADD_ROOM_TO_FAVOURITES,
    TOGGLE_CREATE_ROOM_DIALOG
} from "./roomListTypes";

import axios from "axios";

export const toggleCreateRoomDialogFlagRequest = () =>
{
    return {
        type: TOGGLE_CREATE_ROOM_DIALOG
    }
}

export const closeRoomRequest = (roomId) =>
{
    return {
        type: CLOSE_ROOM,
        payload: roomId
    }
}

export const selectRoomRequest = (roomId) =>
{
    return {
        type: SELECT_ROOM,
        payload: roomId
    }
}

export const addRoomToFavouritesRequest = (roomId) =>
{
    return {
        type: ADD_ROOM_TO_FAVOURITES,
        payload: roomId
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

export const closeRoom = (roomId) =>
{
    return function(dispatch)
    {
        dispatch(closeRoomRequest(roomId))
    }
}

export const addRoomToFavourites = (roomId) =>
{
    return function(dispatch)
    {
        dispatch(addRoomToFavouritesRequest(roomId))
    }
}

export const selectRoom = (selectedRoomIndex) =>
{
    return function(dispatch)
    {
        dispatch(selectRoomRequest(selectedRoomIndex));
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
                const rooms = response.data;
                dispatch(fetchRoomsRequestSuccess(rooms));
            })
            .catch(err =>
            {
                console.log('error: ', err);
                dispatch(fetchRoomsRequestFailure(err.message));
            });
    }
}

export const toggleCreateRoomDialogFlag = () =>
{
    return function(dispatch)
    {
        dispatch(toggleCreateRoomDialogFlagRequest());
    }
}
