import React from "react";
import { useHistory } from "react-router-dom";

import Card from "./Card";

import "../styles.css";

const Home = () => {
    const history = useHistory();

    return (
        <div className="homeview-container">
            <Card
                imageUrl={
                    "https://image.freepik.com/free-photo/river-foggy-mountains-landscape_1204-511.jpg"
                }
                title={"Yoga Tutorials"}
                description={
                    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur fugit vero quos nulla unde rerum, corporis tenetur delectus minus eos."
                }
                clickHandler={() => history.push("/yoga-tutorials")}
            />
            <Card
                imageUrl={
                    "https://image.freepik.com/free-photo/river-foggy-mountains-landscape_1204-511.jpg"
                }
                title={"Perform Asana"}
                description={
                    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur fugit vero quos nulla unde rerum, corporis tenetur delectus minus eos."
                }
                clickHandler={() => history.push("/perform-asana")}
            />
        </div>
    );
};

export default Home;
