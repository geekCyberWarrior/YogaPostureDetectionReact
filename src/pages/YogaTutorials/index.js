import React from "react";
import { useHistory } from "react-router-dom";
import Card from "./Card";

import "../styles.css";

const YogaTutorials = () => {    
    const history = useHistory();

    return (
        <div className="yoga-tutorial-container">
            <div className="d-flex">
                <Card
                    imageUrl={
                        "https://github.com/sanjithsjadhav/YogaPostureDetection/raw/main/images/bhujang.jpg"
                    }
                    title={"Bhujangasana - cobra pose"}
                    description={
                        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur fugit vero quos nulla unde rerum, corporis tenetur delectus minus eos."
                    }
                    clickHandler={() => history.push("/yoga-tutorials/rokGy0huYEA")}
                />
                <Card
                    imageUrl={
                        "https://github.com/sanjithsjadhav/YogaPostureDetection/raw/main/images/shava.jpg"
                    }
                    title={"Shavasana - corpse pose"}
                    description={
                        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur fugit vero quos nulla unde rerum, corporis tenetur delectus minus eos."
                    }
                    clickHandler={() => history.push("/yoga-tutorials/rokGy0huYEA")}
                />
                <Card
                    imageUrl={
                        "https://github.com/sanjithsjadhav/YogaPostureDetection/raw/main/images/Tadasana.jpg"
                    }
                    title={"Tadasana - mountain pose"}
                    description={
                        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur fugit vero quos nulla unde rerum, corporis tenetur delectus minus eos."
                    }
                    clickHandler={() => history.push("/yoga-tutorials/rokGy0huYEA")}
                />
            </div>
            <div className="d-flex">
                <Card
                    imageUrl={
                        "https://github.com/sanjithsjadhav/YogaPostureDetection/raw/main/images/vrikshasana-.jpg"
                    }
                    title={"Vrikshasana - tree pose"}
                    description={
                        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur fugit vero quos nulla unde rerum, corporis tenetur delectus minus eos."
                    }
                    clickHandler={() => history.push("/yoga-tutorials/rokGy0huYEA")}
                />
                <Card
                    imageUrl={
                        "https://github.com/sanjithsjadhav/YogaPostureDetection/raw/main/images/padmasan.jpg"
                    }
                    title={"Padmasana - lotus pose"}
                    description={
                        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur fugit vero quos nulla unde rerum, corporis tenetur delectus minus eos."
                    }
                    clickHandler={() => history.push("/yoga-tutorials/rokGy0huYEA")}
                />
                <Card
                    imageUrl={
                        "https://github.com/sanjithsjadhav/YogaPostureDetection/raw/main/images/Trikonasana-blog.jpg"
                    }
                    title={"Trikonasana - triangle pose"}
                    description={
                        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur fugit vero quos nulla unde rerum, corporis tenetur delectus minus eos."
                    }
                    clickHandler={() => history.push("/yoga-tutorials/rokGy0huYEA")}
                />
            </div>
        </div>
    );
};

export default YogaTutorials;
