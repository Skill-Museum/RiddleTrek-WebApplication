import React from "react";
import { useNavigate } from "react-router-dom";

const FlowSixRiddles = () => {
  const navigate = useNavigate();
  return (
    <div className="w-full mt-20 h-full">
      <div className="flex flex-row gap-2">
        <div
          className="border flex flex-row items-center justify-start rounded-xl w-1/2 p-16 text-white font-semibold text-xl"
          style={{ backgroundColor: "#5768AC" }}
          onClick={() => {
            navigate("/FlowSixRiddleOne");
          }}
        >
          First Riddle
        </div>
        <div
          className="border flex flex-row items-center justify-start rounded-xl w-1/2 p-16 text-white font-semibold text-xl"
          style={{ backgroundColor: "#F2CC43" }}
          onClick={() => {
            navigate("/FlowSixRiddleTwo");
          }}
        >
          {" "}
          Second Riddle
        </div>
      </div>
      <div className="flex flex-row gap-2 h-2/6">
        <div
          className="border flex flex-row items-center justify-start rounded-xl w-1/2 p-16 mt-3 mb-3 text-white font-semibold text-xl"
          style={{ backgroundColor: "#E282B2" }}
          onClick={() => {
            navigate("/FlowSixRiddleThree");
          }}
        >
          Third Riddle
        </div>
        <div
          className="border flex flex-row items-center justify-start rounded-xl w-1/2 p-16 mt-3 mb-3 text-white font-semibold text-xl"
          style={{ backgroundColor: "#70C079" }}
          onClick={() => {
            navigate("/FlowSixRiddleFour");
          }}
        >
          Fourth Riddle
        </div>
      </div>
      <div className="flex flex-row gap-2 h-2/6">
        <div
          className="border flex flex-row items-center justify-start rounded-xl w-1/2 p-16 text-white font-semibold text-xl"
          style={{ backgroundColor: "#ECA555" }}
          onClick={() => {
            navigate("/FlowSixRiddleFive");
          }}
        >
          Fifth Riddle
        </div>
        <div
          className="border flex flex-row items-center justify-start rounded-xl w-1/2 p-16 text-white font-semibold text-xl"
          style={{ backgroundColor: "#00B1E3" }}
          onClick={() => {
            navigate("/FlowSixRiddleSix");
          }}
        >
          Sixth Riddle
        </div>
      </div>
    </div>
  );
};

export default FlowSixRiddles;
