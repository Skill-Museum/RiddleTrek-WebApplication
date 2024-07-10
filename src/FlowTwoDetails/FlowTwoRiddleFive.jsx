import { faArrowLeft, faSyncAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useRef, useState, useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import Webcam from "react-webcam";
import axios from "axios";
import { BASE_URL } from "../baseUrl.js";

const FlowTwoRiddleFive = () => {
  const [image, setImage] = useState(null);
  const [answer, setAnswer] = useState("");
  const [showVideo, setShowVideo] = useState(false);
  const [imgSrc, setImgSrc] = useState(null);
  const webcamRef = useRef(null);
  const navigate = useNavigate();
  const [facingMode, setFacingMode] = useState("user");

  const handleCapture = async () => {
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      try {
        await navigator.mediaDevices.getUserMedia({ video: true });
        setShowVideo(true);
      } catch (error) {
        console.error("Error accessing the camera:", error);
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Unable to access the camera. Please check your device settings.",
        });
      }
    } else {
      console.error("getUserMedia not supported");
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Your browser does not support camera access.",
      });
    }
  };

  const capture = useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
    console.log("image src", imageSrc);
    setImgSrc(imageSrc);
    setShowVideo(false);

    // Call function to upload image
    uploadImage(imageSrc);
  }, [webcamRef, setImgSrc]);

  const handleGoBack = () => {
    setShowVideo(false);
  };

  const toggleCameraFacingMode = () => {
    setFacingMode((prevMode) => (prevMode === "user" ? "environment" : "user"));
  };

  const uploadImage = async (imageSrc) => {
    // Convert base64 image data to a Blob
    const base64Image = imageSrc.split(",")[1]; // Remove data:image/jpeg;base64, prefix
    const blob = await fetch(`data:image/jpeg;base64,${base64Image}`).then(
      (res) => res.blob()
    );

    const formData = new FormData();
    formData.append("image", blob, "image.jpg"); // 'image.jpg' can be any filename you prefer

    try {
      const response = await axios.post(BASE_URL, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      const responseData = response.data;
      const location = responseData.predicted_class;
      const confidence = responseData.confidence;

      if (location === "coffee_station" && confidence >= "0.90") {
        Swal.fire({
          icon: "success",
          title: "Your uploaded image is correct.",
          text: "Move on to the next riddle!",
        }).then(() => {
          localStorage.setItem("F2-R6", true);
          navigate("/FlowTwoRiddles");
        });
      } else if (
        location === "coffee_station" &&
        confidence >= 0.6 &&
        confidence < 0.9
      ) {
        Swal.fire({
          icon: "error",
          title: "Close!",
          text: "Click clearer and better image of the location.",
        });
      } else if (location != "coffee_station") {
        Swal.fire({
          icon: "error",
          title: "Not correct location.",
          text: "Looks like you are in the wrong location.",
        });
      }
    } catch (error) {
      console.error("Error uploading image:", error);
      Swal.fire({
        icon: "error",
        title: "Upload Failed",
        text: "There was an error uploading your image. Please try again.",
      });
    }
  };

  return (
    <div className="w-full flex items-center justify-center flex-col gap-10 mt-7 mb-10">
      <div className="w-4/5 flex items-center justify-start ml-14">
        <FontAwesomeIcon
          className="h-7"
          icon={faArrowLeft}
          onClick={() => {
            navigate("/FlowTwoRiddles");
          }}
        />
      </div>

      <div className="f1-r1 border rounded-xl w-4/5 p-8">
        <h1 className="font-bold text-2xl">Riddle 5</h1>
        <br />
        <p>
          In the heart of the campus, I start your day, Where friends and
          colleagues gather to stay. A morning haven, with coffee in hand, A
          beautiful spot where moments are planned. What am I?
        </p>

        <div className="w-full flex items-center justify-between">
          <button
            type="button"
            className="w-2/5 px-3 py-3 border rounded-xl mt-5 text-white"
            style={{ backgroundColor: "#ECA555" }}
            onClick={handleCapture}
          >
            Upload
          </button>
        </div>
      </div>

      <div className="flex items-center justify-center w-4/5">
        <h1 className="ml-4 text-red-500">
          NOTE: You might need to wait 30-40 seconds for your uploaded image
          response.
        </h1>
      </div>

      {showVideo && (
        <div className="fixed top-0 left-0 w-full h-4/5 bg-black z-50 flex flex-col justify-between">
          <Webcam
            audio={false}
            ref={webcamRef}
            screenshotFormat="image/jpeg"
            className="w-full h-full object-cover"
            videoConstraints={{ facingMode: facingMode }}
            playsInline
          />
          <div className="absolute top-0 right-0 w-full p-4">
            <FontAwesomeIcon
              className="absolute top-0 right-7 h-6 w-6 py-3 rounded-xl mt-5 text-white"
              icon={faSyncAlt}
              onClick={toggleCameraFacingMode}
            />
          </div>
          <div className="absolute bottom-0 left-0 w-full p-4 flex justify-evenly">
            <button
              onClick={handleGoBack}
              className="px-3 py-2 border rounded-xl text-white"
              style={{ backgroundColor: "#ECA555" }}
            >
              Go back
            </button>
            <button
              onClick={capture}
              className="px-3 py-2 border rounded-xl text-white"
              style={{ backgroundColor: "#ECA555" }}
            >
              Capture photo
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default FlowTwoRiddleFive;
