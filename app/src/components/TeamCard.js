import React from 'react';
import { Grid, Paper, Typography } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";

const TeamCard = props => {
    return (
        <div id = {props.teamInfo.full_name} style={{ marginTop: 20, padding: 30}}>
            <Grid container spacing={40} justify="center">
                <Card color='textSecondary'>
                    <CardActionArea>
                        {/* <CardMedia
                            component="img"
                            alt="Contemplative Reptile"
                            image= "https://lunawood.com/wp-content/uploads/2018/02/placeholder-image.png"
                            title="Contemplative Reptile"
                        /> */}
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
            </Grid>
        </div>
    )
}


export default TeamCard