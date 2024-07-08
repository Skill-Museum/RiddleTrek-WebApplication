// import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import React, { useEffect } from "react";
// import { useNavigate } from "react-router-dom";

// const FlowTwoRiddles = () => {
//   useEffect(() => {
//     if (!localStorage.getItem("F2-R1")) localStorage.setItem("F2-R1", "true");
//     if (!localStorage.getItem("F2-R2")) localStorage.setItem("F2-R2", "false");
//     if (!localStorage.getItem("F2-R3")) localStorage.setItem("F2-R3", "false");
//     if (!localStorage.getItem("F2-R4")) localStorage.setItem("F2-R4", "false");
//     if (!localStorage.getItem("F2-R5")) localStorage.setItem("F2-R5", "false");
//     if (!localStorage.getItem("F2-R6")) localStorage.setItem("F2-R6", "false");
//   }, []);

//   const keys = ["F2-R1", "F2-R2", "F2-R3", "F2-R4", "F2-R5", "F2-R6"];

//   useEffect(() => {
//     keys.forEach((key, index) => {
//       if (!localStorage.getItem(key)) {
//         localStorage.setItem(key, index === 0 ? "true" : "false");
//       }
//     });
//   }, []);

//   useEffect(() => {
//     keys.forEach((key) => {
//       const value = localStorage.getItem(key);
//       localStorage.setItem(
//         `${key} Condition`,
//         value === "true" ? "isOpen" : "isClosed"
//       );
//     });
//   }, []);

//   const navigate = useNavigate();
//   return (
//     <div className="w-full mt-10 h-full">
//       <div className="w-4/5 flex items-center justify-start ml-7 mb-7">
//         <FontAwesomeIcon
//           className="h-7"
//           icon={faArrowLeft}
//           onClick={() => {
//             navigate("/");
//           }}
//         />
//       </div>
//       <div className="flex flex-row gap-2">
//         <div
//           className="border flex flex-row items-center justify-start rounded-xl w-1/2 p-16 text-white font-semibold text-xl"
//           style={{ backgroundColor: "#5768AC" }}
//           onClick={() => {
//             navigate("/FlowTwoRiddleOne");
//           }}
//         >
//           First Riddle
//         </div>
//         <div
//           className="border flex flex-row items-center justify-start rounded-xl w-1/2 p-16 text-white font-semibold text-xl"
//           style={{ backgroundColor: "#F2CC43" }}
//           onClick={() => {
//             navigate("/FlowTwoRiddleTwo");
//           }}
//         >
//           {" "}
//           Second Riddle
//         </div>
//       </div>
//       <div className="flex flex-row gap-2 h-2/6">
//         <div
//           className="border flex flex-row items-center justify-start rounded-xl w-1/2 p-16 mt-3 mb-3 text-white font-semibold text-xl"
//           style={{ backgroundColor: "#E282B2" }}
//           onClick={() => {
//             navigate("/FlowTwoRiddleThree");
//           }}
//         >
//           Third Riddle
//         </div>
//         <div
//           className="border flex flex-row items-center justify-start rounded-xl w-1/2 p-16 mt-3 mb-3 text-white font-semibold text-xl"
//           style={{ backgroundColor: "#70C079" }}
//           onClick={() => {
//             navigate("/FlowTwoRiddleFour");
//           }}
//         >
//           Fourth Riddle
//         </div>
//       </div>
//       <div className="flex flex-row gap-2 h-2/6">
//         <div
//           className="border flex flex-row items-center justify-start rounded-xl w-1/2 p-16 text-white font-semibold text-xl"
//           style={{ backgroundColor: "#ECA555" }}
//           onClick={() => {
//             navigate("/FlowTwoRiddleFive");
//           }}
//         >
//           Fifth Riddle
//         </div>
//         <div
//           className="border flex flex-row items-center justify-start rounded-xl w-1/2 p-16 text-white font-semibold text-xl"
//           style={{ backgroundColor: "#00B1E3" }}
//           onClick={() => {
//             navigate("/FlowTwoRiddleSix");
//           }}
//         >
//           Sixth Riddle
//         </div>
//       </div>
//     </div>
//   );
// };

// export default FlowTwoRiddles;

import { faArrowLeft, faLock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const FlowTwoRiddles = () => {
  const navigate = useNavigate();
  const [conditions, setConditions] = useState({});

  useEffect(() => {
    const keys = ["F2-R1", "F2-R2", "F2-R3", "F2-R4", "F2-R5", "F2-R6"];

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
        {conditions["F2-R1"] &&
          renderRiddleDiv(
            conditions["F2-R1"],
            "/FlowTwoRiddleOne",
            "First Riddle",
            "#5768AC"
          )}
        {conditions["F2-R2"] &&
          renderRiddleDiv(
            conditions["F2-R2"],
            "/FlowTwoRiddleTwo",
            "Second Riddle",
            "#F2CC43"
          )}
      </div>
      <div className="flex flex-row gap-2 h-2/6">
        {conditions["F2-R3"] &&
          renderRiddleDiv(
            conditions["F2-R3"],
            "/FlowTwoRiddleThree",
            "Third Riddle",
            "#E282B2"
          )}
        {conditions["F2-R4"] &&
          renderRiddleDiv(
            conditions["F2-R4"],
            "/FlowTwoRiddleFour",
            "Fourth Riddle",
            "#70C079"
          )}
      </div>
      <div className="flex flex-row gap-2 h-2/6">
        {conditions["F2-R5"] &&
          renderRiddleDiv(
            conditions["F2-R5"],
            "/FlowTwoRiddleFive",
            "Fifth Riddle",
            "#ECA555"
          )}
        {conditions["F2-R6"] &&
          renderRiddleDiv(
            conditions["F2-R6"],
            "/FlowTwoRiddleSix",
            "Sixth Riddle",
            "#00B1E3"
          )}
      </div>
    </div>
  );
};

export default FlowTwoRiddles;
