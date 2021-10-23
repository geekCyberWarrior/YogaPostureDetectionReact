// 1. Install dependencies DONE
// 2. Import dependencies DONE
// 3. Setup webcam and canvas DONE
// 4. Define references to those DONE
// 5. Load posenet DONE
// 6. Detect function DONE
// 7. Drawing utilities from tensorflow DONE
// 8. Draw functions DONE

import React, { useEffect, useRef, useState } from "react";
import * as tf from "@tensorflow/tfjs";
import * as posenet from "@tensorflow-models/posenet";
import Webcam from "react-webcam";

import "../styles.css";

import axios from "axios";
// const fs = require("fs");

// const NUM_OF_FRAMES = 30;

function CollectVideo() {
    const webcamRef = useRef(null);
    const canvasRef = useRef(null);
    // const [collected, setCollected] = useState([]);
    // const [count, setCount] = useState(0);
    const [started, setStarted] = useState(false);
    const [net, setNet] = useState();
    const [asana, setAsana] = useState("");

    //  Load posenet
    // const runPosenet = async () => {
    //     const net = await posenet.load({
    //         inputResolution: { width: 640, height: 480 },
    //         scale: 0.8,
    //     });
    //     //

    //     console.log(typeof tf.Floor);

    //     setInterval(() => {
    //         detect(net);
    //     }, 500);
    // };

    const detect = async (net) => {
        if (
            typeof webcamRef.current !== "undefined" &&
            webcamRef.current !== null &&
            webcamRef.current.video.readyState === 4
        ) {
            // // Get Video Properties
            // const video = webcamRef.current.video;
            // const videoWidth = webcamRef.current.video.videoWidth;
            // const videoHeight = webcamRef.current.video.videoHeight;

            // // Set video width
            // webcamRef.current.video.width = videoWidth;
            // webcamRef.current.video.height = videoHeight;

            // Make Detections
            // const pose = await net.estimateSinglePose(video);
            // const { keypoints } = pose;
            // const mapKeyPoints = keypoints.map((keypoint) => [
            //     keypoint.position.x,
            //     keypoint.position.y,
            // ]);

            // setCount((prev) => prev + 1);
            // console.log("count", count, mapKeyPoints);
            // setCollected((alreadyCollected) => [
            //     ...alreadyCollected,
            //     mapKeyPoints,
            // ]);
            // console.log("COLLECTEd", collected.length);

            // if (collected.length === 30) {
            //     setCollected([]);
            // }

            let fd = new FormData();
            // const image = webcamRef.current.getScreenshot();
            // fd.append("video", webcamRef.current.getScreenshot());

            // const data = { video: webcamRef.current.getScreenshot() };
            fd.append("image_str", webcamRef.current.getScreenshot());

            axios
                .post("http://54.174.228.221:8000", fd, {
                    headers: {
                        "Content-Type": "multipart/form-data",
                        "Access-Control-Allow-Origin": "*",
                    },
                })
                .then((response) => {
                    const { data } = response;
                    if ("asana" in data) {
                        console.log(data);
                        setAsana((prev) => prev.concat(" ".concat(data.asana)));
                    } else {
                        console.log("waiting");
                    }
                });
        }
    };

    const loadMode = async () => {
        const model = await posenet.load({
            inputResolution: { width: 640, height: 480 },
            scale: 0.8,
        });
        setNet(model);
    };

    // runPosenet();

    useEffect(() => {
        console.log(typeof tf.Floor);
        loadMode();
    }, []);

    const handleStart = () => {
        setStarted(true);
        console.log(net, "NET", typeof net);

        setInterval(async () => {
            await detect(net);
        }, 200);
    };

    return (
        <div className="App">
            <header className="App-header">
                <button onClick={handleStart}>START</button>
                {started && (
                    <>
                        <Webcam
                            ref={webcamRef}
                            screenshotFormat="image/jpeg"
                            style={{
                                position: "absolute",
                                marginLeft: "auto",
                                marginRight: "auto",
                                left: 0,
                                right: 0,
                                textAlign: "center",
                                zindex: 9,
                                width: 640,
                                height: 480,
                            }}
                        />

                        <canvas
                            ref={canvasRef}
                            style={{
                                position: "absolute",
                                marginLeft: "auto",
                                marginRight: "auto",
                                left: 0,
                                right: 0,
                                textAlign: "center",
                                zindex: 9,
                                width: 640,
                                height: 480,
                            }}
                        />
                    </>
                )}
            </header>
            {asana.length > 0 && <div className="displayAsana">{asana}</div>}
        </div>
    );
}

export default CollectVideo;
