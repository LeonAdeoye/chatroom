import React, {Component} from 'react';
import ChatMessageComponent from "./ChatMessageComponent";
import {connect} from "react-redux"
import RoomHeaderComponent from "./RoomHeaderComponent";
import {Box, Typography} from "@mui/material";
import ActivityComponent from "./ActivityComponent";

class ConversationComponent extends Component
{
    render()
    {
        const {conversation, selectedRoom, activities} = this.props;
        let intermediateResult = conversation.concat(activities);
        let uniqueDates = createDates(intermediateResult);
        const result = intermediateResult.concat(uniqueDates).sort((a, b) => new Date(a["timeStamp"]).getTime() - new Date(b["timeStamp"]).getTime());

        return (
            conversation && selectedRoom
            ?
            <Box>
                <RoomHeaderComponent/>
                { result.map(content => content['activity'] ?
                    <ActivityComponent key={content['id']} activity={content}/> :
                    (content["contentType"] === "date-divider" ?
                        <Typography sx={{ borderRadius: '7px', backgroundColor:'lightblue', color: "black", borderColor:'white', border:1}} variant="h6" key={content['id']}>{content["content"]}</Typography> :
                        <ChatMessageComponent key={content['id']} chatMessage={content}/>))
                }
            </Box>
            :
            null
        );
    }
}

const padDigits = (number, digits) =>
{
    return Array(Math.max(digits - String(number).length + 1, 0)).join(0) + number;
}

const createDates = (inputList) =>
{
    const weekdays = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let result = [];

    for(let index = 0; index < inputList.length; ++index)
    {
        let currentDate = new Date(inputList[index]["timeStamp"]);
        let month = months[currentDate.getMonth()];
        let weekday = weekdays[currentDate.getDay()];
        let year = currentDate.getFullYear();
        let day = currentDate.getDate();
        let contentDate = `${weekday} ${day} ${month} ${year}`;
        let timeStampDate = `${year}-${padDigits(currentDate.getMonth() + 1, 2)}-${day}T00:00:00.000`;
        result.push({content: contentDate, id: contentDate, contentType: 'date-divider', timeStamp: timeStampDate});
    }

    return Array.from(new Set(result.map(a => a.id)))
        .map(id => {
            return result.find(a => a.id === id)
        });
}

const mapStateToProps = (state) =>
{
    return {
        conversation: state.roomList.conversation,
        activities: state.roomList.activities,
        selectedRoom: state.roomList.selectedRoom
    }
}

export default connect(mapStateToProps) (ConversationComponent);


