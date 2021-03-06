import React from 'react'
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CardHeader from '@material-ui/core/CardHeader';
import Typography from '@material-ui/core/Typography';
import { Button } from '@material-ui/core';

const CardProj = (props) => {
    const { href } = props
    return(
        <Card className="card" onClick={() => window.location.href = href} elevation={9}>
            <div className="cardContent">
                <CardActionArea>
                    <CardMedia
                        className="cardImg" 
                        image={props.img}
                        title="test"
                    />
                    <CardContent>
                        <Typography variant="h6">
                            {props.title}
                        </Typography>
                        <Typography className="description" variant="body2" component="p">
                            {props.description}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </div>
        </Card>
    )
}

export default CardProj
