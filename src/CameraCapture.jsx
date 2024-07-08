import React, { useRef, useState } from "react";

const CameraCapture = () => {
  const videoRef = useRef(null);
  const [capturedImage, setCapturedImage] = useState(null);

  const handleCapture = async () => {
    const stream = await navigator.mediaDevices.getUserMedia({ video: true });
    if (videoRef.current) {
      videoRef.current.srcObject = stream;
    }
  };

  const takeSnapshot = () => {
    const canvas = document.createElement("canvas");
    canvas.width = videoRef.current.videoWidth;
    canvas.height = videoRef.current.videoHeight;
    const ctx = canvas.getContext("2d");
    ctx.drawImage(videoRef.current, 0, 0, canvas.width, canvas.height);
    const imageDataURL = canvas.toDataURL("image/png");
    setCapturedImage(imageDataURL);
  };

  const handleSend = async () => {
    // Replace with actual API endpoint and logic
    const formData = new FormData();
    formData.append("image", capturedImage);

    try {
      const response = await fetch("https://your-api-endpoint.com/upload", {
        method: "POST",
        body: formData,
      });
      // Handle response as needed
      console.log("Image uploaded successfully!", response);
    } catch (error) {
      console.error("Error uploading image:", error);
    }
  };

  return (
    <div>
      {capturedImage ? (
        <div>
          <img src={capturedImage} alt="Captured" />
          <button onClick={handleSend}>Send</button>
        </div>
      ) : (
        <div>
          <video ref={videoRef} autoPlay />
          <button onClick={takeSnapshot}>Capture</button>
        </div>
      )}
    </div>
  );
};

export default CameraCapture;
