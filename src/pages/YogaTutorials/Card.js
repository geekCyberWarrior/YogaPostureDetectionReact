import React from "react";

import Avatar from "@material-ui/core/Avatar";
import CardComponent from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";

import useStyles from "./styles";

const Main = ({ imageUrl, title, description, clickHandler }) => {
    const classes = useStyles();

    // const { imageUrl, title, description } = {
    //     imageUrl:
    //         "https://image.freepik.com/free-photo/river-foggy-mountains-landscape_1204-511.jpg",
    //     title: "TIOTLE",
    //     description:
    //         "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur fugit vero quos nulla unde rerum, corporis tenetur delectus minus eos.",
    // };

    return (
        <CardComponent className={classes.card} onClick={clickHandler}>
            <CardMedia className={classes.media} image={imageUrl} />
            <CardContent className={classes.content}>
                <Typography
                    className={"MuiTypography--heading"}
                    variant={"h6"}
                    gutterBottom
                >
                    {title}
                </Typography>
                <Typography
                    className={"MuiTypography--subheading"}
                    variant={"caption"}
                >
                    {description}
                </Typography>
            </CardContent>
        </CardComponent>
    );
};

export default Main;
