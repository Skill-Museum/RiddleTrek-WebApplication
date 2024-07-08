import { faArrowLeft, faLock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const FlowFourRiddles = () => {
  const navigate = useNavigate();
  const [conditions, setConditions] = useState({});

  useEffect(() => {
    const keys = ["F4-R1", "F4-R2", "F4-R3", "F4-R4", "F4-R5", "F4-R6"];

    keys.forEach((key, index) => {
      if (!localStorage.getItem(key)) {
        localStorage.setItem(key, index === 0 ? "true" : "false");
      }
    });

    const updatedConditions = {};
    keys.forEach((key) => {
      const value = localStorage.getItem(key);
      updatedConditions[key] = value === "true" ? "isOpen" : "isClosed";
    });

    setConditions(updatedConditions);
  }, []);

  const handleNavigation = (condition, path) => {
    if (condition === "isOpen") {
      navigate(path);
    }
  };

  const renderRiddleDiv = (condition, path, label, bgColor) => (
    <div
      className={`border flex flex-col items-center justify-start rounded-xl w-1/2 p-16 text-white font-semibold text-xl ${
        condition === "isClosed" && "cursor-not-allowed"
      }`}
      style={{ backgroundColor: bgColor }}
      onClick={() => handleNavigation(condition, path)}
    >
      <div>{label}</div>
      {condition === "isClosed" && (
        <FontAwesomeIcon className="mt-4" icon={faLock} />
      )}
    </div>
  );

  return (
    <div className="w-full mt-10 h-full">
      <div className="w-4/5 flex items-center justify-start ml-7 mb-7">
        <FontAwesomeIcon
          className="h-7"
          icon={faArrowLeft}
          onClick={() => {
            navigate("/");
          }}
        />
      </div>
      <div className="flex flex-row gap-2">
        {conditions["F4-R1"] &&
          renderRiddleDiv(
            conditions["F4-R1"],
            "/FlowFourRiddleOne",
            "First Riddle",
            "#5768AC"
          )}
        {conditions["F4-R2"] &&
          renderRiddleDiv(
            conditions["F4-R2"],
            "/FlowFourRiddleTwo",
            "Second Riddle",
            "#F2CC43"
          )}
      </div>
      <div className="flex flex-row gap-2 h-2/6">
        {conditions["F4-R3"] &&
          renderRiddleDiv(
            conditions["F4-R3"],
            "/FlowFourRiddleThree",
            "Third Riddle",
            "#E282B2"
          )}
        {conditions["F4-R4"] &&
          renderRiddleDiv(
            conditions["F4-R4"],
            "/FlowFourRiddleFour",
            "Fourth Riddle",
            "#70C079"
          )}
      </div>
      <div className="flex flex-row gap-2 h-2/6">
        {conditions["F4-R5"] &&
          renderRiddleDiv(
            conditions["F4-R5"],
            "/FlowFourRiddleFive",
            "Fifth Riddle",
            "#ECA555"
          )}
        {conditions["F4-R6"] &&
          renderRiddleDiv(
            conditions["F4-R6"],
            "/FlowFourRiddleSix",
            "Sixth Riddle",
            "#00B1E3"
          )}
      </div>
    </div>
  );
};

export default FlowFourRiddles;
