import React from "react";
import { Outlet, Route, Routes } from "react-router-dom";
import FlowPage from "./FlowPage";
import FlowOne from "./FlowOne";
import FlowTwo from "./FlowTwo";
import FlowThree from "./FlowThree";
import FlowFour from "./FlowFour";
import RiddleDetail from "./FlowOneRiddles";
import FlowOneRiddles from "./FlowOneRiddles";
import FlowOneRiddleOne from "./FlowOneDetails/FlowOneRiddleOne";
import FlowOneRiddleTwo from "./FlowOneDetails/FlowOneRiddleTwo";
import FlowOneRiddleThree from "./FlowOneDetails/FlowOneRiddleThree";
import FlowOneRiddleFour from "./FlowOneDetails/FlowOneRiddleFour";
import FlowOneRiddleFive from "./FlowOneDetails/FlowOneRiddleFive";
import FlowOneRiddleSix from "./FlowOneDetails/FlowOneRiddleSix";
import FlowTwoRiddles from "./FlowTwoRiddles";
import FlowTwoRiddleOne from "./FlowTwoDetails/FlowTwoRiddleOne";
import FlowTwoRiddleTwo from "./FlowTwoDetails/FlowTwoRiddleTwo";
import FlowTwoRiddleThree from "./FlowTwoDetails/FlowTwoRiddleThree";
import FlowTwoRiddleFour from "./FlowTwoDetails/FlowTwoRiddleFour";
import FlowTwoRiddleFive from "./FlowTwoDetails/FlowTwoRiddleFive";
import FlowTwoRiddleSix from "./FlowTwoDetails/FlowTwoRiddleSix";
import FlowThreeRiddles from "./FlowThreeRiddles";
import FlowThreeRiddleOne from "./FlowThreeDetails/FlowThreeRiddleOne";
import FlowThreeRiddleFive from "./FlowThreeDetails/FlowThreeRiddleFive";
import FlowThreeRiddleFour from "./FlowThreeDetails/FlowThreeRiddleFour";
import FlowThreeRiddleTwo from "./FlowThreeDetails/FlowThreeRiddleTwo";
import FlowThreeRiddleThree from "./FlowThreeDetails/FlowThreeRiddleThree";
import FlowThreeRiddleSix from "./FlowThreeDetails/FlowThreeRiddleSix";
import FlowFourRiddleSix from "./FlowFourDetails/FlowFourRiddleSix";
import FlowFourRiddleFive from "./FlowFourDetails/FlowFourRiddleFive";
import FlowFourRiddleFour from "./FlowFourDetails/FlowFourRiddleFour";
import FlowFourRiddleThree from "./FlowFourDetails/FlowFourRiddleThree";
import FlowFourRiddleTwo from "./FlowFourDetails/FlowFourRiddleTwo";
import FlowFourRiddleOne from "./FlowFourDetails/FlowFourRiddleOne";
import FlowFourRiddles from "./FlowFourRiddles";
import FlowFiveRiddleSix from "./FlowFiveDetails/FlowFiveRiddleSix";
import FlowFiveRiddleFive from "./FlowFiveDetails/FlowFiveRiddleFive";
import FlowFiveRiddleFour from "./FlowFiveDetails/FlowFiveRiddleFour";
import FlowFiveRiddleThree from "./FlowFiveDetails/FlowFiveRiddleThree";
import FlowFiveRiddleTwo from "./FlowFiveDetails/FlowFiveRiddleTwo";
import FlowFiveRiddleOne from "./FlowFiveDetails/FlowFiveRiddleOne";
import FlowFiveRiddles from "./FlowFiveRiddles";

