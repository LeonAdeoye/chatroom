import {
    CLOSE_ROOM,

    CREATE_ROOM_REQUEST,
    CREATE_ROOM_REQUEST_SUCCESS,
    CREATE_ROOM_REQUEST_FAILURE,

    FETCH_ROOMS_REQUEST,
    FETCH_ROOMS_REQUEST_SUCCESS,
    FETCH_ROOMS_REQUEST_FAILURE,

    ADD_ROOM_TO_FAVOURITES,
    TOGGLE_CREATE_ROOM_DIALOG,

    SELECT_ROOM_REQUEST,
    SELECT_ROOM_REQUEST_SUCCESS,
    SELECT_ROOM_REQUEST_FAILURE,

    FETCH_ROOM_CONVERSATION_REQUEST,
    FETCH_ROOM_CONVERSATION_REQUEST_SUCCESS,
    FETCH_ROOM_CONVERSATION_REQUEST_FAILURE,

    ADD_ADMIN_TO_ROOM_REQUEST,
    ADD_ADMIN_TO_ROOM_REQUEST_SUCCESS,
    ADD_ADMIN_TO_ROOM_REQUEST_FAILURE,

    ADD_MEMBER_TO_ROOM_REQUEST,
    ADD_MEMBER_TO_ROOM_REQUEST_SUCCESS,
    ADD_MEMBER_TO_ROOM_REQUEST_FAILURE,

    CREATE_CHAT_MESSAGE_REQUEST,
    CREATE_CHAT_MESSAGE_REQUEST_SUCCESS,
    CREATE_CHAT_MESSAGE_REQUEST_FAILURE
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

const selectRoomRequest = () =>
{
    return {
        type: SELECT_ROOM_REQUEST
    }
}

const selectRoomRequestSuccess = (selectedRoom) =>
{
    return {
        type: SELECT_ROOM_REQUEST_SUCCESS,
        payload: selectedRoom
    }
}

const selectRoomRequestFailure = (error) =>
{
    return {
        type: SELECT_ROOM_REQUEST_FAILURE,
        payload: error
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

const fetchRoomsRequestSuccess = (fetchedRoom) =>
{
    return {
        type: FETCH_ROOMS_REQUEST_SUCCESS,
        payload: fetchedRoom
    }
}

const fetchRoomsRequestFailure = (error) =>
{
    return {
        type: FETCH_ROOMS_REQUEST_FAILURE,
        payload: error
    }
}

const createNewRoomRequest = () =>
{
    return {
        type: CREATE_ROOM_REQUEST
    }
}

const createNewRoomRequestSuccess = (room) =>
{
    return {
        type: CREATE_ROOM_REQUEST_SUCCESS,
        payload: room
    }
}

const createNewRoomRequestFailure = (error) =>
{
    return {
        type: CREATE_ROOM_REQUEST_FAILURE,
        payload: error
    }
}

const addMemberToRoomRequest = () =>
{
    return {
        type: ADD_MEMBER_TO_ROOM_REQUEST
    }
}

const addMemberToRoomRequestSuccess = (newMember) =>
{
    return {
        type: ADD_MEMBER_TO_ROOM_REQUEST_SUCCESS,
        payload: newMember
    }
}

const addMemberToRoomRequestFailure = (error) =>
{
    return {
        type: ADD_MEMBER_TO_ROOM_REQUEST_FAILURE,
        payload: error
    }
}

const addAdminToRoomRequest = () =>
{
    return {
        type: ADD_ADMIN_TO_ROOM_REQUEST
    }
}

const addAdminToRoomRequestSuccess = (administrators) =>
{
    return {
        type: ADD_ADMIN_TO_ROOM_REQUEST_SUCCESS,
        payload: administrators
    }
}

const addAdminToRoomRequestFailure = (error) =>
{
    return {
        type: ADD_ADMIN_TO_ROOM_REQUEST_FAILURE,
        payload: error
    }
}

const fetchConversationRequest = () =>
{
    return {
        type: FETCH_ROOM_CONVERSATION_REQUEST
    }
}

const fetchConversationRequestSuccess = (conversation) =>
{
    return {
        type: FETCH_ROOM_CONVERSATION_REQUEST_SUCCESS,
        payload: conversation
    }
}

const fetchConversationRequestFailure = (error) =>
{
    return {
        type: FETCH_ROOM_CONVERSATION_REQUEST_FAILURE,
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

const createChatMessageRequest = () =>
{
    return {
        type: CREATE_CHAT_MESSAGE_REQUEST
    }
}

const createChatMessageRequestSuccess = (chatMessages) =>
{
    return {
        type: CREATE_CHAT_MESSAGE_REQUEST_SUCCESS,
        payload: chatMessages
    }
}

const createChatMessageRequestFailure = (error) =>
{
    return {
        type: CREATE_CHAT_MESSAGE_REQUEST_FAILURE,
        payload: error
    }
}

export const createChatMessage = (roomId, newChatMessage, loggedInUserId) =>
{
    return function(dispatch)
    {
        dispatch(createChatMessageRequest(newChatMessage));
        axios.post('http://localhost:8080/addChat', { roomId: roomId, content: newChatMessage, authorId: loggedInUserId })
            .then(response =>
            {
                dispatch(createChatMessageRequestSuccess(response.data));
            })
            .catch(error =>
            {
                dispatch(createChatMessageRequestFailure(error.message));
            });
    }
}

export const selectRoom = (selectedRoomIndex) =>
{
    return function(dispatch)
    {
        dispatch(selectRoomRequest());
        axios.get('http://localhost:8080/room?roomId=' + selectedRoomIndex)
            .then(response =>
            {
                dispatch(selectRoomRequestSuccess(response.data));
            })
            .catch(err =>
            {
                dispatch(selectRoomRequestFailure(err.message));
            });
    }
}

export const fetchRooms = () =>
{
    return function(dispatch)
    {
        dispatch(fetchRoomsRequest());
        axios.get('http://localhost:8080/rooms')
            .then(response =>
            {
                dispatch(fetchRoomsRequestSuccess(response.data));
            })
            .catch(err =>
            {
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

export const createNewRoom = (roomName, loggedInUserId) =>
{
    return function(dispatch)
    {
        dispatch(createNewRoomRequest())
        axios.post('http://localhost:8080/addRoom', { ownerId: loggedInUserId, roomName: roomName})
            .then(response =>
            {
                dispatch(createNewRoomRequestSuccess(response.data));
            })
            .catch(err =>
            {
                dispatch(createNewRoomRequestFailure(err.message));
            });
    }
}

export const addMemberToRoom = (roomId, newRoomMemberId, loggedInUserId) =>
{
    return function(dispatch)
    {
        dispatch(addMemberToRoomRequest())
        axios.post(`http://localhost:8080/addMember?roomId=${roomId}&newMemberId=${newRoomMemberId}&instigatorId=${loggedInUserId}`)
            .then(response =>
            {
                dispatch(addMemberToRoomRequestSuccess(response.data));
            })
            .catch(err =>
            {
                dispatch(addMemberToRoomRequestFailure(err.message));
            });
    }
}

export const addAdminToRoom = (roomId, newRoomAdminId, loggedInUserId) =>
{
    return function(dispatch)
    {
        dispatch(addAdminToRoomRequest())
        axios.post(`http://localhost:8080/addAdmin?roomId=${roomId}&newAdminId=${newRoomAdminId}&instigatorId=${loggedInUserId}`)
            .then(response =>
            {
                dispatch(addAdminToRoomRequestSuccess(response.data));
            })
            .catch(err =>
            {
                dispatch(addAdminToRoomRequestFailure(err.message));
            });
    }
}

export const fetchConversation = (selectedRoomIndex) =>
{
    return function(dispatch)
    {
        dispatch(fetchConversationRequest(selectedRoomIndex));
        axios.get(`http://localhost:8080/conversation?roomId=${selectedRoomIndex}&startOffset=0&endOffset=1`)
            .then(response =>
            {
                dispatch(fetchConversationRequestSuccess(response.data));
            })
            .catch(err =>
            {
                dispatch(fetchConversationRequestFailure(err.message));
            });
    }
}
