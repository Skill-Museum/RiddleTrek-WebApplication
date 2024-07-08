import React from "react";

const MainFunctions = () => {
  const [showVideo, setShowVideo] = useState(false);
  const [imgSrc, setImgSrc] = useState(null);
  const webcamRef = useRef(null);

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

  const uploadImage = async (imageSrc) => {
    const formData = new FormData();
    formData.append("image", imageSrc);

    try {
      const response = await axios.post(
        "https://api.imgbb.com/1/upload",
        formData,
        {
          params: {
            expiration: 600,
            key: "f3f60b8d6ee01d09c6698c999eb757f4",
          },
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log("Image uploaded successfully:", response.data);
      Swal.fire({
        icon: "success",
        title: "Image Uploaded",
        text: "Your image has been uploaded successfully.",
      });
    } catch (error) {
      console.error("Error uploading image:", error);
      Swal.fire({
        icon: "error",
        title: "Upload Failed",
        text: "There was an error uploading your image. Please try again.",
      });
    }
  };

  return <div>MainFunctions</div>;
};

export default MainFunctions;
