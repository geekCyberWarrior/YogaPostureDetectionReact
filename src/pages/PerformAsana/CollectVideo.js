// 1. Install dependencies DONE
// 2. Import dependencies DONE
// 3. Setup webcam and canvas DONE
// 4. Define references to those DONE
// 5. Load posenet DONE
// 6. Detect function DONE
// 7. Drawing utilities from tensorflow DONE
// 8. Draw functions DONE

import React, { useRef, useState } from "react";
import * as tf from "@tensorflow/tfjs";
import * as posenet from "@tensorflow-models/posenet";
import Webcam from "react-webcam";

// const NUM_OF_FRAMES = 30;

function CollectVideo() {
    const webcamRef = useRef(null);
    const canvasRef = useRef(null);
    const [collected, setCollected] = useState([]);
    const [count, setCount] = useState(0);

    //  Load posenet
    const runPosenet = async () => {
        const net = await posenet.load({
            inputResolution: { width: 640, height: 480 },
            scale: 0.8,
        });
        //
        setInterval(() => {
            detect(net);
        }, 500);
    };

    const detect = async (net) => {
        if (
            typeof webcamRef.current !== "undefined" &&
            webcamRef.current !== null &&
            webcamRef.current.video.readyState === 4
        ) {
            // Get Video Properties
            const video = webcamRef.current.video;
            const videoWidth = webcamRef.current.video.videoWidth;
            const videoHeight = webcamRef.current.video.videoHeight;

            // Set video width
            webcamRef.current.video.width = videoWidth;
            webcamRef.current.video.height = videoHeight;

            // Make Detections
            const pose = await net.estimateSinglePose(video);
            const { keypoints } = pose;
            const mapKeyPoints = keypoints.map((keypoint) => [
                keypoint.position.x,
                keypoint.position.y,
            ]);

            setCount((prev) => prev+1);
            console.log("count", count);
            setCollected((alreadyCollected) => [
                ...alreadyCollected,
                mapKeyPoints,
            ]);
            console.log("COLLECTEd", collected.length);

            // if (collected.length === NUM_OF_FRAMES) {
            //   setCollected([]);
            // }
        }
    };

    runPosenet();

    return (
        <div className="App">
            <header className="App-header">
                <Webcam
                    ref={webcamRef}
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
            </header>
        </div>
    );
}

export default CollectVideo;
