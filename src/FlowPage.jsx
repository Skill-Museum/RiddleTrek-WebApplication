import React from "react";
import { useNavigate } from "react-router-dom";

const FlowPage = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="w-full flex justify-center flex-col items-center gap-14 mt-10 mb-10">
        <div
          className="w-3/5 p-14 bg-slate-400 flex items-center justify-center text-white font-semibold text-2xl border rounded-xl cursor-pointer"
          style={{ backgroundColor: "#5768AC" }}
          onClick={() => {
            navigate("/FlowOneRiddles");
          }}
        >
          TEAM 1
        </div>
        <div
          className="w-3/5 p-14 bg-slate-400 flex items-center justify-center text-white font-semibold text-2xl border rounded-xl cursor-pointer"
          style={{ backgroundColor: "#F2CC43" }}
          onClick={() => {
            navigate("/FlowTwoRiddles");
          }}
        >
          TEAM 2
        </div>
        <div
          className="w-3/5 p-14 bg-slate-400 flex items-center justify-center text-white font-semibold text-2xl border rounded-xl cursor-pointer"
          style={{ backgroundColor: "#E282B2" }}
          onClick={() => {
            navigate("/FlowThreeRiddles");
          }}
        >
          TEAM 3
        </div>
        <div
          className="w-3/5 p-14 bg-slate-400 flex items-center justify-center text-white font-semibold text-2xl border rounded-xl cursor-pointer"
          style={{ backgroundColor: "#70C079" }}
          onClick={() => {
            navigate("/FlowFourRiddles");
          }}
        >
          TEAM 4
        </div>
        <div
          className="w-3/5 p-14 bg-slate-400 flex items-center justify-center text-white font-semibold text-2xl border rounded-xl cursor-pointer"
          style={{ backgroundColor: "#ECA555" }}
          onClick={() => {
            navigate("/FlowFiveRiddles");
          }}
        >
          TEAM 5
        </div>
        <div
          className="w-3/5 p-14 bg-slate-400 flex items-center justify-center text-white font-semibold text-2xl border rounded-xl cursor-pointer"
          style={{ backgroundColor: "#00B1E3" }}
          onClick={() => {
            navigate("/FlowOneRiddles");
          }}
        >
          TEAM 6
        </div>
        <div
          className="w-3/5 p-14 bg-slate-400 flex items-center justify-center text-white font-semibold text-2xl border rounded-xl cursor-pointer"
          style={{ backgroundColor: "#BD483E" }}
          onClick={() => {
            navigate("/FlowTwoRiddles");
          }}
        >
          TEAM 7
        </div>
        <div
          className="w-3/5 p-14 bg-slate-400 flex items-center justify-center text-white font-semibold text-2xl border rounded-xl cursor-pointer"
          style={{ backgroundColor: "#F0B954" }}
          onClick={() => {
            navigate("/FlowThreeRiddles");
          }}
        >
          TEAM 8
        </div>
        <div
          className="w-3/5 p-14 bg-slate-400 flex items-center justify-center text-white font-semibold text-2xl border rounded-xl"
          style={{ backgroundColor: "#E97373" }}
          onClick={() => {
            navigate("/FlowFourRiddles");
          }}
        >
          TEAM 9
        </div>
        <div
          className="w-3/5 p-14 bg-slate-400 flex items-center justify-center text-white font-semibold text-2xl border rounded-xl"
          style={{ backgroundColor: "#E282B2" }}
          onClick={() => {
            navigate("/FlowFiveRiddles");
          }}
        >
          TEAM 10
        </div>
      </div>
    </div>
  );
};

export default FlowPage;
