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



class RoomListComponent extends Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            isFavouritesExpanded: false,
            isRecentExpanded: false
        }
    }

    render()
    {
        const {openCreateRoomDialogFlag, toggleCreateRoomDialogFlag, rooms} = this.props;

        const handleClick = () =>
        {
            toggleCreateRoomDialogFlag();
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

        return (
            <div>
                {openCreateRoomDialogFlag ? <NewRoomDialogComponent/> : null}
                <Stack direction='row'>
                    <TextField label='Enter text to filter'
                               variant='outlined'
                               size="small"
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
                    <Accordion disableGutters sx={{ backgroundColor:'#404040'}} expanded={ this.state.isFavouritesExpanded} TransitionProps={{ unmountOnExit: true }} >
                        <AccordionSummary sx={{ backgroundColor:'#575555', height:'25px', margin:0.5, borderRadius: '5px'}}
                                          onClick={handleAccordionFavouritesClick}
                                          id='panel-1-header'
                                          aria-controls='panel1-content'
                                          expandIcon={<ExpandMoreIcon sx={{color:'white'}}/>}><FavouritesFolderComponent/></AccordionSummary>
                        <AccordionDetails><Typography>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</Typography></AccordionDetails>
                    </Accordion>
                    <Accordion disableGutters  sx={{ backgroundColor:'#404040', border:'0px'}} expanded={ this.state.isRecentExpanded} TransitionProps={{ unmountOnExit: true }}>
                        <AccordionSummary sx={{ backgroundColor:'#575555', height:'25px', margin:0.5, borderRadius: '5px'}}
                                          id='panel-2-header'
                                          aria-controls='panel2-content'
                                          onClick={handleAccordionRecentClick}
                                          expandIcon={<ExpandMoreIcon sx={{color:'white'}}/>}><RecentFolderComponent/></AccordionSummary>
                        <AccordionDetails sx={{padding:0.5, margin:0, border: '0px'}}>{rooms.map((room) => <RoomComponent key={room.id} index={room.id} roomName={room.name}/>)}</AccordionDetails>
                    </Accordion>
                </Stack>
            </div>
        );
    }

    componentDidMount()
    {
        this.props.fetchRooms();
    }
}

// The second parameter is props of the component itself passed in by the parent.
// By convention, the second parameter is called ownProps.
const mapStateToProps = (state, ownProps) =>
{
    return {
        rooms: state.roomList.rooms,
        openCreateRoomDialogFlag: state.roomList.openCreateRoomDialogFlag
    }
}

const mapDispatchToProps = (dispatch) =>
{
    return {
        toggleCreateRoomDialogFlag: () => dispatch(toggleCreateRoomDialogFlag()),
        fetchRooms: () => dispatch(fetchRooms())
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (RoomListComponent);

