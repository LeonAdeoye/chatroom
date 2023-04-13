import React, {Component} from 'react';
import {connect} from "react-redux";
import {fetchRooms, toggleCreateRoomDialogFlag} from "../redux/roomList/roomListActions";
import RoomComponent from "./RoomComponent";
import {Accordion, AccordionDetails, AccordionSummary, IconButton, Stack, TextField, Tooltip, Typography} from "@mui/material";
import NewRoomDialogComponent from "./NewRoomDialogComponent";
import AddCommentIcon from '@mui/icons-material/AddComment';
import FavouritesFolderComponent from "./FavouritesFolderComponent";
import RecentFolderComponent from "./RecentFolderComponent";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import {fetchUsers} from "../redux/user/userActions";



class RoomListComponent extends Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            isFavouritesExpanded: false,
            isRecentExpanded: false,
            filterText: ''
        }
    }

    render()
    {
        const {openCreateRoomDialogFlag, toggleCreateRoomDialogFlag, rooms, favouriteRooms, users, loggedInUserId} = this.props;

        const handleClick = () =>
        {
            toggleCreateRoomDialogFlag();
        }

        const handleOnChange = (event) =>
        {
            this.setState({filterText: event.target.value});
        }

        const handleAccordionFavouritesClick = (event) =>
        {
            let value = !this.state.isFavouritesExpanded;
            this.setState({isFavouritesExpanded: value});
        }

        const handleAccordionRecentClick = (event) =>
        {
            let value = !this.state.isRecentExpanded;
            this.setState({isRecentExpanded: value});
        }

        const filterRooms = (func) =>
        {
            const filterText = this.state.filterText.toUpperCase();

            if (favouriteRooms.length > 0 && rooms.length > 0)
                return rooms.filter(room => func(favouriteRooms, room.id)).filter(room => filterText === '' || room.name.toUpperCase().includes(filterText));

            if (users.length > 0 && loggedInUserId !== '' && rooms.length > 0)
            {
                const user = users.find(user => user.id === loggedInUserId);
                if (user && user.favouriteRooms.length > 0)
                    return rooms.filter(room => func(user.favouriteRooms, room.id)).filter(room => filterText === '' || room.name.toUpperCase().includes(filterText));
            }

            return [];
        };

        const myFavouriteRooms = filterRooms((room, id) => { return room.includes(id); });
        const myNonFavouriteRooms = filterRooms((room, id) => { return !room.includes(id); });

        return (
            <div>
                {openCreateRoomDialogFlag ? <NewRoomDialogComponent/> : null}
                <Stack direction='row'>
                    <TextField label='Enter text to filter'
                               variant='outlined'
                               size="small"
                               onChange={handleOnChange}
                               InputLabelProps={{ style: { color: 'white' } }}
                               inputProps={{ style: { color: 'white', borderColor: 'white'} }}
                               sx={{mt:2, mb:2, mr:0, ml:2, width:'85%', backgroundColor:'#575555'}}/>
                    <Tooltip title={<Typography fontSize={20}>Add a new chat room.</Typography>}>
                        <IconButton size='small' onClick={handleClick} sx={{ color: 'white'}}>
                            <AddCommentIcon/>
                        </IconButton>
                    </Tooltip>
                </Stack>
                <Stack>
                    {myFavouriteRooms.length > 0 ? <Accordion disableGutters sx={{ backgroundColor:'#404040'}} expanded={ this.state.isFavouritesExpanded} TransitionProps={{ unmountOnExit: true }} >
                        <AccordionSummary sx={{ backgroundColor:'#575555', height:'25px', margin:0.5, borderRadius: '5px'}}
                                          onClick={handleAccordionFavouritesClick}
                                          id='panel-1-header'
                                          aria-controls='panel1-content'
                                          expandIcon={<ExpandMoreIcon sx={{color:'white'}}/>}><FavouritesFolderComponent/></AccordionSummary>
                        <AccordionDetails sx={{padding:0.5, margin:0, border: '0px'}}>{myFavouriteRooms.map((room) => <RoomComponent key={room.id} index={room.id} roomName={room.name}/>)}</AccordionDetails>
                    </Accordion> : null}
                    {myNonFavouriteRooms.length > 0 ? <Accordion disableGutters  sx={{ backgroundColor:'#404040', border:'0px'}} expanded={ this.state.isRecentExpanded} TransitionProps={{ unmountOnExit: true }}>
                        <AccordionSummary sx={{ backgroundColor:'#575555', height:'25px', margin:0.5, borderRadius: '5px'}}
                                          id='panel-2-header'
                                          aria-controls='panel2-content'
                                          onClick={handleAccordionRecentClick}
                                          expandIcon={<ExpandMoreIcon sx={{color:'white'}}/>}><RecentFolderComponent/></AccordionSummary>
                        <AccordionDetails sx={{padding:0.5, margin:0, border: '0px'}}>{myNonFavouriteRooms.filter(room => !room.isValid).map((room) => <RoomComponent key={room.id} index={room.id} roomName={room.name}/>)}</AccordionDetails>
                    </Accordion> : null}
                </Stack>
            </div>
        );
    }

    componentDidMount()
    {
        if(this.props.rooms.length === 0)
            this.props.fetchRooms();

        if(this.props.users.length === 0)
            this.props.fetchUsers();
    }
}

// The second parameter is props of the component itself passed in by the parent.
// By convention, the second parameter is called ownProps.
const mapStateToProps = (state, ownProps) =>
{
    return {
        rooms: state.roomList.rooms,
        users:state.user.users,
        favouriteRooms: state.roomList.favouriteRooms,
        loggedInUserId: state.user.loggedInUserId,
        openCreateRoomDialogFlag: state.roomList.openCreateRoomDialogFlag
    }
}

const mapDispatchToProps = (dispatch) =>
{
    return {
        toggleCreateRoomDialogFlag: () => dispatch(toggleCreateRoomDialogFlag()),
        fetchRooms: () => dispatch(fetchRooms()),
        fetchUsers: () => dispatch(fetchUsers())
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (RoomListComponent);

