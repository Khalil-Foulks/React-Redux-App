import React from 'react';
import { Grid, Paper, Typography, makeStyles } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

import data from './data'

const theme = createMuiTheme({
    overrides: {
        MuiCard: {
            text: {
                background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
                borderRadius: 3,
                border: 0,
                color: 'white',
                height: 48,
                padding: '0 30px',
                boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
            }
        }
    }
})

const TeamCard = props => {
    // console.log(data)
 
    // console.log(props)
     return (
        <div id = {props.teamInfo.full_name} style={{ padding: 30 }}>
            <Grid container spacing={40} justify="center">
                <ThemeProvider>
                    <Card 
                        style={{
                            width:360, 
                            background: "linear-gradient(0deg, rgba(33,147,176,1) 0%, rgba(109,213,237,1) 100%)",
                            boxShadow: "5px 0 18px #888888"
                        }}
                    >
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                alt= {props.teamInfo.full_name}
                                image= {props.teamInfo.id === data.map(icon =>{
                                    console.log("ICON: ", icon)
                                    return icon.teamFullName ? icon.iconURL: null
                                })}
                                title= {props.teamInfo.full_name}
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    {props.teamInfo.full_name}
                                </Typography>
                                <Typography variant="body2" component="p">
                                    Conference:{props.teamInfo.conference}
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </ThemeProvider>
            </Grid>
        </div>
    )
}


export default TeamCard