const MyRoutes = () => {
  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            <div>
              {/* <NavBar></NavBar> */}
              <Outlet></Outlet>
            </div>
          }
        >
          <Route path="/" element={<FlowPage></FlowPage>}></Route>
          <Route
            path="/FlowOneRiddles"
            element={<FlowOneRiddles></FlowOneRiddles>}
          ></Route>
          <Route
            path="/FlowOneRiddleOne"
            element={<FlowOneRiddleOne></FlowOneRiddleOne>}
          ></Route>
          <Route
            path="/FlowOneRiddleTwo"
            element={<FlowOneRiddleTwo></FlowOneRiddleTwo>}
          ></Route>
          <Route
            path="/FlowOneRiddleThree"
            element={<FlowOneRiddleThree></FlowOneRiddleThree>}
          ></Route>
          <Route
            path="/FlowOneRiddleFour"
            element={<FlowOneRiddleFour></FlowOneRiddleFour>}
          ></Route>
          <Route
            path="/FlowOneRiddleFive"
            element={<FlowOneRiddleFive></FlowOneRiddleFive>}
          ></Route>
          <Route
            path="/FlowOneRiddleSix"
            element={<FlowOneRiddleSix></FlowOneRiddleSix>}
          ></Route>

          <Route
            path="/FlowTwoRiddles"
            element={<FlowTwoRiddles></FlowTwoRiddles>}
          ></Route>
          <Route
            path="/FlowTwoRiddleOne"
            element={<FlowTwoRiddleOne></FlowTwoRiddleOne>}
          ></Route>
          <Route
            path="/FlowTwoRiddleTwo"
            element={<FlowTwoRiddleTwo></FlowTwoRiddleTwo>}
          ></Route>
          <Route
            path="/FlowTwoRiddleThree"
            element={<FlowTwoRiddleThree></FlowTwoRiddleThree>}
          ></Route>
          <Route
            path="/FlowTwoRiddleFour"
            element={<FlowTwoRiddleFour></FlowTwoRiddleFour>}
          ></Route>
          <Route
            path="/FlowTwoRiddleFive"
            element={<FlowTwoRiddleFive></FlowTwoRiddleFive>}
          ></Route>
          <Route
            path="/FlowTwoRiddleSix"
            element={<FlowTwoRiddleSix></FlowTwoRiddleSix>}
          ></Route>

          <Route
            path="/FlowThreeRiddles"
            element={<FlowThreeRiddles></FlowThreeRiddles>}
          ></Route>
          <Route
            path="/FlowThreeRiddleOne"
            element={<FlowThreeRiddleOne></FlowThreeRiddleOne>}
          ></Route>
          <Route
            path="/FlowThreeRiddleTwo"
            element={<FlowThreeRiddleTwo></FlowThreeRiddleTwo>}
          ></Route>
          <Route
            path="/FlowThreeRiddleThree"
            element={<FlowThreeRiddleThree></FlowThreeRiddleThree>}
          ></Route>
          <Route
            path="/FlowThreeRiddleFour"
            element={<FlowThreeRiddleFour></FlowThreeRiddleFour>}
          ></Route>
          <Route
            path="/FlowThreeRiddleFive"
            element={<FlowThreeRiddleFive></FlowThreeRiddleFive>}
          ></Route>
          <Route
            path="/FlowThreeRiddleSix"
            element={<FlowThreeRiddleSix></FlowThreeRiddleSix>}
          ></Route>

          <Route
            path="/FlowFourRiddles"
            element={<FlowFourRiddles></FlowFourRiddles>}
          ></Route>
          <Route
            path="/FlowFourRiddleOne"
            element={<FlowFourRiddleOne></FlowFourRiddleOne>}
          ></Route>
          <Route
            path="/FlowFourRiddleTwo"
            element={<FlowFourRiddleTwo></FlowFourRiddleTwo>}
          ></Route>
          <Route
            path="/FlowFourRiddleThree"
            element={<FlowFourRiddleThree></FlowFourRiddleThree>}
          ></Route>
          <Route
            path="/FlowFourRiddleFour"
            element={<FlowFourRiddleFour></FlowFourRiddleFour>}
          ></Route>
          <Route
            path="/FlowFourRiddleFive"
            element={<FlowFourRiddleFive></FlowFourRiddleFive>}
          ></Route>
          <Route
            path="/FlowFourRiddleSix"
            element={<FlowFourRiddleSix></FlowFourRiddleSix>}
          ></Route>

          <Route
            path="/FlowFiveRiddles"
            element={<FlowFiveRiddles></FlowFiveRiddles>}
          ></Route>
          <Route
            path="/FlowFiveRiddleOne"
            element={<FlowFiveRiddleOne></FlowFiveRiddleOne>}
          ></Route>
          <Route
            path="/FlowFiveRiddleTwo"
            element={<FlowFiveRiddleTwo></FlowFiveRiddleTwo>}
          ></Route>
          <Route
            path="/FlowFiveRiddleThree"
            element={<FlowFiveRiddleThree></FlowFiveRiddleThree>}
          ></Route>
          <Route
            path="/FlowFiveRiddleFour"
            element={<FlowFiveRiddleFour></FlowFiveRiddleFour>}
          ></Route>
          <Route
            path="/FlowFiveRiddleFive"
            element={<FlowFiveRiddleFive></FlowFiveRiddleFive>}
          ></Route>
          <Route
            path="/FlowFiveRiddleSix"
            element={<FlowFiveRiddleSix></FlowFiveRiddleSix>}
          ></Route>

          <Route path="/flowOne" element={<FlowOne></FlowOne>}></Route>
          <Route path="/FlowTwo" element={<FlowTwo></FlowTwo>}></Route>
          <Route path="/FlowThree" element={<FlowThree></FlowThree>}></Route>
          <Route path="/FlowFour" element={<FlowFour></FlowFour>}></Route>
        </Route>
      </Routes>
    </div>
  );
};

export default MyRoutes;
