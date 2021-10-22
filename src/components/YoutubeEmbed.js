import React from "react";
import PropTypes from "prop-types";

import "../pages/styles.css";
import { useParams } from "react-router-dom";

const YoutubeEmbed = () => {
    const { embedId } = useParams();

    return (
        <div className="video-responsive bg-yoga">
            <iframe
                width="853"
                height="480"
                src={`https://www.youtube.com/embed/${embedId}`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="Embedded youtube"
            />
        </div>
    );
};

YoutubeEmbed.propTypes = {
    embedId: PropTypes.string.isRequired,
};

export default YoutubeEmbed;
