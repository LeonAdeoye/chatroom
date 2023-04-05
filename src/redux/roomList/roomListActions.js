import {
    CLOSE_ROOM, SELECT_ROOM,
    FETCH_ROOMS_REQUEST, FETCH_ROOMS_REQUEST_SUCCESS,
    FETCH_ROOMS_REQUEST_FAILURE, ADD_ROOM_TO_FAVOURITES,
    TOGGLE_CREATE_ROOM_DIALOG
} from "./roomListTypes";

import axios from "axios";

const toggleCreateRoomDialogFlagRequest = () =>
{
    return {
        type: TOGGLE_CREATE_ROOM_DIALOG
    }
}

const closeRoomRequest = (roomId) =>
{
    return {
        type: CLOSE_ROOM,
        payload: roomId
    }
}

const selectRoomRequest = (roomId) =>
{
    return {
        type: SELECT_ROOM,
        payload: roomId
    }
}

const addRoomToFavouritesRequest = (roomId) =>
{
    return {
        type: ADD_ROOM_TO_FAVOURITES,
        payload: roomId
    }
}

const fetchRoomsRequest = () =>
{
    return {
        type: FETCH_ROOMS_REQUEST
    }
}

const fetchRoomsRequestSuccess = (rooms) =>
{
    return {
        type: FETCH_ROOMS_REQUEST_SUCCESS,
        payload: rooms
    }
}

const fetchRoomsRequestFailure = (error) =>
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
