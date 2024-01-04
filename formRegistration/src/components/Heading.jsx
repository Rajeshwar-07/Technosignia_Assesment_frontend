
import {Avatar, Grid, Paper, Typography } from "@mui/material";
import React from "react";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
function heading(){
    const paperStyle={padding:`10px 20px`,margin:"auto"}
    const headerStyle = {padding:`10px` ,margin:0}
    const avatarStyle={backgroundColor:`#77BB7C`}
    return(
       <Grid align="center">
            <Paper style={paperStyle} >
                <Grid>
                    <Avatar style={avatarStyle}>
                        <AccountCircleIcon/>
                     </Avatar>
                </Grid>
                <h3 style={headerStyle}>User Registration Form</h3>
            </Paper> 
       </Grid>
    )
}
export default heading;